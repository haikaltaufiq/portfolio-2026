// src/hooks/useScrollDirection.ts

import { useScroll } from "../components/scroll/ScrollProvider";

export function useScrollDirection() {
  const { direction } = useScroll();
  return direction;
}
