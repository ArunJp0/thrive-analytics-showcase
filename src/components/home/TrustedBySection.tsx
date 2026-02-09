const logos = [
  "Barclays", "Tesco", "Vodafone", "GSK", "Rolls-Royce", "BT Group"
];

const TrustedBySection = () => (
  <section className="border-y border-border bg-background py-12">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by leading organisations
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {logos.map((name) => (
          <span
            key={name}
            className="text-xl font-bold text-muted-foreground/30 select-none tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBySection;
