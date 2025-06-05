'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import DynamicSprinkleBackground from '@/components/svg/DynamicSprinkleBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden">
      {/* Base gradient layer, behind sprinkles */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/90 z-0"></div>
      
      {/* Dynamic sprinkle background layer */}
      <div 
        className="absolute inset-0 opacity-70 z-[1]" // Ensure sprinkles are above gradient, below text
      >
        <DynamicSprinkleBackground className="w-full h-full" />
      </div>
      
      {/* Content layer, on top of everything */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-[2]">
        <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-headline text-primary">
            Crafting Digital Masterpieces
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10">
            OpusWeb: Where Innovation Meets Web Development
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
