// src/components/scroll/ScrollProvider.tsx
"use client";

import { initialScrollState, ScrollState } from "@/src/lib/scroll";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

const ScrollContext = createContext<ScrollState>(initialScrollState);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollState>(initialScrollState);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setState({
        y,
        direction: y > lastY.current ? "down" : "up",
        progress: max > 0 ? y / max : 0,
      });

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
