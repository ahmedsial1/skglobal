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
        borderColor: "rgba(250, 204, 21, 0.25)",
        boxShadow: "0 20px 40px -15px rgba(250, 204, 21, 0.12)",
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
