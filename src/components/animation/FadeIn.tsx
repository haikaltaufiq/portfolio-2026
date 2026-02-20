// src/components/animation/FadeIn.tsx
"use client";

import { fadeIn } from "@/src/lib/motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}
