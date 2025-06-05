'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black/80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="abstract geometric"
      ></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-headline">
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
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="#portfolio">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
