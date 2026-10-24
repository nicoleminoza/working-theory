/** Quiet return link under a case, outside the editorial conclusion. */
export function BackNav() {
  return (
    <nav
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 clamp(20px,5vw,72px) clamp(48px,6vw,80px)",
      }}
    >
      <div
        style={{
          borderTop: "1px solid var(--rule)",
          paddingTop: "clamp(24px,3vw,36px)",
        }}
      >
        <a
          href="#/"
          className="hv-plum"
          style={{
            border: 0,
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--soft)",
          }}
        >
          ← All problems
        </a>
      </div>
    </nav>
  );
}
