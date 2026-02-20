// src/components/animation/Reveal.tsx
"use client";

import { useIntersection } from "@/src/hooks/useIntersection";
import { fadeIn } from "@/src/lib/motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, visible } = useIntersection({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
