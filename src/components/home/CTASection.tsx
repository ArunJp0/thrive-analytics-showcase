import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative overflow-hidden bg-navy section-padding">
    <div className="container-narrow relative z-10 text-center">
      <h2 className="text-3xl font-bold text-navy-foreground md:text-5xl leading-tight">
        Ready to Unlock the Power of{" "}
        <span className="gradient-text">Your Data?</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
        Let's discuss how Thrive Analytics can help your organisation make smarter, faster, data-driven decisions.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/contact">
          <Button size="lg" className="bg-white text-navy hover:bg-white/90 btn-hover-glow">
            Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/services">
          <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 btn-hover-glow">
            Explore Services
          </Button>
        </Link>
      </div>
    </div>
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/15 pointer-events-none" />
    <div className="animate-float absolute top-10 left-10 h-24 w-24 rounded-full bg-primary/5" />
    <div className="animate-float-delay absolute bottom-10 right-16 h-16 w-16 rounded-xl bg-primary/5" />
  </section>
);

export default CTASection;
