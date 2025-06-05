import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  avatarUrl?: string;
}

export default function TestimonialCard({ quote, name, company, avatarUrl }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <Card className="bg-card p-6 shadow-lg h-full flex flex-col">
      <CardContent className="flex-grow">
        <Quote className="h-8 w-8 text-primary/50 mb-4" />
        <p className="text-foreground/80 italic mb-6 text-md">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Avatar>
          {avatarUrl ? <AvatarImage src={avatarUrl} alt={name} /> : null}
          <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-primary font-headline">{name}</p>
          <p className="text-sm text-accent">{company}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
