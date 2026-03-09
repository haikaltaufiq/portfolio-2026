"use client";

import dynamic from "next/dynamic";
import FadeIn from "../animation/FadeIn";
import SlideIn from "../animation/SlideIn";
import Container from "../ui/Container";
import Typography from "../ui/Typhography";
import lineAnim from "../../lotties/line-1.json";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const subTextStyle =
    "font-league font-semibold uppercase tracking-[0.3em] text-[15px] text-[#efdbbf]";

  // Mouse tracking untuk efek parallax halus
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Transform buat elemen background (tipis-tipis aja biar gak pusing)
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
        className={`${subTextStyle} transition-colors duration-300 group-hover/redacted:text-white`}
      >
        {text}
      </Typography>
      <motion.div
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.8, x: [0, -2, 2, 0] }}
        transition={{ duration: 0.2, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center text-[24px] font-redacted text-[#F25623] mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap"
      >
        {text}
      </motion.div>
    </motion.div>
  );

  const lottieRef = useRef<any>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden selection:bg-[#F25623] selection:text-white ">
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 mt-10 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.gif')] z-50" />

        <div className="absolute -top-5 left-10 flex flex-col gap-1 opacity-20">
          {["LAT: 1.1301° N", "LONG: 104.0542° E", "System: Operational"].map(
            (info, i) => (
              <Typography
                key={i}
                className={`text-[10px] font-mono font-black ${i === 2 ? "text-[#F25623]" : ""}`}
              >
                {info}
              </Typography>
            ),
          )}
        </div>

        <Typography className="absolute bottom-10 -right-10 text-[25vw] font-black opacity-[0.02] select-none leading-none z-0 rotate-12">
          2026
        </Typography>
      </motion.div>

      <Container className="relative z-10 mt-40">
        <FadeIn>
          <div className="flex flex-col items-center mt-20">
            <SlideIn delay={0.2}>
              <motion.div
                className="relative flex flex-col w-fit leading-none group"
                whileHover="hover"
              >
                {/* Corner Accents - Animasi pas hover */}
                <motion.div
                  variants={{
                    hover: { x: -10, y: -10, borderColor: "#F25623" },
                  }}
                  className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-main-text/20 transition-colors duration-500"
                />
                <motion.div
                  variants={{ hover: { x: 10, y: 10, borderColor: "#F25623" } }}
                  className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-main-text/20 transition-colors duration-500"
                />

                <div className="relative">
                  <motion.div
                    variants={{ hover: { skewX: -2, scale: 1.02 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Typography
                      variant="h1"
                      className="font-poppins font-black text-[10vw] md:text-[108px] tracking-[-0.05em] lowercase"
                    >
                      portfolio.
                    </Typography>
                  </motion.div>

                  <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-25 w-[220%] mix-blend-plus-lighter pointer-events-none">
                    <div className="overflow-hidden h-65 opacity-30 mix-blend-plus-lighter">
                      <div className="-translate-y-15">
                        <Lottie
                          lottieRef={lottieRef}
                          animationData={lineAnim}
                          loop={true}
                          autoplay
                          onDOMLoaded={() => {
                            lottieRef.current?.setSpeed(0.4);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative self-end -mt-2 flex items-center gap-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-0.5 bg-[#F25623] hidden md:block"
                  />
                  <Typography className={subTextStyle}>
                    Software Developer
                  </Typography>
                </div>
              </motion.div>
            </SlideIn>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-55 relative border-t border-main-text/10 pt-12">
              {/* Pulsing Divider Point */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#F25623] rounded-full shadow-[0_0_15px_#F25623]"
              />

              <div className="flex justify-center md:justify-start">
                <SlideIn delay={0.6}>
                  <RedactedLayer text="Fullstack Developer" />
                </SlideIn>
              </div>

              <div className="flex justify-center">
                <SlideIn delay={0.8}>
                  <RedactedLayer text="Web & Mobile Developer" />
                </SlideIn>
              </div>

              <div className="flex justify-center md:justify-end">
                <SlideIn delay={1.0}>
                  <RedactedLayer text="Multimedia Enthusiast" />
                </SlideIn>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Marquee with Mouse Parallax */}
      <motion.div
        style={{ y: useTransform(dy, [-500, 500], [-30, 30]) }}
        className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-5 pointer-events-none lg:block z-0"
      >
        <div className="-rotate-90 origin-center translate-x-1/2">
          <Typography className="text-9xl font-black lowercase tracking-tighter whitespace-nowrap">
            haikal.taufiq
          </Typography>
        </div>
      </motion.div>
    </section>
  );
}
