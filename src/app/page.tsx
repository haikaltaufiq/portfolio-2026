// src/app/page.tsx

import ScrollSvg from "../components/animation/ScrollSvg";
import Navbar from "../components/layouts/Navbar";
import AboutSection from "../components/sections/about/AboutSection";
import ContactSection from "../components/sections/contact/ContactSection";
import HeroSection from "../components/sections/hero/HeroSection";
import ProjectsSection from "../components/sections/project/ProjectSection";

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
