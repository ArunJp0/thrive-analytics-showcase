import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding bg-surface">
      <div className="container-narrow text-center">
        <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
          About Us
        </span>
        <h1 className="text-4xl font-bold md:text-5xl text-foreground">
          Empowering Businesses Through Data
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Thrive Analytics Ltd is a UK-based data and technology consultancy dedicated to helping organisations harness the full value of their data.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded with the belief that every organisation can benefit from better data practices, Thrive Analytics brings together a team of experienced data engineers, analysts, scientists, and developers who are passionate about solving complex business challenges.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Based in London, we work with businesses across the United Kingdom—from ambitious startups to established enterprises—delivering tailored solutions that drive efficiency, innovation, and growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Target, title: "Our Mission", text: "To make data accessible, actionable, and impactful for every organisation we partner with." },
            { icon: Eye, title: "Our Vision", text: "A world where every business decision is informed by reliable, timely, and meaningful data." },
            { icon: Heart, title: "Our Values", text: "Integrity, collaboration, excellence, and a relentless focus on delivering measurable results." },
            { icon: Users, title: "Our People", text: "A diverse team of 40+ specialists with deep expertise across data engineering, science, and development." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5">
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="text-sm font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
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
            <div key={item.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-base font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
