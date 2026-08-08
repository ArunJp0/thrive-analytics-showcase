import { Shield, Users, Zap, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

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
  <section className="relative section-padding bg-surface border-y border-border">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <SectionHeading
          badge="Why Thrive"
          title="Built for Enterprise. Delivered with Agility."
          description="We combine the rigour of enterprise consultancy with the speed and flexibility of a specialist partner."
        />
      </ScrollReveal>
      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" staggerDelay={0.1}>
        {points.map((point) => (
          <StaggerItem key={point.title}>
            <div className="card-pro h-full">
              <span className="icon-tile mb-5">
                <point.icon aria-hidden="true" />
              </span>
              <h3 className="h3-card mb-2.5 font-semibold text-foreground">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default WhyChooseUs;
