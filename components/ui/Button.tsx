import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white/10",
  ghost:
    "text-brand-blue hover:bg-brand-blue/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-wider rounded-sm transition-all duration-300";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
