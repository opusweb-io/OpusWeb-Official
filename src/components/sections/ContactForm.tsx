"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: "",
  fields: {},
  issues: [],
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);
  
  useEffect(() => {
    if (!state.success && state.issues) {
       state.issues.forEach(issue => {
         const fieldName = issue.includes("Name") ? "name" : issue.includes("Email") ? "email" : "message";
         if (fieldName === "name" || fieldName === "email" || fieldName === "message") {
            form.setError(fieldName as keyof ContactFormValues, { type: 'manual', message: issue });
         }
       });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.issues, state.success, form.setError]);


  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-medium">Name</Label>
        <Input
          id="name"
          name="name"
          {...form.register('name')}
          className="mt-1"
          aria-invalid={form.formState.errors.name ? "true" : "false"}
        />
        {form.formState.errors.name && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-medium">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          {...form.register('email')}
          className="mt-1"
          aria-invalid={form.formState.errors.email ? "true" : "false"}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-medium">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          {...form.register('message')}
          className="mt-1"
          aria-invalid={form.formState.errors.message ? "true" : "false"}
        />
        {form.formState.errors.message && (
          <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
