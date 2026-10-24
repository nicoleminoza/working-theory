import type { CSSProperties, ReactNode } from "react";

const SIZES = {
  lg: { fontSize: 11.5, letterSpacing: ".24em" },
  md: { fontSize: 11, letterSpacing: ".16em" },
  sm: { fontSize: 10.5, letterSpacing: ".16em" },
} as const;

const TONES = {
  accent: "var(--accent)",
  muted: "var(--faint)",
  brand: "var(--brand)",
  soft: "var(--soft)",
} as const;

type LabelProps = {
  size?: keyof typeof SIZES;
  tone?: keyof typeof TONES;
  rule?: boolean;
  children: ReactNode;
  style?: CSSProperties;
};

export function Label({
  size = "lg",
  tone = "accent",
  rule = false,
  children,
  style,
}: LabelProps) {
  const text = (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontWeight: 500,
        textTransform: "uppercase",
        color: TONES[tone],
        ...SIZES[size],
        ...style,
      }}
    >
      {children}
    </span>
  );
  if (!rule) return text;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
      <span style={{ height: 1, width: 46, background: "var(--accent)" }} />
      {text}
    </span>
  );
}
