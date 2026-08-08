import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const CaseStudiesPreview = () => (
  <section className="section-padding bg-surface border-t border-border">
    <div className="container-narrow">
      <ScrollReveal>
        <SectionHeading
          badge="Results"
          title="Proven Impact Across Industries"
          description="See how we've helped organisations transform their data capabilities and drive measurable business outcomes."
        />
      </ScrollReveal>
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" staggerDelay={0.12}>
        {caseStudies.slice(0, 3).map((cs) => (
          <StaggerItem key={cs.id}>
            <div className="card-pro group flex h-full flex-col">
              <span className="text-small mb-3 inline-block font-semibold uppercase tracking-[0.12em] text-primary">
                {cs.industry}
              </span>
              <h3 className="h3-card mb-3 font-semibold text-card-foreground">{cs.title}</h3>
              <p className="text-muted-foreground line-clamp-3">{cs.problem}</p>
              <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
                {cs.results.slice(0, 2).map((r) => (
                  <li key={r} className="text-small font-medium text-foreground">✓ {r}</li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ScrollReveal delay={0.3}>
        <div className="mt-10 text-center sm:mt-12">
          <Link to="/case-studies">
            <Button variant="outline">
              View All Case Studies <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CaseStudiesPreview;
