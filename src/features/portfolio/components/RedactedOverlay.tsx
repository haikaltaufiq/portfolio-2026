import Typography from "@/src/components/ui/Typhography";

interface RedactedOverlayProps {
  text: string;
  className?: string;
}

export default function RedactedOverlay({
  text,
  className = "",
}: RedactedOverlayProps) {
  return (
    <Typography
      className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap ${className}`}
    >
      {text}
    </Typography>
  );
}
