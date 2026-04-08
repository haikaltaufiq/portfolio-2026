"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import RedactedOverlay from "./RedactedOverlay";
import { ReactNode, useState, useRef } from "react";

interface ProjectInfoCardProps {
  title: string;
  overlayText: string;
  descriptions: string[];
  delay?: number;
  index?: number;
  link?: string;
  children?: ReactNode;
}

export default function ProjectInfoCard({
  title,
  overlayText,
  descriptions,
  delay = 0.2,
  index = 0,
  link,
  children,
}: ProjectInfoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const href = link ? `/project/${link}` : "/project";

  // Repelling values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring buat efek mantul pas lari
  const springConfig = { damping: 20, stiffness: 300 };
  const repelX = useSpring(mouseX, springConfig);
  const repelY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Titik pusat button panah
    const buttonCenterX = rect.right - 44;
    const buttonCenterY = rect.bottom - 44;

    // Itung jarak kursor ke pusat button
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Radius deteksi dikecilin ke 60px (sebelumnya 100px)
    // Biar dia baru lari pas kursor udah mau nyentuh button-nya
    const detectionRadius = 60;

    if (distance < detectionRadius) {
      const power = (detectionRadius - distance) * 0.8;

      // Arah dorongan tetep dibalik (repelling)
      mouseX.set(distanceX > 0 ? -power : power);
      mouseY.set(distanceY > 0 ? -power : power);
    } else {
      // Balik ke posisi semula pas kursor menjauh
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <SlideIn delay={delay} direction="up">
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="block h-full relative"
      >
        <motion.div
          ref={cardRef}
          whileHover={{ y: -5, borderColor: "#F25623" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative border-2 border-main-text p-8 h-full flex flex-col justify-between group bg-main-bg overflow-visible transition-colors duration-300"
        >
          {/* Background Grid Accent - Pake inset-0.5 biar gak nabrak border-2 */}
          <div className="absolute inset-0.5 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none bg-[grid:20px_20px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] z-0" />

          {/* Corner Markers */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#F25623] z-20" />
          <motion.div
            animate={
              isHovered
                ? { scale: [1, 1.5, 1], backgroundColor: "#F25623" }
                : {}
            }
            className="absolute top-0 right-0 w-2 h-2 bg-main-text/10 z-20 transition-colors"
          />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-main-text/10 group-hover:bg-[#F25623] transition-colors z-20" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <motion.span
                  animate={isHovered ? { opacity: [0.3, 1, 0.3] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-[10px] font-mono font-black opacity-30 block mb-1"
                >
                  INFO_LOG.0{index + 1}
                </motion.span>
                <Typography
                  variant="h2"
                  className="font-black text-4xl lowercase leading-[0.9] tracking-tighter group-hover:text-white transition-colors"
                >
                  {title}.
                </Typography>

                <div className="mt-2 overflow-hidden">
                  <motion.div
                    animate={
                      isHovered
                        ? { x: [0, -5, 5, 0], opacity: 0.6 }
                        : { opacity: 0.1 }
                    }
                  >
                    <RedactedOverlay
                      text={overlayText}
                      className="text-[24px] transition-opacity font-black italic uppercase"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="flex gap-1">
                {["SEC", "LVL3"].map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.1, backgroundColor: "#F25623" }}
                    className="px-2 py-1 bg-main-text text-main-bg text-[8px] font-mono font-black tracking-widest cursor-default"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-l-2 border-main-text/10 group-hover:border-[#F25623]/30 pl-4 mb-6 transition-colors duration-500">
              {descriptions.map((desc, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0.7, x: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  className="text-[13px] leading-relaxed font-mono group-hover:text-main-text transition-all"
                >
                  <span className="text-[#F25623] mr-2">{"//"}</span>
                  {desc}
                </motion.p>
              ))}
            </div>

            {children && (
              <motion.div
                animate={
                  isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.8 }
                }
                className="mt-4"
              >
                {children}
              </motion.div>
            )}
          </div>

          {/* Footer Section - Overflow Visible biar panah bisa keluar */}
          <div className="mt-10 pt-6 border-t border-main-text/10 relative overflow-visible">
            <div className="flex items-center justify-between w-full group/btn">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold group-hover/btn:text-[#F25623] transition-colors z-10">
                access full report
              </span>

              {/* Repelling Arrow Button - z-30 biar diatas segalanya */}
              <motion.div
                style={{ x: repelX, y: repelY }}
                className="w-10 h-10 border-2 border-main-text rounded-none flex items-center justify-center group-hover/btn:bg-[#F25623] group-hover/btn:border-[#F25623] group-hover/btn:text-main-bg transition-all z-30 relative"
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </motion.svg>
              </motion.div>
            </div>
          </div>

          {/* Glitch Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] pointer-events-none bg-[url('/noise.gif')] z-0" />
        </motion.div>
      </a>
    </SlideIn>
  );
}
