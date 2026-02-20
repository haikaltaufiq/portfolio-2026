"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import React from "react";

// --- SUB-COMPONENTS (Modular internal to this file) ---

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

const SkillBadge = ({ text }: { text: string }) => (
  <span className="px-4 py-2 border-2 border-main-text font-black text-[12px] lowercase tracking-tighter hover:bg-main-text hover:text-main-bg transition-colors duration-300">
    {text}
  </span>
);

const ExperienceCard = ({
  year,
  role,
  company,
}: {
  year: string;
  role: string;
  company: string;
}) => (
  <div className="flex justify-between items-center border-b-[3px] border-main-text/10 py-6 group hover:border-main-text transition-colors">
    <div className="flex flex-col">
      <Typography
        variant="h3"
        className="text-xl font-black lowercase leading-none"
      >
        {role}
      </Typography>
      <Typography className="text-xs opacity-50 font-bold uppercase tracking-widest mt-1">
        {company}
      </Typography>
    </div>
    <Typography className="font-redacted text-2xl opacity-20 group-hover:opacity-100 transition-opacity">
      {year}
    </Typography>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function AboutPage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Framer Motion",
    "Tailwind",
    "Three.js",
    "PostgreSQL",
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* HERO SECTION: THE STACKED HEADER */}
        <section className="relative mb-32">
          <SlideIn direction="up">
            <div className="relative">
              <Typography
                variant="h1"
                className="font-poppins font-black text-[12vw] md:text-[10vw] leading-[0.75] lowercase tracking-tighter"
              >
                about <br />
                <span>me.</span>
              </Typography>
              <RedactedOverlay
                text="multimedia "
                className="text-[6vw] top-1/2 -translate-y-1/2 left-[20vw] opacity-15"
              />
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20">
            <div className="md:col-span-5 flex flex-col gap-8">
              <SlideIn delay={0.2}>
                <div className="p-8 border-4 border-main-text rounded-3xl bg-main-text text-main-bg transform -rotate-2">
                  <Typography className="text-lg font-bold leading-tight">
                    "I build things that work, then I make them look like
                    they’re from the future but coded in 1995."
                  </Typography>
                </div>
              </SlideIn>

              <SlideIn delay={0.4}>
                <div className="space-y-6 opacity-80 font-medium leading-relaxed">
                  <p>
                    I am a passionate Multimedia Engineering Technology student
                    at Politeknik Negeri Batam. I don't just write code; I craft
                    digital experiences that balance raw aesthetics with
                    high-performance engineering.
                  </p>
                  <p>
                    Focused on modern web technologies and mobile applications,
                    I spend most of my time debugging things that worked 5
                    minutes ago and exploring the boundaries of UI/UX in a
                    brutalist context.
                  </p>
                </div>
              </SlideIn>
            </div>

            <div className="md:col-span-7">
              <SlideIn delay={0.3}>
                <div className="relative aspect-square md:aspect-auto md:h-125 bg-main-text/5 rounded-3xl overflow-hidden group">
                  {/* Placeholder for Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Typography className="font-redacted text-[15vw] opacity-5 select-none">
                      BIO DATA
                    </Typography>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 p-4 border-2 border-main-text rotate-12 group-hover:rotate-0 transition-transform">
                    <Typography className="text-[10px] font-black uppercase tracking-widest">
                      Available for Hire
                    </Typography>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* SKILLS & STACK: MARQUEE STYLE VIBE */}
        <section className="mb-32">
          <SlideIn>
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-6">
                <div className="h-0.5 flex-1 bg-main-text/20"></div>
                <Typography
                  variant="h2"
                  className="text-4xl font-black lowercase italic"
                >
                  tech stack.
                </Typography>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.map((skill) => (
                  <SkillBadge key={skill} text={skill} />
                ))}
              </div>
            </div>
          </SlideIn>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <SlideIn direction="up">
              <Typography
                variant="h2"
                className="text-5xl font-black lowercase mb-12"
              >
                experience.
              </Typography>
              <div className="flex flex-col">
                <ExperienceCard
                  year="2024 - Present"
                  role="Frontend Developer"
                  company="Freelance Projects"
                />
                <ExperienceCard
                  year="2023 - 2024"
                  role="Lab Assistant"
                  company="Politeknik Negeri Batam"
                />
                <ExperienceCard
                  year="2022"
                  role="Junior Web Dev"
                  company="Startup Inc."
                />
              </div>
            </SlideIn>
          </div>

          <div className="flex flex-col justify-end gap-12">
            <SlideIn delay={0.2}>
              <div className="p-10 border-2 border-dashed border-main-text/30 rounded-3xl">
                <Typography
                  variant="h3"
                  className="text-2xl font-black lowercase mb-4"
                >
                  mission.
                </Typography>
                <p className="text-sm opacity-70 font-medium italic">
                  "Creating a bridge between technical complexity and artistic
                  expression. If it doesn't challenge the status quo, it's not
                  worth building."
                </p>
              </div>
            </SlideIn>

            {/* Dynamic Circle Decor */}
            <div className="flex justify-center md:justify-end">
              <div className="w-32 h-32 rounded-full border-4 border-main-text flex items-center justify-center animate-spin-slow">
                <span className="text-[10px] font-black uppercase tracking-tight text-center">
                  Batam • 2026 • Batam • 2026
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
