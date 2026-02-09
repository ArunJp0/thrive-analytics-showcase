import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch shortly.");
  };

  return (
    <Layout>
      <section className="section-padding bg-surface">
        <div className="container-narrow text-center">
          <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            Let's Start a Conversation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Whether you have a specific project in mind or want to explore how data can drive your business forward, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-border bg-card p-10 text-center">
                <h3 className="text-xl font-semibold text-card-foreground">Message Received</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="James" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Robertson" required />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Work Email</label>
                  <Input type="email" placeholder="james@company.co.uk" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Company</label>
                  <Input placeholder="Your company name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">How can we help?</label>
                  <Textarea placeholder="Tell us about your project or challenge..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-base font-semibold text-card-foreground">Contact Details</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  info@thriveanalytics.co.uk
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  +44 (0) 20 7946 0958
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>71–75 Shelton Street<br />Covent Garden, London<br />WC2H 9JQ</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-base font-semibold text-card-foreground">Office Hours</h3>
              <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 – 17:30 GMT</p>
              <p className="mt-1 text-sm text-muted-foreground">We aim to respond within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
