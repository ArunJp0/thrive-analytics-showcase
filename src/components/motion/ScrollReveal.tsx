import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  once?: boolean;
}

const getVariants = (
  direction: ScrollRevealProps["direction"],
  scale: boolean
): Variants => {
  const offset = 40;
  const translate =
    direction === "up"
      ? { y: offset }
      : direction === "down"
      ? { y: -offset }
      : direction === "left"
      ? { x: -offset }
      : direction === "right"
      ? { x: offset }
      : {};

  return {
    hidden: {
      opacity: 0,
      ...translate,
      ...(scale ? { scale: 0.96 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  scale = false,
  once = true,
}: ScrollRevealProps) => (
  <motion.div
    className={className}
    variants={getVariants(direction, scale)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.15 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;

/* Stagger container — wrap grid/list items */
export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.1 }}
    transition={{ staggerChildren: staggerDelay }}
  >
    {children}
  </motion.div>
);

/* Individual stagger item */
export const StaggerItem = ({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: ScrollRevealProps["direction"];
}) => (
  <motion.div
    className={className}
    variants={getVariants(direction, false)}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
