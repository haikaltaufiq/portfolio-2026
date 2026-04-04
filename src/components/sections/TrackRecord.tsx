"use client";
import { motion } from "framer-motion";
import Typography from "../ui/Typhography";

const ExperienceCard = ({
  year,
  role,
  company,
  desc,
  index,
}: {
  year: string;
  role: string;
  company: string;
  desc: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group relative border-b border-main-text/10 py-12 px-4 hover:bg-main-text/2 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Accent line pas hover */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-[#F25623] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
        <div className="md:col-span-2">
          <Typography className="text-sm font-mono opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity">
            {year}
          </Typography>
        </div>

        <div className="md:col-span-4">
          <Typography className="text-3xl font-black lowercase leading-none mb-2 group-hover:text-[#F25623] transition-colors duration-300">
            {role}
          </Typography>
          <Typography className="text-xs font-bold uppercase tracking-[0.2em] opacity-30 group-hover:opacity-60 transition-opacity">
            @ {company}
          </Typography>
        </div>

        <div className="md:col-span-6">
          <p className="text-[15px] text-main-text/60 leading-relaxed font-medium max-w-xl group-hover:text-main-text/90 transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TrackRecord() {
  const experiences = [
    {
      year: "2025 - 2026",
      role: "Software Developer",
      company: "PT Kreatif System Indonesia",
      desc: "Architecting scalable internal ecosystems and cross-platform integrations—from streamlining HR workflows and customer loyalty engines to crafting high-performance corporate web experiences.",
    },
    {
      year: "2024 - 2025",
      role: "Freelance Programmer",
      company: "Independent Contractor",
      desc: "Specializing in end-to-end digital solutions. I design and build high-performance websites, mobile applications, and integrated IoT systems tailored to professional business needs.",
    },
    {
      year: "2022 - 2026",
      role: "Vocational Student",
      company: "Politeknik Negeri Batam",
      desc: "Vocational-trained developer focused on industry-standard Project-Based Learning. Solving real-world problems through collaborative engineering to meet professional benchmarks.",
    },
  ];

  return (
    <section className="relative py-2 bg-transparent overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-30 -left-10 text-[18vw] font-black opacity-[0.03] select-none pointer-events-none -rotate-3 italic uppercase leading-none">
        History
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="relative">
          {/* Header Section */}
          <div className="flex items-center gap-6 mb-24">
            <Typography
              variant="h2"
              className="text-3xl md:text-6xl font-black lowercase tracking-tighter leading-[0.8]"
            >
              track record.
            </Typography>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 86 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-[#F25623] mt-4 hidden md:block "
            />
          </div>

          {/* List Section */}
          <div className="border-t border-main-text/10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
