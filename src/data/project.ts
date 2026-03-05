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
    | "default";
};

const projectEntries: ProjectDetail[] = [
  {
    id: "1",
    slug: "hr-management",
    title: "human resource",
    image: "/assets/hr/dashboard.png",
    year: "2025",
    category: "web",
    categoryLabel: "Web Application",
    summary:
      "Platform HR internal untuk manajemen data pegawai dan workflow approval.",
    description:
      "A modular HR platform that centralizes employee records, leave requests, payroll summaries, and approval flows in one operational dashboard.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    content: [],
    customType: "hr-system",
  },
  {
    id: "2",
    slug: "company-profile",
    title: "company profile",
    image: "/assets/compro/hero.png",
    year: "2025",
    category: "web",
    categoryLabel: "Marketing Website",
    summary:
      "Website profil perusahaan dengan fokus storytelling brand dan performa.",
    description:
      "A high-performance company profile site with editorial layout, responsive interactions, and CMS-ready content blocks.",
    tags: ["React", "Tailwind", "Framer Motion"],
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    content: [
      "Tujuan project ini adalah ngebangun landing yang kuat untuk kebutuhan branding dan lead generation. Jadi struktur halaman diset untuk bawa user dari awareness ke contact.",
      "Saya bikin komponen section reusable supaya tim konten gampang update tanpa ngerusak visual system. Asset gambar dioptimasi untuk jaga LCP tetap aman.",
      "Hasil akhirnya adalah website yang jauh lebih cepat dan konsisten, dengan identitas visual yang lebih tajam dibanding versi sebelumnya.",
    ],
    customType: "company-profile",
  },
  {
    id: "3",
    slug: "customer-loyalty",
    title: "customer loyalty",
    image: "/assets/loyalty/dashboard.png",
    year: "2024",
    category: "mobile",
    categoryLabel: "Mobile Application",
    summary:
      "Aplikasi loyalty untuk point rewards, promo, dan engagement pelanggan.",
    description:
      "A mobile-first loyalty system that tracks transactions, reward points, and promotional campaigns with user-centric redemption flows.",
    tags: ["React Native", "Firebase", "Node.js"],
    tech: ["React Native", "Firebase", "Node.js", "REST API"],
    content: [
      "Aplikasi ini dirancang untuk ningkatin repeat order lewat sistem poin dan kupon yang gampang dipakai user. Prioritasnya ada di kecepatan check-point dan claim reward.",
      "Saya implementasikan sinkronisasi transaksi ke backend dan bikin rule engine sederhana untuk perhitungan point multiplier saat promo berjalan.",
      "Dampaknya cukup terasa di retention karena user jadi punya alasan balik transaksi dan semua histori reward bisa dipantau langsung dari aplikasi.",
    ],
    customType: "customer-loyalty",
  },
  {
    id: "4",
    slug: "point-of-sales-v1",
    title: "point of sales",
    image: "/images/projects/pos-preview.png", // Jangan lupa isi path gambarnya bjir

    year: "2024",
    category: "web",
    categoryLabel: "Retail Management System",
    summary:
      "Sistem kasir enterprise dengan manajemen inventaris real-time dan arsitektur modular.",
    description:
      "A high-performance POS ecosystem designed for scalability, featuring offline-first capabilities, complex inventory tracking, and deep analytical reporting.",
    tags: ["Fullstack", "SaaS", "Fintech"],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    content: [
      "Project ini dibangun buat ngehandle transaksi retail volume tinggi dengan fokus pada data integrity. Gue rancang sistemnya supaya tetep sinkron walau koneksi internet naik-turun (offline-first logic).",
      "Di sisi backend, gue pake PostgreSQL buat relasi data produk yang kompleks dan Redis buat caching biar load data ribuan SKU tetep ngebut bjir. Architecture-nya gue bikin clean supaya gampang di-extend buat multi-outlet.",
      "Hasil akhirnya bukan cuma aplikasi kasir biasa, tapi full retail management system yang bisa nge-track stok otomatis, laporan laba rugi real-time, sampe manajemen hak akses user yang rigid.",
    ],
    customType: "enterprise-pos",
  },
];

export const projectsData = projectEntries.reduce<
  Record<string, ProjectDetail>
>((collection, project) => {
  collection[project.slug] = project;
  return collection;
}, {});

export const projectsList = projectEntries;
