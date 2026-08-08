import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ArrowRight, Database, BarChart3, TrendingUp } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const ServicesOverview = () => (
  <section className="relative section-padding bg-background overflow-hidden">
    {/* Subtle decorative marks — desktop only, restrained sizing */}
    <Database className="animate-float pointer-events-none absolute right-16 top-24 hidden h-5 w-5 text-primary/10 lg:block" />
    <BarChart3 className="animate-float-delay pointer-events-none absolute bottom-24 left-12 hidden h-6 w-6 text-primary/10 lg:block" />
    <TrendingUp className="animate-float-slow pointer-events-none absolute left-8 top-1/2 hidden h-5 w-5 text-primary/10 lg:block" />
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <SectionHeading
          badge="What We Do"
          title="Services Built for Growth"
          description="From data pipelines to bespoke applications, we deliver end-to-end solutions that transform how your business operates."
        />
      </ScrollReveal>
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" staggerDelay={0.12}>
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <Link to="/services" className="card-pro group flex h-full flex-col">
              <span className="icon-tile mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon aria-hidden="true" />
              </span>
              <h3 className="h3-card mb-2.5 font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.short}</p>
              <span className="text-small mt-5 inline-flex items-center font-semibold text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ServicesOverview;
