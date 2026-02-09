const logos = [
  "Barclays", "Tesco", "Vodafone", "GSK", "Rolls-Royce", "BT Group"
];

const TrustedBySection = () => (
  <section className="border-y border-border bg-surface py-10">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by leading organisations
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold text-muted-foreground/40 select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBySection;
