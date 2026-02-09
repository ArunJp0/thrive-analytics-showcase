import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
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
              <item.icon className="mb-4 h-7 w-7 text-primary" />
              <h3 className="font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
  </Layout>
);

export default About;
