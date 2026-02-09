import { Shield, Users, Zap, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const points = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "We follow industry best practices for data protection, fully compliant with UK GDPR and ISO 27001 standards.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Teams",
    description: "Every project is led by seasoned consultants with deep domain expertise in your industry.",
  },
  {
    icon: Zap,
    title: "Rapid Time to Value",
    description: "Our agile methodology delivers measurable results in weeks, not months. We prioritise impact from day one.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 150 successful engagements across financial services, healthcare, retail, and the public sector.",
  },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow">
      <SectionHeading
        badge="Why Thrive"
        title="Built for Enterprise. Delivered with Agility."
        description="We combine the rigour of enterprise consultancy with the speed and flexibility of a specialist partner."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.title} className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <point.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">{point.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
