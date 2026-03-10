"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import { useEffect, useRef } from "react";
import Image from "next/image";

type IotFeederDetailProps = {
  project: ProjectDetail;
};

const IOT_NODES = [
  { id: "NODE_01", component: "ESP32", role: "Main Controller / Wi-Fi Gate" },
  {
    id: "NODE_02",
    component: "Servo MG996R",
    role: "Mechanical Feeding Actuator",
  },
  { id: "NODE_03", component: "DHT11/22", role: "Ambient Temp & Humidity" },
  {
    id: "NODE_04",
    component: "pH Meter v1.1",
    role: "Water Quality Monitoring",
  },
];

const MOBILE_SCREENSHOTS = [
  { src: "/assets/fish-feeder/Home-FF.png", label: "Dashboard" },
  { src: "/assets/fish-feeder/Stat-FF.png", label: "Real-time Stats" },
  { src: "/assets/fish-feeder/Alarm-FF.png", label: "Feeding Schedule" },
  { src: "/assets/fish-feeder/Profile-FF.png", label: "User Control" },
  { src: "/assets/fish-feeder/Login-FF.png", label: "Auth Gate" },
];

export default function IotFeederDetail({ project }: IotFeederDetailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-32 pb-40 px-4 pt-24">
      {/* SECTION 1: HERO & STATS - HRIS STYLE */}
      <SlideIn>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          <div className="absolute -top-20 -left-10 text-[18vw] font-black opacity-[0.02] select-none tracking-tight pointer-events-none -rotate-2">
            AUTOMATED AQUACULTURE SYSTEM
          </div>
          <div className="lg:col-span-6 space-y-6 z-10">
            <div className="inline-block px-3 py-1 border border-[#F25623] text-[#F25623] text-[10px] font-black uppercase tracking-widest">
              IoT // PBL EXPO 2ND PLACE
            </div>
            <Typography
              variant="h2"
              className="text-5xl md:text-7xl font-black lowercase tracking-tighter leading-[0.85]"
            >
              automatic <br />{" "}
              <span className="text-[#F25623]">fish feeder.</span>
            </Typography>
            <p className="text-sm opacity-60 leading-relaxed max-w-sm font-medium">
              An integrated smart aquaculture solution utilizing ESP32 to bridge
              hardware precision with mobile accessibility for real-time fish
              pond management.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Stability", value: "99.8%", sub: "Uptime" },
              { label: "Response", value: "120ms", sub: "Latency" },
              { label: "Hardware Nodes", value: "04", sub: "Active" },
              { label: "Status", value: "OPERATIONAL", isText: true },
            ].map((stat, i) => (
              <div
                key={i}
                className="border border-main-text/10 p-8 flex flex-col justify-between group hover:bg-[#F25623] transition-all duration-500"
              >
                <span className="text-[10px] font-black opacity-40 group-hover:text-white uppercase tracking-widest">
                  {stat.label}
                </span>
                <p
                  className={`${stat.isText ? "text-xl" : "text-5xl"} font-black group-hover:text-white transition-colors`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SlideIn>

      {/* SECTION 2: HARDWARE ARCHITECTURE (GRID) */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <Typography
            variant="h3"
            className="text-3xl font-black lowercase tracking-tighter"
          >
            hardware architecture.
          </Typography>
          <div className="h-px flex-1 bg-main-text/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-main-text/20">
          {IOT_NODES.map((node) => (
            <div
              key={node.id}
              className="p-8 border-r border-b border-main-text/20 hover:bg-[#F25623]/5 transition-colors group"
            >
              <span className="text-[#F25623] font-mono font-black text-xs mb-4 block group-hover:translate-x-1 transition-transform">
                [{node.id}]
              </span>
              <Typography className="text-xl font-black mb-2 uppercase">
                {node.component}
              </Typography>
              <p className="text-[10px] font-bold opacity-50 uppercase tracking-wider leading-relaxed">
                {node.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SYSTEM VALIDATION - HRIS STYLE PUBLICATION */}
      <section className="relative py-16 border-y border-main-text/10 bg-main-text/2 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-4 md:px-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-[#F25623] text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">
                Engineering Audit
              </span>
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                // PBL Validation Record
              </span>
            </div>

            <Typography className="text-4xl font-black lowercase tracking-tight leading-[0.9]">
              Precision Engineering for <br />
              <span className="text-[#F25623]">
                Automated Growth Monitoring.
              </span>
            </Typography>

            <div className="space-y-6 text-sm leading-relaxed opacity-80 font-medium max-w-2xl">
              <p>
                The system was built to solve the inefficiency of manual fish
                pond feeding. Integrating{" "}
                <strong>RTOS (Real-Time Operating System)</strong> on the ESP32,
                the project ensures that feeding tasks are executed with
                millisecond precision while monitoring
                <strong> water pH levels</strong> and ambient temperature.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-main-text/5">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    Feeding Accuracy
                  </p>
                  <p className="text-2xl font-black italic">98.2%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    Power Consumption
                  </p>
                  <p className="text-2xl font-black italic">Low-Pwr</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    Sync Speed
                  </p>
                  <p className="text-2xl font-black italic">~0.5s</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end lg:sticky lg:top-24">
            <div className="relative group p-2 border-2 border-main-text shadow-[12px_12px_0px_#F25623]">
              <Image
                src="/assets/fish-feeder/sertif-2.webp"
                alt="PBL Certificate"
                width={500}
                height={350}
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-main-text text-main-bg text-[8px] px-2 py-1 font-black">
                WINNER_V.02
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEVICE & MOBILE SHOWCASE - FLOATING STYLE */}
      <section className="space-y-32">
        {/* HARDWARE PREVIEW VIDEO */}
        {/* HARDWARE PREVIEW VIDEO - SHOWCASE.MP4 */}
        <div className="space-y-8">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography variant="h3" className="text-3xl font-black lowercase">
              device_operation
            </Typography>
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
              Hardware Proto v1.0
            </span>
          </div>

          <div className="relative aspect-video w-full bg-[#0a0a0a] border-2 border-main-text overflow-hidden group">
            {/* VIDEO LOOP REPLACING IMAGE */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out z-0 opacity-40 group-hover:opacity-100 group-hover:scale-105"
            >
              <source src="/assets/fish-feeder/showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* RETRO OVERLAY - SAMA KAYA HRIS PAGE */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
              <div className="absolute inset-0 bg-scanlines animate-scan" />
              <div className="absolute inset-0 bg-noise opacity-20" />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-10 left-10 z-20">
              <div className="inline-block bg-[#F25623] text-white px-2 py-1 text-[8px] font-black uppercase mb-3 tracking-widest">
                LIVE_FEED_01
              </div>
              <p className="text-4xl font-black text-white italic tracking-tighter leading-none">
                CORE_HARDWARE_DEMO
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE INTERFACE - STAGGERED REVEAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <Typography
              variant="h3"
              className="text-5xl font-black lowercase leading-[0.8] tracking-tighter"
            >
              mobile <br /> <span className="text-[#F25623]">integration.</span>
            </Typography>
            <div className="h-1 w-20 bg-[#F25623]" />
            <p className="text-sm opacity-60 leading-relaxed font-medium italic max-w-sm">
              Cross-platform mobile application built to provide instantaneous
              control over the pond ecosystem via Firebase Cloud messaging.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-main-text/10">
              {MOBILE_SCREENSHOTS.slice(0, 3).map((sc, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-[10px] font-black text-[#F25623]">
                    0{i + 1}
                  </span>
                  <span className="text-xs font-black uppercase group-hover:translate-x-2 transition-transform">
                    {sc.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-150 flex items-center justify-center lg:justify-end">
            {/* FLOATING MOCKUPS (Se-tema ama HRIS) */}
            <div className="relative z-20 group">
              <div className="absolute inset-0 border-2 border-main-text translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="w-56 lg:w-64 aspect-9/19 bg-black border-4 border-main-text relative overflow-hidden shadow-2xl">
                <Image
                  src="/assets/fish-feeder/Home-FF.png"
                  alt="UI 1"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
              </div>
            </div>

            <div className="relative z-30 -ml-24 mt-32 group">
              <div className="absolute inset-0 border-2 border-[#F25623] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="w-56 lg:w-64 aspect-9/19 bg-black border-4 border-main-text relative overflow-hidden shadow-2xl">
                <Image
                  src="/assets/fish-feeder/Stat-FF.png"
                  alt="UI 2"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-30 bg-[#F25623] text-white px-2 py-1 text-[8px] font-black uppercase">
                  REALTIME_STATS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNICAL SPECS (POSTER) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-main-text/10 pt-24">
        <div className="space-y-12">
          <Typography className="text-xs font-black uppercase tracking-[0.4em] opacity-30">
            // Engineering_Logs
          </Typography>
          <div className="space-y-8">
            {project.content.map((p, i) => (
              <p
                key={i}
                className="text-sm font-bold opacity-60 leading-relaxed border-l-4 border-main-text/10 hover:border-[#F25623] pl-6 transition-colors"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative aspect-video border-2 border-main-text p-8 bg-main-text text-main-bg flex flex-col justify-between overflow-hidden group">
          <Image
            src="/assets/fish-feeder/poster.png"
            alt="Poster"
            fill
            className="object-cover opacity-10 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="relative z-10 flex justify-between">
            <div className="font-mono text-[9px] font-black space-y-1">
              <p>&gt; SYSTEM_ID: FF_PBL_2026</p>
              <p>&gt; CALIBRATION: SUCCESS</p>
            </div>
            <div className="w-3 h-3 bg-[#00CC66] rounded-full animate-pulse" />
          </div>
          <Typography className="relative z-10 text-4xl font-black lowercase tracking-tighter italic leading-none opacity-20">
            sustainable_ <br />
            iot_innovation.
          </Typography>
        </div>
      </section>

      {/* FOOTER - HRIS STYLE */}
      <footer className="pt-24 border-t border-main-text/10 flex flex-col md:flex-row justify-between gap-8 opacity-40">
        <div className="font-mono text-[9px] uppercase tracking-widest space-y-1">
          <p>Project: Automatic Fish Feeder</p>
          <p>Role: IoT Engineer & UI Designer</p>
        </div>
        <div className="text-[10px] font-black uppercase tracking-tighter">
          PBL EXPO POLIBATAM // 2026.
        </div>
      </footer>
    </div>
  );
}
