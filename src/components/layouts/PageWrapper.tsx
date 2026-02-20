// src/components/layout/PageWrapper.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "../animation/PageTransition";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return <PageTransition routeKey={pathname}>{children}</PageTransition>;
}
