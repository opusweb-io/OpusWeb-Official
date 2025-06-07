
import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { prioritizeContactInquiry, type PrioritizeContactInquiryOutput } from '@/ai/flows/prioritize-contact-inquiries';
import { ContactFormSchema } from '@/lib/schemas'; // For validation

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    
    // Validate incoming data
    const parsed = ContactFormSchema.safeParse(body);
    if (!parsed.success) {
      const issues = parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join(', ');
      return NextResponse.json({ error: `Invalid form data: ${issues}` }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    let aiPrioritizationResult: PrioritizeContactInquiryOutput | null = null;
    let aiError: string | null = null;

    try {
      if (process.env.GOOGLE_API_KEY) { // Only attempt AI if API key seems present
        aiPrioritizationResult = await prioritizeContactInquiry({ message });
        console.log('AI Prioritization successful:', aiPrioritizationResult);
      } else {
        aiError = 'GOOGLE_API_KEY not configured; skipping AI prioritization.';
        console.warn(aiError);
      }
    } catch (err: any) {
      console.error('AI Prioritization Error:', err);
      aiError = err.message || 'Failed to get AI prioritization.';
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ensure this is an App Password
      },
    });

    const subject = aiPrioritizationResult
      ? `New Contact: ${name} - Urgency: ${aiPrioritizationResult.urgency}`
      : `New Contact: ${name} - (AI Urgency N/A)`;

    const aiDetailsHtml = aiPrioritizationResult
      ? `<h2>AI Prioritization:</h2>
         <p><strong>Urgency:</strong> ${aiPrioritizationResult.urgency}</p>
         <p><strong>Reason:</strong> ${aiPrioritizationResult.reason}</p>`
      : `<h2>AI Prioritization:</h2>
         <p>Status: ${aiError || 'AI prioritization was not performed or encountered an issue.'}</p>`;

    const mailOptions = {
      from: `"${name} (OpusWeb Contact)" <${process.env.EMAIL_USER}>`, // Sender name includes user, but email is yours
      replyTo: email, // User's email as replyTo
      to: process.env.EMAIL_TO,
      subject: subject,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        ${aiDetailsHtml}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${process.env.EMAIL_TO} regarding inquiry from ${name} <${email}>`);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (error: any) {
    console.error('Full Email Sending/Processing Error in API Route:', error);
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH' || (error.responseCode && error.responseCode === 535)) {
      errorMessage = 'Authentication error with the email server. Please check your server credentials.';
      console.error('Nodemailer authentication failed. Ensure EMAIL_USER and EMAIL_PASS (as App Password) are correct.');
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Could not connect to the email server. Please check network or server settings.';
    } else if (error.message && error.message.includes('Missing credentials for "PLAIN"')) {
        errorMessage = 'Authentication error: Missing credentials for email server.';
    } else if (error.message && (error.message.toLowerCase().includes('gemini') || error.message.toLowerCase().includes('genkit') || error.message.toLowerCase().includes('api key'))) {
        errorMessage = 'There was an issue with the AI processing step. The message was not sent.';
        // Potentially do not return 500 if email sending itself didn't fail due to AI.
        // However, if AI is critical, a 500 might be appropriate.
        // Current logic sends email even if AI fails.
    }

    return NextResponse.json({ error: errorMessage, details: error.message || 'No further details' }, { status: 500 });
  }
}
