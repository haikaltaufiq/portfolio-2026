"use client";

import dynamic from "next/dynamic";
import FadeIn from "../animation/FadeIn";
import SlideIn from "../animation/SlideIn";
import Container from "../ui/Container";
import Typography from "../ui/Typhography";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const subTextStyle =
    "font-league font-semibold uppercase tracking-[0.1em] md:tracking-[0.3em] text-[#efdbbf]";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const bgX = useTransform(dx, [-500, 500], [20, -20]);
  const bgY = useTransform(dy, [-500, 500], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const RedactedLayer = ({ text }: { text: string }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center justify-center group/redacted"
    >
      <Typography
        className={`${subTextStyle} transition-colors duration-300 whitespace-nowrap text-[9px] min-[400px]:text-[11px] md:text-[14px]`}
      >
        {text}
      </Typography>
      <motion.div
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.8, x: [0, -2, 2, 0] }}
        transition={{ duration: 0.2, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center font-redacted text-[#F25623] mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap text-[18px] min-[400px]:text-[20px] md:text-[22px]"
      >
        {text}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden selection:bg-[#F25623] selection:text-white ">
      {/* 1. Background Decor Layer */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.gif')] z-50" />

        {/* Lat Long - Fixed Position */}
        <div className="absolute top-10 left-6 md:top-12 md:left-12 flex flex-col gap-1 opacity-20">
          {[
            "LAT: 1.1301° N",
            "LONG: 104.0542° E",
            "© 2026 - HAIKAL TAUFIQ",
          ].map((info, i) => (
            <Typography
              key={i}
              className={`text-[8px] md:text-[10px] font-mono font-black ${i === 2 ? "text-[#F25623]" : ""}`}
            >
              {info}
            </Typography>
          ))}
        </div>

        {/* 2026 Background - Adjusted Opacity and Size */}
        <Typography className="absolute bottom-10 right-2 md:right-20 text-[35vw] md:text-[25vw] font-black opacity-[0.02] select-none leading-none rotate-0 md:rotate-12">
          2026
        </Typography>
      </motion.div>

      {/* 2. Main Center Content (Portfolio) */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center">
              <SlideIn delay={0.2}>
                <motion.div
                  className="relative flex flex-col w-fit leading-none group"
                  whileHover="hover"
                >
                  {/* Corner Accents */}
                  <motion.div
                    variants={{
                      hover: { x: -8, y: -8, borderColor: "#F25623" },
                    }}
                    className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-main-text/20 transition-all duration-500"
                  />
                  <motion.div
                    variants={{ hover: { x: 8, y: 8, borderColor: "#F25623" } }}
                    className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-main-text/20 transition-all duration-500"
                  />

                  <div className="relative">
                    <motion.div
                      variants={{ hover: { skewX: -2, scale: 1.01 } }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Typography
                        variant="h1"
                        className="font-poppins font-black text-[18vw] md:text-[100px] tracking-[-0.05em] lowercase leading-[0.8]"
                      >
                        portfolio.
                      </Typography>
                    </motion.div>
                    {/* Redacted Overlay for Main Text */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      variants={{ hover: { opacity: 0.7, x: [0, -1, 1, 0] } }}
                      className="absolute inset-0 flex items-center justify-center font-redacted text-[#F25623] mix-blend-plus-lighter pointer-events-none tracking-[-0.05em] lowercase leading-[0.8] text-[18vw] md:text-[100px] select-none"
                    >
                      portfolio.
                    </motion.div>
                  </div>

                  <div className="relative flex items-center gap-2 md:gap-4 self-end mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: [40, 60] }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-0.5 bg-[#F25623] hidden md:block"
                    />
                    <Typography
                      className={`${subTextStyle} text-[10px] md:text-[14px]`}
                    >
                      Software Developer
                    </Typography>
                  </div>
                </motion.div>
              </SlideIn>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* 3. Bottom Grid (Fixed to Bottom) */}
      <div className="absolute bottom-0 left-0 w-full z-30 pb-10 md:pb-14">
        <Container>
          <a href="/about" className="block group">
            <div className="w-full grid grid-cols-3 gap-2 md:gap-8 relative border-t border-main-text/10 pt-8 transition-colors duration-300 group-hover:border-main-text/30">
              {/* Pulsing Point */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#F25623] rounded-full shadow-[0_0_12px_#F25623]"
              />

              <div className="flex justify-center md:justify-start">
                <SlideIn delay={0.6}>
                  <RedactedLayer text="UI/UX" />
                </SlideIn>
              </div>
              <div className="flex justify-center">
                <SlideIn delay={0.8}>
                  <RedactedLayer text="FullStack" />
                </SlideIn>
              </div>
              <div className="flex justify-center md:justify-end">
                <SlideIn delay={1.0}>
                  <RedactedLayer text="Multimedia" />
                </SlideIn>
              </div>
            </div>
          </a>
        </Container>
      </div>

      {/* 4. Side Name (Fixed Position) */}
      <motion.div
        style={{ y: useTransform(dy, [-500, 500], [-20, 20]) }}
        className="absolute right-10 md:right-13 md:top-1/2 -translate-y-1/2 flex items-center justify-center opacity-5 pointer-events-none z-10 lg:block"
      >
        <div className="-rotate-90 origin-center translate-x-1/2">
          <Typography className="text-8xl md:text-9xl font-black lowercase tracking-tighter whitespace-nowrap leading-none">
            haikal.taufiq
          </Typography>
        </div>
      </motion.div>
    </section>
  );
}
