import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-navy">
    <div className="container-narrow px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <span className="animate-fade-up mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
            Data-Driven IT Services
          </span>
          <h1 className="animate-fade-up-delay-1 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl text-navy-foreground">
            Turn Your Data Into a{" "}
            <span className="gradient-text">Competitive Advantage</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-lg leading-relaxed text-white/70 max-w-lg">
            Thrive Analytics helps UK businesses unlock the full potential of their data through expert engineering, analysis, and bespoke technology solutions.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-hover-glow">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white/30 text-white bg-white/5 hover:bg-white/15 hover:text-white btn-hover-glow">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-fade-up-delay-2">
          <div className="relative rounded-2xl">
            <img
              src={heroCorporate}
              alt="Professional data analytics team collaborating in a modern office"
              className="w-full max-w-lg object-contain rounded-2xl"
            />
          </div>
          {/* Floating decorative elements */}
          <div className="animate-float-delay absolute -top-4 right-4 h-16 w-16 rounded-xl bg-primary/15 backdrop-blur-sm" />
          <div className="animate-float-slow absolute bottom-4 -left-4 h-12 w-12 rounded-full bg-primary-glow/10 backdrop-blur-sm" />
        </div>
      </div>
    </div>
    {/* Background subtle gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/10 pointer-events-none" />
  </section>
);

export default HeroSection;
