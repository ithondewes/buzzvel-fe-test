import type { ReactNode } from "react";

const variants = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  secondary: "border border-line bg-white text-ink hover:border-ink/25",
  yellow: "bg-yellow text-ink hover:bg-[#ecd84a]",
  inverse: "border border-white/30 bg-white text-ink hover:bg-white/90",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
