"use client";

import { useState } from "react";
import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import SlideIn from "@/src/components/animation/SlideIn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type PosDetailProps = {
  project: ProjectDetail;
};

const PREVIEW_SLIDES = [
  {
    id: "01",
    src: "/assets/pos/preview-dashboard.svg",
    title: "cashier dashboard",
    note: "Main command center for shift status, best sellers, and quick actions.",
  },
  {
    id: "02",
    src: "/assets/pos/preview-transaction.svg",
    title: "checkout flow",
    note: "Transaction screen designed for fast product search and payment confirmation.",
  },
  {
    id: "03",
    src: "/assets/pos/preview-inventory.svg",
    title: "inventory monitor",
    note: "Stock and catalog control to keep item data synchronized with store activity.",
  },
  {
    id: "04",
    src: "/assets/pos/preview-report.svg",
    title: "sales reporting",
    note: "Daily recap and operational reporting for store-level decision making.",
  },
];

const DELIVERY_PILLARS = [
  {
    id: "01",
    title: "Fast Checkout",
    description:
      "Cashier-oriented flow with compact actions so transactions can be completed with minimal friction.",
  },
  {
    id: "02",
    title: "Catalog Control",
    description:
      "Centralized product, pricing, and inventory management to reduce manual mismatches in daily operations.",
  },
  {
    id: "03",
    title: "Sales Traceability",
    description:
      "Structured logs for transactions, payment summaries, and shift-level monitoring.",
  },
  {
    id: "04",
    title: "Operational Clarity",
    description:
      "Single workspace for store teams so admin and cashier tasks stay connected in one system.",
  },
];

