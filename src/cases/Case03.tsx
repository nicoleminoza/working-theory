import { Fragment, useEffect, useRef, useState } from "react";
import { Label } from "../shell/Label";

type Item = { old?: string; t: string; display?: boolean };

const GROUPS: { k: string; items: Item[] }[] = [
  {
    k: "Product + experience",
    items: [
      { old: "Adobe Typekit", t: "Adobe Fonts", display: true },
      {
        t: "The website, product experience, and migration path had to make the new membership benefit real.",
      },
    ],
  },
  {
    k: "Customers",
    items: [
      {
        t: "Existing Typekit customers needed a migration story that explained what was changing without making something they already valued feel like it was being taken away.",
      },
    ],
  },
  {
    k: "Partners",
    items: [
      {
        t: "Foundries needed to understand what Adobe Fonts meant for their visibility, attribution, licensing, and relationship with Adobe.",
      },
    ],
  },
  {
    k: "Market + Sales",
    items: [
      {
        t: "PR, launch messaging, web content, and Sales materials all had to tell the same story: fonts were now part of the value of Creative Cloud.",
      },
    ],
  },
  {
    k: "Measurement",
    items: [
      {
        t: "Success could no longer mean only usage. We needed to know whether Fonts made Creative Cloud more valuable to keep.",
      },
    ],
  },
];

const AUDIENCES = [
  {
    a: "Creative Cloud members",
    p: "Your Creative Cloud plan now includes the complete Adobe Fonts library, with no sync limits.",
  },
  {
    a: "Legacy Typekit customers",
    p: "Everything you loved about Typekit is still here. What changed are the limits.",
  },
  {
    a: "Foundry partners",
    p: "More reach through Creative Cloud, without disappearing behind the Adobe brand.",
  },
  {
    a: "Sales",
    p: "If you’re paying for Creative Cloud, you’re paying for fonts.",
  },
];

const before = [
  "Standalone font subscription",
  "Separate plans and activation limits",
  "Its own purchase decision",
];
const after = [
  "Included with Creative Cloud",
  "Activation limits removed",
  "The standalone purchase mostly goes away",
];

const method = [
  {
    q: "What changed?",
    a: "How people got access. Typekit was no longer something you bought on its own.",
  },
  {
    q: "For whom?",
    a: "Creative Cloud members. Their question was whether this made the membership worth more.",
  },
  {
    q: "What proof would make the promise credible?",
    a: "The name, the product, the partner story, and how we measured success all had to match the new role.",
  },
];

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const seg = (p: number, a: number, b: number) => {
  const t = clamp((p - a) / (b - a));
  return t * t * (3 - 2 * t);
};

