"use server";

import { ContactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { prioritizeContactInquiry } from '@/ai/flows/prioritize-contact-inquiries';

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
    const inquiryDetails = { message };
    const prioritizationResult = await prioritizeContactInquiry(inquiryDetails);
    
    // In a real app, you would save this to a database or send an email
    console.log("Contact Form Submitted:", { name, email, message });
    console.log("AI Prioritization:", prioritizationResult);

    return { 
      message: `Thank you, ${name}! Your message has been received. Urgency: ${prioritizationResult.urgency}. Reason: ${prioritizationResult.reason}`,
      success: true 
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      message: "An error occurred while submitting your message. Please try again.",
      success: false,
      fields: parsed.data as Record<string, string>,
    };
  }
}
