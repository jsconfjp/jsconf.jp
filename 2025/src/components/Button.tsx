import clsx from "clsx";
import Link from "next/link";

export function Button({
  variant,
  size = "md",
  endIcon,
  href,
  target,
  children,
}: {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  endIcon?: React.ReactNode;
  href: string;
  target: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "flex items-center gap-2 rounded-lg font-bold transition-colors shadow-sm",
        variant === "primary" && "bg-primary text-white hover:bg-primary/80",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/80",
        size === "sm" && "px-4 py-1 text-sm",
        size === "md" && "px-8 py-2 text-base",
        size === "lg" && "px-16 py-2 text-lg",
        size === "xl" && "px-24 py-3 text-xl"
      )}
    >
      <div className="flex-1">{children}</div>
      {endIcon}
    </Link>
  );
}
