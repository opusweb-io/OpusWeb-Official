
# OpusWeb - Modern Web Development Showcase

## Overview

OpusWeb is a sleek, modern single-page application designed to showcase cutting-edge web development capabilities. It offers a **highly dynamic and animated user experience**, featuring a futuristic design aesthetic, **engaging interactive elements**, and AI-powered contact form prioritization. Built with Next.js, React, ShadCN UI, Tailwind CSS, and Genkit, it demonstrates best practices in front-end development and Generative AI integration.

## Key Features

*   **Futuristic UI/UX:** A visually striking theme with a dark base, vibrant accents (electric blues and cyans), and **fluid, smooth animations throughout the interface** that enhance user interaction.
*   **Responsive Design:** Fully responsive layout for a seamless and **visually consistent animated experience** across all devices.
*   **Interactive Elements:**
    *   A **captivating, dynamic sprinkle animation** that brings the hero section to life with subtle, futuristic particle effects.
    *   An **interactive "Our Process" lifecycle diagram** in the About section, featuring animated transitions and hover effects that guide the user through each stage.
    *   **Smooth, page-reveal animations** as users scroll, enhancing content discovery through the `PageTurnWrapper` component.
*   **AI-Powered Contact Form:**
    *   Integrates Google's Gemini model via Genkit to analyze and prioritize incoming contact inquiries by urgency (High, Medium, Low).
    *   Email notifications for form submissions sent via Nodemailer using Gmail SMTP.
*   **User Engagement & Polish:**
    *   A **custom SVG page loader animation** providing an elegant initial loading experience.
    *   Scroll progress bar indicating reading position with smooth updates.
    *   "Discovery Badge Unlocked!" toast notification upon scrolling towards the end of the page, adding a touch of gamification.
*   **Modern Tech Stack:** Built with Next.js App Router, React Server Components, ShadCN UI components, and Tailwind CSS for styling.

## Tech Stack

*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **UI Components:** ShadCN UI
*   **Styling:** Tailwind CSS
*   **AI Integration:** Genkit (with Google Gemini via `@genkit-ai/googleai`)
*   **Email:** Nodemailer (configured for Gmail SMTP)
*   **Form Handling:** React Hook Form with Zod for validation
*   **Animations:** CSS Keyframes, Tailwind CSS utilities, Intersection Observer API for scroll-triggered effects.

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd opusweb-project-directory
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project by copying `.env.example` (if available) or creating it manually. Add the following variables:

    ```env
    # Gmail SMTP Credentials (for sending contact form emails)
    EMAIL_USER=your_gmail_address@gmail.com
    EMAIL_PASS=your_gmail_app_password 
    EMAIL_TO=recipient_email_address_for_notifications@example.com

    # Google AI (Gemini) API Key
    GOOGLE_API_KEY=your_actual_gemini_api_key
    ```

    *   `EMAIL_USER`: The Gmail address from which contact form emails will be sent.
    *   `EMAIL_PASS`: A **Gmail App Password** for the `EMAIL_USER` account. **Do not use your regular Gmail password.** You can generate an App Password in your Google Account security settings if you have 2-Step Verification enabled.
    *   `EMAIL_TO`: The email address where contact form submissions will be received.
    *   `GOOGLE_API_KEY`: Your API key for Google Gemini, obtainable from [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Run the development server:**
    This command starts the Next.js application.
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json` `dev` script) in your browser.

5.  **Run the Genkit development server (for AI features):**
    In a separate terminal, run:
    ```bash
    npm run genkit:dev
    # or for auto-reloading on Genkit flow changes:
    # npm run genkit:watch
    ```
    This starts the Genkit development flow server, which is necessary for the AI prioritization feature of the contact form to work locally.

## AI Integration

This project utilizes Genkit to integrate with Google's Gemini AI model. The primary AI feature implemented is `prioritizeContactInquiry` (located in `src/ai/flows/prioritize-contact-inquiries.ts`). This flow:
1.  Receives the message content from the contact form.
2.  Uses a Genkit prompt to ask the Gemini model to categorize the urgency of the message (High, Medium, or Low) and provide a reason for the categorization.
3.  The API route (`src/app/api/send-email/route.ts`) calls this flow and includes the AI's analysis in the email notification sent to the site administrator.

## Project Structure Highlights

*   `src/app/`: Main application routes (using Next.js App Router), `layout.tsx`, `page.tsx`, `globals.css`.
*   `src/components/`:
    *   `layout/`: Header, Footer, PageLoader.
    *   `sections/`: HeroSection, ServicesSection, AboutSection, ContactSection, ContactForm, InteractiveLifecycle.
    *   `ui/`: ShadCN UI components and custom UI elements like ServiceCard, ScrollProgressBar.
    *   `fx/`: Animation wrappers like `PageTurnWrapper`.
    *   `svg/`: SVG components like `DynamicSprinkleBackground`.
*   `src/ai/`:
    *   `flows/`: Contains Genkit flow definitions (e.g., `prioritize-contact-inquiries.ts`).
    *   `genkit.ts`: Genkit global instance initialization and configuration.
    *   `dev.ts`: Entry point for the Genkit development server.
*   `src/app/api/`: API routes (e.g., `send-email/route.ts` for handling contact form submissions).
*   `src/lib/`: Utility functions (`utils.ts`) and Zod schemas (`schemas.ts`).
*   `src/hooks/`: Custom React hooks (`use-toast.ts`, `use-mobile.ts`).
*   `public/`: Static assets (images, fonts if not using `next/font`).
*   `.env`: Environment variable storage (gitignored).

## Deployment

This Next.js application can be deployed to any platform that supports Node.js and Next.js applications, such as:
*   Vercel (recommended for Next.js)
*   Netlify
*   Firebase App Hosting (an `apphosting.yaml` is present)
*   AWS Amplify, Google Cloud Run, Azure App Service, etc.

Ensure all necessary environment variables (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`, `GOOGLE_API_KEY`) are configured on your deployment platform.

---

This README provides a comprehensive guide to understanding, setting up, and running the OpusWeb application.
