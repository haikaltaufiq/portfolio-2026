"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import { useEffect, useState, useRef } from "react";

interface ContactCardProps {
  title: string;
  label: string;
  href: string;
  index: number;
}

export default function ContactCard({
  title,
  label,
  href,
  index,
}: ContactCardProps) {
  const [token, setToken] = useState<string>("");
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Magnetic Effect for the Arrow Icon
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    setToken(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Tarikan magnet fokus ke area icon (top right)
    const isNearIcon =
      e.clientX > rect.right - 100 && e.clientY < rect.top + 100;

    if (isNearIcon) {
      mouseX.set(e.clientX - (rect.right - 40));
      mouseY.set(e.clientY - (rect.top + 40));
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <SlideIn delay={index * 0.1} direction="up">
      <motion.a
        ref={cardRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="initial"
        className="group relative block w-full bg-main-text text-main-bg p-4 md:p-8 min-h-60 overflow-hidden border-2 border-transparent hover:border-[#F25623] transition-colors duration-300"
      >
        {/* 1. GRAINY SYSTEM NOISE (New) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-[url('/noise.gif')] pointer-events-none z-0" />

        <div className="relative z-10 h-full flex flex-col items-stretch">
          <div className="flex justify-between items-start w-full">
            <div className="flex-1">
              <span className="text-[10px] font-mono font-black opacity-30 group-hover:text-[#F25623] group-hover:opacity-100 transition-colors block mb-2">
                NODE_0{index + 1} // SYSTEM_LINK
              </span>
              <Typography
                variant="h3"
                className="text-3xl md:text-4xl font-black lowercase tracking-tighter leading-[0.9] group-hover:translate-x-1 transition-transform"
              >
                {title}.
              </Typography>
            </div>

            <motion.div style={{ x: dx, y: dy }} className="shrink-0 ml-4 pt-1">
              <div className="w-14 h-14 border-2 border-main-bg rounded-full flex items-center justify-center group-hover:bg-[#F25623] group-hover:border-[#F25623] transition-all duration-500 bg-transparent overflow-hidden">
                <motion.div
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 45 },
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 min-h-12" />

          <div className="w-full space-y-4">
            <div className="space-y-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 group-hover:text-[#F25623] transition-colors">
                established connection via
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="relative overflow-hidden"
              >
                <Typography className="text-sm md:text-lg font-bold font-mono tracking-tighter leading-tight pr-2 group-hover:text-[#F25623] transition-colors">
                  {label}
                </Typography>
              </motion.div>
            </div>

            {/* PROGRESS BAR: Enhanced with Pulse */}
            <div className="relative h-2 w-full bg-main-bg/10 overflow-hidden">
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 bg-[#F25623] shadow-[0_0_15px_rgba(242,86,35,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* 2. BACKGROUND DECO TEXT (New) */}
        <motion.div className="absolute -bottom-4 -left-4 text-[6rem] font-black opacity-0 group-hover:opacity-[0.03] pointer-events-none select-none italic uppercase tracking-tighter transition-opacity duration-700">
          {title}
        </motion.div>

        <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-20">
          <p className="text-[8px] font-mono uppercase tracking-[0.2em]">
            auth_token: {token || "INITIALIZING..."}
          </p>
        </div>
      </motion.a>
    </SlideIn>
  );
}
