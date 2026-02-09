interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-medium text-accent-foreground">
        {badge}
      </span>
    )}
    <h2 className="text-3xl font-bold md:text-4xl text-foreground">{title}</h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
