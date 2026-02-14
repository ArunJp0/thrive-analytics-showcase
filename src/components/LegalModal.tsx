import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "privacy" | "terms";
}

const privacyContent = [
  { title: "1. Introduction", text: 'Thrive Analytics Ltd ("we", "our", "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.' },
  { title: "2. Information We Collect", text: "We may collect: your name, email address, phone number, company name, and any information you provide through our contact forms or when engaging with our services. We also collect technical data such as IP addresses, browser types, and usage data through cookies and analytics tools." },
  { title: "3. How We Use Your Information", text: "We use your data to respond to enquiries, deliver our services, improve our website, send relevant communications (with your consent), and comply with legal obligations. We will never sell your personal data to third parties." },
  { title: "4. Data Retention", text: "We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are retained for 24 months unless otherwise agreed." },
  { title: "5. Your Rights", text: "Under UK GDPR, you have the right to access, rectify, erase, restrict, and port your personal data. You may also withdraw consent at any time. To exercise these rights, contact us at privacy@thriveanalytics.co.uk." },
  { title: "6. Contact", text: "For data protection queries, contact our Data Protection Officer at privacy@thriveanalytics.co.uk or write to us at 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ." },
];

const termsContent = [
  { title: "1. Agreement", text: "By accessing the Thrive Analytics Ltd website or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services." },
  { title: "2. Services", text: "Thrive Analytics Ltd provides data engineering, analysis, visualisation, application development, data science, and business intelligence services. All engagements are subject to a separate statement of work or service agreement." },
  { title: "3. Intellectual Property", text: "All content on this website, including text, graphics, logos, and software, is the property of Thrive Analytics Ltd and is protected by UK intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent." },
  { title: "4. Limitation of Liability", text: "Thrive Analytics Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services, except where such liability cannot be excluded by law." },
  { title: "5. Governing Law", text: "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
  { title: "6. Contact", text: "For questions regarding these terms, contact us at legal@thriveanalytics.co.uk or write to 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ." },
];

const LegalModal = ({ open, onOpenChange, type }: LegalModalProps) => {
  const isPrivacy = type === "privacy";
  const content = isPrivacy ? privacyContent : termsContent;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-bold text-foreground">
            {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Last updated: February 2026
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[65vh]">
          <div className="space-y-6 text-muted-foreground leading-relaxed pr-4">
            {content.map((section) => (
              <div key={section.title}>
                <h3 className="mb-2 text-base font-bold text-foreground">{section.title}</h3>
                <p className="text-sm">{section.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
