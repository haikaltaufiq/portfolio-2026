// src/components/animation/SlideIn.tsx
"use client";

import { slideDown, slideUp } from "@/src/lib/motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "up" | "down";
  delay?: number; 
};

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
}: Props) {
  const variants = direction === "down" ? slideDown : slideUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show" // Pake whileInView biar trigger pas masuk layar
      viewport={{ once: true }}
      transition={{ delay: delay }} // Pasang delay-nya di sini
    >
      {children}
    </motion.div>
  );
}
