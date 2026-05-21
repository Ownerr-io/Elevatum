import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  tone?: "brand" | "ink";
};

/** Vector logo aligned to site CSS tokens (primary + foreground). */
export function BrandLogo({ className, variant = "full", tone = "brand" }: BrandLogoProps) {
  const markColor = tone === "ink" ? "hsl(var(--foreground))" : "hsl(var(--primary))";
  const wordColor = "hsl(var(--foreground))";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-8 w-auto", className)}
        aria-hidden
      >
        <path
          d="M32 4L58 48H6L32 4Z"
          stroke={markColor}
          strokeWidth="5"
          strokeLinejoin="miter"
        />
        <path
          d="M32 14L22 44H28L32 30L36 44H42L32 14Z"
          fill={markColor}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-auto", className)}
      role="img"
      aria-label="Elevatum"
    >
      <path
        d="M100 6L176 74H24L100 6Z"
        stroke={markColor}
        strokeWidth="9"
        strokeLinejoin="miter"
      />
      <path
        d="M100 24L72 68H88L100 44L112 68H128L100 24Z"
        fill={markColor}
      />
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fill={wordColor}
        style={{
          fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "0.32em",
        }}
      >
        ELEVATUM
      </text>
    </svg>
  );
}
