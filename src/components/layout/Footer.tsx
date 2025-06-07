import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Code2 } from 'lucide-react';
import SocialIconLink from '@/components/ui/SocialIconLink';

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Web Development" },
  { label: "UI/UX Design" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4 font-headline">
              <Code2 className="h-8 w-8" />
              OpusWeb
            </Link>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Crafting digital masterpieces for your business.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <SocialIconLink key={social.href} href={social.href} icon={social.icon} label={social.label} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label} className="text-primary-foreground/80 text-sm">
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Contact</h4>
            <address className="not-italic text-primary-foreground/80 space-y-1 text-sm">
              <p>India.</p>
              <p className="mt-2">
                <a href="mailto:opusweb@tuta.io" className="hover:text-primary-foreground transition-colors">
                  opusweb@tuta.io
                </a>
              </p>
              <p>
                <a href="tel:+919922327720" className="hover:text-primary-foreground transition-colors">
                  +91 9922327720
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>&copy; {new Date().getFullYear()} OpusWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
