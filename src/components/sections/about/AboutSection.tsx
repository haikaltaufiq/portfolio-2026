"use client";

import FadeIn from "../../animation/FadeIn";
import ScrollSvg from "../../animation/ScrollSvg";
import SlideIn from "../../animation/SlideIn";
import Typography from "../../ui/Typhography";
import lineAnim from "../../../lotties/men-white.json";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AboutSection() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // 0.5 = setengah kecepatan (slowmo)
    }
  }, []);

  const RedactedOverlay = ({
    text,
    className = "",
  }: {
    text: string;
    className?: string;
  }) => (
    <Typography
      className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap ${className}`}
    >
      {text}
    </Typography>
  );

  return (
    <section className="relative min-h-screen bg-transparent py-20 mt-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* KIRI: Profile Card (Makan 7 dari 12 kolom biar lebar) */}
          <div className="md:col-span-7">
            <SlideIn delay={0.2}>
              <div className="bg-main-text rounded-3xl p-4 mt-5 text-black">
                {/* Image Placeholder */}
                <div className="aspect-8/3 w-full bg-black rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={lineAnim}
                    loop={false}
                    autoplay
                    onDOMLoaded={() => {
                      lottieRef.current?.setSpeed(2);
                    }}
                    className="p-30 mt-10"
                  />
                </div>

                <div className="relative inline-block">
                  <Typography
                    variant="h2"
                    className="ml-1 font-poppins font-black text-4xl tracking-tight lowercase"
                  >
                    haikal taufiq.
                  </Typography>
                </div>

                <p className="mt-2 ml-1 mb-4 text-[13px] text-main-bg/90 leading-relaxed font-medium opacity-90 max-w-2xl">
                  I am a passionate Multimedia Engineering Technology student at
                  Politeknik Negeri Batam, experienced in web development,
                  mobile apps, and 3D game creation. I combine technical skills
                  in front-end and back-end development with a creative approach
                  to multimedia solutions, driven by continuous learning and
                  innovation.
                </p>
              </div>
            </SlideIn>
          </div>

          {/* KANAN: Content Sections (Sisa 5 kolom) */}
          <div className="md:col-span-5 flex flex-col gap-9.5 pt-4">
            {/* About Me Section */}
            <SlideIn delay={0.4}>
              <div className="relative inline-block">
                <Typography
                  variant="h2"
                  className="font-poppins font-black text-4xl lowercase"
                >
                  about me.
                </Typography>
                <RedactedOverlay
                  text="tanya aja"
                  className="text-[50px] -top-3 left-0"
                />
              </div>
              <p className="mt-4 text-main-text opacity-70 text-[13px] leading-relaxed">
                I am a passionate Multimedia Engineering Technology student at
                Politeknik Negeri Batam, experienced in web development, mobile
                apps, and 3D game creation.
              </p>
            </SlideIn>

            {/* Work Experience Section */}
            <SlideIn delay={0.6}>
              <div className="relative  border-[3px] border-dashed border-main-text/20 rounded-2xl p-6 group">
                <div className="relative inline-block mb-4">
                  <Typography
                    variant="h2"
                    className="font-poppins font-black text-3xl lowercase"
                  >
                    interested in
                  </Typography>
                  <RedactedOverlay
                    text="kerja rodi muluu"
                    className="text-[30px] top-0 left-0"
                  />
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <p className="text-main-text opacity-70 text-[13px] leading-relaxed">
                      I am a passionate Multimedia Engineering Technology
                      student at Politeknik Negeri Batam.
                    </p>
                    <RedactedOverlay
                      text="ngetik ampe tipes, jir lah bro hidup apa ini"
                      className="text-[18px] top-0 left-0 opacity-10"
                    />
                  </div>

                  <div className="relative">
                    <p className="text-main-text opacity-70 text-[13px] leading-relaxed">
                      Experienced in web development, mobile apps, and 3D game
                      creation.
                    </p>
                    <RedactedOverlay
                      text="error itu seni, aku adalah seorang seniman"
                      className="text-[18px] top-0 left-0 opacity-10"
                    />
                  </div>
                </div>

                <button className="mt-6   mb-3  flex items-center gap-2 text-main-text hover:gap-4 transition-all duration-300">
                  <span className="text-xs lowercase tracking-widest">
                    read more
                  </span>
                  <div className="w-5 h-5 rounded-full border border-main-text flex items-center justify-center text-[8px]">
                    →
                  </div>
                </button>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
