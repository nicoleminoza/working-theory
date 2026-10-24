# CLAUDE.md

## Project

Working Theory is a small, stateful editorial web application that presents real decisions from Nicole Miñoza’s work across Product Marketing and Product.

The product is designed to make judgment visible.

Core idea:

> **A point of view strong enough to act on, and open enough to change when the evidence does.**

The unit is the judgment, not the project.

The governing editorial test is:

> **Can I watch the business judgment happen?**

---

## Current phase

Working Theory has completed editorial and visual exploration for Problems 01–03.

The current phase is:

- integration
- implementation
- reconciliation
- QA

Do not redesign or reinterpret approved case content unless explicitly asked.

The three finished cases are:

- **Problem 01 — Adobe · 2020–2024**
- **Problem 02 — Adobe · 2019–2022**
- **Problem 03 — Adobe · 2018**

---

## Source of truth

Use this priority order.

### 1. Final approved Problem 01, Problem 02, and Problem 03 implementations

Authoritative for:

- visitor-facing case copy
- case-specific design
- case-specific interaction
- proof
- conclusions

### 2. `docs/WORKING_THEORY_PRD.md`

Authoritative for:

- product intent
- audience
- case roles
- canonical theories
- canonical metadata
- application goals
- approved case substance

### 3. `docs/CASE_DESIGN_PRINCIPLES.md`

Authoritative for:

- cross-case editorial principles
- ownership rules
- proof rules
- design principles

### 4. `docs/EXPERIENCE_ARCHITECTURE.md`

Authoritative for:

- routes
- shared shell
- state
- persistence
- navigation
- transitions
- scroll restoration
- earned-theory behavior
- cross-case integration

### 5. Existing integrated implementation

Reference only when it conflicts with any approved source above.

Repo root provides context.

Docs record decisions.

Existing implementation is not automatically authoritative.

If approved sources genuinely conflict, stop and report the conflict rather than guessing.

---

## Design references

Final approved Claude Design exports live in `design-reference/`.

Expected reference files:

- `design-reference/home-final.html`
- `design-reference/problem-01-final.html`
- `design-reference/problem-02-final.html`
- `design-reference/problem-03-final.html`

Use these files as the visual and visitor-facing content reference for the home experience and Problems 01–03.

They are reference snapshots, not active application code.

Do not:

- import them into the app
- serve them directly
- treat them as routable production pages
- edit them as part of normal implementation work

When integrating or reconciling the live application, compare the active implementation against these reference files and the approved docs.

If a design reference conflicts with an approved document, follow the source-of-truth hierarchy above. If the conflict cannot be resolved from that hierarchy, stop and report it rather than guessing.

---

## Integration rules

- There must be one active visitor-facing implementation for each case.
- Do not preserve stale copy simply because it already exists in the app.
- Do not normalize the three cases into identical internal structures.
- Do not add new frameworks, cards, icons, progress UI, or navigation.
- Do not rewrite approved visitor-facing copy during integration.
- Preserve explicit ownership boundaries.
- Preserve earned-theory state and visitor-earned ordering.
- A theory is earned only when its final case ending enters view.
- Reading one case must feel like a complete visit.
- Do not use integration as an excuse for a broad architecture rewrite.

---

## Routes

- `#/` — Home
- `#/01` — Problem 01, Shared Text Engine
- `#/02` — Problem 02, Usage-based partner economics
- `#/03` — Problem 03, Typekit → Adobe Fonts

Browser back must work.

Case views replace the main content area inside the shared application shell.

---

## Cross-case metadata

### Problem 01

Problem sentence:

> The company needed one platform. Every team had a reason to say no.

Metadata:

> `Adobe · 2020–2024 →`

Full theory:

> **A company-level strategy doesn’t become a team-level priority on its own.**

Ending hook:

`data-wt-ending="01"`

### Problem 02

Problem sentence:

> The product was growing. The economics were breaking.

Metadata:

> `Adobe · 2019–2022 →`

Row annotation:

> The product has to measure what the business values.

Full theory:

> **A business model only works if the product can measure what it values.**

Ending hook:

`data-wt-ending="02"`

### Problem 03

Problem sentence:

> The product was no longer something customers bought.

Metadata:

> `Adobe · 2018 →`

Row annotation:

> Positioning starts before the story.

Full theory:

> **Positioning starts before the story. It starts with deciding what job the product plays in the business.**

Ending hook:

`data-wt-ending="03"`

Do not invent a new short Problem 01 annotation unless explicitly asked.

---

## Shared experience behavior

### Home

First visit shows:

- Working Theory intro
- three finished problem rows
- Nicole context
- footer

No theory section appears until at least one theory is earned.

### Earned state

A theory is earned only when its final learning enters the viewport.

Opening a case does not earn it.

Leaving before the ending does not earn it.

Persist earned IDs in `localStorage` under the key `working-theory-earned-v3`.

Preserve the order in which the visitor earned them.

### Home after earning

The corresponding problem row gains a quiet italic annotation.

The full theory appears under:

> **Working theory so far**

Unread rows remain unchanged.

Do not add:

- checkmarks
- completion labels
- counts
- progress bars
- locks
- recommendations
- previous/next navigation

### Navigation

Opening a case:

1. save exact home scroll position
2. fade out
3. swap route
4. open case at top
5. fade in

Returning home:

1. swap immediately
2. restore exact prior home scroll position
3. fade in

Do not smooth-scroll.

---

## Editorial rules

Visitor-facing copy should be:

- direct
- specific
- plainspoken
- thoughtful
- experienced
- unsentimental
- sayable aloud

Avoid:

- consultant language
- AI-generic prose
- stacked abstractions
- em dashes
- unnecessary jargon

Avoid words and phrases such as:

- leverage
- unlock
- ecosystem
- operating system
- strategic thesis
- stakeholder contract
- holistic
- align
- north star

Do not append:

- Method
- Demonstrates
- Skills
- Competencies
- résumé-style summaries

Cases end on the earned theory.

---

## Ownership rules

Never inflate Nicole’s ownership.

Distinguish clearly between:

- Nicole’s judgment
- executive decisions
- Engineering ownership
- Finance ownership
- Legal ownership
- formal contract ownership
- implementation by product teams

Precision is preferred over stronger-sounding claims.

---

## Proof rules

Proof should test the claim the case makes.

Do not add unrelated impressive metrics.

Do not turn qualitative observations into formal KPIs.

Do not append metric recaps after conclusions.

---

## Visual system

Working Theory should feel like:

> **an excellent editorial designer made a strategy product**

Use:

- Newsreader display
- Hanken Grotesk body
- Spline Sans Mono labels
- paper `#FAF6F1`
- paper-2 `#F2EADF`
- ink `#241F1D`
- plum `#6B2C41`
- terracotta `#C07A44`
- rule `#E6DCCF`

Prefer:

- flat bands
- hairlines
- editorial spacing
- strong type hierarchy

Avoid:

- SaaS cards
- dashboards
- icons
- decorative frameworks
- progress UI

---

## Before changing case content

Ask:

> Does this request explicitly reopen editorial content?

If no, preserve approved copy.

If yes, use the current approved implementation and docs as the starting point.

Do not silently “improve” copy during technical work.

---

## Before finishing an integration or QA task

Check:

- no stale visitor-facing case copy survives
- Problem 02 metadata is `2019–2022`
- each case has exactly one correct ending hook
- home earned-state behavior still works
- browser back still works
- home scroll restoration still works
- direct routes still work
- mobile has no horizontal overflow
- external links are intact
- reading one case still feels complete
