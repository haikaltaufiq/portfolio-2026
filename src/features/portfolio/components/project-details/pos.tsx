"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import type { ProjectDetail } from "@/src/data/project";

type PosDetailProps = {
  project: ProjectDetail;
};

const PREVIEW_SLIDES = [
  {
    id: "01",
    src: "/assets/pos/dashboard.png",
    title: "realtime dashboard",
    note: "Live monitoring for transactions, stock alerts, and multi-supplier revenue analytics.",
  },
  {
    id: "02",
    src: "/assets/pos/inventory.png",
    title: "multi-supplier inventory",
    note: "Complex item configuration with detailed attribute tracking and supplier synchronization.",
  },
  {
    id: "03",
    src: "/assets/pos/transaction.png",
    title: "transaction flow",
    note: "Streamlined process for managing sales transactions and customer interactions.",
  },
  {
    id: "04",
    src: "/assets/pos/simulation.png",
    title: "pc builder simulator",
    note: "Intelligent compatibility engine matching sockets, specs, and types for planning and pricing.",
  },
];

const DELIVERY_PILLARS = [
  {
    id: "01",
    title: "Cashless Integration",
    description:
      "Seamless payment processing powered by Midtrans to handle secure digital and card transactions.",
  },
  {
    id: "02",
    title: "Compatibility Engine",
    description:
      "Automated matching for PC components based on hardware specifications, sockets, and type constraints.",
  },
  {
    id: "03",
    title: "Inventory Depth",
    description:
      "Support for multi-supplier stock management with granular configuration for highly complex hardware units.",
  },
  {
    id: "04",
    title: "Realtime Analytics",
    description:
      "Dynamic data visualization for sales and stock movement, providing immediate store-level intelligence.",
  },
];

const MODULES = [
  {
    label: "Payment Gateway",
    value:
      "Midtrans integration for cashless flow and automated status reconciliation",
  },
  {
    label: "PC Build Simulator",
    value:
      "Hardware planning tool with compatibility logic and dynamic price estimation",
  },
  {
    label: "Complex Inventory",
    value:
      "Multi-supplier item mapping with specific attribute and socket validation",
  },
  {
    label: "Reporting Engine",
    value:
      "Advanced sales recap and inventory logs with cross-platform export support",
  },
  {
    label: "Client Context",
    value:
      "Internal enterprise tool optimized for NATO PC's high-spec retail workflow",
  },
  {
    label: "Performance",
    value:
      "Lightweight architecture built for local PC deployment and high-concurrency sync",
  },
];

const RedactedOverlay = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <Typography
    className={`pointer-events-none absolute z-0 select-none whitespace-nowrap font-redacted tracking-normal text-[#F25623] opacity-20 mix-blend-difference ${className}`}
  >
    {text}
  </Typography>
);

