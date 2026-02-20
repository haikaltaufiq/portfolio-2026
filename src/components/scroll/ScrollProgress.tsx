// src/components/scroll/ScrollProgress.tsx
"use client";

import { useScroll } from "./ScrollProvider";

export default function ScrollProgress() {
  const { progress } = useScroll();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${progress * 100}%`,
        background: "white",
        zIndex: 9999,
      }}
    />
  );
}
