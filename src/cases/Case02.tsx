import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Label } from "../shell/Label";

export default function Case02() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [narrow, setNarrow] = useState(false);

  // Narrow layout stacks the chart above the steps.
  useLayoutEffect(() => {
    const onResize = () => {
      const el = wrapRef.current;
      if (!el) return;
      setNarrow(el.clientWidth < 760);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // The step nearest the middle of the viewport drives the chart.
  useEffect(() => {
    const els = Array.from(
      wrapRef.current?.querySelectorAll<HTMLElement>("[data-step]") ?? [],
    );
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setStep(Number(e.target.getAttribute("data-step")));
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const on = (b: boolean) => (b ? 1 : 0);
  const drawn = (b: boolean) => (b ? 0 : 1);
  const s = step;
  const options = s >= 3;
  const paid = s >= 1;

  const L = {
    display: narrow ? "block" : "grid",
    chartH: narrow ? "36vh" : "56vh",
    stepH: narrow ? "48vh" : "62vh",
  };
  const c = {
    inkV: paid ? 0 : 1,
    plumV: !paid ? 0 : options ? 0.16 : 1,
    inkL: paid ? 0 : 1,
    plumL: !paid ? 0 : options ? 0.35 : 1,
    gap: s === 2 ? 0.14 : s >= 3 ? 0.06 : 0,
    gapL: on(s === 2),
    useO: drawn(s >= 2),
    useL: on(s >= 2),
    reneg: on(s === 3),
    cons: on(s === 4),
    usageO: drawn(s === 5),
    usageL: on(s === 5),
    trend: s === 5 ? 0.9 : 0,
    mark: on(s === 5),
  };

  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 clamp(20px,5vw,72px)",
      }}
    >
      <section style={{ padding: "clamp(56px,7vw,104px) 0 0" }}>
        <div
          style={{
            display: "flex",
            gap: "10px 22px",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <div style={{ whiteSpace: "nowrap", flexShrink: "0" }}>
            <Label>Problem 02</Label>
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
            Adobe · 2019–2022
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
            maxWidth: "15ch",
            textWrap: "balance",
          }}
        >
          The product was growing. The economics were breaking.
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
            Adobe Fonts is the font library that comes with Creative Cloud.
            Independent type foundries license their fonts to it, and Adobe pays
            them royalties.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "0",
              textWrap: "pretty",
            }}
          >
            For years, those royalties were based on activations: each time a
            customer turned a font on, it counted.
          </p>
        </div>

        {/* THE MECHANISM */}
        <div
          ref={wrapRef}
          style={{
            marginTop: "clamp(64px,8vw,104px)",
            display: L.display,
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)",
            gap: "0 clamp(32px,5vw,72px)",
            alignItems: "start",
            borderTop: "2px solid var(--ink)",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "56px",
              zIndex: "1",
              background: "var(--paper)",
              padding: "clamp(20px,3vw,32px) 0 14px",
            }}
          >
            <svg
              viewBox="0 0 660 360"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: L.chartH,
                overflow: "visible",
              }}
              role="img"
              aria-label="Illustrative chart: activations and royalties climb after 2018 while actual use stays flat"
            >
              <line
                x1="0"
                y1="100"
                x2="530"
                y2="100"
                stroke="#E6DCCF"
                strokeWidth="1"
              ></line>
              <line
                x1="0"
                y1="180"
                x2="530"
                y2="180"
                stroke="#E6DCCF"
                strokeWidth="1"
              ></line>
              <line
                x1="0"
                y1="260"
                x2="530"
                y2="260"
                stroke="#E6DCCF"
                strokeWidth="1"
              ></line>
              <line
                x1="0"
                y1="320"
                x2="530"
                y2="320"
                stroke="#8a7f78"
                strokeWidth="1"
              ></line>
              <text
                x="0"
                y="342"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".1em",
                  fill: "var(--soft)",
                }}
              >
                2017
              </text>
              <text
                x="140"
                y="342"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".1em",
                  fill: "var(--soft)",
                }}
              >
                2018
              </text>
              <text
                x="280"
                y="342"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".1em",
                  fill: "var(--soft)",
                }}
              >
                2019
              </text>
              <text
                x="420"
                y="342"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".1em",
                  fill: "var(--soft)",
                }}
              >
                2020
              </text>
              <line
                x1="230"
                y1="30"
                x2="230"
                y2="320"
                stroke="#8a7f78"
                strokeWidth="1"
              ></line>
              <text
                x="230"
                y="20"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".1em",
                  fill: "var(--soft)",
                }}
              >
                LIMITS REMOVED
              </text>
              <g style={{ transition: "opacity 400ms ease", opacity: c.mark }}>
                <line
                  x1="350"
                  y1="30"
                  x2="350"
                  y2="320"
                  stroke="#C07A44"
                  strokeWidth="1"
                ></line>
                <text
                  x="350"
                  y="20"
                  textAnchor="middle"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: ".1em",
                    fill: "var(--terra)",
                  }}
                >
                  USAGE MODEL
                </text>
              </g>
              <path
                d="M230 250 C320 225 430 140 530 40 L530 232 C430 240 330 246 230 252 Z"
                fill="#C07A44"
                style={{ transition: "opacity 600ms ease", opacity: c.gap }}
              ></path>
              <text
                x="440"
                y="200"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: ".12em",
                  fill: "var(--terra)",
                  transition: "opacity 400ms ease",
                  opacity: c.gapL,
                }}
              >
                PAID FOR, NOT USED
              </text>
              <path
                d="M0 270 L530 224"
                fill="none"
                stroke="#8a7f78"
                strokeWidth="1.25"
                strokeDasharray="3 5"
                style={{ transition: "opacity 500ms ease", opacity: c.trend }}
              ></path>
              <path
                d="M0 270 L230 252 C330 246 430 240 530 232"
                fill="none"
                stroke="#C07A44"
                strokeWidth="2.5"
                pathLength="1"
                strokeDasharray="1"
                style={{
                  transition: "stroke-dashoffset 1100ms ease",
                  strokeDashoffset: c.useO,
                }}
              ></path>
              <path
                d="M0 270 L230 250 C320 225 430 140 530 40"
                fill="none"
                stroke="#241F1D"
                strokeWidth="2.75"
                style={{ transition: "opacity 400ms ease", opacity: c.inkV }}
              ></path>
              <path
                d="M0 270 L230 250 C320 225 430 140 530 40"
                fill="none"
                stroke="#6B2C41"
                strokeWidth="2.75"
                style={{ transition: "opacity 400ms ease", opacity: c.plumV }}
              ></path>
              <path
                d="M0 270 L230 250 C320 236 430 176 530 110"
                fill="none"
                stroke="#6B2C41"
                strokeWidth="2.75"
                style={{ transition: "opacity 500ms ease", opacity: c.reneg }}
              ></path>
              <path
                d="M0 270 L230 250 C320 244 430 214 530 196"
                fill="none"
                stroke="#6B2C41"
                strokeWidth="2.75"
                style={{ transition: "opacity 500ms ease", opacity: c.cons }}
              ></path>
              <path
                d="M0 270 L230 250 C300 232 330 224 350 224 C420 226 480 224 530 224"
                fill="none"
                stroke="#6B2C41"
                strokeWidth="2.75"
                pathLength="1"
                strokeDasharray="1"
                style={{
                  transition: "stroke-dashoffset 1100ms ease",
                  strokeDashoffset: c.usageO,
                }}
              ></path>
              <text
                x="542"
                y="44"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--ink)",
                  transition: "opacity 400ms ease",
                  opacity: c.inkL,
                }}
              >
                Activations
              </text>
              <text
                x="542"
                y="44"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--plum)",
                  transition: "opacity 400ms ease",
                  opacity: c.plumL,
                }}
              >
                Activations,
              </text>
              <text
                x="542"
                y="60"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--plum)",
                  transition: "opacity 400ms ease",
                  opacity: c.plumL,
                }}
              >
                and royalties
              </text>
              <text
                x="542"
                y="246"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--terra)",
                  transition: "opacity 400ms ease",
                  opacity: c.useL,
                }}
              >
                Actual use
              </text>
              <text
                x="542"
                y="114"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--plum)",
                  transition: "opacity 400ms ease",
                  opacity: c.reneg,
                }}
              >
                Lower rates
              </text>
              <text
                x="542"
                y="200"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--plum)",
                  transition: "opacity 400ms ease",
                  opacity: c.cons,
                }}
              >
                Smaller library
              </text>
              <text
                x="542"
                y="216"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  fill: "var(--plum)",
                  transition: "opacity 400ms ease",
                  opacity: c.usageL,
                }}
              >
                Paid on use
              </text>
            </svg>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--soft)",
                margin: "12px 0 0",
              }}
            >
              Illustrative. The shape, not the data.
            </p>
          </div>
          <div>
            <div
              data-step="0"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                In 2018, Adobe removed activation limits and included the
                library with most Creative Cloud plans.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                The launch worked. Activations climbed fast.
              </p>
            </div>
            <div
              data-step="1"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Royalties climbed with them.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                By summer 2019, the royalty budget was about $20 million, and
                the projection to September 2020 was very steep.
              </p>
            </div>
            <div
              data-step="2"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Activation had stopped meaning use.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                With no limits, customers had no reason to turn anything off. We
                were paying for fonts that were switched on, whether anyone used
                them or not.
              </p>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: "500",
                  fontSize: "clamp(22px,2.4vw,28px)",
                  lineHeight: "1.25",
                  margin: "12px 0 0",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--rule)",
                  textWrap: "pretty",
                }}
              >
                The launch hadn’t failed. It had worked, on an economic model
                that no longer fit the product.
              </p>
            </div>
            <div
              data-step="3"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
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
                Three ways to respond
              </span>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Renegotiate rates, partner by partner.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Lower cost, hundreds of separate negotiations, and royalties
                still tied to activation.
              </p>
            </div>
            <div
              data-step="4"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Limit the library or customer access.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Less royalty exposure, paid for by giving customers less.
              </p>
            </div>
            <div
              data-step="5"
              style={{
                minHeight: L.stepH,
                padding: "clamp(28px,4vw,48px) 0",
                display: "grid",
                alignContent: "start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px,2.6vw,30px)",
                  lineHeight: "1.28",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                Pay for use instead of activation.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.55",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                It fixed the cause. It also changed how every foundry got paid,
                depended on tracking most apps didn’t have yet, and could look
                to customers like fonts being taken away.
              </p>
            </div>
          </div>
        </div>

        {/* OWNERSHIP */}
        <div
          style={{ margin: "clamp(96px,12vw,168px) 0 clamp(24px,3vw,40px)" }}
        >
          <div
            style={{ width: "48px", height: "2px", background: "var(--ink)" }}
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
            My GM made the call to pay for use instead of activation.
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
              As head of product and product marketing,
            </span>
            <span style={{ display: "block" }}>
              I led what that required across product, partners, and customers.
            </span>
          </p>
        </div>

        {/* WHAT THAT CHANGED */}
        <div
          style={{
            marginTop: "clamp(72px,9vw,120px)",
            borderTop: "2px solid var(--ink)",
            paddingTop: "clamp(32px,4vw,48px)",
          }}
        >
          <Label>What that changed</Label>
          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(32px,4.4vw,54px)",
              lineHeight: "1.05",
              letterSpacing: "-.02em",
              margin: "16px 0 0",
              maxWidth: "20ch",
              textWrap: "balance",
            }}
          >
            Payment now depended on something the product{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              couldn’t yet see.
            </span>
          </p>

          <div
            style={{
              marginTop: "clamp(40px,5vw,64px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,320px),1fr))",
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
                  color: "var(--terra)",
                }}
              >
                Use, as we defined it
              </span>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  fontSize: "clamp(24px,2.8vw,32px)",
                  lineHeight: "1.25",
                  margin: "12px 0 0",
                  textWrap: "pretty",
                }}
              >
                Opened a document with the font and made an edit, or picked it
                from the font menu.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.55",
                  color: "var(--soft)",
                  margin: "20px 0 0",
                  maxWidth: "44ch",
                  textWrap: "pretty",
                }}
              >
                I specified the minimum behavior every app had to support.
                Engineering and the app teams built it.
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,140px) minmax(0,1fr)",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  Log
                </span>
                <span style={{ fontSize: "16.5px", lineHeight: "1.45" }}>
                  Every app records use the same way, reliably enough to pay
                  foundries on.
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,140px) minmax(0,1fr)",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  Expire
                </span>
                <span style={{ fontSize: "16.5px", lineHeight: "1.45" }}>
                  A font that hasn’t been used for a set period is marked as no
                  longer in use.
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,140px) minmax(0,1fr)",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  Deactivate
                </span>
                <span style={{ fontSize: "16.5px", lineHeight: "1.45" }}>
                  It leaves the customer’s active set.
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,140px) minmax(0,1fr)",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  Reactivate
                </span>
                <span style={{ fontSize: "16.5px", lineHeight: "1.45" }}>
                  It comes back the moment the customer needs it.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* REALITY CHECK */}
        <div style={{ marginTop: "clamp(96px,12vw,168px)" }}>
          <Label>Reality check</Label>
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
            The tracking wasn’t in every app yet.{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              And foundries had gotten used to the spike.
            </span>
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              margin: "clamp(24px,3vw,36px) 0 0",
              maxWidth: "60ch",
              textWrap: "pretty",
            }}
          >
            Conversations with foundries had started with the access change the
            year before. None of us expected growth this fast, and foundries
            were already seeing higher royalties than we had planned for. A
            sudden drop would have felt like a pay cut.
          </p>

          <p
            style={{
              fontFamily: "var(--display)",
              fontWeight: "500",
              fontSize: "clamp(26px,3.2vw,38px)",
              lineHeight: "1.15",
              letterSpacing: "-.015em",
              margin: "clamp(56px,7vw,88px) 0 0",
              color: "var(--plum)",
            }}
          >
            So I staged the landing instead of waiting for the finished system.
          </p>
          <div
            style={{
              marginTop: "clamp(24px,3vw,36px)",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                2019
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                Before automation was ready, we asked customers to turn off
                fonts they weren’t using.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                2020
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                Uninstalling and reinstalling became how customers managed their
                fonts, framed around a shorter font list and better performance.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                2021
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                As tracking came online, the product began uninstalling fonts
                that hadn’t been used in a while, for customers still on the
                activation model. Customers were told in the product when it
                happened.
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontStyle: "italic",
                    fontSize: "clamp(19px,2vw,23px)",
                    lineHeight: "1.35",
                    marginTop: "10px",
                  }}
                >
                  It looks like you haven’t used some of these fonts in a while.
                </span>
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                2022
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                Most customers were now on the usage model. Automatic
                uninstalling remained only for those still on the activation
                model.
              </span>
            </div>
          </div>

          <div
            style={{ marginTop: "clamp(72px,9vw,120px)", maxWidth: "900px" }}
          >
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(24px,2.8vw,32px)",
                lineHeight: "1.2",
                letterSpacing: "-.015em",
                margin: "0",
                maxWidth: "30ch",
                textWrap: "balance",
              }}
            >
              The business reason was economic. The customer reason had to be
              useful on its own.
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontStyle: "italic",
                fontSize: "clamp(26px,3.2vw,38px)",
                lineHeight: "1.25",
                letterSpacing: "-.01em",
                margin: "clamp(28px,3.5vw,44px) 0 0",
                paddingLeft: "clamp(18px,2vw,24px)",
                borderLeft: "2px solid var(--terra)",
                textWrap: "pretty",
              }}
            >
              Uninstall fonts that are no longer in use to keep your font list
              short and improve performance. Reinstall them whenever you need
              them again.
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: "500",
                fontSize: "clamp(24px,2.8vw,32px)",
                lineHeight: "1.2",
                letterSpacing: "-.015em",
                margin: "clamp(48px,6vw,72px) 0 0",
                textWrap: "balance",
              }}
            >
              The message helped. The rollout had to make it true.
            </p>
          </div>
          <div
            style={{
              marginTop: "clamp(24px,3vw,36px)",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                Window
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                I pushed for a long window before an unused font was
                automatically uninstalled. We started at nine months, brought it
                to six, and settled at four to six.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                Recoverability
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                Any font could be reinstalled when it was needed again. That is
                what made the customer message true.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "8px clamp(24px,4vw,56px)",
                padding: "clamp(18px,2.4vw,26px) 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--terra)",
                }}
              >
                Enterprise
              </span>
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5",
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                Enterprise customers stayed on the old terms through the first
                year, so the highest-risk accounts weren’t forced through the
                change first.
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: "clamp(56px,7vw,88px)",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "6px clamp(24px,4vw,56px)",
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
                Foundries
              </span>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  fontSize: "clamp(19px,2vw,23px)",
                  lineHeight: "1.35",
                  maxWidth: "52ch",
                  textWrap: "pretty",
                }}
              >
                The activation spike after the limits were removed wasn’t a
                sustainable baseline. The new model would bring growth back to a
                steadier path, through a staged transition rather than a cliff.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)",
                gap: "6px clamp(24px,4vw,56px)",
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
                App teams
              </span>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  fontSize: "clamp(19px,2vw,23px)",
                  lineHeight: "1.35",
                  maxWidth: "52ch",
                  textWrap: "pretty",
                }}
              >
                The ask stayed deliberately narrow: log use, expire, deactivate,
                reactivate. Enough to support the new model without turning it
                into a larger product rebuild.
              </span>
            </div>
          </div>
        </div>

        {/* PROOF */}
        <div style={{ marginTop: "clamp(96px,12vw,168px)" }}>
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
              $1M
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
                saved in the first two quarters
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
                Against a royalty budget of about $20 million, with steep growth
                projected.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "clamp(48px,6vw,72px)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,260px),1fr))",
              gap: "clamp(20px,3vw,40px)",
              borderTop: "1px solid var(--rule)",
              paddingTop: "16px",
              alignItems: "start",
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
                0
              </span>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.45",
                  margin: "8px 0 0",
                }}
              >
                foundry partners lost
              </p>
            </div>
            <div style={{ gridColumn: "span 2", minWidth: "0" }}>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.5",
                  margin: "6px 0 0",
                  maxWidth: "52ch",
                  color: "var(--soft)",
                  textWrap: "pretty",
                }}
              >
                We watched support channels, forums, and social media. There was
                very little talk about the deactivations.
              </p>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div
          data-wt-ending="02"
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
              maxWidth: "20ch",
              textWrap: "balance",
            }}
          >
            A business model only works if the product can{" "}
            <span style={{ fontStyle: "italic", fontWeight: "400" }}>
              measure what it values.
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
            Changing the economics meant changing what the product could
            observe. The business model depended on product capability.
          </p>
        </div>
        <div style={{ height: "clamp(120px,16vw,220px)" }}></div>
      </section>
    </main>
  );
}
