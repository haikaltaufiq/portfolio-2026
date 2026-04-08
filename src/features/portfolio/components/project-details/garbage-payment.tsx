"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import { useState } from "react";

/**
 * Interface for internal project feature items
 */
interface FeatureItem {
  code: string;
  name: string;
  desc: string;
}

/**
 * Interface for preview carousel images
 */
interface PreviewImage {
  id: number;
  src: string;
  label: string;
}

type GarbagePaymentDetailProps = {
  project: ProjectDetail;
};

// --- Constants ---

const BASIC_FEATURES: FeatureItem[] = [
  {
    code: "01",
    name: "Citizen Registry",
    desc: "Basic CRUD for resident data per block and house number.",
  },
  {
    code: "02",
    name: "Payment Record",
    desc: "Manual entry for monthly waste collection fees.",
  },
  {
    code: "03",
    name: "Neighborhood Info",
    desc: "Simple bulletin board for RT/neighborhood announcements.",
  },
  {
    code: "04",
    name: "Admin Search",
    desc: "Basic filtering to see who hasn't paid their dues.",
  },
];

const PREVIEW_IMAGES: PreviewImage[] = [
  { id: 1, src: "/assets/garbage/landing.png", label: "Landing_Page" },
  { id: 2, src: "/assets/garbage/login.png", label: "Login_Page" },
  { id: 3, src: "/assets/garbage/dashboard.png", label: "Dashboard_View" },
  { id: 4, src: "/assets/garbage/transaction.png", label: "CRUD_Operations" },
];

/**
 * GarbagePaymentDetail Component
 * Showcases the project features and a visual carousel with hover effects.
 */
export default function GarbagePaymentDetail({
  project,
}: GarbagePaymentDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for Carousel Navigation
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === PREVIEW_IMAGES.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PREVIEW_IMAGES.length - 1 : prev - 1,
    );
  };

  return (
    <main className="min-h-screen pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* Background Noise Effect */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-5xl px-6 relative">
        {/* Header Section */}
        <section className="relative mb-24 border-b-2 border-current pb-12">
          <SlideIn direction="up">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black border border-current px-2 py-1 uppercase">
                  Legacy_System
                </span>
              </div>
              <Typography
                variant="h1"
                className="text-[12vw] md:text-[7vw] leading-[0.8] font-black tracking-tighter lowercase"
              >
                waste <span className="text-[#F25623]">manager.</span>
              </Typography>
              <div className="max-w-md">
                <p className="text-xs font-bold leading-relaxed uppercase opacity-60">
                  "My very first code execution. No fancy architecture, just a
                  straightforward Laravel CRUD built to solve real local
                  neighborhood waste billing issues."
                </p>
              </div>
            </div>
          </SlideIn>
        </section>

        {/* Features Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BASIC_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="relative bg-background p-10 border border-current/10 hover:border-[#F25623]/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#F25623] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[10px] font-black text-[#F25623] mb-4 block tracking-widest">
                  FEATURE_MOD_{feature.code}
                </span>
                <Typography className="text-2xl font-black uppercase mb-3 tracking-tighter group-hover:text-[#F25623] transition-colors">
                  {feature.name}
                </Typography>
                <p className="text-[11px] leading-relaxed font-bold opacity-40 uppercase tracking-tight group-hover:opacity-80 transition-opacity">
                  {feature.desc}
                </p>
                <div className="absolute inset-0 bg-[#F25623]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Media Carousel Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-7">
            {/* Visual Container - Matches the clean border/shadow style of the features */}
            <div className="relative bg-background border border-current/10 overflow-hidden group transition-all duration-500 hover:border-current/30">
              {/* Toolbar Label */}
              <div className="bg-current/5 border-b border-current/10 text-current p-3 flex justify-between items-center z-30 relative">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">
                  System_Preview_v1.0.exe //{" "}
                  {PREVIEW_IMAGES[currentIndex].label}
                </span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-current/20 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-current/20 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-[#F25623] rounded-full" />
                </div>
              </div>

              {/* Main Image Area with Black & White Overlay Logic */}
              <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden cursor-crosshair">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full group/img relative"
                  >
                    {/* The Image: Grayscale by default, transitions to color on hover */}
                    <img
                      src={PREVIEW_IMAGES[currentIndex].src}
                      className="w-full h-full object-cover grayscale contrast-[1.1] brightness-100 transition-all duration-700 ease-in-out group-hover/img:grayscale-0 group-hover/img:contrast-100"
                      alt="Project Preview"
                    />

                    {/* Subtle grain overlay for texture */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 bg-background border border-current/10 flex items-center justify-center hover:bg-[#F25623] hover:text-white transition-all transform hover:scale-110"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 bg-background border border-current/10 flex items-center justify-center hover:bg-[#F25623] hover:text-white transition-all transform hover:scale-110"
                  >
                    →
                  </button>
                </div>

                {/* Clean Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current/5 z-20">
                  <motion.div
                    className="h-full bg-[#F25623]"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${((currentIndex + 1) / PREVIEW_IMAGES.length) * 100}%`,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  />
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-3 bg-background border-t border-current/10 flex gap-2 overflow-x-auto no-scrollbar">
                {PREVIEW_IMAGES.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`relative shrink-0 w-20 h-12 border transition-all duration-300 overflow-hidden ${
                      currentIndex === i
                        ? "border-[#F25623] ring-1 ring-[#F25623]"
                        : "border-current/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      className={`w-full h-full object-cover ${currentIndex !== i ? "grayscale" : ""}`}
                      alt="Thumbnail"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Description Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Typography
                variant="h2"
                className="text-4xl font-black uppercase tracking-tighter leading-none"
              >
                the first <br /> <span className="italic">deployment.</span>
              </Typography>
              <div className="h-1 w-16 bg-[#F25623]" />
            </div>
            <p className="text-xs font-bold leading-relaxed opacity-60 uppercase">
              This was where I learned the basics of MVC. Managing models for
              residents, controllers for processing payments, and blade
              templates for the UI. Nothing fancy, but it worked for the admin.
            </p>
            <div className="pt-4 space-y-2 border-t border-current/5">
              <div className="flex items-center gap-2 text-[10px] font-black opacity-30 hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#F25623]" />
                <span>LARAVEL_BEGINNER_LEVEL</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black opacity-30 hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#F25623]" />
                <span>MYSQL_FLAT_RELATION</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Archive Label */}
        <footer className="mt-20 border-t border-current/10 py-12 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[9px] font-black tracking-[0.5em] uppercase text-center">
            First Project — Archive // Simple CRUD System
          </span>
        </footer>
      </div>
    </main>
  );
}
