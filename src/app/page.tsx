// src/app/page.tsx

import { motion } from "framer-motion";
import ScrollSvg from "../components/animation/ScrollSvg";
import Navbar from "../components/layouts/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative w-full bg-main-bg overflow-x-hidden">
        <ScrollSvg />

        <div className="relative z-10">
          <HeroSection />
          <AboutSection />

          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
