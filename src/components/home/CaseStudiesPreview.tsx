import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

const CaseStudiesPreview = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow">
      <SectionHeading
        badge="Results"
        title="Proven Impact Across Industries"
        description="See how we've helped organisations transform their data capabilities and drive measurable business outcomes."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.slice(0, 3).map((cs) => (
          <div
            key={cs.id}
            className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="mb-2 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
              {cs.industry}
            </span>
            <h3 className="mb-3 text-base font-semibold text-card-foreground leading-snug">{cs.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{cs.problem}</p>
            <ul className="mt-4 space-y-1">
              {cs.results.slice(0, 2).map((r) => (
                <li key={r} className="text-xs font-medium text-primary">✓ {r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/case-studies">
          <Button variant="outline">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CaseStudiesPreview;
