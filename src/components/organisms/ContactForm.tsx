import { FormEvent, useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/atoms/FormField';
import { TextArea } from '@/components/atoms/TextArea';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField label="Name" name="name" placeholder="Your name" required />
          <FormField label="Email" name="email" placeholder="you@example.com" type="email" required />
        </div>
        <FormField label="Project Type" name="projectType" placeholder="Product ad, course video, etc." />
        <TextArea label="Project Brief" name="message" placeholder="Tell us about your project..." required />
        <div className="flex items-center justify-between gap-4">
          <Button type="submit">Send Inquiry</Button>
          {submitted ? <span className="text-sm text-slate-300">Thanks — your request has been sent.</span> : null}
        </div>
      </form>
    </div>
  );
}
