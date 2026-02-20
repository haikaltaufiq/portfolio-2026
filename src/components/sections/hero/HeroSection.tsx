"use client";

import dynamic from "next/dynamic";
import FadeIn from "../../animation/FadeIn";
import SlideIn from "../../animation/SlideIn";
import Container from "../../ui/Container";
import Typography from "../../ui/Typhography";
import lineAnim from "../../../lotties/line-1.json";
import { useEffect, useRef } from "react";

// Import Lottie secara dynamic biar nggak berat pas initial load
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const subTextStyle =
    "font-league font-semibold uppercase tracking-[0.3em] text-[15px] text-[#efdbbf]";

  const RedactedLayer = ({ text }: { text: string }) => (
    <div className="relative group flex items-center justify-center">
      <Typography className={subTextStyle}>{text}</Typography>
      <Typography
        className="
          absolute 
          inset-0 
          flex items-center justify-center
          text-[24px] 
          font-redacted 
          text-[#F25623] 
          opacity-30 
          mix-blend-plus-lighter 
          pointer-events-auto 
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
      lottieRef.current.setSpeed(0.5); // 0.5 = setengah kecepatan (slowmo)
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center mt-45">
            {/* 1. Judul Utama */}
            <SlideIn delay={0.2}>
              <div className="relative flex flex-col w-fit leading-none">
                <div className="relative">
                  <Typography
                    variant="h1"
                    className="font-poppins font-black text-[108px] tracking-[-0.05em]"
                  >
                    portfolio.
                  </Typography>
                  <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-25 w-[220%] mix-blend-plus-lighter pointer-events-none">
                    <div className="overflow-hidden h-65 opacity-30 mix-blend-plus-lighter">
                      <div className="-translate-y-15">
                        <Lottie
                          lottieRef={lottieRef}
                          animationData={lineAnim}
                          loop={false}
                          autoplay
                          onDOMLoaded={() => {
                            lottieRef.current?.setSpeed(0.4);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Software Developer */}
                <div className="relative self-end -mt-2">
                  <Typography className={subTextStyle}>
                    Software Developer
                  </Typography>
                </div>
              </div>
            </SlideIn>

            {/* 3. Baris Bawah */}
            <div className="w-full flex justify-between items-center mt-65">
              <SlideIn delay={0.6}>
                <RedactedLayer text="Fullstack Developer" />
              </SlideIn>

              <SlideIn delay={0.8}>
                <RedactedLayer text="Mobile App Developer" />
              </SlideIn>

              <SlideIn delay={1.0}>
                <RedactedLayer text="Multimedia Engineer" />
              </SlideIn>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
