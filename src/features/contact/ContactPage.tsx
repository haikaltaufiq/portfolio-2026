"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
} from "@/src/lib/contact";
import { useContactForm } from "@/src/features/contact/useContactForm";
import { motion } from "framer-motion";

const RedactedOverlay = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <Typography
    className={`pointer-events-none absolute z-0 font-redacted tracking-normal whitespace-nowrap text-[#F25623] opacity-30 mix-blend-difference ${className}`}
  >
    {text}
  </Typography>
);

const SocialCard = ({
  title,
  handle,
  href,
  index,
}: {
  title: string;
  handle: string;
  href: string;
  index: number;
}) => {
  return (
    <SlideIn delay={index * 0.1}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 10, backgroundColor: "#F25623", color: "#fff" }}
        className="group relative block border border-main-text/30 p-6 transition-all duration-300 md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 transition-opacity group-hover:opacity-10">
          <span className="whitespace-nowrap text-6xl font-black tracking-tighter italic uppercase">
            {title} {title} {title}
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black opacity-30 group-hover:opacity-100">
                0{index + 1}/
              </span>
              <Typography
                variant="h2"
                className="text-3xl leading-none font-black tracking-tighter lowercase md:text-4xl"
              >
                {title}.
              </Typography>
            </div>
            <div className="space-y-0">
              <p className="text-[8px] font-semibold tracking-[0.4em] opacity-40 uppercase group-hover:text-white">
                established connection via
              </p>
              <p className="text-base font-bold tracking-tighter font-mono group-hover:italic md:text-lg">
                {handle}
              </p>
            </div>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-main-text/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </motion.a>
    </SlideIn>
  );
};

