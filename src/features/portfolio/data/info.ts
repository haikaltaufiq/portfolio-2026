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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    ],
    skills: ["TypeScript", "Node.js"],
  },
  {
    id: "info-3",
    title: "customer loyalty",
    overlayText: "dummy data",
    descriptions: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    ],
    skills: ["TypeScript", "Node.js"],
  },
  {
    id: "info-4",
    title: "automatic fish feeder",
    overlayText: "dummy data",
    descriptions: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    ],
    skills: ["TypeScript", "Node.js"],
  },
];
