import type { CSSProperties } from "react";

type WordmarkProps = {
  size?: number;
  tone?: "ink" | "paper" | "plum";
  href?: string;
  style?: CSSProperties;
};

export function Wordmark({
  size = 19,
  tone = "ink",
  href,
  style,
}: WordmarkProps) {
  const color =
    tone === "paper"
      ? "var(--paper)"
      : tone === "plum"
        ? "var(--brand)"
        : "var(--ink)";
  const inner = (
    <>
      Nicole Miñoza<span style={{ color: "var(--accent)" }}>.</span>
    </>
  );
  const s: CSSProperties = {
    fontFamily: "var(--display)",
    fontWeight: 600,
    letterSpacing: "-.01em",
    fontSize: size,
    color,
    whiteSpace: "nowrap",
    textDecoration: "none",
    border: 0,
    lineHeight: 1.2,
    ...style,
  };
  return href ? (
    <a href={href} style={s}>
      {inner}
    </a>
  ) : (
    <span style={s}>{inner}</span>
  );
}
