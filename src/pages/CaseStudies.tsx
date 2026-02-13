import Layout from "@/components/Layout";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <span className="animate-float mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
          Case Studies
        </span>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-navy-foreground leading-tight">
          Real Results for{" "}
          <span className="gradient-text">Real Businesses</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
          Explore how we've helped organisations across the UK transform their data capabilities and achieve measurable business outcomes.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow grid gap-8 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {cs.industry}
              </span>
              <span className="text-xs text-muted-foreground">{cs.service}</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground leading-snug">{cs.title}</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Solution</h4>
                <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Results</h4>
                <ul className="mt-2 space-y-1.5">
                  {cs.results.map((r) => (
                    <li key={r} className="text-sm font-semibold text-primary">✓ {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-narrow mt-14 text-center">
        <Link to="/contact">
          <Button size="lg" className="btn-hover-glow">
            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
