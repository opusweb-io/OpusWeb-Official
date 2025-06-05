
'use client'; // Required for useState and useEffect

import type { Metadata } from 'next'; // Keep if you still want static metadata
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import PageLoader from '@/components/layout/PageLoader'; // Import the loader
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const [exploreAchievementShown, setExploreAchievementShown] = useState(false);

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

  useEffect(() => {
    const handleScrollAchievement = () => {
      if (!isLoading && !exploreAchievementShown) {
        const scrollPosition = window.innerHeight + window.scrollY;
        // Ensure body.offsetHeight is not 0 if content is still loading or very short
        const pageHeight = document.body.offsetHeight || window.innerHeight; 
        const scrollThreshold = pageHeight - 100; // 100px from bottom, or near if page very short

        if (scrollPosition >= scrollThreshold && pageHeight > window.innerHeight + 100) { // Only trigger if page is substantially scrollable
          toast({
            title: "Discovery Badge Unlocked! 🏆",
            description: "You've successfully explored all of OpusWeb! Ready to build something amazing?",
            duration: 5000, // Show for 5 seconds
          });
          setExploreAchievementShown(true);
        }
      }
    };

    if (typeof window !== 'undefined') { // Ensure window is defined (for SSR safety, though this is client component)
      window.addEventListener('scroll', handleScrollAchievement, { passive: true });
      // Initial check in case the page loads already at the bottom (short content)
      handleScrollAchievement(); 
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScrollAchievement);
      }
    };
  }, [isLoading, exploreAchievementShown, toast]);


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
