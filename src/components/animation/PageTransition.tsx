"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Typography from "../ui/Typhography";

const barVariants: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: (i: number) => ({
    scaleY: [0, 1, 1, 0],
    originY: [0, 0, 1, 1],
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
      delay: i * 0.1,
    },
  }),
};

const statusVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, -20],
    transition: {
      duration: 1,
      times: [0, 0.2, 0.8, 1],
      ease: "easeInOut",
    },
  },
};

const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function PageTransition({
  children,
  routeKey,
}: {
  children: ReactNode;
  routeKey: string;
}) {
  const nbOfBars = 5;

  return (
    <AnimatePresence mode="wait">
      <motion.div key={routeKey} className="relative w-full min-h-screen">
        <div className="fixed inset-0 pointer-events-none z-9999 flex">
          {[...Array(nbOfBars)].map((_, i) => (
            <motion.div
              key={`bar-${i}`}
              custom={i}
              variants={barVariants}
              initial="initial"
              animate="animate"
              className="relative h-full w-full bg-[#F25623]"
            />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              variants={statusVariants}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <Typography className="text-white font-mono text-[10px] uppercase tracking-[0.5em] mb-2">
                Re-Routing System...
              </Typography>
              <Typography className="text-white font-black text-4xl lowercase italic">
                {routeKey === "/" ? "home." : routeKey.replace("/", "") + "."}
              </Typography>
            </motion.div>
          </div>
        </div>

        {/* CONTENT: Pakai exit animation biar gak snap/patah */}
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
