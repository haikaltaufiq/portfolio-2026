export interface InfoData {
  id: string;
  title: string;
  overlayText: string;
  descriptions: string[];
  skills?: string[];
  link?: string;
}
// src/features/portfolio/data/infos.ts
export const infoList = [
  {
    id: "info-1",
    title: "human resource",
    overlayText: "SINTA_5_INDEXED",
    descriptions: [
      "This project focuses on the integrated Human Resource Information System for PT Kreatif System Indonesia.", "The system centralizes critical workforce processes—including attendance tracking, leave management, overtime, payroll, employee databases, and task distribution—into a single, unified ecosystem.",
    ],
    skills: ["Laravel", "Flutter", "SINTA 5 Indexed"],
    link: "hr-management",
  },
  {
    id: "info-2",
    title: "company profile",
    overlayText: "dummy data",
    descriptions: [
     "Redesign and full-scale rebuild of PT Kreatif System’s digital presence, transforming it into a high-tier professional interface with a clean, minimalist aesthetic.",
      "Integrated with Groq AI to deliver chatbot as customer support, ensuring intelligent & real-time engagement.",
    ],
    skills: ["TypeScript", "Next.js", "Groq"],
  },
  {
    id: "info-3",
    title: "Point of Sales",
    overlayText: "dummy data",
    descriptions: [
    "Engineered a POS system for Nato PC featuring hardware compatibility matching and seamless payment gateway integration for frictionless transactions.",
"Architected a flexible inventory ecosystem with multi-supplier synchronization and advanced configuration matching to streamline complex hardware stock management."
    ],
    skills: ["Laravel", "Tailwind", "Midtrans"],
  },
];
