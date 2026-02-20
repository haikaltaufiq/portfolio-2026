// src/app/providers.tsx
"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ScrollProvider } from "../components/scroll/ScrollProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <ScrollProvider>{children}</ScrollProvider>
    </LazyMotion>
  );
}
