import Link from 'next/link';
import PortfolioCard from '@/components/ui/PortfolioCard';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration and inventory management.",
    imageUrl: "https://placehold.co/600x400/4F46E5/FFFFFF.png",
    imageHint: "ecommerce website",
    link: "#", // Replace with actual project link or case study page
  },
  {
    title: "Travel Blog",
    description: "A responsive blog for travel enthusiasts with stunning photography.",
    imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF.png",
    imageHint: "travel blog",
    link: "#",
  },
  {
    title: "Fitness App",
    description: "A mobile application for tracking workouts and nutrition.",
    imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF.png",
    imageHint: "fitness app",
    link: "#",
  },
  {
    title: "Corporate Website",
    description: "A professional website for a financial consulting firm.",
    imageUrl: "https://placehold.co/600x400/38BDF8/FFFFFF.png",
    imageHint: "corporate website",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Our Work
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Check out some of our recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageHint={project.imageHint}
              link={project.link}
            />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
            <Link href="#"> 
              See More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
