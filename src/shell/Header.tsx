import { Wordmark } from "./Wordmark";

export function Header({ isCase }: { isCase: boolean }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "color-mix(in srgb,var(--paper) 88%,transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(12px,1.6vw,16px) clamp(20px,5vw,72px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Wordmark href="#/" />
        {isCase && (
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
              whiteSpace: "nowrap",
            }}
          >
            ← All problems
          </a>
        )}
      </div>
    </header>
  );
}
