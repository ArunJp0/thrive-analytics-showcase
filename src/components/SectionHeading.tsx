interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="animate-float mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
        {badge}
      </span>
    )}
    <h2 className="text-3xl font-bold md:text-4xl lg:text-[2.75rem] text-foreground leading-tight">{title}</h2>
    {description && (
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
