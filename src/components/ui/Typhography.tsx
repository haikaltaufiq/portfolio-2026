// src/components/ui/Typography.tsx
import { ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "body" | "caption";

type Props = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export default function Typography({
  variant = "body",
  children,
  className,
}: Props) {
  return <div className={`${[variant]} ${className ?? ""}`}>{children}</div>;
}
