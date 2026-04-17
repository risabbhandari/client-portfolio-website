"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "framer-motion";
import { ReactNode, useRef } from "react";

import type { ProjectCategory } from "@/data/site";

import { NitroProjectCard } from "./nitro-project-card";

type ProjectStackSceneProps = {
  items: ProjectCategory[];
  overlay?: ReactNode;
  leadIn?: number;
  mode?: "home" | "projects";
  entryOffset?: number;
  sceneHeightPerItem?: number;
};

type ProjectStackItemProps = {
  entryOffset: number;
  index: number;
  item: ProjectCategory;
  leadIn: number;
  mode: "home" | "projects";
  progress: MotionValue<number>;
  total: number;
};

function ProjectStackItem({
  entryOffset,
  index,
  item,
  leadIn,
  mode,
  progress,
  total
}: ProjectStackItemProps) {
  const entryStep = 0.145;
  const entrySpan = 0.12;
  const finalOffset = index * 16;
  const start = Math.min(leadIn + index * entryStep, 0.92);
  const end = Math.min(start + entrySpan, 0.99);
  const nextStart = Math.min(leadIn + (index + 1) * entryStep, 0.99);
  const settleEnd = Math.min(nextStart + entrySpan * 0.72, 1);

  const y = useTransform(progress, [start, end], [entryOffset + index * 48, finalOffset]);
  const scale =
    index === total - 1
      ? useTransform(progress, [start, end], [0.97, 1])
      : useTransform(
          progress,
          [start, end, nextStart, settleEnd],
          [0.97, 1, 1, 0.988]
        );
  const rotateX = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 origin-top [transform-style:preserve-3d]"
      style={{
        opacity: 1,
        rotateX,
        scale,
        y,
        zIndex: 20 + index
      }}
    >
      <NitroProjectCard index={index} item={item} mode={mode} />
    </motion.div>
  );
}

export function ProjectStackScene({
  items,
  overlay,
  leadIn = 0.14,
  mode = "home",
  entryOffset = 960,
  sceneHeightPerItem = 138
}: ProjectStackSceneProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const progress = useSpring(scrollYProgress, {
    damping: 28,
    mass: 0.24,
    stiffness: 130
  });
  const overlayFadeEnd = Math.min(leadIn + 0.16, 0.52);
  const overlayOpacity = useTransform(progress, [0, leadIn * 0.9, overlayFadeEnd], [1, 1, 0.08]);
  const overlayY = useTransform(progress, [0, overlayFadeEnd], [0, -18]);
  const overlayScale = useTransform(progress, [0, overlayFadeEnd], [1, 0.99]);

  return (
    <div
      className="relative"
      ref={sectionRef}
      style={{ height: `${Math.max(items.length * sceneHeightPerItem, 540)}vh` }}
    >
      <div className="sticky top-[7.15rem] h-[calc(100svh-7.15rem)] overflow-hidden">
        {overlay ? (
          <motion.div
            className="absolute inset-0 z-0"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: overlayOpacity,
                    scale: overlayScale,
                    y: overlayY
                  }
            }
          >
            {overlay}
          </motion.div>
        ) : null}

        <div className="absolute inset-0 z-20">
          {items.map((item, index) => (
            <ProjectStackItem
              entryOffset={entryOffset}
              index={index}
              item={item}
              key={item.title}
              leadIn={leadIn}
              mode={mode}
              progress={progress}
              total={items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
