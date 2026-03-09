import { Project } from "../type";

export const projects: Project[] = [
  {
    id: "portfolio-1",
    slug: "hr-management",
    title: "human resource",
    image: "/assets/hr/poster.png",
    description:
      "Integrated HRIS dashboard for attendance, leave, payroll, and employee lifecycle operations.",
    tags: ["Laravel", "Flutter", "MySQL"],
  },
  {
    id: "portfolio-2",
    slug: "company-profile",
    title: "company profile",
    image: "/assets/compro/hero.png",
    description:
      "Brand-focused company profile website with responsive editorial layout and modern interaction system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "portfolio-3",
    slug: "customer-loyalty",
    title: "customer loyalty",
    image: "/assets/loyalty/dashboard.png",
    description:
      "Mobile-first loyalty platform with reward points, voucher flow, and campaign-based engagement logic.",
    tags: ["React Native", "Firebase", "Node.js"],
  },
];
