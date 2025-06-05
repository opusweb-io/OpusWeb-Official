import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-card hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="items-center text-center">
        <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-foreground/70">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
