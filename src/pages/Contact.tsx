import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { services } from "@/data/services";
import { MultiSelect } from "@/components/ui/multi-select";
import EmailLink from "@/components/EmailLink";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  otherRequirement: "",
  message: "",
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": "",
          ...values,
          services: selectedServices.join(", "),
        }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setSubmitted(true);
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you shortly.");

      setTimeout(() => {
        setValues(initialValues);
        setSelectedServices([]);
        setSubmitted(false);
      }, 2500);
    } catch {
      toast.error("Something went wrong while sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };



  const serviceOptions = [...services.map((s) => s.title), "Other"];
  const showOtherTextarea = selectedServices.includes("Other");

  return (
    <>
      <Helmet>
        <title>Contact Thrive Analytics Ltd | UK Data & IT</title>
        <meta name="description" content="Contact Thrive Analytics Ltd to discuss data engineering, analytics, visualisation, data science, business intelligence or bespoke app development." />
        <link rel="canonical" href="https://thriveanalytics.co.uk/contact" />
      </Helmet>
      <Layout>
      <section className="relative overflow-hidden border-b border-white/10 bg-navy py-16 sm:py-20 lg:py-24">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <span className="eyebrow mb-5 text-white/55">
              Get in Touch
            </span>
            <h1 className="h1-display mx-auto max-w-4xl font-semibold text-navy-foreground">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lead mx-auto mt-5 max-w-2xl text-white/65">
              Whether you have a specific project in mind or want to explore how data can drive your business forward, we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding overflow-x-clip bg-background">
        <div className="container-narrow grid gap-10 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal direction="left" className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-10 sm:p-12 text-center">
                <h3 className="h2-section font-semibold text-card-foreground">Message Received</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">First Name</label>
                    <Input name="firstName" value={values.firstName} onChange={handleChange} placeholder="James" required className="h-12" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">Last Name</label>
                    <Input name="lastName" value={values.lastName} onChange={handleChange} placeholder="Robertson" required className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">Work Email</label>
                  <Input name="email" type="email" value={values.email} onChange={handleChange} placeholder="james@company.co.uk" required className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">Company</label>
                  <Input name="company" value={values.company} onChange={handleChange} placeholder="Your company name" className="h-12" />
                </div>


                <div>
                  <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">
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
                    <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">
                      Please Describe Your Requirement
                    </label>
                    <Textarea name="otherRequirement" value={values.otherRequirement} onChange={handleChange} placeholder="Tell us what you're looking for..." rows={4} />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-[0.9375rem] font-medium text-foreground">How can we help?</label>
                  <Textarea name="message" value={values.message} onChange={handleChange} placeholder="Tell us about your project or challenge..." rows={5} required />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto btn-hover-glow">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
            <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-5">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-foreground"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-foreground"
              >
                Explore Our Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-7">
              <h3 className="h3-card mb-5 font-semibold text-card-foreground">Contact Details</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                  <EmailLink className="relative z-10 inline-block break-all text-current no-underline [pointer-events:auto]" />

                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 sm:p-7">
              <h3 className="mb-3 h3-card font-semibold text-card-foreground">Office Hours</h3>
              <p className="text-muted-foreground">Monday – Friday: 9:00 – 17:30 GMT</p>
              <p className="mt-2 text-muted-foreground">We aim to respond within one business day.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Contact;
