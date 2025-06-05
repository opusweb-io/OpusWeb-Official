import { Code2, Smartphone, Palette, Rocket } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom websites built with the latest technologies for performance and scalability.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications that work seamlessly on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    icon: Palette,
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlined deployment and continuous integration for your applications.",
    icon: Rocket,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Our Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer a wide range of services to help your business thrive online.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
