import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const logos = [
  "Barclays", "Tesco", "Vodafone", "GSK", "Rolls-Royce", "BT Group"
];

const TrustedBySection = () => (
  <section className="border-y border-border bg-background py-12">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading organisations
        </p>
      </ScrollReveal>
      <StaggerContainer className="flex flex-wrap items-center justify-center gap-10 md:gap-16" staggerDelay={0.08}>
        {logos.map((name) => (
          <StaggerItem key={name}>
            <span className="text-xl font-bold text-muted-foreground/30 select-none tracking-wide">
              {name}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default TrustedBySection;
