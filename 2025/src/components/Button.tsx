import { Link } from "@/i18n/navigation";
import clsx from "clsx";

export function Button({
  variant,
  size = "md",
  full,
  endIcon,
  href,
  target,
  children,
}: {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  full?: boolean;
  endIcon?: React.ReactNode;
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "flex items-center gap-2 rounded-lg font-bold transition-colors shadow-sm",
        full && "w-full",
        variant === "primary" && "bg-primary text-white hover:bg-primary/80",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/80"
      )}
    >
      <div
        className={clsx(
          "flex-1 text-center",
          endIcon ? "pl-8" : "px-8",
          size === "sm" && "py-1 text-sm",
          size === "md" && "py-2 text-base",
          size === "lg" && "py-2 text-lg",
          size === "xl" && "py-3 text-xl"
        )}
      >
        {children}
      </div>
      {endIcon && <div className="px-4">{endIcon}</div>}
    </Link>
  );
}
