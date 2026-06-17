"use client";

import React from "react";
import { motion } from "framer-motion";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
        borderColor: "rgba(30, 64, 175, 0.2)",
        boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
