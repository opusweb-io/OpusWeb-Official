'use server';

/**
 * @fileOverview An AI agent that analyzes user messages from the contact form and categorizes their urgency.
 *
 * - prioritizeContactInquiry - A function that categorizes the urgency of a contact inquiry.
 * - PrioritizeContactInquiryInput - The input type for the prioritizeContactInquiry function.
 * - PrioritizeContactInquiryOutput - The return type for the prioritizeContactInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeContactInquiryInputSchema = z.object({
  message: z.string().describe('The message from the contact form.'),
});
export type PrioritizeContactInquiryInput = z.infer<typeof PrioritizeContactInquiryInputSchema>;

const PrioritizeContactInquiryOutputSchema = z.object({
  urgency: z
    .enum(['high', 'medium', 'low'])
    .describe('The urgency of the contact inquiry.'),
  reason: z.string().describe('The reason for the urgency categorization.'),
});
export type PrioritizeContactInquiryOutput = z.infer<typeof PrioritizeContactInquiryOutputSchema>;

export async function prioritizeContactInquiry(input: PrioritizeContactInquiryInput): Promise<PrioritizeContactInquiryOutput> {
  return prioritizeContactInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeContactInquiryPrompt',
  input: {schema: PrioritizeContactInquiryInputSchema},
  output: {schema: PrioritizeContactInquiryOutputSchema},
  prompt: `You are a customer service expert. Analyze the following message from a contact form and categorize its urgency as high, medium, or low. Provide a reason for your categorization.\n\nMessage: {{{message}}}`,
});

const prioritizeContactInquiryFlow = ai.defineFlow(
  {
    name: 'prioritizeContactInquiryFlow',
    inputSchema: PrioritizeContactInquiryInputSchema,
    outputSchema: PrioritizeContactInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
