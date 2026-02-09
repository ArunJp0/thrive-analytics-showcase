import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative overflow-hidden bg-navy section-padding">
    <div className="container-narrow relative z-10 text-center">
      <h2 className="text-3xl font-bold text-navy-foreground md:text-4xl">
        Ready to Unlock the Power of Your Data?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-navy-foreground/70 leading-relaxed">
        Let's discuss how Thrive Analytics can help your organisation make smarter, faster, data-driven decisions.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/contact">
          <Button size="lg" className="bg-primary-foreground text-navy hover:bg-primary-foreground/90">
            Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/services">
          <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10">
            Explore Services
          </Button>
        </Link>
      </div>
    </div>
    {/* Floating decorative */}
    <div className="animate-float absolute top-10 left-10 h-20 w-20 rounded-full bg-primary/10" />
    <div className="animate-float-delay absolute bottom-10 right-16 h-14 w-14 rounded-xl bg-primary/5" />
  </section>
);

export default CTASection;
