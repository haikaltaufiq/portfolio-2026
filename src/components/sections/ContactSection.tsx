"use client";

import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
} from "@/src/lib/contact";
import { useContactForm } from "@/src/features/contact/useContactForm";
import ContactCard from "@/src/features/portfolio/components/ContactCardProps";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import { motion } from "framer-motion";
import SlideIn from "../animation/SlideIn";
import Typography from "../ui/Typhography";

const SOCIALS = [
  {
    title: "LinkedIn",
    label: "Professional Network",
    href: "https://www.linkedin.com/in/m-taufiq-karim-haikal-3050b1284",
  },
  {
    title: "Email",
    label: "Direct Inquiry",
    href: "mailto:haikaltaufiq4@gmail.com",
  },
  {
    title: "GitHub",
    label: "Code Repositories",
    href: "https://github.com/HaikalTaufiq",
  },
  {
    title: "Instagram",
    label: "Digital Playground",
    href: "https://instagram.com/haikal.taufiq",
  },
];

export default function ContactSection() {
  const { form, status, feedback, isSubmitting, onFieldChange, onSubmit } =
    useContactForm();

  const feedbackClassName =
    status === "error"
      ? "text-red-400"
      : status === "success"
        ? "text-green-400"
        : "text-[#F25623]";

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent py-32 text-main-text selection:bg-[#F25623]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Typography className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[30vw] font-black opacity-[0.02] select-none">
          REACH OUT
        </Typography>
        <div className="absolute top-0 left-1/4 hidden h-full w-px bg-main-text/5 md:block" />
        <div className="absolute top-0 left-3/4 hidden h-full w-px bg-main-text/5 md:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="relative lg:col-span-5">
            <SlideIn direction="up">
              <div className="group relative inline-block">
                <div className="absolute top-0 -left-6 h-full w-2 origin-top scale-y-0 bg-[#F25623] transition-transform duration-500 group-hover:scale-y-100" />

                <Typography
                  variant="h1"
                  className="mb-8 font-poppins text-8xl leading-[0.75] font-black tracking-tighter lowercase md:text-[140px]"
                >
                  let&apos;s <br />
                  <span className="text-[#F25623]">talk.</span>
                </Typography>

                <RedactedOverlay
                  text="jirlahbr"
                  className="text-[6vw] md:text-[100px] -top-8 -left-4 opacity-10 blur-[2px]"
                />
              </div>

              <div className="mt-2 space-y-8">
                <p className="max-w-sm text-sm leading-tight font-semibold opacity-80">
                  &ldquo;Have a vision to build or a system to scale? I&apos;m
                  ready to turn complex ideas into functional reality. Let&apos;s
                  connect and build something impactful.&rdquo;
                </p>

                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="mt-12 max-w-md space-y-10"
                >
                  <div className="group relative">
                    <label className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[#F25623] uppercase">
                      your email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      suppressHydrationWarning
                      placeholder="someone@example.com"
                      value={form.email}
                      onChange={onFieldChange}
                      autoComplete="email"
                      maxLength={CONTACT_EMAIL_MAX_LENGTH}
                      disabled={isSubmitting}
                      required
                      className="w-full border-b-2 border-main-text/10 bg-transparent py-4 font-mono text-sm outline-none transition-colors duration-300 focus:border-[#F25623]"
                    />
                  </div>

                  <div className="group relative">
                    <label className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-[#F25623] uppercase">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="what&apos;s on your mind?"
                      value={form.message}
                      onChange={onFieldChange}
                      maxLength={CONTACT_MESSAGE_MAX_LENGTH}
                      disabled={isSubmitting}
                      required
                      className="w-full resize-none border-b-2 border-main-text/10 bg-transparent py-4 font-mono text-sm outline-none transition-colors duration-300 focus:border-[#F25623]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative overflow-hidden border-2 border-[#F25623] bg-main px-8 py-4 text-[10px] font-black tracking-[0.4em] text-main-text uppercase disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-main-text">
                      {isSubmitting ? "sending..." : "send message"}
                    </span>
                    <div className="absolute inset-0 translate-y-full bg-[#F25623] transition-transform duration-300 group-hover/btn:translate-y-0" />
                  </button>

                  {feedback ? (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`text-xs font-semibold ${feedbackClassName}`}
                    >
                      {feedback}
                    </p>
                  ) : null}
                </form>

                <div className="flex flex-col gap-4 pt-10">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <Typography className="text-[12px] font-semibold tracking-[0.4em] uppercase">
                      System Status: Ready to Build
                    </Typography>
                  </div>
                  <div className="h-0.5 w-24 bg-main-text" />
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {SOCIALS.map((social, index) => (
                <ContactCard
                  key={social.title}
                  title={social.title}
                  label={social.label}
                  href={social.href}
                  index={index}
                />
              ))}
            </div>

            <SlideIn delay={0.5}>
              <div className="group relative mt-12 overflow-hidden border-2 border-main-text/10 bg-main-text/5 p-10 transition-all duration-500 hover:border-[#F25623]/30">
                <div className="absolute inset-0 translate-y-full bg-[#F25623]/5 transition-transform duration-700 group-hover:translate-y-0" />

                <div className="relative z-10 flex flex-col items-end justify-between gap-8 md:flex-row md:items-center">
                  <div className="space-y-2">
                    <Typography className="text-[10px] font-bold tracking-[0.5em] text-[#F25623] uppercase">
                      current location
                    </Typography>
                    <Typography className="text-2xl font-black tracking-tighter lowercase">
                      Batam, Indonesia.
                    </Typography>
                  </div>

                  <div className="space-y-2 text-right">
                    <Typography className="text-[10px] font-black tracking-[0.2em] opacity-40 uppercase">
                      Local Time
                    </Typography>
                    <Typography className="text-xl font-mono font-bold">
                      {new Date().getHours().toString().padStart(2, "0")}:
                      {new Date().getMinutes().toString().padStart(2, "0")}{" "}
                      GMT+7
                    </Typography>
                  </div>
                </div>

                <div className="relative z-10 mt-10 flex items-center justify-between border-t border-main-text/10 pt-6">
                  <Typography className="text-[9px] font-semibold tracking-[0.4em] opacity-30 uppercase">
                    &copy; 2026 HAIKAL TAUFIQ - ALL RIGHTS RESERVED
                  </Typography>
                  <div className="flex gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#F25623]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-main-text/20" />
                    <div className="h-1.5 w-1.5 rounded-full bg-main-text/20" />
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-0 hidden w-full overflow-hidden opacity-5 md:block">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-[12vw] leading-none font-black lowercase"
        >
          <span>
            available for new opportunities &bull; let&apos;s build the future
            &bull;{" "}
          </span>
          <span>
            available for new opportunities &bull; let&apos;s build the future
            &bull;{" "}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
