export type ProjectCategory = "web" | "mobile" | "3D";

export type ProjectDetail = {
  id: string;
  slug: string;
  title: string;
  image: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  tags: string[];
  tech: string[];
  content: string[];
  customType?:
    | "hr-system"
    | "enterprise-pos"
    | "company-profile"
    | "customer-loyalty"
    | "iot-feeder"
    | "3d-game"
    | "e-classroom"
    | "room-booking"
    | "garbage-management"
    | "default";
};

const projectEntries: ProjectDetail[] = [
  {
    id: "1",
    slug: "3d-game",
    title: "Fishing Game Simulator",
    image: "/assets/fishing-game/home-screen.png",
    year: "2024",
    category: "3D",
    categoryLabel: "Mobile Application",
    summary: "A simulation game developed using Unity that interfaces with a custom-built Arduino controller. The project focuses on synchronizing physical hardware inputs with a 3D environment.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Unity 3D", "Blender", "Arduino"],
    tech: ["Unity 3D", "Blender", "Arduino"],
    content: [
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "3d-game",
  },
  {
    id: "2",
    slug: "hr-management",
    title: "human resource",
    image: "/assets/hr/poster.png",
    year: "2025",
    category: "web",
    categoryLabel: "Web Application",
    summary:
      "A modular HR platform that centralizes employee records, leave requests, payroll summaries, and approval flows in one operational dashboard.",
    description:
      "A modular HR platform that centralizes employee records, leave requests, payroll summaries, and approval flows in one operational dashboard.",
    tags: ["Flutter", "Laravel", "MySQL"],
    tech: ["Flutter", "Laravel", "MySQL"],
    content: [],
    customType: "hr-system",
  },
  {
    id: "3",
    slug: "company-profile",
    title: "company profile",
    image: "/assets/compro/hero.png",
    year: "2025",
    category: "web",
    categoryLabel: "Marketing Website",
    summary:
     "Redesign and full-scale rebuild of PT Kreatif System’s digital presence, transforming it into a high-tier professional interface with a clean, minimalist aesthetic.",
    description:
      "A high-performance company profile site with editorial layout, responsive interactions, and CMS-ready content blocks.",
    tags: ["Next.js", "Tailwind CSS", "groq"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    content: [
      "Hasil akhirnya adalah website yang jauh lebih cepat dan konsisten, dengan identitas visual yang lebih tajam dibanding versi sebelumnya.",
    ],
    customType: "company-profile",
  },
  {
    id: "4",
    slug: "customer-loyalty",
    title: "customer loyalty",
    image: "/assets/loyalty/dashboard.png",
    year: "2024",
    category: "web",
    categoryLabel: "Mobile Application",
    summary:
     "A web-based platform designed to manage customer data through a dynamic ranking system. It features automated tier progression to reward loyal customers based on their engagement and transaction history.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Laravel", "PHP", "MYSQL"],
    tech: ["React Native", "Firebase", "Node.js", "REST API"],
    content: [
      "Aplikasi ini dirancang untuk ningkatin repeat order lewat sistem poin dan kupon yang gampang dipakai user. Prioritasnya ada di kecepatan check-point dan claim reward.",
      "Saya implementasikan sinkronisasi transaksi ke backend dan bikin rule engine sederhana untuk perhitungan point multiplier saat promo berjalan.",
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "customer-loyalty",
  },
  {
    id: "5",
    slug: "iot-feeder",
    title: "automatic fish feeder",
    image: "/assets/fish-feeder/poster.png",
    year: "2024",
    category: "mobile",
    categoryLabel: "Mobile Application",
    summary: "An integrated IoT solution designed to automate and optimize aquaculture management. This mobile application allows users to schedule precision feeding, monitor real-time water conditions, and manage overall fish health remotely.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Flutter", "Firebase", "internet of things"],
    tech: ["Flutter", "Firebase", "ESP32"],
    content: [
      "Aplikasi ini dirancang untuk ningkatin repeat order lewat sistem poin dan kupon yang gampang dipakai user. Prioritasnya ada di kecepatan check-point dan claim reward.",
      "Saya implementasikan sinkronisasi transaksi ke backend dan bikin rule engine sederhana untuk perhitungan point multiplier saat promo berjalan.",
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "iot-feeder",
  },
  {
    id: "6",
    slug: "e-classroom",
    title: "E - Classroom",
    image: "/assets/classroom/class.webp",
    year: "2024",
    category: "mobile",
    categoryLabel: "Mobile Application",
    summary: "Mobile-based learning management system designed to streamline assignment workflows, real-time progress monitoring., and interactive student engagement for educational institutions.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Flutter", "Firebase"],
    tech: ["Flutter", "Firebase"],
    content: [
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "e-classroom",
  },

  {
    id: "7",
    slug: "room-booking",
    title: "Room Booking",
    image: "/assets/room-booking/booking.webp",
    year: "2024",
    category: "web",
    categoryLabel: "Mobile Application",
    summary:
      "An internal company room reservation website for managing meeting schedules and booking.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Laravel", "PHP", "MySQL"],
    tech: ["Laravel", "MySQL"],
    content: [
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "room-booking",
  },
  {
    id: "8",
    slug: "garbage-management",
    title: "Garbage Payment",
    image: "/assets/garbage/11.webp",
    year: "2024",
    category: "web",
    categoryLabel: "Mobile Application",
    summary:
      "Digitalized waste management system for residential areas, providing structured CRUD operations to track monthly payments and maintain accurate service records for community residents.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["Laravel", "PHP", "MySQL"],
    tech: ["Laravel", "MySQL"],
    content: [
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "garbage-management",
  },
];

export const projectsData = projectEntries.reduce<
  Record<string, ProjectDetail>
>((collection, project) => {
  collection[project.slug] = project;
  return collection;
}, {});

export const projectsList = projectEntries;
