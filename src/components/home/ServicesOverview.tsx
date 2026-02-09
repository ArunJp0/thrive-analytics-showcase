import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const ServicesOverview = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <SectionHeading
        badge="What We Do"
        title="Services Built for Growth"
        description="From data pipelines to bespoke applications, we deliver end-to-end solutions that transform how your business operates."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            to="/services"
            className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
