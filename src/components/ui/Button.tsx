// src/components/ui/Button.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium";

  const variants = {
    primary: "bg-white text-black",
    ghost: "border border-white text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