export default function ContactPage() {
  const { form, status, feedback, isSubmitting, onFieldChange, onSubmit } =
    useContactForm();

  const feedbackClassName =
    status === "error"
      ? "text-red-500"
      : status === "success"
        ? "text-green-500"
        : "text-[#F25623]";

  const socialLinks = [
    {
      title: "LinkedIn",
      handle: "m taufiq karim haikal",
      href: "https://www.linkedin.com/in/m-taufiq-karim-haikal-3050b1284",
    },
    {
      title: "GitHub",
      handle: "HaikalTaufiq",
      href: "https://github.com/HaikalTaufiq",
    },
    {
      title: "Email",
      handle: "haikaltaufiq4@gmail.com",
      href: "mailto:haikaltaufiq4@gmail.com",
    },
    {
      title: "Instagram",
      handle: "@haikal.taufiq",
      href: "https://instagram.com/haikal.taufiq",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent pt-14 md:pt-24 pb-10 text-main-text selection:bg-[#F25623] selection:text-white">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
      <div className="pointer-events-none fixed top-0 left-0 -z-10 h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

      <div className="pointer-events-none fixed top-20 right-[-5%] origin-right rotate-90 opacity-[0.02] select-none">
        <Typography className="text-[15vh] font-black tracking-tighter uppercase">
          Contact System v1.0
        </Typography>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <section className="relative mb-10 md:mb-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="relative">
              <SlideIn direction="up">
                <div className="relative z-10">
                  <Typography
                    variant="h1"
                    className="font-poppins text-[15vw] leading-[0.8] font-black tracking-tighter lowercase md:text-[10vw]"
                  >
                    get in
                    <br />
                    <span className="text-[#F25623]">touch.</span>
                  </Typography>
                  <div className="hidden md:block absolute top-0 left-[110%] w-max pt-4">
                    <SlideIn delay={0.4}>
                      <div className="space-y-4 border-l border-[#F25623]/30 pl-6">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black tracking-[0.3em] text-[#F25623] uppercase">
                            Availability
                          </p>
                          <p className="text-xs font-mono font-bold opacity-60">
                            [ OPEN FOR PROJECTS / 2026 ]
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black tracking-[0.3em] text-[#F25623] uppercase">
                            Current Location
                          </p>
                          <p className="text-xs font-mono font-bold opacity-60">
                            BATAM, ID (1.0456° N, 104.0301° E)
                          </p>
                        </div>
                        <div className="pt-2">
                          <div className="h-1 w-12 bg-main-text/20" />
                        </div>
                      </div>
                    </SlideIn>
                  </div>

                  <RedactedOverlay
                    text="STATUSS"
                    className="-top-6 left-[30%] rotate-6 text-[6vw] opacity-20"
                  />
                </div>
              </SlideIn>
              <div className="pointer-events-none absolute top-42 -left-10 md:-left-40 z-0 select-none opacity-[0.02] transition-all duration-500">
                <div className="flex flex-col space-y-[-4vw] md:space-y-[3vw]">
                  <Typography className="text-[25vw] md:text-[18vw] font-black tracking-[10px] md:tracking-[-0.05em] uppercase italic skew-x-[-10deg] leading-[0.7]">
                    CONTACT
                  </Typography>
                  <Typography className="text-[25vw] md:text-[18vw] font-black tracking-[10px] md:tracking-[-0.05em] uppercase italic skew-x-[-10deg] leading-[0.7] ml-[10vw] md:ml-[5vw]">
                    ME *
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-10.5 lg:col-span-5">
            <Typography className=" md:pb-4 text-sm leading-snug font-bold lowercase opacity-80">
              &ldquo;Have a vision to build or a system to scale? I&apos;m ready
              to turn complex ideas into functional reality. Let&apos;s connect
              and build something impactful.&rdquo;
            </Typography>

            <SlideIn delay={0.3}>
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="relative">
                  <Typography className="mb-2 text-[11px] font-semibold tracking-[0.4em] text-[#F25623] uppercase">
                    YOUR EMAIL ADDRESS
                  </Typography>
                  <input
                    name="email"
                    type="email"
                    placeholder="user@system.com"
                    value={form.email}
                    onChange={onFieldChange}
                    autoComplete="email"
                    maxLength={CONTACT_EMAIL_MAX_LENGTH}
                    disabled={isSubmitting}
                    required
                    className="w-full border-b border-main-text/20 bg-transparent py-3 font-mono text-xs  outline-none transition-colors placeholder:opacity-20 focus:border-[#F25623]"
                  />
                </div>

                <div className="relative">
                  <Typography className="mb-2 text-[11px] font-semibold tracking-[0.4em] text-[#F25623] uppercase">
                    Message
                  </Typography>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="enter data envelope..."
                    value={form.message}
                    onChange={onFieldChange}
                    maxLength={CONTACT_MESSAGE_MAX_LENGTH}
                    disabled={isSubmitting}
                    required
                    className="w-full resize-none border-b border-main-text/20 bg-transparent py-3 font-mono text-xs  outline-none transition-colors placeholder:opacity-20 focus:border-[#F25623]"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-3 bg-[#F25623] py-4 text-[10px] font-black tracking-[0.5em] text-white uppercase disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting
                    ? "Sending Transmission"
                    : "Execute Transmission"}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {feedback ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-xs font-bold tracking-[0.2em] uppercase ${feedbackClassName}`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </SlideIn>

            <SlideIn>
              <div className="group relative overflow-hidden bg-main-text p-8 text-main-bg shadow-2xl">
                <div className="absolute inset-0 z-0 h-20 w-full animate-scan bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent" />
                <div className="relative z-10">
                  <Typography
                    variant="h3"
                    className="mb-6 flex items-center gap-2 text-2xl font-black lowercase"
                  >
                    <span className="h-6 w-1.5 bg-[#F25623]" /> status log
                  </Typography>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute h-3 w-3 animate-ping rounded-full bg-[#F25623]" />
                        <div className="relative h-3 w-3 rounded-full bg-[#F25623]" />
                      </div>
                      <div>
                        <Typography className="text-[11px] leading-none font-black tracking-widest uppercase">
                          Online
                        </Typography>
                        <p className="text-[9px] font-bold opacity-50 uppercase">
                          Ready for deployment 2026
                        </p>
                      </div>
                    </div>
                    <div className="border border-main-bg/10 bg-main-bg/5 p-4 backdrop-blur-sm">
                      <p className="text-[10px] leading-relaxed font-mono lowercase">
                        <span className="text-[#F25623]">Location:</span> Batam,
                        ID
                        <br />
                        <span className="text-[#F25623]">Latency:</span> Low
                        latency ideas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="mb-2 flex items-center gap-4">
              <Typography className="text-[10px] font-bold tracking-[0.4em] opacity-30 uppercase">
                social nodes
              </Typography>
              <div className="h-px flex-1 bg-main-text/10" />
            </div>

            {socialLinks.map((social, index) => (
              <SocialCard
                key={social.title}
                title={social.title}
                handle={social.handle}
                href={social.href}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-24">
        <div className="relative overflow-hidden border-y border-main-text/20 bg-main-text/2 py-6">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...Array(8)].map((_, i) => (
              <Typography
                key={i}
                className="text-[10px] font-black tracking-[0.5em] opacity-10 uppercase"
              >
                &bull; batam &bull; indonesia &bull;
              </Typography>
            ))}
          </motion.div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Typography className="text-[9px] font-black tracking-widest opacity-30 uppercase">
              all systems operational
            </Typography>
          </div>
          <Typography className="text-[9px] font-black tracking-widest opacity-50 italic uppercase">
            &copy; 2026 - HAIKAL TAUFIQ
          </Typography>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
}
