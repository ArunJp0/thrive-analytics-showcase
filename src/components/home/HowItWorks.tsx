import SectionHeading from "@/components/SectionHeading";

const steps = [
  { step: "01", title: "Discovery", description: "We assess your current data landscape, business objectives, and technical requirements." },
  { step: "02", title: "Strategy", description: "Our experts design a tailored roadmap with clear milestones and expected outcomes." },
  { step: "03", title: "Delivery", description: "We implement the solution in agile sprints, keeping you informed and involved at every stage." },
  { step: "04", title: "Support", description: "Post-delivery, we provide ongoing optimisation, training, and support to ensure lasting impact." },
];

const HowItWorks = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <SectionHeading
        badge="Our Process"
        title="How We Work"
        description="A proven, structured approach that delivers results with transparency and accountability."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.step} className="relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="text-5xl font-black text-primary/10">{s.step}</span>
            <h3 className="mt-3 text-lg font-bold text-card-foreground">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
