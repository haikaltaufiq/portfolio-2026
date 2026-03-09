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
      "This project focuses on the integrated Human Resource Information System (HRIS) for PT Kreatif System Indonesia. The system centralizes critical workforce processes—including attendance tracking, leave management, overtime, payroll, employee databases, and task distribution—into a single, unified ecosystem.",
    ],
    skills: ["Laravel", "Flutter", "Material Design"],
    link: "hr-management",
  },
  {
    id: "info-2",
    title: "company profile",
    overlayText: "dummy data",
    descriptions: [
      "A high-performance digital identity engineered with a modern interface to amplify brand authority and market presence.",
      "Engineered with fluid layouts and micro-interactions to ensure seamless responsiveness across all high-resolution devices.",
    ],
    skills: ["TypeScript", "Next.js"],
  },
  {
    id: "info-3",
    title: "customer loyalty",
    overlayText: "dummy data",
    descriptions: [
      "A data-driven loyalty ecosystem designed to maximize customer lifetime value through automated point accumulation and tiered rewards.",
      "Features a proprietary ranking engine that tracks purchase frequency and volume to deliver personalized incentives and VIP privileges.",
    ],
    skills: ["Laravel", "Tailwind"],
  },
];
