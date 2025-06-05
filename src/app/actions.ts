
"use server";

import { ContactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { prioritizeContactInquiry } from '@/ai/flows/prioritize-contact-inquiries';
import nodemailer from 'nodemailer';

interface FormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
}

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  const { name, email, message } = parsed.data as ContactFormValues;

  try {
    // Step 1: Get AI Prioritization
    const inquiryDetails = { message };
    const prioritizationResult = await prioritizeContactInquiry(inquiryDetails);
    
    console.log("Contact Form Submitted:", { name, email, message });
    console.log("AI Prioritization:", prioritizationResult);

    // Step 2: Send Email
    // IMPORTANT: Configure your SMTP settings in .env file
    // Ensure EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, and EMAIL_FROM are set.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || `"OpusWeb Contact" <noreply@example.com>`, // Sender address
      to: "opusweb@tuta.io", // List of receivers
      subject: `New Contact Form Submission from ${name} - Urgency: ${prioritizationResult.urgency}`, // Subject line
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <h2>AI Prioritization:</h2>
        <p><strong>Urgency:</strong> ${prioritizationResult.urgency}</p>
        <p><strong>Reason:</strong> ${prioritizationResult.reason}</p>
      `, // html body
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to opusweb@tuta.io");

    return { 
      message: `Thank you, ${name}! Your message has been sent. We will get back to you soon. AI Urgency: ${prioritizationResult.urgency}.`,
      success: true 
    };
  } catch (error) {
    console.error("Error processing contact form or sending email:", error);
    // Determine if the error was from AI or email sending for a more specific message
    let errorMessage = "An error occurred while submitting your message. Please try again.";
    if (error instanceof Error && error.message.includes('email')) {
        errorMessage = "An error occurred while sending your message. Please try again later.";
    }
    return {
      message: errorMessage,
      success: false,
      fields: parsed.data as Record<string, string>,
    };
  }
}
