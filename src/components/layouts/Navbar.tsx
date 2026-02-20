// src/components/layout/Navbar.tsx
"use client";

import { StaggeredMenu } from "@/components/StaggeredMenu";
import Container from "../ui/Container";
import Typography from "../ui/Typhography";

export default function Navbar() {
  const menuItems = [
    { label: "Home.", link: "/", ariaLabel: "Go to home page" },
    { label: "About.", link: "/about", ariaLabel: "Learn more about me" },
    { label: "Project.", link: "/project", ariaLabel: "View my projects" },
    { label: "Contact.", link: "/contact", ariaLabel: "Get in touch" },
  ];

  const socialItems = [
    { label: "github", link: "https://github.com/haikaltaufiq" },
    { label: "linkedin", link: "https://linkedin.com" },
    { label: "instagram", link: "https://instagram.com" },
    { label: "email", link: "mailto:haikaltaufiq4@gmail.com" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full bg-transparent"></header>

      <div className="fixed top-0 right-0 z-100">
        <StaggeredMenu
          logoUrl="/assets/logos/HT.png"
          items={menuItems}
          socialItems={socialItems}
          position="right"
          menuButtonColor="#efdbbf"
          openMenuButtonColor="#F25623"
          accentColor="#F25623"
          displayItemNumbering={false}
          displaySocials={true}
          isFixed={true}
        />
      </div>
    </>
  );
}
