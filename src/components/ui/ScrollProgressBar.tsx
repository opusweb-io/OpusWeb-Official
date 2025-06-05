
'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (windowHeight === 0) {
      setScrollProgress(0); // Avoid division by zero if content is not scrollable
      return;
    }

    const scrollPercentage = (totalScroll / windowHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    // Call handleScroll once to set initial state if page is already scrolled
    handleScroll(); 
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[60] bg-transparent">
      <div
        className="h-full bg-primary transition-all duration-75 ease-linear"
        style={{ width: `${scrollProgress}%` }}
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label="Scroll progress"
      />
    </div>
  );
}
