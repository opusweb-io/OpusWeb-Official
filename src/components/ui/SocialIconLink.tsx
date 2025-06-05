import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialIconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SocialIconLink({ href, icon: Icon, label }: SocialIconLinkProps) {
  return (
    <Button asChild variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
      <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon className="h-5 w-5" />
      </Link>
    </Button>
  );
}
