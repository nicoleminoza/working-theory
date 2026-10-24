const nav = {
  border: 0,
  borderBottom: "1px solid var(--rule)",
  paddingBottom: 2,
} as const;
const dot = (
  <span aria-hidden="true" style={{ color: "var(--rule)" }}>
    ·
  </span>
);

/** House Style project footer. */
export function Footer() {
  return (
    <footer
      style={{ background: "var(--paper)", borderTop: "1px solid var(--rule)" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding:
            "clamp(48px,5vw,64px) clamp(20px,5vw,72px) clamp(28px,3vw,36px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px 40px",
            flexWrap: "wrap",
            paddingBottom: "clamp(28px,3vw,40px)",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <div style={{ display: "grid", gap: 6, flex: "none" }}>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: 500,
                fontSize: 22,
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                margin: 0,
                color: "var(--ink)",
              }}
            >
              Working Theory
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.4,
                margin: 0,
                color: "var(--soft)",
              }}
            >
              A project by Nicole Miñoza
            </p>
          </div>
          <nav
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "10px 18px",
              flexWrap: "wrap",
              fontSize: 15,
            }}
          >
            <a
              href="https://nicoleminoza.com"
              className="hv-link"
              style={{ ...nav, color: "var(--ink)" }}
            >
              nicoleminoza.com
            </a>
            {dot}
            <a
              href="https://www.linkedin.com/in/nicoleminoza"
              target="_blank"
              rel="noopener"
              className="hv-link"
              style={{ ...nav, color: "var(--soft)" }}
            >
              LinkedIn
            </a>
            {dot}
            <a
              href="https://github.com/nicoleminoza"
              target="_blank"
              rel="noopener"
              className="hv-link"
              style={{ ...nav, color: "var(--soft)" }}
            >
              GitHub
            </a>
            {dot}
            <a
              href="mailto:hello@nicoleminoza.com"
              target="_blank"
              rel="noopener"
              className="hv-link"
              style={{ ...nav, color: "var(--soft)" }}
            >
              Email
            </a>
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "8px 40px",
            flexWrap: "wrap",
            paddingTop: "clamp(20px,2.4vw,28px)",
            fontSize: 13,
            lineHeight: 1.5,
            color: "var(--soft)",
          }}
        >
          <p style={{ margin: 0, maxWidth: "72ch", textWrap: "pretty" }}>
            Made with Claude for research and pressure-testing, Claude Design
            for exploration, and Claude Code for the build.
          </p>
          <p style={{ margin: 0, whiteSpace: "nowrap" }}>
            © 2026 Nicole Miñoza
          </p>
        </div>
      </div>
    </footer>
  );
}
