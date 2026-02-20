"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSvg() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      const mainElem = document.querySelector("main");
      if (mainElem) {
        setPageHeight(mainElem.scrollHeight);
      }
    };

    calculateHeight();
    const timer = setTimeout(calculateHeight, 1000);
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
      clearTimeout(timer);
    };
  }, []);

  useLayoutEffect(() => {
    if (!pathRef.current || pageHeight === 0) return;

    const path = pathRef.current;
    ScrollTrigger.refresh();

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const scrollAnim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Fixed: 1:1 movement with scroll
      },
    });

    return () => {
      scrollAnim.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pageHeight]);

  const generateRollerCoasterPath = () => {
    const h = pageHeight || 2000;
    const w = 400; // viewBox width reference

    return `
      M 40,0 
      L 40,${h * 0.12} 
      C 40,${h * 0.2} ${w * 0.9},${h * 0.22} ${w * 0.9},${h * 0.3}
      C ${w * 0.9},${h * 0.45} ${w * 0.05},${h * 0.45} ${w * 0.05},${h * 0.35}
      S ${w * 0.95},${h * 0.28} ${w * 0.95},${h * 0.42}
      C ${w * 0.95},${h * 0.6} ${w * 0.05},${h * 0.65} ${w * 0.25},${h * 0.8}
      C ${w * 0.6},${h * 0.9} ${w * 0.12},${h * 0.95} ${w * 0.5},${h}
    `;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"></div>
  );
}
