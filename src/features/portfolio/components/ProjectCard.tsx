import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";

interface ProjectCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  delay = 0.3,
}: ProjectCardProps) {
  return (
    <SlideIn delay={delay}>
      <div className="bg-main-text text-main-bg rounded-3xl p-4 overflow-hidden">
        <div className="gap-4 mb-6">
          <div className="col-span-1 aspect-20/10 bg-black rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-main-text/10 font-black text-5xl italic tracking-tighter">
              PREVIEW
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end pb-4">
          <div className="max-w-md">
            <Typography
              variant="h2"
              className="ml-1 font-poppins font-black text-4xl tracking-tight lowercase"
            >
              {title}.
            </Typography>
            <p className="ml-1 text-[13px] font-medium leading-relaxed opacity-90 text-black/80">
              {description}
            </p>
          </div>

          <button className="w-16 h-16 rounded-full border-[5px] border-black flex items-center justify-center hover:bg-black hover:text-main-text transition-all duration-500 shrink-0 ml-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </SlideIn>
  );
}
