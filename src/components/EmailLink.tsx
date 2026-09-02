import { useRef } from "react";

const EMAIL = "info@thriveanalytics.co.uk";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

interface EmailLinkProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Semantic mailto link. On desktop/tablet, if no mail client handles the
 * mailto (page never loses focus), it falls back to Gmail web compose.
 */
const EmailLink = ({ className, children }: EmailLinkProps) => {
  const timer = useRef<number | null>(null);

  const handleClick = () => {
    // Touch-primary devices (mobile) reliably handle mailto — leave untouched.
    const isTouchPrimary =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouchPrimary) return;

    if (timer.current) window.clearTimeout(timer.current);

    const start = Date.now();
    const cancel = () => {
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = null;
      window.removeEventListener("blur", cancel);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    const onVisibility = () => {
      if (document.hidden) cancel();
    };
    window.addEventListener("blur", cancel);
    document.addEventListener("visibilitychange", onVisibility);

    timer.current = window.setTimeout(() => {
      cancel();
      // Still focused → no mail client handled it.
      if (Date.now() - start < 2500 && document.hasFocus()) {
        window.open(GMAIL_COMPOSE, "_blank", "noopener,noreferrer");
      }
    }, 1000);
  };

  return (
    <a href={`mailto:${EMAIL}`} rel="noopener" onClick={handleClick} className={className}>
      {children ?? EMAIL}
    </a>
  );
};

export default EmailLink;
