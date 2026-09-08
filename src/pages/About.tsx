import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Heart, Users, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

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
  <>
    <Helmet>
      <title>About Thrive Analytics Ltd | UK Data Consultancy</title>
      <meta name="description" content="Learn about Thrive Analytics Ltd, a UK data and technology consultancy helping businesses use data, analytics and bespoke technology to grow." />
      <link rel="canonical" href="https://thriveanalytics.co.uk/about" />
    </Helmet>
    <Layout>
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-16 sm:py-20 lg:py-24">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <span className="eyebrow mb-5 text-white/55">
            About Us
          </span>
          <h1 className="h1-display mx-auto max-w-4xl font-semibold text-navy-foreground">
            Empowering Businesses{" "}
            <span className="gradient-text">Through Data</span>
          </h1>
          <p className="text-lead mx-auto mt-5 max-w-2xl text-white/65">
            Thrive Analytics Ltd is a UK-based data and technology consultancy dedicated to helping organisations harness the full value of their data.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding overflow-x-clip bg-background">
      <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ScrollReveal direction="left">
          <div>
            <h2 className="h2-section font-semibold text-foreground">Who We Are</h2>
            <p className="text-lead mt-5 text-muted-foreground">
              Founded with the belief that every organisation can benefit from better data practices, Thrive Analytics brings together a team of experienced data engineers, analysts, scientists, and developers who are passionate about solving complex business challenges.
            </p>
            <p className="text-lead mt-5 text-muted-foreground">
              Based in London, we work with businesses across the United Kingdom—from ambitious startups to established enterprises—delivering tailored solutions that drive efficiency, innovation, and growth.
            </p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2" staggerDelay={0.1}>
          {[
            { icon: Target, title: "Our Mission", text: "To make data accessible, actionable, and impactful for every organisation we partner with." },
            { icon: Eye, title: "Our Vision", text: "A world where every business decision is informed by reliable, timely, and meaningful data." },
            { icon: Heart, title: "Our Values", text: "Integrity, collaboration, excellence, and a relentless focus on delivering measurable results." },
            { icon: Users, title: "Our People", text: "A diverse team of 40+ specialists with deep expertise across data engineering, science, and development." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-pro h-full">
                <span className="icon-tile mb-4"><item.icon aria-hidden="true" /></span>
                <h3 className="h3-card font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="section-padding overflow-x-clip border-y border-border bg-surface">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            badge="Culture"
            title="Why People Choose to Work With Us"
            description="We foster a culture of curiosity, continuous learning, and genuine collaboration—both within our team and with our clients."
          />
        </ScrollReveal>
        <StaggerContainer className="grid gap-5 sm:grid-cols-3 lg:gap-6" staggerDelay={0.12}>
          {[
            { title: "Collaborative Approach", text: "We embed ourselves within your teams, ensuring knowledge transfer and long-term capability building alongside immediate project delivery." },
            { title: "Continuous Innovation", text: "We invest in our team's development and stay at the forefront of data technologies, so you always benefit from the latest thinking." },
            { title: "Client-First Mindset", text: "Your success is our success. We measure our performance by the tangible business outcomes we deliver, not just the technology we implement." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-pro h-full">
                <h3 className="mb-3 h3-card font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="section-padding overflow-x-clip bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A proven, structured approach that delivers results with transparency and accountability."
          />
        </ScrollReveal>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" staggerDelay={0.12}>
          {processSteps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="relative card-pro h-full">
                <span className="text-small font-semibold tracking-[0.16em] text-primary">{s.step}</span>
                <div className="mt-4 h-px w-8 bg-border" />
                <h3 className="mt-4 h3-card font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="section-padding overflow-x-clip border-y border-border bg-surface">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Common questions from our clients about working with Thrive Analytics."
          />
        </ScrollReveal>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <AccordionItem value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6">
                  <AccordionTrigger className="text-base font-semibold text-card-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  </Layout>
  </>
);

export default About;
