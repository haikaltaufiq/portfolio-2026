"use client";

import dynamic from "next/dynamic";
import FadeIn from "../../animation/FadeIn";
import SlideIn from "../../animation/SlideIn";
import Container from "../../ui/Container";
import Typography from "../../ui/Typhography";
import lineAnim from "../../../lotties/line-1.json";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Import Lottie secara dynamic biar nggak berat pas initial load
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const subTextStyle =
    "font-league font-semibold uppercase tracking-[0.3em] text-[15px] text-[#efdbbf]";

  const RedactedLayer = ({ text }: { text: string }) => (
    <div className="relative group flex items-center justify-center cursor-crosshair">
      <Typography className={subTextStyle}>{text}</Typography>
      <Typography
        className="
          absolute 
          inset-0 
          flex items-center justify-center
          text-[24px] 
          font-redacted 
          text-[#F25623] 
          opacity-0 
          group-hover:opacity-40
          transition-opacity
          mix-blend-plus-lighter 
          pointer-events-none 
          tracking-normal
          whitespace-nowrap
        "
      >
        {text}
      </Typography>
    </div>
  );

  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden selection:bg-[#F25623] selection:text-white">
      <div className="absolute inset-0 mt-10 pointer-events-none">
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.gif')] z-50" />

        {/* Floating System Coordinates */}
        <div className="absolute -top-5 left-10 flex flex-col gap-1 opacity-20">
          <Typography className="text-[10px] font-mono font-black">
            LAT: 1.1301° N
          </Typography>
          <Typography className="text-[10px] font-mono font-black">
            LONG: 104.0542° E
          </Typography>
          <Typography className="text-[10px] font-mono font-black uppercase text-[#F25623]">
            System: Operational
          </Typography>
        </div>

        {/* Big Background Text Artifact */}
        <Typography className="absolute bottom-10  -right-10 text-[25vw] font-black opacity-[0.02] select-none leading-none z-0 rotate-12">
          2026
        </Typography>
      </div>

      <Container className="relative z-10 mt-40">
        <FadeIn>
          <div className="flex flex-col items-center mt-20">
            {/* 2. Judul Utama with Glitch Frame */}
            <SlideIn delay={0.2}>
              <div className="relative  flex flex-col w-fit leading-none group">
                {/* Visual Frame Decor */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-main-text/20 group-hover:border-[#F25623] transition-colors duration-500" />
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-main-text/20 group-hover:border-[#F25623] transition-colors duration-500" />

                <div className="relative ">
                  <Typography
                    variant="h1"
                    className="font-poppins font-black text-[10vw] md:text-[108px] tracking-[-0.05em] lowercase"
                  >
                    portfolio.
                  </Typography>

                  {/* Lottie Container - tetep seperti layout lu tapi gua atur dikit posisinya */}
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

                {/* 3. Software Developer with underline accent */}
                <div className="relative self-end -mt-2 flex items-center gap-4">
                  <div className="h-0.5 w-20 bg-[#F25623] hidden md:block" />
                  <Typography className={subTextStyle}>
                    Software Developer
                  </Typography>
                </div>
              </div>
            </SlideIn>

            {/* 4. Baris Bawah / Stats Bar */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-55 relative border-t border-main-text/10 pt-12">
              {/* Decorative Circle in Divider */}
              <div className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#F25623] rounded-full shadow-[0_0_10px_#F25623]" />

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
                  <RedactedLayer text="Multimedia Enthusias" />
                </SlideIn>
              </div>
            </div>

            {/* 5. Center Bottom Prompt */}
          </div>
        </FadeIn>
      </Container>

      {/* Side Marquee - Urakan touch */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-5 pointer-events-none lg:block z-0">
        <div className="-rotate-90 origin-center translate-x-1/2">
          <Typography className="text-9xl font-black lowercase tracking-tighter whitespace-nowrap">
            haikal.taufiq
          </Typography>
        </div>
      </div>
    </section>
  );
}
