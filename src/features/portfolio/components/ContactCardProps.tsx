"use client";

import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setToken(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  return (
    <SlideIn delay={index * 0.1} direction="up">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="initial"
        className="group relative block w-full bg-main-text text-main-bg p-4 md:p-8 min-h-60 overflow-hidden border-2 border-transparent hover:border-[#F25623] transition-colors duration-300"
      >
        <div className="relative z-10 h-full flex flex-col items-stretch">
          <div className="flex justify-between items-start w-full">
            <div className="flex-1">
              <span className="text-[10px] font-mono font-black opacity-30 group-hover:text-[#F25623] group-hover:opacity-100 transition-colors block mb-2">
                NODE_0{index + 1} // SYSTEM_LINK
              </span>
              <Typography
                variant="h3"
                className="text-3xl md:text-4xl font-black lowercase tracking-tighter leading-[0.9]"
              >
                {title}.
              </Typography>
            </div>
            <div className="shrink-0 ml-4 pt-1">
              <div className="w-14 h-14 border-2 border-main-bg rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#F25623] group-hover:border-[#F25623] transition-all duration-500 bg-transparent">
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
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-10" />

          <div className="w-full space-y-4">
            <div className="space-y-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 group-hover:text-[#F25623] transition-colors">
                established connection via
              </p>
              <Typography className="text-sm md:text-lg font-bold font-mono tracking-tighter leading-tight pr-2">
                {label}
              </Typography>
            </div>
            <div className="relative h-2 w-full bg-main-bg/10 overflow-hidden">
              <motion.div
                variants={{ initial: { x: "-100%" }, hover: { x: "0%" } }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 bg-[#F25623]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none">
          <p className="text-[8px] font-mono uppercase tracking-[0.2em]">
            auth_token: {token || "INITIALIZING..."}
          </p>
        </div>
      </motion.a>
    </SlideIn>
  );
}
