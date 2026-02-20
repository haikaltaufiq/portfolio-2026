import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import RedactedOverlay from "./RedactedOverlay";
import { ReactNode } from "react";

interface ProjectInfoCardProps {
  title: string;
  overlayText: string;
  descriptions: string[];
  delay?: number;
  children?: ReactNode;
}

export default function ProjectInfoCard({
  title,
  overlayText,
  descriptions,
  delay = 0.2,
}: ProjectInfoCardProps) {
  return (
    <SlideIn delay={delay}>
      <div className="relative border-[3px] border-dashed border-main-text/20 rounded-2xl p-8 h-full flex flex-col justify-between group">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="relative">
              <Typography
                variant="h2"
                className="font-poppins font-black text-3xl lowercase leading-none"
              >
                {title}.
              </Typography>
              <RedactedOverlay
                text={overlayText}
                className="text-[28px] -top-2 left-0 opacity-20"
              />
            </div>
            <div className="flex gap-2 grayscale opacity-80">
              <div className="w-8 h-8 bg-main-text/10 rounded flex items-center justify-center text-[10px] font-bold">
                FL
              </div>
              <div className="w-8 h-8 bg-main-text/10 rounded flex items-center justify-center text-[10px] font-bold">
                LS
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {descriptions.map((desc, idx) => (
              <p
                key={idx}
                className="text-[13px] opacity-70 leading-relaxed font-medium"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-3 text-main-text group-hover:gap-5 transition-all duration-300 mt-2">
          <span className="text-xs lowercase tracking-[0.2em] font-bold">
            read more
          </span>
          <div className="w-6 h-6 rounded-full border border-main-text flex items-center justify-center text-[10px]">
            →
          </div>
        </button>
      </div>
    </SlideIn>
  );
}
