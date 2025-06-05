import TestimonialCard from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    quote: "OpusWeb delivered a website that exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
    name: "Jane Smith",
    company: "Tech Innovations Inc.",
    avatarUrl: "https://placehold.co/100x100/E0E7FF/4F46E5.png?text=JS",
  },
  {
    quote: "Working with OpusWeb was a game-changer for our business. They understood our vision and executed it perfectly.",
    name: "John Doe",
    company: "Global Solutions Ltd.",
    avatarUrl: "https://placehold.co/100x100/E0E7FF/4F46E5.png?text=JD",
  },
  {
    quote: "The team at OpusWeb is professional, responsive, and incredibly talented. I would recommend them to anyone looking for top-notch web development.",
    name: "Sarah Johnson",
    company: "Creative Minds Agency",
    avatarUrl: "https://placehold.co/100x100/E0E7FF/4F46E5.png?text=SJ",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from the businesses we've helped transform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