const MODULES = [
  {
    label: "Transaction Engine",
    value: "Cart, tax, discount, and payment handling",
  },
  {
    label: "Product Catalog",
    value: "SKU management, categories, price updates, and stock visibility",
  },
  {
    label: "Reporting Layer",
    value: "Daily sales summary, revenue recap, and cashier activity review",
  },
  {
    label: "Role Access",
    value: "Admin and cashier separation for safer operational control",
  },
  {
    label: "Client Context",
    value: "Freelance build tailored for NATO PC store workflows",
  },
  {
    label: "Scalability",
    value: "Structured foundation ready for real screenshots and future modules",
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
    className={`absolute font-redacted text-[#F25623] opacity-20 mix-blend-difference pointer-events-none tracking-normal whitespace-nowrap z-0 select-none ${className}`}
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

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(242,86,35,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_28%)]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-32">
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          <div className="absolute top-14 -left-2 text-[22vw] md:text-[14vw] font-black opacity-[0.03] leading-none select-none tracking-[-0.08em] pointer-events-none uppercase italic">
            POS
          </div>

          <div className="lg:col-span-7 space-y-8 relative">
            <SlideIn>
              <div className="inline-flex items-center gap-3 border border-[#F25623]/40 bg-[#F25623]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#F25623]">
                Freelance Build / NATO PC
              </div>

              <div className="relative">
                <Typography
                  variant="h1"
                  className="font-poppins text-[12vw] md:text-[8vw] font-black lowercase tracking-tighter leading-[0.8]"
                >
                  point of
                  <br />
                  <span className="text-[#F25623]">sale.</span>
                </Typography>
                <RedactedOverlay
                  text="PRIVATE_CLIENT"
                  className="text-[7vw] md:text-[4vw] -top-8 md:-top-10 left-[6%] -rotate-3"
                />
              </div>

              <p className="max-w-2xl border-l-4 border-[#F25623] pl-6 text-sm md:text-[15px] leading-relaxed opacity-75 font-medium">
                A custom retail operations system built for{" "}
                <span className="text-[#F25623] font-bold">NATO PC</span> to
                simplify cashier activity, keep catalog and stock data organized,
                and make daily sales monitoring easier from one internal
                dashboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                <div className="border border-main-text/10 bg-main-text/[0.02] p-5">
                  <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                    problem focus
                  </Typography>
                  <p className="mt-3 text-sm opacity-70 leading-relaxed">
                    Replace fragmented manual flows with a cleaner transaction
                    process, better item control, and faster reporting access.
                  </p>
                </div>
                <div className="border border-main-text/10 bg-main-text/[0.02] p-5">
                  <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                    delivery angle
                  </Typography>
                  <p className="mt-3 text-sm opacity-70 leading-relaxed">
                    Built as a focused freelance solution with room to extend
                    into richer analytics and real deployment captures later.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="lg:col-span-5">
            <SlideIn delay={0.15}>
              <div className="relative overflow-hidden border border-main-text/10 bg-main-text/[0.02] p-6 md:p-8 h-full">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#F25623] via-[#F25623]/20 to-transparent" />

                <div className="space-y-8">
                  <div className="space-y-3">
                    <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                      scope_snapshot
                    </Typography>
                    <Typography
                      variant="h3"
                      className="text-3xl font-black lowercase tracking-tighter"
                    >
                      Retail workflow in one controlled environment.
                    </Typography>
                    <p className="text-sm opacity-60 leading-relaxed">
                      The interface direction stays practical and operational:
                      transaction speed first, admin visibility second, and
                      future maintainability always in view.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-main-text/10 border border-main-text/10">
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Client
                      </span>
                      <p className="mt-3 text-xl font-black">NATO PC</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Project
                      </span>
                      <p className="mt-3 text-xl font-black">Freelance</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Domain
                      </span>
                      <p className="mt-3 text-xl font-black">Retail POS</p>
                    </div>
                    <div className="bg-main-bg p-5">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-35">
                        Status
                      </span>
                      <p className="mt-3 text-xl font-black text-[#F25623]">
                        Private Build
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
                operational pillars
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                Delivery <span className="italic">focus.</span>
              </Typography>
            </div>
            <p className="max-w-md text-right text-[11px] uppercase tracking-[0.25em] opacity-35 hidden md:block">
              Designed to support cashier speed, stock awareness, and store
              reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-l border-t border-main-text/15">
            {DELIVERY_PILLARS.map((pillar, index) => (
              <SlideIn key={pillar.id} delay={index * 0.08}>
                <div className="group h-full border-r border-b border-main-text/15 p-8 bg-main-text/[0.02] hover:bg-[#F25623]/5 transition-colors relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-[#F25623] group-hover:translate-x-0 transition-transform duration-500" />
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                preview vault
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                Project <span className="italic">carousel.</span>
              </Typography>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="border border-main-text/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] hover:border-[#F25623] hover:text-[#F25623] transition-colors"
              >
                Prev
              </button>
              <button
                onClick={nextSlide}
                className="border border-main-text/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] hover:border-[#F25623] hover:text-[#F25623] transition-colors"
              >
                Next
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden border border-main-text/10 bg-[#0a0a0a] min-h-[540px]">
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F25623]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                {PREVIEW_SLIDES[activeSlide].title} / {PREVIEW_SLIDES[activeSlide].id}
              </Typography>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={PREVIEW_SLIDES[activeSlide].id}
                initial={{ opacity: 0, x: 24, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -24, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "circOut" }}
                className="relative h-full min-h-[540px] pt-14"
              >
                <Image
                  src={PREVIEW_SLIDES[activeSlide].src}
                  alt={PREVIEW_SLIDES[activeSlide].title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.08),rgba(0,0,0,0.2))]" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/55 p-5 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <Typography className="text-[10px] font-black uppercase tracking-[0.28em] text-[#F25623]">
                    Placeholder Preview
                  </Typography>
                  <Typography className="text-2xl font-black lowercase tracking-tighter text-white">
                    {PREVIEW_SLIDES[activeSlide].title}
                  </Typography>
                  <p className="max-w-2xl text-sm text-white/65 leading-relaxed">
                    {PREVIEW_SLIDES[activeSlide].note} These slots are prepared so
                    the real NATO PC screenshots can be dropped in later without
                    changing the carousel structure.
                  </p>
                </div>
                <div className="text-right text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                  frame {activeSlide + 1} / {PREVIEW_SLIDES.length}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PREVIEW_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`group text-left border p-4 transition-all ${
                  activeSlide === index
                    ? "border-[#F25623] bg-[#F25623]/8"
                    : "border-main-text/10 bg-main-text/[0.02] hover:border-main-text/30"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono text-[#F25623]">
                    {slide.id}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] opacity-35 group-hover:opacity-60">
                    preview
                  </span>
                </div>
                <p className="mt-3 text-sm font-black lowercase tracking-tight">
                  {slide.title}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Typography className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#F25623]">
                project brief
              </Typography>
              <Typography
                variant="h2"
                className="mt-3 text-4xl font-black lowercase tracking-tighter"
              >
                Why this system matters.
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

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {MODULES.map((module, index) => (
              <SlideIn key={module.label} delay={index * 0.06}>
                <div className="group border border-main-text/10 bg-main-text/[0.02] p-6 hover:border-[#F25623]/35 hover:bg-[#F25623]/5 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between gap-3">
                    <Typography className="text-lg font-black lowercase tracking-tight">
                      {module.label}
                    </Typography>
                    <div className="h-2 w-2 rounded-full bg-[#F25623] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mt-4 text-[12px] uppercase leading-relaxed tracking-[0.12em] opacity-45 group-hover:opacity-70 transition-opacity">
                    {module.value}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        <footer className="pt-16 border-t border-main-text/10 flex flex-col md:flex-row justify-between gap-8 opacity-45">
          <div className="space-y-1 font-mono text-[10px] uppercase tracking-[0.28em]">
            <p>Project: {project.title}</p>
            <p>Client: NATO PC</p>
          </div>
          <Typography className="text-[10px] font-black uppercase tracking-[0.35em] italic">
            2026 archive / private retail system
          </Typography>
        </footer>
      </div>
    </main>
  );
}
