"use client";

import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import { gsap } from "gsap";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  logoText?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = "right",
  colors = ["#F25623", "#1A1A1A", "#0D0D0D"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  logoText,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#fff",
  accentColor = "#F25623",
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
}) => {
  // 1. States & Refs
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLDivElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);
  const busyRef = useRef(false);

  // 2. Animations Logic
  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        busyRef.current = false;
      },
    });

    const layers = Array.from(preLayersRef.current?.children || []);
    const labels = Array.from(
      panelRef.current?.querySelectorAll(".sm-item-label") || [],
    );
    const lines = Array.from(
      panelRef.current?.querySelectorAll(".sm-item-line") || [],
    );
    const nums = Array.from(
      panelRef.current?.querySelectorAll(".sm-item-num") || [],
    );

    tl.to(layers, {
      xPercent: 0,
      duration: 0.4,
      ease: "expo.inOut",
      stagger: 0.05,
    })
      .to(
        panelRef.current,
        { xPercent: 0, duration: 0.5, ease: "expo.out" },
        "-=0.2",
      )
      .fromTo(
        labels,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.6, ease: "power4.out", stagger: 0.05 },
        "-=0.3",
      )
      .fromTo(
        lines,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power4.inOut", stagger: 0.05 },
        "-=0.6",
      )
      .fromTo(
        nums,
        { opacity: 0, x: -10 },
        { opacity: 0.4, x: 0, duration: 0.4 },
        "-=0.4",
      );
  }, []);

  const playClose = useCallback(() => {
    const layers = Array.from(preLayersRef.current?.children || []);
    const all = [...layers, panelRef.current];
    const offscreen = position === "left" ? -100 : 100;

    gsap.to(all, {
      xPercent: offscreen,
      duration: 0.4,
      ease: "power4.inOut",
      stagger: { each: 0.04, from: "end" },
      onComplete: () => {
        busyRef.current = false;
      },
    });
  }, [position]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    target ? (onMenuOpen?.(), playOpen()) : (onMenuClose?.(), playClose());

    gsap.to(plusHRef.current, { rotate: target ? 45 : 0, duration: 0.4 });
    gsap.to(plusVRef.current, { rotate: target ? -45 : 90, duration: 0.4 });

    const seq = target ? ["Menu", "•••", "Close"] : ["Close", "•••", "Menu"];
    setTextLines(seq);

    gsap.fromTo(
      textInnerRef.current,
      { yPercent: 0 },
      { yPercent: -66.66, duration: 0.5, ease: "expo.inOut" },
    );
  }, [playOpen, playClose, onMenuOpen, onMenuClose]);

  // 3. Effects (Must be in body, not inside callbacks)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const offscreen = position === "left" ? -100 : 100;
      const layers = Array.from(preLayersRef.current?.children || []);
      gsap.set([panelRef.current, ...layers], { xPercent: offscreen });
      gsap.set(plusVRef.current, { rotate: 90 });
    });
    return () => ctx.revert();
  }, [position]);

  useEffect(() => {
    if (!open || !closeOnClickAway) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, closeOnClickAway, toggleMenu]);

  // 4. Render
  return (
    <div
      className={`sm-scope ${isFixed ? "fixed inset-0 z-100 pointer-events-none" : "relative w-full h-full"}`}
    >
      <div
        className={`staggered-menu-wrapper relative w-full h-full ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Pre-Layers */}
        <div
          ref={preLayersRef}
          className="absolute inset-y-0 w-full md:w-137.5 pointer-events-none z-101"
          style={{ [position]: 0 }}
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className="absolute inset-0 w-full h-full"
              style={{ background: c }}
            />
          ))}
        </div>

        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:p-10 z-110">
          <div className="font-black text-2xl tracking-tighter uppercase italic text-white mix-blend-difference">
            {logoText || "HAIKAL"}
          </div>
          <button
            onClick={toggleMenu}
            className="group flex items-center gap-4 outline-none text-white cursor-pointer pointer-events-auto"
          >
            <div className="h-5 overflow-hidden font-black uppercase text-xs tracking-widest text-right">
              <div ref={textInnerRef} className="flex flex-col">
                {textLines.map((l, i) => (
                  <span key={i} className="h-5 flex items-center justify-end">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                ref={plusHRef}
                className="absolute w-full h-0.5 bg-[#F25623]"
              />
              <span
                ref={plusVRef}
                className="absolute w-full h-0.5 bg-[#F25623]"
              />
            </div>
          </button>
        </header>

        {/* Panel Menu */}
        <aside
          ref={panelRef}
          className="absolute inset-y-0 w-full md:w-137.5 bg-[#0A0A0A] z-102 flex flex-col pt-12 pb-12 px-8 md:px-16 border-l border-white/5 shadow-2xl overflow-y-auto"
          style={{ [position]: 0 }}
        >
          <nav className="flex flex-col grow justify-center">
            {items.map((it, idx) => (
              <div key={idx} className="relative group w-full overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#F25623] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center ease-expo" />
                <div className="sm-item-line absolute bottom-0 left-0 w-full h-px bg-white/10 origin-left scale-x-0" />

                <a
                  href={it.link}
                  className="flex items-center gap-6 py-6 md:py-8 no-underline group relative z-10 w-full transition-all duration-500 group-hover:pl-4"
                >
                  <span className="sm-item-num font-mono text-xs font-bold text-[#F25623] opacity-40 group-hover:opacity-100 transition-opacity">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="overflow-hidden">
                    <span className="sm-item-label block font-black text-5xl md:text-7xl leading-none lowercase tracking-tighter text-white transition-all duration-500 group-hover:text-[#F25623]">
                      {it.label}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </nav>

          {displaySocials && socialItems.length > 0 && (
            <div className="mt-auto pt-10">
              <h3 className="font-black uppercase tracking-[0.5em] text-[10px] text-[#F25623] mb-4">
                Social
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {socialItems.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[11px] uppercase tracking-widest text-white hover:text-[#F25623] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <style jsx global>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
