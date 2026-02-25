// src/app/template.tsx
"use client";

import { usePathname } from "next/navigation";
import PageTransition from "@/src/components/animation/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return <PageTransition routeKey={pathname}>{children}</PageTransition>;
}
