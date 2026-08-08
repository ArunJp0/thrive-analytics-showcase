interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-10 max-w-2xl sm:mb-12 lg:mb-14 ${center ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="eyebrow mb-4 text-primary">
        {badge}
      </span>
    )}
    <h2 className="h2-section font-semibold text-foreground">{title}</h2>
    {description && (
      <p className="text-lead mt-4 text-muted-foreground sm:mt-5">{description}</p>
    )}
  </div>
);

export default SectionHeading;
