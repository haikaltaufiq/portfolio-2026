"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type FishingGameDetailProps = {
  project: ProjectDetail;
};

const GAME_SPECS = [
  { label: "Engine", value: "Unity 3D", sub: "Universal Render Pipeline" },
  { label: "Hardware", value: "Arduino Uno", sub: "UnoJoy Firmware" },
  { label: "Input", value: "Serial Port", sub: "Baud Rate: 115200" },
  { label: "Physics", value: "Raycast", sub: "Procedural Water Displacement" },
];

export default function FishingGameDetail({ project }: FishingGameDetailProps) {
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[url('/grid-pattern.png')] bg-repeat" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HERO - VIRTUAL REALITY VIBES */}
        <section className="relative mb-32">
          <SlideIn>
            <div className="flex flex-col md:flex-row items-end justify-between border-b-4 border-main-text pb-8">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-[#F25623] text-white text-[9px] font-black uppercase tracking-tighter">
                    Simulation_Active
                  </span>
                  <span className="px-2 py-0.5 border border-main-text/30 text-[9px] font-black uppercase tracking-tighter">
                    Ver 2.0.1
                  </span>
                </div>
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-[12vw] md:text-[9vw] leading-[0.75] lowercase tracking-tighter"
                >
                  3d fishing <br />
                  <span className="text-[#F25623]">simulator.</span>
                </Typography>
              </div>
              <div className="text-right hidden md:block">
                <Typography className="text-[10px] font-mono opacity-50 uppercase tracking-widest leading-none">
                  Project_ID: ARK-99 <br />
                  Status: Optimized
                </Typography>
              </div>
            </div>
          </SlideIn>
        </section>

        {/* SECTION 2: THE TECH STACK GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-40">
          <div className="lg:col-span-3 border-l-4 border-[#F25623] pl-6 py-4">
            <Typography className="text-sm font-black uppercase tracking-widest opacity-40 mb-4">
              System_Specs
            </Typography>
            <p className="text-xs font-bold opacity-70 leading-relaxed italic">
              "Integrating physical tension with virtual feedback. A bridge
              between Arduino-based controllers and Unity's physics engine."
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4">
            {GAME_SPECS.map((spec, i) => (
              <div
                key={i}
                className="p-6 bg-main-text/5 border border-main-text/10 group hover:border-[#F25623] transition-colors"
              >
                <p className="text-[9px] font-black uppercase opacity-40 mb-2">
                  {spec.label}
                </p>
                <p className="text-xl font-black tracking-tight group-hover:text-[#F25623] transition-colors">
                  {spec.value}
                </p>
                <p className="text-[10px] font-mono opacity-50 mt-1">
                  {spec.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: THE HARDWARE-SOFTWARE BRIDGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
          <div className="lg:col-span-7 relative group">
            {/* BIG PREVIEW BOX */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#F25623] z-20 pointer-events-none" />
            <div className="aspect-video bg-[#0d0d0d] border border-main-text/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
              {/* Image of the 3D fishing game environment or controller setup */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 text-[10vw] font-black select-none">
                SIM_RUN
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] font-mono opacity-40">
              <span>LATENCY: 12ms</span>
              <span>INPUT_DEVICE: ARDUINO_JOY_V2</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <Typography
                variant="h2"
                className="text-4xl font-black lowercase leading-none tracking-tighter"
              >
                unoJoy <br />{" "}
                <span className="text-[#F25623]">integration.</span>
              </Typography>
              <div className="h-1 w-24 bg-[#F25623]" />
            </div>

            <div className="space-y-6">
              <div className="relative p-6 border border-main-text/10 bg-main-text/2 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#F25623] opacity-10 translate-x-6 -translate-y-6 rotate-45" />
                <Typography className="text-xs font-bold opacity-80 leading-relaxed uppercase tracking-wide">
                  Arduino Uno dipaksa jadi Native HID Joystick lewat firmware
                  UnoJoy. Hasilnya? Plug and play di Unity tanpa perlu custom
                  serial parser yang lambat bjir.
                </Typography>
              </div>

              <ul className="space-y-3">
                {[
                  "Real-time Potentiometer scaling",
                  "Haptic feedback triggers",
                  "Custom Button Mapping",
                  "Low-level HID Communication",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-60"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F25623]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: PHYSICS & LOGIC SUMMARY */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // developer_logs
              </Typography>
              <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
                {project.content.map((p, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-main-text/5 pl-6 hover:border-[#F25623] transition-colors"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative aspect-video bg-[#0a0a0a] border-4 border-main-text flex flex-col p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="h-2 w-2 bg-[#F25623] rounded-full animate-pulse" />
                <span className="text-[8px] font-mono opacity-40">
                  UNITY_CONSOLE_V1
                </span>
              </div>

              <div className="space-y-2 font-mono text-[9px]">
                <p className="text-[#00CC66]">
                  [SUCCESS] Serial device "Arduino Uno" connected.
                </p>
                <p className="text-white opacity-50">
                  &gt; Mapping Axis X: Potentiometer_01
                </p>
                <p className="text-white opacity-50">
                  &gt; Mapping Axis Y: Potentiometer_02
                </p>
                <p className="text-white opacity-50">
                  &gt; Force Feedback: ENABLED
                </p>
                <p className="text-[#F25623]">
                  [WARN] Raycast target not found in 'DeepSea' layer.
                </p>
                <p className="text-white opacity-50 animate-pulse">
                  &gt; Waiting for bite...
                </p>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white/10" />
                  ))}
                </div>
                <span className="text-[10px] font-black opacity-20">
                  FISHING_SIM_CORE
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - GAME OVER STYLE */}
      <footer className="mt-40 border-t border-main-text/10 py-12 bg-main-text/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">
            Build // Prototype // Play
          </Typography>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono opacity-50">FPS: 144</span>
            <span className="text-[10px] font-mono opacity-50">MEM: 1.2GB</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.5) 51%
          );
          background-size: 100% 4px;
        }
      `}</style>
    </main>
  );
}
