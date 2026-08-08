import Layout from "@/components/Layout";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const CaseStudies = () => (
  <Layout>
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-16 sm:py-20 lg:py-24">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <span className="eyebrow mb-5 text-white/55">
            Case Studies
          </span>
          <h1 className="h1-display mx-auto max-w-4xl font-semibold text-navy-foreground">
            Real Results for{" "}
            <span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="text-lead mx-auto mt-5 max-w-2xl text-white/65">
            Explore how we've helped organisations across the UK transform their data capabilities and achieve measurable business outcomes.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <StaggerContainer className="container-narrow grid gap-5 md:grid-cols-2 lg:gap-6" staggerDelay={0.15}>
        {caseStudies.map((cs) => (
          <StaggerItem key={cs.id}>
            <div className="card-pro h-full">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-accent px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-accent-foreground">
                  {cs.industry}
                </span>
                <span className="text-xs text-muted-foreground">{cs.service}</span>
              </div>
              <h3 className="h3-card mb-4 font-semibold text-card-foreground">{cs.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-small font-semibold uppercase tracking-[0.12em] text-primary">Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <h4 className="text-small font-semibold uppercase tracking-[0.12em] text-primary">Solution</h4>
                  <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="text-small font-semibold uppercase tracking-[0.12em] text-primary">Results</h4>
                  <ul className="mt-2 space-y-1.5">
                    {cs.results.map((r) => (
                      <li key={r} className="text-small font-medium text-foreground">✓ {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.2}>
        <div className="container-narrow mt-12 text-center lg:mt-14">
          <Link to="/contact">
            <Button size="lg" className="btn-hover-glow">
              Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default CaseStudies;
