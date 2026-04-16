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
  distance = 32
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
      transition={{
        delay,
        duration: 1.05,
        ease: [0.22, 1, 0.36, 1]
      }}
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