export default function Case03() {
  const reframeRef = useRef<HTMLDivElement>(null);
  const propRef = useRef<HTMLDivElement>(null);
  const [{ p1, p2 }, setProgress] = useState({ p1: 0, p2: 0 });

  // Scroll-driven progress for the reframe (p1) and the consequences (p2).
  useEffect(() => {
    let tick = 0;
    const measure = () => {
      const vh = window.innerHeight;
      const a = reframeRef.current;
      const b = propRef.current;
      setProgress((prev) => {
        let { p1: n1, p2: n2 } = prev;
        if (a) {
          const r = a.getBoundingClientRect();
          n1 = clamp((64 - r.top) / Math.max(1, r.height - vh + 64));
        }
        if (b) {
          const r = b.getBoundingClientRect();
          n2 = clamp((vh * 0.85 - r.top) / (r.height * 0.8));
        }
        return Math.abs(n1 - prev.p1) > 0.002 || Math.abs(n2 - prev.p2) > 0.002
          ? { p1: n1, p2: n2 }
          : prev;
      });
    };
    const onScroll = () => {
      if (tick) return;
      tick = requestAnimationFrame(() => {
        tick = 0;
        measure();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (tick) cancelAnimationFrame(tick);
    };
  }, []);

  const s = seg(p1, 0.12, 0.55);
  const n = seg(p1, 0.42, 0.85);
  const line = seg(p2, 0.1, 0.75);
  const groups = GROUPS.map((g, i) => {
    const on = line >= (i + 0.5) / GROUPS.length;
    return {
      k: g.k,
      opacity: on ? 1 : 0.3,
      kColor: on ? "var(--terra)" : "var(--soft)",
      items: g.items.map((it) => ({
        t: it.t,
        old: it.old || "",
        hasOld: !!it.old,
        strike: on ? "line-through" : "none",
        font: it.display ? "var(--display)" : "var(--sans)",
        size: it.display ? "clamp(22px,2.4vw,28px)" : "16.5px",
        weight: it.display ? 500 : 400,
      })),
    };
  });

  const pinHeight = "220vh";
  const pinPosition = "sticky";
  const pinInner = "calc(100vh - 64px)";
  const qLabelOpacity = Math.min(1, s * 4).toFixed(3);
  const oldTransform = "scale(" + (1 - 0.5 * s).toFixed(3) + ")";
  const oldOpacity = (1 - 0.6 * s).toFixed(3);
  const strikeW = (s * 100).toFixed(1) + "%";
  const newGap =
    "calc(" +
    (1 - s).toFixed(3) +
    " * 48px - " +
    s.toFixed(3) +
    " * clamp(10px,2.6vw,36px))";
  const newOpacity = n.toFixed(3);
  const newTransform = "translateY(" + ((1 - n) * 32).toFixed(1) + "px)";
  const lineW = (line * 100).toFixed(1) + "%";

  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 clamp(20px,5vw,72px)",
      }}
    >
      <section style={{ padding: "clamp(56px,7vw,104px) 0" }}>
        {/* 1 THE SITUATION */}
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px 22px",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <div style={{ whiteSpace: "nowrap", flexShrink: "0" }}>
              <Label>Problem 03</Label>
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
              Adobe · 2018
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(44px,6.6vw,84px)",
              lineHeight: ".98",
              letterSpacing: "-.025em",
              margin: "20px 0 0",
              maxWidth: "15ch",
              textWrap: "balance",
            }}
          >
            The product was no longer something customers bought.
          </h2>

          <div
            style={{
              marginTop: "clamp(40px,5vw,64px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,340px),1fr))",
              gap: "clamp(24px,5vw,72px)",
              alignItems: "start",
            }}
          >
            <p
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(26px,3vw,36px)",
                lineHeight: "1.2",
                letterSpacing: "-.01em",
                margin: "0",
                textWrap: "balance",
              }}
            >
              Typekit was Adobe’s font subscription service.
            </p>
            <div style={{ display: "grid", gap: "14px" }}>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Adobe had acquired it years earlier, but customers still
                experienced it as a standalone product, with separate plans,
                activation limits, and its own purchase decision.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                In 2018, Adobe removed the activation limits and included the
                font library with Creative Cloud, the subscription people
                already paid for to use Adobe’s creative apps.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "clamp(56px,7vw,96px)" }}>
            <Label>The change</Label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,280px),1fr))",
                gap: "clamp(28px,5vw,72px)",
                marginTop: "18px",
              }}
            >
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10.5px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--soft)",
                  }}
                >
                  Before
                </span>
                <div style={{ display: "grid", gap: "6px", marginTop: "14px" }}>
                  {before.map((l, _i0) => (
                    <Fragment key={_i0}>
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontSize: "clamp(22px,2.4vw,28px)",
                          lineHeight: "1.3",
                          color: "var(--soft)",
                        }}
                      >
                        {l}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div
                style={{
                  borderTop: "2px solid var(--ink)",
                  paddingTop: "17px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10.5px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}
                >
                  After
                </span>
                <div style={{ display: "grid", gap: "6px", marginTop: "14px" }}>
                  {after.map((l, _i0) => (
                    <Fragment key={_i0}>
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontSize: "clamp(22px,2.4vw,28px)",
                          lineHeight: "1.3",
                        }}
                      >
                        {l}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{ margin: "clamp(56px,7vw,96px) 0 clamp(24px,3vw,40px)" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "var(--ink)",
                }}
              ></div>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(19px,1.9vw,22px)",
                  lineHeight: "1.35",
                  color: "var(--soft)",
                  margin: "clamp(18px,2vw,24px) 0 0",
                }}
              >
                My GM made the access-model change.
              </p>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(26px,3.2vw,38px)",
                  lineHeight: "1.18",
                  letterSpacing: "-.02em",
                  margin: "clamp(8px,1vw,12px) 0 0",
                  textWrap: "pretty",
                }}
              >
                <span style={{ display: "block" }}>
                  I saw that it changed the role of the product,
                </span>
                <span style={{ display: "block" }}>
                  and I led the repositioning and GTM work that followed.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 2 THE REFRAME */}
        <div
          ref={reframeRef}
          style={{ marginTop: "clamp(40px,5vw,72px)", height: pinHeight }}
        >
          <div
            style={{
              position: pinPosition,
              top: "64px",
              minHeight: pinInner,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "clamp(32px,4vw,56px) 0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10.5px",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--terra)",
                opacity: qLabelOpacity,
              }}
            >
              The business question changed
            </span>
            <div
              style={{
                marginTop: "20px",
                transformOrigin: "left top",
                transform: oldTransform,
                opacity: oldOpacity,
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(40px,6.4vw,84px)",
                  lineHeight: "1.02",
                  letterSpacing: "-.025em",
                }}
              >
                “Is Typekit worth buying?”
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "54%",
                    height: "3px",
                    width: strikeW,
                    background: "var(--terra)",
                  }}
                ></span>
              </span>
            </div>
            <div
              style={{
                marginTop: newGap,
                opacity: newOpacity,
                transform: newTransform,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(40px,6.4vw,84px)",
                  lineHeight: "1.02",
                  letterSpacing: "-.025em",
                  display: "block",
                  maxWidth: "17ch",
                  textWrap: "balance",
                }}
              >
                “Does this make Creative Cloud more valuable to keep?”
              </span>
            </div>
          </div>
        </div>

        {/* 3 MY READ */}
        <div
          style={{
            marginTop: "clamp(40px,5vw,72px)",
            paddingTop: "clamp(32px,4vw,48px)",
            borderTop: "2px solid var(--ink)",
          }}
        >
          <Label>My read</Label>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(48px,7.8vw,104px)",
              lineHeight: ".96",
              letterSpacing: "-.025em",
              margin: "18px 0 0",
              color: "var(--plum)",
              maxWidth: "13ch",
              textWrap: "balance",
            }}
          >
            The purchase decision had moved up a level.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "clamp(24px,3vw,36px) 0 0",
              maxWidth: "58ch",
              textWrap: "pretty",
            }}
          >
            Customers were no longer deciding whether to buy Typekit. They were
            deciding whether Fonts made Creative Cloud more valuable.
          </p>
          <p
            style={{
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "clamp(30px,4vw,48px)",
              lineHeight: "1.1",
              letterSpacing: "-.015em",
              margin: "clamp(40px,5vw,64px) 0 0",
            }}
          >
            The unit of value had changed.
          </p>

          <div
            style={{ marginTop: "clamp(64px,8vw,104px)", maxWidth: "880px" }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10.5px",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--soft)",
              }}
            >
              How I work a positioning problem
            </span>
            <div
              style={{ marginTop: "12px", borderTop: "1px solid var(--rule)" }}
            >
              {method.map((q, _i0) => (
                <Fragment key={_i0}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(180px,.9fr) minmax(0,1.6fr)",
                      gap: "8px 28px",
                      padding: "14px 0",
                      borderBottom: "1px solid var(--rule)",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontStyle: "italic",
                        fontSize: "clamp(20px,2.2vw,24px)",
                        lineHeight: "1.2",
                      }}
                    >
                      {q.q}
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.5",
                        textWrap: "pretty",
                      }}
                    >
                      {q.a}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 4 WHAT THAT CHANGED */}
        <div ref={propRef} style={{ marginTop: "clamp(72px,9vw,128px)" }}>
          <Label>What that changed</Label>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(30px,4vw,48px)",
              lineHeight: "1.08",
              letterSpacing: "-.02em",
              margin: "16px 0 0",
              maxWidth: "20ch",
              textWrap: "balance",
            }}
          >
            If the product had a new job, everything around it had to change
            too.
          </p>

          <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10.5px",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--plum)",
              }}
            >
              Position
            </span>
            <p
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px 16px",
                alignItems: "baseline",
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(28px,3.6vw,44px)",
                lineHeight: "1.1",
                letterSpacing: "-.02em",
                margin: "8px 0 0",
              }}
            >
              <span
                style={{
                  color: "var(--soft)",
                  textDecoration: "line-through",
                  textDecorationColor: "var(--terra)",
                  textDecorationThickness: "2px",
                }}
              >
                Standalone subscription
              </span>
              <span style={{ color: "var(--terra)" }}>→</span>
              <span>Creative Cloud membership benefit</span>
            </p>
          </div>

          <div
            style={{
              position: "relative",
              height: "2px",
              background: "var(--rule)",
              marginTop: "clamp(32px,4vw,48px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                height: "2px",
                width: lineW,
                background: "var(--terra)",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,260px),1fr))",
              gap: "clamp(24px,4vw,48px)",
            }}
          >
            {groups.map((g, _i0) => (
              <Fragment key={_i0}>
                <div
                  style={{
                    paddingTop: "20px",
                    opacity: g.opacity,
                    transition: "opacity .4s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10.5px",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: g.kColor,
                      transition: "color .3s ease",
                    }}
                  >
                    {g.k}
                  </span>
                  <div
                    style={{ display: "grid", gap: "10px", marginTop: "14px" }}
                  >
                    {g.items.map((it, _i1) => (
                      <Fragment key={_i1}>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2px 10px",
                            alignItems: "baseline",
                            fontSize: "16.5px",
                            lineHeight: "1.45",
                            textWrap: "pretty",
                          }}
                        >
                          {it.hasOld && (
                            <>
                              <span
                                style={{
                                  fontFamily: "var(--display)",
                                  fontSize: "clamp(22px,2.4vw,28px)",
                                  color: "var(--soft)",
                                  textDecorationLine: it.strike,
                                  textDecorationColor: "var(--terra)",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                {it.old}
                              </span>
                              <span style={{ color: "var(--terra)" }}>→</span>
                            </>
                          )}
                          <span
                            style={{
                              fontFamily: it.font,
                              fontSize: it.size,
                              fontWeight: it.weight,
                            }}
                          >
                            {it.t}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(22px,2.4vw,28px)",
              lineHeight: "1.35",
              margin: "clamp(48px,6vw,80px) 0 0",
              maxWidth: "40ch",
              textWrap: "pretty",
            }}
          >
            This wasn’t only a messaging change. The new position changed what
            we named the product, how customers found it inside Creative Cloud,
            how legacy users moved over, what partner attribution looked like,
            and what we chose to measure.
          </p>

          <div style={{ marginTop: "clamp(56px,7vw,96px)" }}>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(26px,3.2vw,38px)",
                lineHeight: "1.12",
                letterSpacing: "-.02em",
                margin: "0",
                maxWidth: "24ch",
                textWrap: "balance",
              }}
            >
              The position stayed the same.{" "}
              <span style={{ fontStyle: "italic", fontWeight: "400" }}>
                The proof changed by audience.
              </span>
            </p>
            <div
              style={{
                marginTop: "clamp(20px,2.5vw,28px)",
                borderTop: "1px solid var(--rule)",
                maxWidth: "900px",
              }}
            >
              {AUDIENCES.map((au, _i0) => (
                <Fragment key={_i0}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
                      gap: "6px 28px",
                      padding: "16px 0",
                      borderBottom: "1px solid var(--rule)",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10.5px",
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "var(--soft)",
                      }}
                    >
                      {au.a}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontStyle: "italic",
                        fontSize: "clamp(19px,2vw,23px)",
                        lineHeight: "1.35",
                        textWrap: "pretty",
                      }}
                    >
                      {au.p}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 5 REALITY CHECK */}
        <div
          style={{
            margin: "clamp(72px,9vw,128px) calc(-1 * clamp(20px,5vw,72px)) 0",
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "clamp(56px,8vw,112px) clamp(20px,5vw,72px)",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--terra)",
            }}
          >
            Reality check
          </span>
          <p
            style={{
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontSize: "clamp(24px,2.8vw,34px)",
              lineHeight: "1.3",
              margin: "20px 0 0",
              maxWidth: "34ch",
              textWrap: "pretty",
            }}
          >
            We were putting the Adobe name on a service built from the work of
            independent foundries. Some partners worried their brands would
            disappear behind ours.
          </p>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(48px,7.6vw,100px)",
              lineHeight: ".98",
              letterSpacing: "-.025em",
              margin: "clamp(40px,5vw,64px) 0 0",
            }}
          >
            I kept the strategy.
            <br />
            <span style={{ color: "var(--terra)" }}>I changed the plan.</span>
          </p>
          <div
            style={{
              marginTop: "clamp(36px,4vw,56px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,280px),1fr))",
              gap: "clamp(24px,4vw,48px)",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                borderTop: "2px solid var(--paper)",
                paddingTop: "14px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10.5px",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "#CDBFB6",
                }}
              >
                What I held
              </span>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.5",
                  margin: "8px 0 0",
                }}
              >
                The product needed to become Adobe Fonts.
              </p>
            </div>
            <div
              style={{
                borderTop: "2px solid var(--terra)",
                paddingTop: "14px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10.5px",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                What I changed
              </span>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.5",
                  margin: "8px 0 0",
                }}
              >
                How prominently foundry identity and contribution appeared in
                the story and experience.
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              color: "#CDBFB6",
              margin: "clamp(32px,4vw,48px) 0 0",
            }}
          >
            Feedback can improve execution without invalidating the strategy.
          </p>
        </div>

        {/* 6 PROOF */}
        <div style={{ marginTop: "clamp(72px,9vw,128px)" }}>
          <Label>Proof</Label>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(36px,5.4vw,68px)",
              lineHeight: "1.02",
              letterSpacing: "-.025em",
              margin: "16px 0 0",
              maxWidth: "18ch",
              textWrap: "balance",
            }}
          >
            Usage told us the launch worked.{" "}
            <span style={{ color: "var(--plum)" }}>
              Retention tested whether the position was right.
            </span>
          </p>

          <div
            style={{
              marginTop: "clamp(40px,5vw,64px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,360px),1fr))",
              gap: "clamp(32px,5vw,72px)",
              alignItems: "start",
            }}
          >
            <div
              style={{ borderTop: "2px solid var(--plum)", paddingTop: "18px" }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10.5px",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--plum)",
                }}
              >
                Membership value
              </span>
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(88px,13vw,168px)",
                  lineHeight: ".9",
                  letterSpacing: "-.03em",
                  color: "var(--plum)",
                  marginTop: "16px",
                }}
              >
                &gt;40%
              </div>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(22px,2.4vw,28px)",
                  lineHeight: "1.25",
                  margin: "16px 0 0",
                  maxWidth: "22ch",
                }}
              >
                lower next-month churn among Adobe Fonts adopters
              </p>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: "1.55",
                  color: "var(--soft)",
                  margin: "16px 0 0",
                  maxWidth: "52ch",
                  textWrap: "pretty",
                }}
              >
                We had positioned Fonts as a reason to keep Creative Cloud. So a
                year later, I commissioned the analysis that could actually test
                that claim: a causal retention analysis across about 3.25
                million Creative Cloud Complete subscribers. We repeated it
                every year, and it became part of the executive case for
                continued investment.
              </p>
            </div>
            <div style={{ display: "grid", gap: "clamp(24px,3vw,36px)" }}>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10.5px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                  }}
                >
                  Adoption
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: "500",
                      fontSize: "clamp(40px,4.6vw,56px)",
                      lineHeight: "1",
                      letterSpacing: "-.02em",
                    }}
                  >
                    +40%
                  </span>
                  <span style={{ fontSize: "15.5px" }}>
                    Monthly active users in year one
                  </span>
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10.5px",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                  }}
                >
                  Partner trust
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: "500",
                      fontSize: "clamp(40px,4.6vw,56px)",
                      lineHeight: "1",
                      letterSpacing: "-.02em",
                    }}
                  >
                    0
                  </span>
                  <span style={{ fontSize: "15.5px" }}>
                    Foundry partner losses
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "var(--soft)",
                    margin: "8px 0 0",
                    textWrap: "pretty",
                  }}
                >
                  Legacy customers got their own migration communication.
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontSize: "clamp(22px,2.4vw,28px)",
              lineHeight: "1.3",
              margin: "clamp(48px,6vw,72px) 0 0",
              maxWidth: "40ch",
              textWrap: "pretty",
            }}
          >
            We measured what the position promised. Fonts had become a reason
            members stayed.
          </p>
        </div>

        {/* SYNTHESIS */}
        <div
          data-wt-ending="03"
          style={{
            marginTop: "clamp(72px,9vw,128px)",
            background: "var(--paper-2)",
            borderRadius: "8px",
            padding: "clamp(48px,8vw,120px) clamp(24px,6vw,88px)",
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
              maxWidth: "19ch",
              textWrap: "balance",
            }}
          >
            Positioning starts before the story.{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              It starts with deciding what job the product plays in the
              business.
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
            Once that job changes, the customer promise, the partner
            relationship, the product experience, GTM, and how you measure
            success all have to change with it.
          </p>
        </div>
        <div style={{ height: "clamp(120px,16vw,220px)" }}></div>
      </section>
    </main>
  );
}
