import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-navy">
    {/* Restrained background treatment */}
    <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_28%,hsl(var(--primary)/0.18),transparent_60%)]" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-white/10" />

    <div className="container-narrow relative z-10 py-16 sm:py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <span className="animate-fade-up eyebrow mb-5 text-white/55">
            Data-Driven IT Services
          </span>
          <h1 className="animate-fade-up-delay-1 h1-display font-semibold text-navy-foreground">
            Turn Your Data Into a{" "}
            <span className="gradient-text">Competitive Advantage</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lead mt-6 max-w-xl text-white/65">
            Thrive Analytics helps UK businesses unlock the full potential of their data through expert engineering, analysis, and bespoke technology solutions.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start sm:mt-10 sm:gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-hover-glow">
                Book a Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 hidden md:block lg:col-span-6">
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
            <img
              src={heroCorporate}
              alt="Data analytics team working in a control room with dashboard displays"
              className="h-auto w-full object-contain"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
