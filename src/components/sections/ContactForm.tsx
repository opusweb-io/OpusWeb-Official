
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Success!",
          description: result.message || "Your message has been sent successfully.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission fetch error:", error);
      toast({
        title: "Network Error",
        description: "Could not reach the server. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear server-side errors shown by RHF if user starts typing again
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (type === 'change' && name && form.formState.errors[name as keyof ContactFormValues]) {
        form.clearErrors(name as keyof ContactFormValues);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-medium">Name</Label>
        <Input
          id="name"
          {...form.register('name')}
          className="mt-1"
          aria-invalid={form.formState.errors.name ? "true" : "false"}
          disabled={isSubmitting}
        />
        {form.formState.errors.name && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-medium">Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register('email')}
          className="mt-1"
          aria-invalid={form.formState.errors.email ? "true" : "false"}
          disabled={isSubmitting}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-medium">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...form.register('message')}
          className="mt-1"
          aria-invalid={form.formState.errors.message ? "true" : "false"}
          disabled={isSubmitting}
        />
        {form.formState.errors.message && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Send Message
      </Button>
    </form>
  );
}
