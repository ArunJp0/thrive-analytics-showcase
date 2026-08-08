import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const steps = [
  { step: "01", title: "Discovery", description: "We assess your current data landscape, business objectives, and technical requirements." },
  { step: "02", title: "Strategy", description: "Our experts design a tailored roadmap with clear milestones and expected outcomes." },
  { step: "03", title: "Delivery", description: "We implement the solution in agile sprints, keeping you informed and involved at every stage." },
  { step: "04", title: "Support", description: "Post-delivery, we provide ongoing optimisation, training, and support to ensure lasting impact." },
];

const HowItWorks = () => (
  <section className="relative section-padding bg-background">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          description="A proven, structured approach that delivers results with transparency and accountability."
        />
      </ScrollReveal>
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" staggerDelay={0.12}>
        {steps.map((s) => (
          <StaggerItem key={s.step}>
            <div className="card-pro h-full">
              <span className="text-small font-semibold tracking-[0.16em] text-primary">{s.step}</span>
              <div className="mt-4 h-px w-8 bg-border" />
              <h3 className="h3-card mt-4 font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2.5 text-muted-foreground">{s.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default HowItWorks;
