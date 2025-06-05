
'use client'; // Required for useState and useEffect

import type { Metadata } from 'next'; // Keep if you still want static metadata
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import PageLoader from '@/components/layout/PageLoader'; // Import the loader
import { useState, useEffect } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700']
});

// If you need dynamic metadata, remove this or adjust accordingly
// export const metadata: Metadata = {
//   title: 'OpusWeb - Web Development',
//   description: 'Crafting digital masterpieces for your business',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time as needed (e.g., 2500ms = 2.5 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Set document title dynamically if needed, since static metadata might be affected by 'use client'
  useEffect(() => {
    if (!isLoading) {
      document.title = 'OpusWeb - Web Development';
    } else {
      document.title = 'Loading OpusWeb...';
    }
  }, [isLoading]);


  return (
    <html lang="en" className={`${poppins.variable} ${ptSans.variable}`}>
      <head>
        {/* Favicon links can be added here if needed */}
        <meta name="description" content="Crafting digital masterpieces for your business" />
      </head>
      <body className="font-body antialiased">
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <ScrollProgressBar />
            {children}
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
