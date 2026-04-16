"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.28,
  distance = 44
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: distance }
      }
      style={{ willChange: "transform, opacity" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