export default function PosDetail({ project }: PosDetailProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % PREVIEW_SLIDES.length);

  const prevSlide = () =>
    setActiveSlide(
      (prev) => (prev - 1 + PREVIEW_SLIDES.length) % PREVIEW_SLIDES.length,
    );

  const activePreview = PREVIEW_SLIDES[activeSlide];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent pt-24 pb-10 text-main-text selection:bg-[#F25623] selection:text-white">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(242,86,35,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-32 px-6">
        <section className="relative grid grid-cols-1 gap-12 pt-16 lg:grid-cols-12">
          <div className="pointer-events-none absolute top-14 -left-2 select-none text-[22vw] leading-none font-black uppercase italic tracking-[-0.08em] opacity-[0.03] md:text-[14vw]">
            POS
          </div>

          <div className="relative space-y-8 lg:col-span-7">
            <SlideIn>
              <div className="mb-5 inline-flex items-center gap-3 border border-[#F25623]/40 bg-[#F25623]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#F25623]">
                Internal NATO PC
              </div>

              <div className="relative mb-10">
                <Typography
                  variant="h1"
                  className="font-poppins text-[12vw] leading-[0.8] font-black lowercase tracking-tighter md:text-[8vw]"
                >
                  custom pos
                  <br />
                  <span className="text-[#F25623]">system.</span>
                </Typography>
                <RedactedOverlay
                  text="PRIVATE_CLIENT"
                  className="left-[6%] -top-8 -rotate-3 text-[7vw] md:-top-10 md:text-[4vw]"
                />
              </div>

              <p className="mb-5 max-w-2xl border-l-4 border-[#F25623] pl-6 text-sm leading-relaxed font-medium opacity-75 md:text-[15px]">
                An advanced Point of Sale and Inventory Management system
                engineered for{" "}
                <span className="font-bold text-[#F25623]">NATO PC</span>. It
                bridges the gap between complex hardware configurations,
                multi-supplier sourcing, and seamless cashless transactions
                through Midtrans integration.
              </p>

              <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border border-main-text/10 bg-main-text/2 p-5">
                  <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                    core technicality
                  </Typography>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">
                    Automated hardware compatibility matching (Socket/Type) and
                    planning simulations to streamline high-end PC assembly
                    workflows.
                  </p>
                </div>
                <div className="border border-main-text/10 bg-main-text/2 p-5">
                  <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                    operational depth
                  </Typography>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">
                    Real-time dashboard and comprehensive reporting with export
                    features for precise financial tracking and inventory
                    audits.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="lg:col-span-5">
            <SlideIn delay={0.15}>
              <div className="relative h-full overflow-hidden border border-main-text/10 bg-main-text/2 p-6 md:p-8">
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-[#F25623] via-[#F25623]/20 to-transparent" />

                <div className="space-y-8">
                  <div className="space-y-3">
                    <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                      internal_specs
                    </Typography>
                    <Typography
                      variant="h3"
                      className="text-3xl font-black lowercase tracking-tighter"
                    >
                      Infrastructure for scaling retail complexity.
                    </Typography>
                    <p className="text-sm leading-relaxed opacity-60">
                      Beyond simple transactions, this system handles the
                      intricate relationships of hardware specs, ensuring every
                      custom build is technically sound and financially tracked.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-px border border-main-text/10 bg-main-text/10">
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Client
                      </span>
                      <p className="mt-3 text-xl font-black">NATO PC</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Target
                      </span>
                      <p className="mt-3 text-xl font-black">Internal</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Gateway
                      </span>
                      <p className="mt-3 text-xl font-black">Midtrans</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Scope
                      </span>
                      <p className="mt-3 text-xl font-black text-[#F25623]">
                        Enterprise
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="border border-main-text/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-main-text/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-end justify-between gap-6 border-b border-main-text/10 pb-6">
            <div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                functional architecture
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl font-black lowercase tracking-tighter md:text-5xl"
              >
                System <span className="italic">capabilities.</span>
              </Typography>
            </div>
            <p className="hidden max-w-md text-right text-[11px] uppercase tracking-[0.25em] opacity-35 md:block">
              Engineered to handle multi-supplier dynamics, cashless security,
              and hardware compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-main-text/15 md:grid-cols-2 xl:grid-cols-4">
            {DELIVERY_PILLARS.map((pillar, index) => (
              <SlideIn key={pillar.id} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden border-r border-b border-main-text/15 bg-main-text/2 p-8 transition-colors hover:bg-[#F25623]/5">
                  <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-[#F25623] transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="text-[10px] font-mono text-[#F25623]">
                    [{pillar.id}]
                  </span>
                  <Typography className="mt-5 text-2xl font-black lowercase tracking-tighter">
                    {pillar.title}
                  </Typography>
                  <p className="mt-4 text-[12px] leading-relaxed opacity-60">
                    {pillar.description}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                interface snapshot
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl font-black lowercase tracking-tighter md:text-5xl"
              >
                Module <span className="italic">preview.</span>
              </Typography>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="border border-main-text/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-colors hover:border-[#F25623] hover:text-[#F25623]"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="border border-main-text/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-colors hover:border-[#F25623] hover:text-[#F25623]"
              >
                Next
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[430px] w-full flex-col overflow-hidden border border-main-text/10 bg-[#0a0a0a] sm:min-h-[520px] md:aspect-video md:min-h-0 lg:min-h-[600px]">
            <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-black/50 px-3 py-2.5 backdrop-blur-md sm:px-4 sm:py-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F25623]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                {activePreview.title} / {activePreview.id}
              </Typography>
            </div>

            <div className="group relative flex-1 overflow-hidden bg-[#0a0a0a]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePreview.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-12"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-white/10 bg-black/30">
                    <Image
                      src={activePreview.src}
                      alt=""
                      fill
                      sizes="100vw"
                      aria-hidden="true"
                      className="scale-110 object-cover opacity-25 blur-xl"
                    />
                    <Image
                      src={activePreview.src}
                      alt={activePreview.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
            </div>

            <div className="relative z-20 border-t border-white/10 bg-black/80 p-4 backdrop-blur-xl sm:p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-4 bg-[#F25623]" />
                    <Typography className="text-[10px] font-black uppercase tracking-[0.28em] text-[#F25623]">
                      Operational View
                    </Typography>
                  </div>
                  <Typography className="text-xl font-black lowercase tracking-tighter text-white md:text-2xl">
                    {activePreview.title}
                  </Typography>
                  <p className="max-w-2xl text-[12px] leading-relaxed text-white/50 md:text-sm md:line-clamp-none">
                    {activePreview.note} Optimized for high-velocity hardware
                    retail environments.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
                    Index
                  </div>
                  <div className="text-xl font-black text-white/40">
                    0{activeSlide + 1}
                    <span className="text-[#F25623]/40">/</span>0
                    {PREVIEW_SLIDES.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {PREVIEW_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`group border p-4 text-left transition-all duration-300 ${
                  activeSlide === index
                    ? "translate-y-[-2px] border-[#F25623] bg-[#F25623]/8"
                    : "border-main-text/10 bg-main-text/2 hover:border-main-text/30"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-[10px] font-mono transition-colors ${
                      activeSlide === index
                        ? "text-[#F25623]"
                        : "text-main-text/30"
                    }`}
                  >
                    {slide.id}
                  </span>
                  <div
                    className={`h-1 w-1 rounded-full ${
                      activeSlide === index
                        ? "bg-[#F25623]"
                        : "bg-transparent"
                    }`}
                  />
                </div>
                <p className="mt-3 text-sm font-black lowercase tracking-tight">
                  {slide.title}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                technical brief
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl font-black lowercase tracking-tighter"
              >
                Logic-driven retail flow.
              </Typography>
            </div>

            <div className="space-y-4">
              {project.content.map((paragraph, index) => (
                <p
                  key={`${project.slug}-brief-${index}`}
                  className="border-l border-main-text/10 pl-5 text-sm leading-relaxed opacity-70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7">
            {MODULES.map((module, index) => (
              <SlideIn key={module.label} delay={index * 0.06}>
                <div className="group h-full border border-main-text/10 bg-main-text/2 p-6 transition-all duration-300 hover:border-[#F25623]/35 hover:bg-[#F25623]/5">
                  <div className="flex items-center justify-between gap-3">
                    <Typography className="text-lg font-black lowercase tracking-tight">
                      {module.label}
                    </Typography>
                    <div className="h-2 w-2 rounded-full bg-[#F25623] opacity-40 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-4 text-[12px] leading-relaxed uppercase tracking-[0.12em] opacity-45 transition-opacity group-hover:opacity-70">
                    {module.value}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-8 border-t border-main-text/10 pt-16 opacity-45 md:flex-row">
          <div className="space-y-1 font-mono text-[10px] uppercase tracking-[0.28em]">
            <p>Project: {project.title}</p>
            <p>Client: NATO PC</p>
          </div>
          <Typography className="text-[10px] font-black uppercase tracking-[0.35em] italic">
            2026 archive
          </Typography>
        </footer>
      </div>
    </main>
  );
}
