import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Heart, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const processSteps = [
  { step: "01", title: "Discovery", description: "We assess your current data landscape, business objectives, and technical requirements through in-depth consultation." },
  { step: "02", title: "Strategy", description: "Our experts design a tailored roadmap with clear milestones, deliverables, and expected outcomes." },
  { step: "03", title: "Delivery", description: "We implement the solution in agile sprints, keeping you informed and involved at every stage." },
  { step: "04", title: "Support", description: "Post-delivery, we provide ongoing optimisation, training, and support to ensure lasting impact." },
];

const faqs = [
  { q: "What industries do you work with?", a: "We work across financial services, healthcare, retail, public sector, and technology. Our solutions are tailored to each industry's unique data challenges." },
  { q: "How long does a typical engagement last?", a: "Engagements vary from 4-week sprints for focused deliverables to 12+ month partnerships for enterprise-wide transformations." },
  { q: "Do you offer ongoing support after project delivery?", a: "Yes. We provide post-delivery support packages including monitoring, optimisation, training, and on-call expertise to ensure lasting value." },
  { q: "What technologies do you specialise in?", a: "We specialise in modern data stack technologies including cloud platforms (AWS, Azure, GCP), data orchestration tools, BI platforms, and custom application development." },
  { q: "Can you work with our existing team?", a: "Absolutely. We frequently embed within client teams, providing knowledge transfer and capability building alongside project delivery." },
];

const About = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <span className="animate-float mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
          About Us
        </span>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-navy-foreground leading-tight">
          Empowering Businesses{" "}
          <span className="gradient-text">Through Data</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
          Thrive Analytics Ltd is a UK-based data and technology consultancy dedicated to helping organisations harness the full value of their data.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl text-foreground">Who We Are</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Founded with the belief that every organisation can benefit from better data practices, Thrive Analytics brings together a team of experienced data engineers, analysts, scientists, and developers who are passionate about solving complex business challenges.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Based in London, we work with businesses across the United Kingdom—from ambitious startups to established enterprises—delivering tailored solutions that drive efficiency, innovation, and growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: Target, title: "Our Mission", text: "To make data accessible, actionable, and impactful for every organisation we partner with." },
            { icon: Eye, title: "Our Vision", text: "A world where every business decision is informed by reliable, timely, and meaningful data." },
            { icon: Heart, title: "Our Values", text: "Integrity, collaboration, excellence, and a relentless focus on delivering measurable results." },
            { icon: Users, title: "Our People", text: "A diverse team of 40+ specialists with deep expertise across data engineering, science, and development." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <item.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          badge="Culture"
          title="Why People Choose to Work With Us"
          description="We foster a culture of curiosity, continuous learning, and genuine collaboration—both within our team and with our clients."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Collaborative Approach", text: "We embed ourselves within your teams, ensuring knowledge transfer and long-term capability building alongside immediate project delivery." },
            { title: "Continuous Innovation", text: "We invest in our team's development and stay at the forefront of data technologies, so you always benefit from the latest thinking." },
            { title: "Client-First Mindset", text: "Your success is our success. We measure our performance by the tangible business outcomes we deliver, not just the technology we implement." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-3 text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Process Section */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          description="A proven, structured approach that delivers results with transparency and accountability."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <div key={s.step} className="relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="text-5xl font-black text-primary/10">{s.step}</span>
              <h3 className="mt-3 text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
              {i < processSteps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Common questions from our clients about working with Thrive Analytics."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                <AccordionTrigger className="text-base font-semibold text-card-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
