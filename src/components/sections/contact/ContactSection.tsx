"use client";

import ContactCard from "@/src/features/portfolio/components/ContactCardProps";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import SlideIn from "../../animation/SlideIn";
import Typography from "../../ui/Typhography";

const SOCIALS = [
  {
    title: "LinkedIn",
    label: "Professional Network",
    href: "https://linkedin.com/in/yourprofile",
  },
  { title: "Email", label: "Direct Inquiry", href: "mailto:your@email.com" },
  {
    title: "GitHub",
    label: "Code Repositories",
    href: "https://github.com/yourusername",
  },
  {
    title: "Instagram",
    label: "Digital Playground",
    href: "https://instagram.com/yourhandle",
  },
];

export default function ContactSection() {
  return (
    <section className="min-h-screen py-24 bg-transparent text-main-text overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* LEFT: BIG ASS HEADER */}
          <div className="md:col-span-5 relative">
            <SlideIn direction="up">
              <div className="relative inline-block">
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-7xl md:text-8xl leading-[0.8] lowercase mb-6"
                >
                  let's <br /> talk.
                </Typography>
                <RedactedOverlay
                  text="connect  "
                  className="text-[80px] -top-10 -left-4 opacity-10"
                />
              </div>
              <p className="max-w-xs text-sm font-medium opacity-60 leading-relaxed mt-4">
                Have a project in mind or just want to say hi? Feel free to
                reach out through any of these platforms.
              </p>

              <div className="mt-12 hidden md:block">
                <div className="w-24 h-0.5 bg-main-text" />
                <Typography className="text-xs font-semibold uppercase tracking-[0.4em] mt-4">
                  Available for freelance
                </Typography>
              </div>
            </SlideIn>
          </div>

          {/* RIGHT: CONTACT GRID */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIALS.map((social, index) => (
                <SlideIn key={social.title} delay={index * 0.1}>
                  <ContactCard
                    title={social.title}
                    label={social.label}
                    href={social.href}
                    index={index}
                  />
                </SlideIn>
              ))}
            </div>

            {/* FOOTER-ISH ELEMENT inside grid */}
            <SlideIn delay={0.5}>
              <div className="mt-8 p-8 border-[3px] border-dashed border-main-text/20 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                <Typography className="text-xs font-bold opacity-40 uppercase tracking-widest">
                  Based in Batam, Indonesia
                </Typography>
                <Typography className="text-xs font-semibold opacity-40 uppercase tracking-widest">
                  © 2026 Haikal Taufiq
                </Typography>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
