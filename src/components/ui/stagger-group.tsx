"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, isValidElement, ReactNode } from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
  distance?: number;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.18,
  delayChildren = 0.06,
  staggerChildren = 0.12,
  distance = 48
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren
      }
    }
  };

  const itemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.45, ease: easeCurve }
        }
      }
    : {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: easeCurve }
        }
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      whileInView="visible"
    >
      {Children.map(children, (child, index) => {
        if (child === null || child === undefined || child === false) {
          return child;
        }

        const key = isValidElement(child) && child.key !== null ? child.key : index;

        return (
          <motion.div key={key} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
