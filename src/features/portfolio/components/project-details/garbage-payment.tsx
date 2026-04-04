"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type GarbagePaymentDetailProps = {
  project: ProjectDetail;
};

const DATA_MODULES = [
  {
    code: "MOD-01",
    name: "Citizen Ledger",
    desc: "Pendataan warga per blok & nomor rumah.",
  },
  {
    code: "MOD-02",
    name: "Billing Engine",
    desc: "Sistem tagihan iuran bulanan otomatis.",
  },
  {
    code: "MOD-03",
    name: "Pickup Scheduler",
    desc: "Plotting jadwal angkut truk sampah.",
  },
  {
    code: "MOD-04",
    name: "Payment Logs",
    desc: "History transaksi & status pembayaran.",
  },
];

export default function GarbagePaymentDetail({
  project,
}: GarbagePaymentDetailProps) {
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[url('/rough-paper-texture.png')] opacity-10" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HEADER - UTILITY FORM STYLE */}
        <section className="relative mb-32 border-b-4 border-main-text pb-12">
          <SlideIn direction="up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-main-text text-main-bg text-[10px] font-black uppercase tracking-widest">
                  Public_Service_System
                </div>
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-[10vw] md:text-[8vw] leading-[0.7] lowercase tracking-tighter"
                >
                  trash <span className="text-[#F25623]">ledger.</span>
                </Typography>
              </div>
              <div className="max-w-xs text-left md:text-right">
                <p className="text-[10px] font-mono opacity-50 uppercase mb-2">
                  Ref_Num: GP-2026-X
                </p>
                <Typography className="text-xs font-bold leading-relaxed opacity-70 italic">
                  "Digitalizing neighborhood waste management. Simple CRUD,
                  complex impact."
                </Typography>
              </div>
            </div>
          </SlideIn>
        </section>

        {/* SECTION 2: CRUD MODULES (DASHBOARD CARDS) */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA_MODULES.map((module, i) => (
              <div
                key={i}
                className="flex border-2 border-main-text group hover:bg-main-text hover:text-main-bg transition-colors duration-300"
              >
                <div className="w-20 border-r-2 border-main-text flex items-center justify-center p-4">
                  <span className="text-[10px] font-black rotate-90 whitespace-nowrap opacity-40 group-hover:opacity-100">
                    {module.code}
                  </span>
                </div>
                <div className="p-8">
                  <Typography className="text-2xl font-black lowercase mb-2">
                    {module.name}
                  </Typography>
                  <p className="text-xs font-bold opacity-50 group-hover:opacity-80 uppercase tracking-tight">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: INTERFACE - DATA LIST VIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
          <div className="lg:col-span-8 bg-main-text/5 border border-main-text/10 p-2 md:p-4">
            {/* Mock Table UI */}
            <div className="bg-main-bg border-2 border-main-text overflow-hidden">
              <div className="bg-main-text text-main-bg p-3 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest italic">
                  Citizen_Payment_Status
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-main-text/10 font-mono text-[10px]"
                  >
                    <span className="font-black">BLOCK_A_NO_{i + 10}</span>
                    <span className="opacity-50">JAN_2026</span>
                    <span
                      className={`px-2 py-0.5 font-black uppercase ${i % 3 === 0 ? "bg-red-500 text-white" : "bg-[#00CC66] text-white"}`}
                    >
                      {i % 3 === 0 ? "Unpaid" : "Paid"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-[9px] font-mono opacity-40 uppercase">
              <span>Total_Records: 142</span>
              <span>Last_Sync: 2m ago</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <Typography
                variant="h2"
                className="text-4xl font-black lowercase leading-none tracking-tighter"
              >
                Simplicity <br /> over{" "}
                <span className="text-[#F25623]">Everything.</span>
              </Typography>
              <div className="h-2 w-20 bg-[#F25623]" />
            </div>

            <p className="text-sm font-medium opacity-70 leading-relaxed">
              Di proyek ini gua gak neko-neko. Fokus utamanya adalah **Input
              Accuracy** sama **Filter Data**. Admin komplek bisa cek siapa aja
              yang belum bayar dalam hitungan detik.
            </p>

            <ul className="space-y-3">
              {[
                "Fast CRUD Operations",
                "Monthly Auto-Generation",
                "CSV Export Ready",
                "Responsive Admin Panel",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-60 italic"
                >
                  <span className="text-[#F25623]">/</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: REASONING & DEV NOTES */}
        <section className="border-t-2 border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // developer_perspective
              </Typography>
              <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
                {project.content.map((p, i) => (
                  <p
                    key={i}
                    className="border-l-4 border-main-text/5 pl-6 hover:border-[#F25623] transition-colors"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="p-10 border-4 border-dashed border-main-text/20 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 border-2 border-[#F25623] mb-6 flex items-center justify-center">
                <span className="text-[#F25623] font-black">DB</span>
              </div>
              <Typography className="text-xl font-black uppercase tracking-tighter mb-4">
                Lean Schema.
              </Typography>
              <p className="text-[10px] font-bold opacity-50 uppercase leading-relaxed max-w-70">
                Database dirancang minimalis buat ngurangin overhead. Relasi
                simpel antara warga dan transaksi biar query-nya secepat kilat .
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-16 flex flex-col items-center gap-8 opacity-40">
        <div className="flex gap-12">
          <span className="text-[9px] font-mono tracking-widest uppercase">
            PHP/Laravel
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase">
            MySQL
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase">
            Bootstrap/Tailwind
          </span>
        </div>
        <Typography className="text-[10px] font-black uppercase tracking-[0.5em]">
          End of System Documentation
        </Typography>
      </footer>
    </main>
  );
}
