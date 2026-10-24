import { Label } from "../shell/Label";

export default function Case01() {
  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 clamp(20px,5vw,72px)",
      }}
    >
      <section style={{ padding: "clamp(56px,7vw,104px) 0 0" }}>
        {/* SETUP */}
        <div
          style={{
            display: "flex",
            gap: "10px 22px",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <div style={{ whiteSpace: "nowrap", flexShrink: "0" }}>
            <Label>Problem 01</Label>
          </div>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: ".12em",
              color: "var(--soft)",
              whiteSpace: "nowrap",
            }}
          >
            Adobe · 2020–2024
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--display)",
            fontWeight: "500",
            fontSize: "clamp(40px,6vw,76px)",
            lineHeight: "1",
            letterSpacing: "-.025em",
            margin: "20px 0 0",
            maxWidth: "16ch",
            textWrap: "balance",
          }}
        >
          The company needed one platform. Every team had a reason to say no.
        </h1>

        <div
          style={{
            marginTop: "clamp(36px,4vw,56px)",
            display: "grid",
            gap: "16px",
            maxWidth: "62ch",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "0",
              textWrap: "pretty",
            }}
          >
            Adobe’s text engine is the layout and shaping system that turns text
            into the typography you see in a document. That gets especially
            complex in CJK and in right-to-left and bidirectional scripts such
            as Arabic and Hebrew.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "0",
              textWrap: "pretty",
            }}
          >
            Adobe’s major apps had evolved different implementations, so text
            could behave differently across products, files could reflow when
            moved, and complex-script improvements often had to be rebuilt app
            by app.
          </p>
        </div>

        <div
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
            gap: "clamp(24px,5vw,72px)",
            alignItems: "start",
            borderTop: "2px solid var(--ink)",
            paddingTop: "clamp(20px,3vw,32px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(22px,2.4vw,28px)",
              lineHeight: "1.3",
              margin: "0",
              textWrap: "pretty",
            }}
          >
            Adobe Express needed professional text on the web. The easier local
            option was the browser’s own text, HTML and CSS. The harder option
            was bringing Adobe’s shared engine to the web as the path toward one
            shared text system.
          </p>
          <div style={{ display: "grid", gap: "12px" }}>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.55",
                margin: "0",
                textWrap: "pretty",
              }}
            >
              CSS was cheaper for Express in the short term. It would also have
              created another source of truth for text, with more
              interoperability risk, more reflow risk, more duplicate
              infrastructure, and less access to Adobe’s deeper typography.
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(22px,2.4vw,28px)",
                margin: "0",
              }}
            >
              I pushed for the shared engine.
            </p>
          </div>
        </div>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.55",
            color: "var(--soft)",
            margin: "clamp(24px,3vw,32px) 0 0",
            maxWidth: "68ch",
            textWrap: "pretty",
          }}
        >
          I set the product direction and made the business case for one shared
          engine. Engineering owned the architecture, the implementation, the
          migration mechanics, and the performance work. I owned getting
          executives on board, the adoption strategy, the sequencing, the
          success criteria, and cross-product governance.
        </p>

        {/* COMPANY CASE */}
        <div
          style={{
            marginTop: "clamp(72px,9vw,120px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: "clamp(24px,5vw,72px)",
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10.5px",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--soft)",
              }}
            >
              The company case
            </span>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.55",
                margin: "12px 0 0",
                maxWidth: "34ch",
                textWrap: "pretty",
              }}
            >
              Leadership backed it and funded it in 2020.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "0",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <span
              style={{
                fontSize: "16.5px",
                lineHeight: "1.45",
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              One source of truth for text behavior
            </span>
            <span
              style={{
                fontSize: "16.5px",
                lineHeight: "1.45",
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              Fewer fidelity problems when files moved between apps
            </span>
            <span
              style={{
                fontSize: "16.5px",
                lineHeight: "1.45",
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              Complex-script and advanced text capabilities built once and
              shared across the suite
            </span>
            <span
              style={{
                fontSize: "16.5px",
                lineHeight: "1.45",
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              One shared engine to improve and maintain
            </span>
          </div>
        </div>
        <p
          style={{
            fontFamily: "var(--display)",
            fontWeight: "500",
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: "1.15",
            letterSpacing: "-.015em",
            margin: "clamp(40px,5vw,64px) 0 0",
            maxWidth: "26ch",
            textWrap: "balance",
          }}
        >
          That still didn’t make migration a priority inside another product
          team.
        </p>

        {/* ASSUMPTION BREAK */}
        <div
          style={{
            padding: "clamp(120px,16vw,220px) 0 clamp(100px,14vw,200px)",
          }}
        >
          <div style={{ maxWidth: "920px" }}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.55",
                margin: "0",
                color: "var(--soft)",
              }}
            >
              I thought the hard part was getting the strategy approved.
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(48px,8vw,108px)",
                lineHeight: ".96",
                letterSpacing: "-.03em",
                margin: "clamp(40px,5vw,72px) 0 0",
                color: "var(--plum)",
                textWrap: "balance",
              }}
            >
              I had solved the company-level argument.{" "}
              <span style={{ fontStyle: "italic", fontWeight: "400" }}>
                I had not solved the team-level one.
              </span>
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.55",
                margin: "clamp(40px,5vw,64px) 0 0",
                maxWidth: "46ch",
                textWrap: "pretty",
              }}
            >
              Executive sponsorship gave us funding and legitimacy. It didn’t
              give another team a reason to spend its roadmap on migration.
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--terra)",
                margin: "clamp(28px,3vw,40px) 0 0",
              }}
            >
              Permission is not priority.
            </p>
          </div>
        </div>

        {/* WHAT I CHANGED */}
        <div
          style={{
            borderTop: "2px solid var(--ink)",
            paddingTop: "clamp(32px,4vw,48px)",
          }}
        >
          <Label>What I changed</Label>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(32px,4.4vw,54px)",
              lineHeight: "1.05",
              letterSpacing: "-.02em",
              margin: "16px 0 0",
              maxWidth: "22ch",
              textWrap: "balance",
            }}
          >
            I stopped treating adoption as one persuasion problem.{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              Each team was making a different product decision.
            </span>
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.55",
              margin: "clamp(20px,3vw,28px) 0 0",
              maxWidth: "60ch",
              textWrap: "pretty",
            }}
          >
            For each team I asked what Adobe gains, what this team gains, and
            what proof lowers the risk enough to move.
          </p>

          <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                gap: "12px clamp(24px,4vw,56px)",
                padding: "clamp(24px,3vw,36px) 0",
                borderTop: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(32px,4vw,52px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                Express
              </span>
              <div style={{ gridColumn: "span 2", minWidth: "0" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                  }}
                >
                  What they needed to move
                </span>
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(20px,2.2vw,24px)",
                    lineHeight: "1.3",
                    margin: "6px 0 0",
                  }}
                >
                  Interoperability with Photoshop.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "var(--soft)",
                    margin: "6px 0 0",
                    maxWidth: "56ch",
                    textWrap: "pretty",
                  }}
                >
                  Using the same text system meant work could move more reliably
                  between web and desktop.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                gap: "12px clamp(24px,4vw,56px)",
                padding: "clamp(24px,3vw,36px) 0",
                borderTop: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(32px,4vw,52px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                Illustrator
              </span>
              <div style={{ gridColumn: "span 2", minWidth: "0" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                  }}
                >
                  What they needed to move
                </span>
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(20px,2.2vw,24px)",
                    lineHeight: "1.3",
                    margin: "6px 0 0",
                  }}
                >
                  CJK, Indic, and other complex-script support.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "var(--soft)",
                    margin: "6px 0 0",
                    maxWidth: "56ch",
                    textWrap: "pretty",
                  }}
                >
                  The shared engine gave the team capabilities it would
                  otherwise have had to build and maintain itself.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                gap: "12px clamp(24px,4vw,56px)",
                padding: "clamp(24px,3vw,36px) 0",
                borderTop: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(32px,4vw,52px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                Photoshop
              </span>
              <div style={{ gridColumn: "span 2", minWidth: "0" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                  }}
                >
                  What they needed to move
                </span>
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(20px,2.2vw,24px)",
                    lineHeight: "1.3",
                    margin: "6px 0 0",
                  }}
                >
                  Performance evidence, lower migration risk, and proof from
                  earlier adopters.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "var(--soft)",
                    margin: "6px 0 0",
                    maxWidth: "56ch",
                    textWrap: "pretty",
                  }}
                >
                  Photoshop was a mature product with more to break. The team
                  needed evidence on performance and migration risk before
                  committing, and earlier adopters gave them something real to
                  evaluate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* UNCERTAINTY */}
        <div
          style={{
            marginTop: "clamp(64px,8vw,104px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: "clamp(24px,5vw,72px)",
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(26px,3.2vw,38px)",
              lineHeight: "1.12",
              letterSpacing: "-.015em",
              margin: "0",
              textWrap: "balance",
            }}
          >
            Earlier adopters reduced uncertainty for later teams.
          </p>
          <div style={{ display: "grid", gap: "12px" }}>
            <p
              style={{
                fontSize: "16.5px",
                lineHeight: "1.5",
                margin: "0",
                textWrap: "pretty",
              }}
            >
              <span style={{ fontWeight: "600" }}>Express</span> gave us
              production evidence on the web.{" "}
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  color: "var(--faint)",
                  whiteSpace: "nowrap",
                }}
              >
                2021
              </span>
            </p>
            <p
              style={{
                fontSize: "16.5px",
                lineHeight: "1.5",
                margin: "0",
                textWrap: "pretty",
              }}
            >
              <span style={{ fontWeight: "600" }}>Illustrator</span> gave us
              evidence on demanding multilingual and complex-script typography.{" "}
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  color: "var(--faint)",
                  whiteSpace: "nowrap",
                }}
              >
                2023
              </span>
            </p>
            <p
              style={{
                fontSize: "16.5px",
                lineHeight: "1.5",
                margin: "0",
                textWrap: "pretty",
              }}
            >
              <span style={{ fontWeight: "600" }}>
                By the time Photoshop evaluated the move
              </span>
              , we had real performance and implementation evidence, plus a much
              better understanding of migration risk.{" "}
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  color: "var(--faint)",
                  whiteSpace: "nowrap",
                }}
              >
                2024
              </span>
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: "1.55",
                color: "var(--soft)",
                margin: "12px 0 0",
                paddingTop: "12px",
                borderTop: "1px solid var(--rule)",
                textWrap: "pretty",
              }}
            >
              The first migrations also exposed the real costs of sharing the
              engine: version skew, release-cadence pressure, and regression
              risk. That made later migrations cleaner because we understood the
              integration problem better.
            </p>
          </div>
        </div>

        {/* GOVERNANCE */}
        <div
          style={{
            margin: "clamp(80px,10vw,140px) calc(-1 * clamp(20px,5vw,72px)) 0",
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "clamp(80px,11vw,160px) clamp(20px,5vw,72px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--terra)",
            }}
          >
            The problem changed again
          </span>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(32px,4.6vw,58px)",
              lineHeight: "1.06",
              letterSpacing: "-.025em",
              margin: "24px 0 0",
              maxWidth: "22ch",
              textWrap: "balance",
            }}
          >
            Once teams depended on one shared engine, independent release
            decisions could create version skew, compatibility problems, and
            conflicting roadmap priorities.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              color: "#CDBFB6",
              margin: "clamp(36px,4vw,56px) 0 0",
              maxWidth: "54ch",
              textWrap: "pretty",
            }}
          >
            I started the Type Working Group, a standing cross-product group,
            and ran it for two years. It became the place where teams resolved
            what a change to the shared engine meant for every other product.
          </p>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#CDBFB6",
              margin: "20px 0 0",
              lineHeight: "1.9",
            }}
          >
            Roadmap priorities · release cadence · compatibility · versioning ·
            client needs · order of fixes
          </p>
          <p
            style={{
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontSize: "clamp(24px,2.8vw,32px)",
              lineHeight: "1.2",
              margin: "clamp(40px,5vw,64px) 0 0",
            }}
          >
            The work moved from migration to governance.
          </p>
        </div>

        {/* PROOF */}
        <div style={{ marginTop: "clamp(80px,10vw,140px)" }}>
          <Label>Proof</Label>

          <div style={{ marginTop: "clamp(24px,3vw,40px)" }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(72px,13vw,168px)",
                lineHeight: ".9",
                letterSpacing: "-.03em",
                color: "var(--plum)",
                whiteSpace: "nowrap",
              }}
            >
              12{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "400",
                  marginRight: ".06em",
                }}
              >
                of
              </span>{" "}
              12
            </span>
            <div
              style={{ maxWidth: "34ch", marginTop: "clamp(24px,3vw,36px)" }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(22px,2.4vw,28px)",
                  lineHeight: "1.25",
                  margin: "0",
                }}
              >
                targeted apps migrated,
                <br />
                Photoshop included
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "var(--soft)",
                  margin: "10px 0 0",
                  textWrap: "pretty",
                }}
              >
                InDesign was intentionally not targeted because the shared
                engine wasn’t the right fit.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "clamp(48px,6vw,72px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,220px),1fr))",
              gap: "clamp(20px,3vw,40px)",
              borderTop: "1px solid var(--rule)",
              paddingTop: "16px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(28px,3.2vw,38px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                ~15M
              </span>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.45",
                  margin: "8px 0 0",
                }}
              >
                monthly users on the shared engine
              </p>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(28px,3.2vw,38px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                ~40×
              </span>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.45",
                  margin: "8px 0 0",
                }}
              >
                faster core typographic actions on the web
              </p>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(28px,3.2vw,38px)",
                  lineHeight: "1",
                  letterSpacing: "-.02em",
                }}
              >
                200+
              </span>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.45",
                  margin: "8px 0 0",
                }}
              >
                complex-script text-layout issues resolved
              </p>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div
          data-wt-ending="01"
          style={{
            marginTop: "clamp(80px,10vw,140px)",
            background: "var(--paper-2)",
            borderRadius: "8px",
            padding: "clamp(48px,8vw,112px) clamp(24px,6vw,88px)",
          }}
        >
          <div style={{ whiteSpace: "nowrap" }}>
            <Label rule>What I took forward</Label>
          </div>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(40px,6.2vw,84px)",
              lineHeight: "1.02",
              letterSpacing: "-.025em",
              margin: "clamp(24px,3vw,40px) 0 0",
              maxWidth: "17ch",
              textWrap: "balance",
            }}
          >
            A company-level strategy doesn’t become a team-level priority{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              on its own.
            </span>
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "clamp(28px,3vw,40px) 0 0",
              maxWidth: "56ch",
              textWrap: "pretty",
            }}
          >
            Executive backing creates permission. Adoption happens when the work
            solves a problem the team already owns.
          </p>
        </div>
        <div style={{ height: "clamp(120px,16vw,220px)" }}></div>
      </section>
    </main>
  );
}
