import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const CTASection = () => (
  <section className="relative overflow-hidden bg-navy section-padding">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.22),transparent_60%)]" />
    <div className="container-narrow relative z-10 text-center">
      <ScrollReveal scale>
        <h2 className="h2-section mx-auto max-w-3xl font-semibold text-navy-foreground">
          Ready to Unlock the Power of{" "}
          <span className="gradient-text">Your Data?</span>
        </h2>
        <p className="text-lead mx-auto mt-5 max-w-xl text-white/65">
          Let's discuss how Thrive Analytics can help your organisation make smarter, faster, data-driven decisions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              Book a Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Explore Services
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
