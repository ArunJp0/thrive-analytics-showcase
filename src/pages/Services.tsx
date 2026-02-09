import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-surface">
      <div className="container-narrow text-center">
        <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
          Our Services
        </span>
        <h1 className="text-4xl font-bold md:text-5xl text-foreground">
          End-to-End Data & Technology Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We partner with businesses across the UK to design, build, and optimise data-driven solutions that deliver real, measurable impact.
        </p>
      </div>
    </section>

    {/* Service sections */}
    {services.map((service, i) => (
      <section
        key={service.title}
        className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
      >
        <div className="container-narrow">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold md:text-3xl text-foreground">{service.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-6 rounded-lg border border-border bg-card p-4">
                <h4 className="mb-1 text-sm font-semibold text-foreground">Our Approach</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.approach}</p>
              </div>
              <Link to="/contact" className="mt-6 inline-block">
                <Button>
                  Discuss {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className={`flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative flex h-64 w-full items-center justify-center rounded-2xl bg-accent">
                <service.icon className="h-24 w-24 text-primary/20" />
                <div className="animate-float-delay absolute -top-3 -right-3 h-10 w-10 rounded-lg bg-primary/10" />
                <div className="animate-float-slow absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-primary/15" />
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
