import { PROBLEMS, PROBLEM_BY_ID, type CaseId } from "../problems";
import { Label } from "../shell/Label";

export default function Home({ earned }: { earned: readonly CaseId[] }) {
  // Theories appear in the order the visitor earned them.
  const theory = earned.map((id) => PROBLEM_BY_ID[id]);
  const count = theory.length;
  const theorySize =
    count >= 4
      ? "clamp(24px,2.7vw,34px)"
      : count >= 2
        ? "clamp(26px,3.2vw,40px)"
        : "clamp(28px,3.8vw,48px)";
  const theoryGap =
    count >= 4 ? "clamp(22px,3vw,36px)" : "clamp(28px,4vw,48px)";

  return (
    <main
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 clamp(20px,5vw,72px)",
      }}
    >
      <section style={{ padding: "clamp(56px,9vh,112px) 0 0" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          <Label rule>Working Theory</Label>
        </div>

        <h1
          style={{
            fontFamily: "var(--display)",
            fontWeight: 500,
            fontSize: "clamp(40px,6vw,84px)",
            lineHeight: 1,
            letterSpacing: "-.028em",
            margin: "clamp(24px,3vw,36px) 0 0",
            maxWidth: "17ch",
            textWrap: "balance",
          }}
        >
          A point of view strong enough to act on,{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            and open enough to change when the evidence does.
          </span>
        </h1>

        <div
          style={{
            marginTop: "clamp(40px,5vw,64px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
            gap: "clamp(20px,4vw,64px)",
            alignItems: "start",
            maxWidth: 1000,
          }}
        >
          <p
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(22px,2.3vw,27px)",
              lineHeight: 1.32,
              margin: 0,
              textWrap: "pretty",
            }}
          >
            My work has moved between Product and Product Marketing, usually
            where technical complexity, customer understanding, business
            decisions, and go-to-market meet.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              margin: 0,
              textWrap: "pretty",
            }}
          >
            These are a few real decisions from that work, reconstructed around
            what I thought was true, what the evidence complicated, and what I
            changed.
          </p>
        </div>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--soft)",
            margin: "clamp(24px,3vw,32px) 0 0",
            maxWidth: "60ch",
            textWrap: "pretty",
          }}
        >
          Built the way I work now: AI throughout the research, synthesis,
          design, and build. The judgment stays mine.
        </p>

        <div
          style={{
            marginTop: "clamp(40px,5vw,64px)",
            borderTop: "2px solid var(--ink)",
          }}
        >
          {PROBLEMS.map((p) => (
            <a
              key={p.id}
              href={`#/${p.id}`}
              className="hv-plum"
              style={{
                display: "grid",
                gridTemplateColumns: "clamp(36px,5vw,56px) minmax(0,1fr)",
                gap: "4px clamp(12px,2vw,24px)",
                alignItems: "baseline",
                padding: "clamp(16px,2vw,22px) 0",
                border: 0,
                borderBottom: "1px solid var(--rule)",
                color: "var(--ink)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  letterSpacing: ".1em",
                  color: "var(--terra)",
                }}
              >
                {p.id}
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "8px 32px",
                  minWidth: 0,
                }}
              >
                <div style={{ flex: "1 1 380px", minWidth: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--display)",
                      fontWeight: 500,
                      fontSize: "clamp(22px,2.6vw,32px)",
                      lineHeight: 1.15,
                      letterSpacing: "-.015em",
                      textWrap: "balance",
                    }}
                  >
                    {p.line}
                  </span>
                  {earned.includes(p.id) && (
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--display)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(17px,1.7vw,20px)",
                        lineHeight: 1.4,
                        color: "var(--soft)",
                        marginTop: 8,
                        maxWidth: "56ch",
                        textWrap: "pretty",
                      }}
                    >
                      {p.annotation ?? p.theory}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    flex: "none",
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--soft)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.meta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {count > 0 && (
        <section
          style={{
            margin: "clamp(72px,9vw,128px) calc(50% - 50vw) 0",
            background: "var(--paper-2)",
            padding:
              "clamp(64px,8vw,120px) calc(50vw - 50%) clamp(72px,9vw,128px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--terra)",
              margin: 0,
            }}
          >
            Working theory so far
          </h2>
          <div
            style={{
              marginTop: "clamp(24px,3vw,40px)",
              display: "grid",
              gap: theoryGap,
            }}
          >
            {theory.map((t) => (
              <div
                key={t.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(36px,5vw,56px) minmax(0,1fr)",
                  gap: "clamp(12px,2vw,24px)",
                  alignItems: "baseline",
                }}
              >
                <a
                  href={`#/${t.id}`}
                  style={{
                    border: 0,
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    letterSpacing: ".1em",
                    color: "var(--terra)",
                  }}
                >
                  {t.id}
                </a>
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 500,
                    fontSize: theorySize,
                    lineHeight: 1.1,
                    letterSpacing: "-.02em",
                    margin: 0,
                    maxWidth: "24ch",
                    textWrap: "balance",
                  }}
                >
                  {t.theory}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "clamp(64px,8vw,112px)",
              paddingTop: "clamp(28px,3.5vw,40px)",
              borderTop:
                "1px solid color-mix(in srgb,var(--ink) 14%,transparent)",
              display: "grid",
              gridTemplateColumns: "clamp(36px,5vw,56px) minmax(0,1fr)",
              gap: "clamp(12px,2vw,24px)",
            }}
          >
            <span />
            <div
              style={{
                display: "grid",
                gap: "clamp(28px,3.5vw,40px)",
                maxWidth: "44ch",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 500,
                  fontSize: "clamp(22px,2.4vw,28px)",
                  lineHeight: 1.3,
                  letterSpacing: "-.01em",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                These are working theories. I carry them into the next problem
                until the evidence gives me a reason to change them.
              </p>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  fontSize: 18,
                  lineHeight: 1.45,
                  color: "var(--soft)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                If one of these is a problem you’re working through,{" "}
                <a
                  href="mailto:hello@nicoleminoza.com"
                  target="_blank"
                  rel="noopener"
                >
                  I’d like to hear about it.
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      <section
        style={{ padding: "clamp(72px,9vw,120px) 0 clamp(48px,5vw,64px)" }}
      >
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            paddingTop: "clamp(24px,3vw,32px)",
          }}
        >
          <div style={{ display: "grid", gap: 16, maxWidth: "60ch" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--soft)",
                margin: 0,
              }}
            >
              Nicole Miñoza
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--soft)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              I spent 23 years at Adobe across Product Marketing and Product,
              building complex products for creative professionals, most
              recently leading the fonts and typography business. I now run{" "}
              <a
                href="https://makeitland.studio"
                target="_blank"
                rel="noopener"
              >
                Make It Land
              </a>
              , a positioning practice that takes strategy through to shipped
              work.
            </p>
            <div>
              <a
                href="https://nicoleminoza.com/resume.html"
                target="_blank"
                rel="noopener"
                className="hv-ink"
                style={{
                  border: 0,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--plum)",
                  whiteSpace: "nowrap",
                }}
              >
                Résumé →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
