"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

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

export default function IotFeederDetail({ project }: IotFeederDetailProps) {
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HERO & SYSTEM STATUS */}
        <section className="relative mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 relative">
              <SlideIn direction="up">
                <div className="inline-block px-2 py-1 mb-6 bg-[#F25623] text-white text-[10px] font-black uppercase tracking-widest">
                  IoT Integration // Mobile Controlled
                </div>
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-[10vw] md:text-[7vw] leading-[0.85] lowercase tracking-tighter"
                >
                  automatic <br />
                  <span className="text-[#F25623]">fish feeder.</span>
                </Typography>
                <p className="mt-8 text-sm font-medium opacity-60 max-w-md leading-relaxed border-l-2 border-main-text/20 pl-6">
                  Smart aquaculture system utilizing ESP32 to bridge hardware
                  sensors with a mobile interface via Firebase. Real-time
                  monitoring and automated scheduling in one brutalist package.
                </p>
              </SlideIn>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="p-6 border-2 border-main-text bg-main-text text-main-bg space-y-4">
                <div className="flex justify-between items-center border-b border-main-bg/20 pb-2">
                  <span className="text-[10px] font-black uppercase">
                    System_Uptime
                  </span>
                  <span className="text-[10px] font-mono">99.9%</span>
                </div>
                <div className="flex justify-between items-center border-b border-main-bg/20 pb-2">
                  <span className="text-[10px] font-black uppercase">
                    Database
                  </span>
                  <span className="text-[10px] font-mono text-[#F25623]">
                    Firebase_RTDB
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase">
                    Protocol
                  </span>
                  <span className="text-[10px] font-mono">MQTT/HTTP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HARDWARE NODES (GRID STYLE) */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Typography variant="h3" className="text-2xl font-black lowercase">
              hardware architecture.
            </Typography>
            <div className="h-px flex-1 bg-main-text/10" />
            <span className="text-[10px] font-mono opacity-40">
              REF_BOM_2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-main-text/20">
            {IOT_NODES.map((node, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-main-text/20 hover:bg-[#F25623]/5 transition-all group"
              >
                <span className="text-[10px] font-mono text-[#F25623] mb-4 block">
                  [{node.id}]
                </span>
                <Typography className="text-xl font-black lowercase mb-2 group-hover:translate-x-1 transition-transform">
                  {node.component}
                </Typography>
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-tighter leading-tight">
                  {node.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: APP INTERFACE PREVIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                Interface_Control
              </Typography>
              <Typography
                variant="h2"
                className="text-5xl font-black lowercase tracking-tighter leading-none"
              >
                Real-time <br /> Monitoring.
              </Typography>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-main-text/5 border-l-4 border-[#F25623]">
                <p className="text-xs font-bold leading-relaxed opacity-80">
                  Data ph air, suhu, dan kelembapan dikirim tiap detik ke
                  Firebase. Mobile app bakal langsung ngerespon perubahan tanpa
                  refresh bjir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-main-text/10">
                  <span className="text-[9px] font-black opacity-40 uppercase">
                    Trigger_Latency
                  </span>
                  <p className="text-xl font-black tracking-tighter">
                    &lt; 200ms
                  </p>
                </div>
                <div className="p-4 border border-main-text/10">
                  <span className="text-[9px] font-black opacity-40 uppercase">
                    Sync_Method
                  </span>
                  <p className="text-xl font-black tracking-tighter">
                    Websocket
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Visual Glitch Frame */}
              <div className="absolute inset-0 border-2 border-main-text translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="w-64 lg:w-72 aspect-9/19 bg-main-text border-4 border-main-text relative overflow-hidden shadow-2xl">
                {/* Ganti src sama screenshot app lu bjir */}
                <div className="absolute inset-0 bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-full h-1/2 border-2 border-[#F25623] mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-scanlines animate-scan opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-[#F25623] animate-pulse">
                      LIVE_FEED_READY
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="h-2 w-full bg-main-bg/20" />
                    <div className="h-2 w-2/3 bg-main-bg/20" />
                    <div className="h-8 w-full border border-[#F25623] mt-4" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-30 bg-[#F25623] text-white px-2 py-1 text-[9px] font-black uppercase">
                  v1.0.4_Build
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL LOGS */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // implementation_summary
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

            <div className="relative aspect-video bg-[#0a0a0a] border border-main-text/10 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-[#F25623]">
                    ESP32_BOOT_SEQUENCE
                  </p>
                  <p className="text-[10px] font-mono opacity-40">
                    Connecting to Firebase...
                  </p>
                </div>
                <div className="w-2 h-2 bg-[#00CC66] rounded-full animate-pulse shadow-[0_0_10px_#00CC66]" />
              </div>

              <div className="font-mono text-[10px] opacity-40 space-y-1">
                <p>&gt; DHT_SENSOR: OK</p>
                <p>&gt; PH_METER: CALIBRATED</p>
                <p>&gt; SERVO_PWM: INITIALIZED</p>
                <p>&gt; SYSTEM_READY_FOR_FEEDING</p>
              </div>

              <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-20 uppercase">
                Hardware_Audit_ID: 882-99-X
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER MARQUEE */}
      <footer className="mt-40 border-t border-main-text/10 pt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center opacity-30">
          <p className="text-[9px] font-black uppercase tracking-[0.3em]">
            Fullstack IoT Development // 2026
          </p>
          <div className="flex gap-2">
            <div className="w-8 h-1 bg-main-text" />
            <div className="w-4 h-1 bg-[#F25623]" />
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
}
