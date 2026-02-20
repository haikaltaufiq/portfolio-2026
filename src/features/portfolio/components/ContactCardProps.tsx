import Typography from "@/src/components/ui/Typhography";

interface ContactCardProps {
  title: string;
  label: string;
  href: string;
  index: number;
}

export default function ContactCard({
  title,
  label,
  href,
  index,
}: ContactCardProps) {
  // Variasi rotasi dikit biar kerasa brutalist/raw
  const rotations = [
    "hover:rotate-1",
    "hover:-rotate-1",
    "hover:rotate-2",
    "hover:-rotate-2",
  ];
  const rotation = rotations[index % rotations.length];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-main-text text-main-bg p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 min-h-50 ${rotation}`}
    >
      <div className="flex justify-between items-start">
        <Typography
          variant="h3"
          className="text-3xl font-black lowercase tracking-tighter"
        >
          {title}.
        </Typography>
        <div className="w-12 h-12 border-[3px] border-main-bg rounded-full flex items-center justify-center group-hover:bg-main-bg group-hover:text-main-text transition-all duration-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-50 mb-1">
          {label}
        </p>
        <div className="h-1 w-0 group-hover:w-full bg-main-bg/30 transition-all duration-500" />
      </div>
    </a>
  );
}
