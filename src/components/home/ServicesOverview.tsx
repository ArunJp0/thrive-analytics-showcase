import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ArrowRight, Database, BarChart3, TrendingUp } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const ServicesOverview = () => (
  <section className="relative section-padding bg-background overflow-hidden">
    {/* Floating animated icons */}
    <div className="animate-float absolute top-20 left-8 h-12 w-12 rounded-full bg-primary/10 pointer-events-none" />
    <div className="animate-float-delay absolute bottom-12 right-10 h-14 w-14 rounded-xl bg-primary/10 pointer-events-none" />
    <div className="animate-float-slow absolute top-1/3 right-6 h-8 w-8 rounded-lg bg-primary-glow/10 pointer-events-none" />
    <Database className="animate-float absolute top-28 right-20 h-6 w-6 text-primary/20 pointer-events-none" />
    <BarChart3 className="animate-float-delay absolute bottom-24 left-16 h-7 w-7 text-primary/20 pointer-events-none" />
    <TrendingUp className="animate-float-slow absolute top-1/2 left-12 h-5 w-5 text-primary/20 pointer-events-none" />
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <SectionHeading
          badge="What We Do"
          title="Services Built for Growth"
          description="From data pipelines to bespoke applications, we deliver end-to-end solutions that transform how your business operates."
        />
      </ScrollReveal>
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <Link
              to="/services"
              className="group block rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.short}</p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">
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
