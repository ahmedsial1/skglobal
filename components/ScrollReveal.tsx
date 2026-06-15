"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const getVariants = () => {
    const hiddenOffset = 30;
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: hiddenOffset }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -hiddenOffset }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: hiddenOffset }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -hiddenOffset }, visible: { opacity: 1, x: 0 } };
      case "none":
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
