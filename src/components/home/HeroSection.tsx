import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background section-padding">
    <div className="container-narrow">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="animate-fade-up mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
            Data-Driven IT Services
          </span>
          <h1 className="animate-fade-up-delay-1 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-foreground">
            Turn Your Data Into a{" "}
            <span className="text-primary">Competitive Advantage</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
            Thrive Analytics helps UK businesses unlock the full potential of their data through expert engineering, analysis, and bespoke technology solutions.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="animate-float">
            <img
              src={heroIllustration}
              alt="Data analytics dashboard illustration showing charts and graphs"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
          {/* Floating decorative elements */}
          <div className="animate-float-delay absolute -top-4 right-8 h-16 w-16 rounded-xl bg-primary/10" />
          <div className="animate-float-slow absolute bottom-8 -left-4 h-12 w-12 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
