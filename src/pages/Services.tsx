import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const Services = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="animate-float mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
            Our Services
          </span>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-navy-foreground leading-tight">
            End-to-End Data &{" "}
            <span className="gradient-text">Technology Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
            We partner with businesses across the UK to design, build, and optimise data-driven solutions that deliver real, measurable impact.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {services.map((service, i) => (
      <section
        key={service.title}
        className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
      >
        <div className="container-narrow">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold md:text-3xl text-foreground">{service.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <h4 className="mb-2 font-bold text-foreground">Our Approach</h4>
                <p className="text-muted-foreground leading-relaxed">{service.approach}</p>
              </div>
              <Link to="/contact" className="mt-8 inline-block">
                <Button className="btn-hover-glow">
                  Discuss {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction={i % 2 === 1 ? "left" : "right"} className={`flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative flex h-72 w-full items-center justify-center rounded-2xl bg-accent">
                <service.icon className="h-28 w-28 text-primary/15" />
                <div className="animate-float-delay absolute -top-3 -right-3 h-12 w-12 rounded-xl bg-primary/10" />
                <div className="animate-float-slow absolute -bottom-3 -left-3 h-10 w-10 rounded-full bg-primary/10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
