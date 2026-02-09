import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => (
  <Layout>
    <section className="section-padding bg-surface">
      <div className="container-narrow text-center">
        <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
          Case Studies
        </span>
        <h1 className="text-4xl font-bold md:text-5xl text-foreground">
          Real Results for Real Businesses
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Explore how we've helped organisations across the UK transform their data capabilities and achieve measurable business outcomes.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow grid gap-8 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                {cs.industry}
              </span>
              <span className="text-xs text-muted-foreground">{cs.service}</span>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-card-foreground leading-snug">{cs.title}</h3>

            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold text-foreground">Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Solution</h4>
                <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Results</h4>
                <ul className="mt-1 space-y-1">
                  {cs.results.map((r) => (
                    <li key={r} className="text-xs font-medium text-primary">✓ {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-narrow mt-12 text-center">
        <Link to="/contact">
          <Button size="lg">
            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
