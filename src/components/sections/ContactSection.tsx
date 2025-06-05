import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "opusweb@tuta.io",
    href: "mailto:opusweb@tuta.io",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9922327720",
    href: "tel:+919922327720",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Kolhapur, Maharashtra, India.",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">
                Send us a message
              </h3>
              <ContactForm />
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-foreground">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-foreground/70 hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
