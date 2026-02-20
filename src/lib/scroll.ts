// src/lib/scroll.ts
export type ScrollState = {
  y: number;
  direction: "up" | "down";
  progress: number; // 0 → 1
};

export const initialScrollState: ScrollState = {
  y: 0,
  direction: "down",
  progress: 0,
};
