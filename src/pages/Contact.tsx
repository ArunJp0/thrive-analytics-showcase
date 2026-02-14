import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { services } from "@/data/services";
import { MultiSelect } from "@/components/ui/multi-select";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch shortly.");
  };


  const serviceOptions = [...services.map((s) => s.title), "Other"];
  const showOtherTextarea = selectedServices.includes("Other");

  return (
    <Layout>
      <section className="bg-navy py-20 md:py-28">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="animate-float mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-navy-foreground leading-tight">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
              Whether you have a specific project in mind or want to explore how data can drive your business forward, we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <h3 className="text-2xl font-bold text-card-foreground">Message Received</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-base font-semibold text-foreground">First Name</label>
                    <Input placeholder="James" required className="h-12" />
                  </div>
                  <div>
                    <label className="mb-2 block text-base font-semibold text-foreground">Last Name</label>
                    <Input placeholder="Robertson" required className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-base font-semibold text-foreground">Work Email</label>
                  <Input type="email" placeholder="james@company.co.uk" required className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-base font-semibold text-foreground">Company</label>
                  <Input placeholder="Your company name" className="h-12" />
                </div>

                <div>
                  <label className="mb-2 block text-base font-semibold text-foreground">
                    Which Service Are You Interested In?
                  </label>
                  <MultiSelect
                    options={serviceOptions}
                    selected={selectedServices}
                    onChange={setSelectedServices}
                    placeholder="Select services..."
                  />
                </div>

                {showOtherTextarea && (
                  <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <label className="mb-2 block text-base font-semibold text-foreground">
                      Please Describe Your Requirement
                    </label>
                    <Textarea placeholder="Tell us what you're looking for..." rows={4} />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-base font-semibold text-foreground">How can we help?</label>
                  <Textarea placeholder="Tell us about your project or challenge..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto btn-hover-glow">
                  Send Message
                </Button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-5 text-lg font-bold text-card-foreground">Contact Details</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                  info@thriveanalytics.co.uk
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-3 text-lg font-bold text-card-foreground">Office Hours</h3>
              <p className="text-muted-foreground">Monday – Friday: 9:00 – 17:30 GMT</p>
              <p className="mt-2 text-muted-foreground">We aim to respond within one business day.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
