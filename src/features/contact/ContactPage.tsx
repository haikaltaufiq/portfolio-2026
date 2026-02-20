"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import React from "react";

// --- SUB-COMPONENTS ---

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

const SocialCard = ({
  title,
  handle,
  href,
  index,
}: {
  title: string;
  handle: string;
  href: string;
  index: number;
}) => {
  const tilts = [
    "group-hover:rotate-2",
    "group-hover:-rotate-2",
    "group-hover:rotate-1",
    "group-hover:-rotate-1",
  ];
  const tilt = tilts[index % tilts.length];

  return (
    <SlideIn delay={index * 0.1}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block bg-main-text text-main-bg p-10 rounded-3xl transition-all duration-500 ${tilt}`}
      >
        <div className="flex justify-between items-start mb-12">
          <Typography
            variant="h2"
            className="text-4xl font-black lowercase tracking-tighter"
          >
            {title}.
          </Typography>
          <div className="w-14 h-14 border-[3px] border-main-bg rounded-full flex items-center justify-center group-hover:bg-main-bg group-hover:text-main-text transition-all duration-500">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            connect via
          </p>
          <p className="text-lg font-bold">{handle}</p>
        </div>
      </a>
    </SlideIn>
  );
};

// --- MAIN PAGE ---

export default function ContactPage() {
  const socialLinks = [
    {
      title: "LinkedIn",
      handle: "haikal-taufiq",
      href: "https://linkedin.com/in/haikal-taufiq",
    },
    {
      title: "GitHub",
      handle: "haikaltfq",
      href: "https://github.com/haikaltfq",
    },
    {
      title: "Email",
      handle: "hello@haikal.dev",
      href: "mailto:hello@haikal.dev",
    },
    {
      title: "Instagram",
      handle: "@haikaltfq_",
      href: "https://instagram.com/haikaltfq_",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION 1: DRAMATIC HEADER */}
        <section className="relative mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 relative">
              <SlideIn direction="up">
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-[15vw] md:text-[12vw] leading-[0.8] lowercase tracking-tighter"
                >
                  let's <br />
                  <span className="ml-[10vw]">talk.</span>
                </Typography>
                <RedactedOverlay
                  text="don't be a stranger"
                  className="text-[6vw] top-0 left-[30vw] opacity-10"
                />
              </SlideIn>
            </div>
            <div className="md:col-span-4 pb-4">
              <SlideIn delay={0.3}>
                <Typography className="text-sm font-medium leading-relaxed opacity-60 border-l-4 border-main-text pl-6">
                  Apakah lu punya ide startup gila, butuh bantuan coding, atau
                  cuma mau ngajak ngopi di warkop? Gas langsung kontak gw bjir.
                </Typography>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE GRID SYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
          {/* LEFT: STATUS CARD */}
          <div className="space-y-8 sticky top-32">
            <SlideIn>
              <div className="p-10 border-[3px] border-dashed border-main-text rounded-3xl">
                <Typography
                  variant="h3"
                  className="text-2xl font-black lowercase mb-6"
                >
                  current status.
                </Typography>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-green-500 rounded-full relative" />
                  </div>
                  <Typography className="font-bold uppercase tracking-widest text-xs">
                    Available for New Projects
                  </Typography>
                </div>
                <p className="text-xs opacity-60 font-medium leading-relaxed">
                  Gw biasanya aktif di jam Batam (GMT+7). Kalo chat lu nggak
                  dibales, berarti gw lagi push rank atau lagi debugging bug gak
                  ngotak bjir.
                </p>
              </div>
            </SlideIn>

            {/* DECORATIVE ELEMENT */}
            <div className="hidden md:block">
              <Typography className="font-redacted text-6xl opacity-5 select-none leading-none">
                CONTACT INFO 2026 CONTACT INFO 2026
              </Typography>
            </div>
          </div>

          {/* CENTER: DIVIDER */}
          <div className="hidden md:block w-px self-stretch bg-main-text/10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-px bg-main-text" />
          </div>

          {/* RIGHT: SOCIAL GRID */}
          <div className="grid grid-cols-1 gap-6">
            {socialLinks.map((social, index) => (
              <SocialCard
                key={social.title}
                title={social.title}
                handle={social.handle}
                href={social.href}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: BOTTOM MARQUEE / FOOTER DECOR */}
        <section className="mt-40 border-t-4 border-main-text pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-12 overflow-hidden whitespace-nowrap group">
              {[1, 2, 3].map((i) => (
                <Typography
                  key={i}
                  className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20 animate-marquee"
                >
                  batam indonesia • politeknik negeri batam • multimedia
                  engineering •
                </Typography>
              ))}
            </div>
            <Typography className="text-[10px] font-black uppercase tracking-widest shrink-0">
              © 2026 HAIKAL TAUFIQ
            </Typography>
          </div>
        </section>
      </div>
    </main>
  );
}
