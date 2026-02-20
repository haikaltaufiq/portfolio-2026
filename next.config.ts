import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Tambahin baris ini bjir
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
