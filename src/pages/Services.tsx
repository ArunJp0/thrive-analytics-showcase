import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-16 sm:py-20 lg:py-24">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <span className="eyebrow mb-5 text-white/55">
            Our Services
          </span>
          <h1 className="h1-display mx-auto max-w-4xl font-semibold text-navy-foreground">
            End-to-End Data &{" "}
            <span className="gradient-text">Technology Solutions</span>
          </h1>
          <p className="text-lead mx-auto mt-5 max-w-2xl text-white/65">
            We partner with businesses across the UK to design, build, and optimise data-driven solutions that deliver real, measurable impact.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {services.map((service, i) => (
      <section
        key={service.title}
        className={`section-padding overflow-x-clip ${i % 2 === 0 ? "bg-background" : "bg-surface"} ${i > 0 ? "border-t border-border" : ""}`}
      >
        <div className="container-narrow">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="icon-tile mb-5">
                <service.icon aria-hidden="true" />
              </span>
              <h2 className="h2-section font-semibold text-foreground">{service.title}</h2>
              <p className="text-lead mt-5 text-muted-foreground">{service.description}</p>
              <div className="mt-6 rounded-lg border border-border bg-surface p-6">
                <h4 className="text-small mb-2 font-semibold uppercase tracking-[0.12em] text-primary">Our Approach</h4>
                <p className="text-muted-foreground leading-relaxed">{service.approach}</p>
              </div>
              <Link to="/contact" className="mt-8 inline-block">
                <Button className="btn-hover-glow h-auto min-h-11 whitespace-normal py-2.5 text-left">
                  Discuss {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction={i % 2 === 1 ? "left" : "right"} className={`flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative flex h-56 w-full items-center justify-center rounded-lg border border-border bg-[linear-gradient(180deg,hsl(var(--accent)/0.7),hsl(var(--surface)))] sm:h-72">
                <service.icon className="h-20 w-20 text-primary/25 sm:h-24 sm:w-24" aria-hidden="true" />

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
