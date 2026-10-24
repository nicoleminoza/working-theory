# Working Theory — Experience Architecture

## Purpose

This document defines the behavior of the integrated Working Theory application.

It is the source of truth for:
- routes
- shared shell
- navigation
- state
- persistence
- earned-theory behavior
- home-page behavior
- scroll restoration
- cross-case metadata

The final approved Problem 01, Problem 02, and Problem 03 implementations remain authoritative for visitor-facing case content and internal case design.

## Routes

| Route | View |
|---|---|
| `#/` | Home |
| `#/01` | Problem 01 (Shared Text Engine) |
| `#/02` | Problem 02 (Usage-based partner economics) |
| `#/03` | Problem 03 (Typekit → Adobe Fonts) |

The app is stateful.

Case views replace the main content area inside the shared application shell.

Browser back must work.

## Shared shell

### Header

Persistent Nicole Miñoza wordmark.

On case routes, show:

> `← All problems`

The link returns to `#/`.

Do not add previous case, next case, progress, or position in sequence.

### Footer

Persistent footer on every view, matching House Style.

Top row:
- Working Theory / A project by Nicole Miñoza
- nicoleminoza.com · LinkedIn · GitHub · Email (hello@nicoleminoza.com)

Bottom row, below a hairline:
- the colophon
- © 2026 Nicole Miñoza

Canonical colophon:

> Made with Claude for research and pressure-testing, Claude Design for exploration, and Claude Code for the build.

No fonts credit. No version or date line.

External links open in a new tab where currently intended.

## Cross-case metadata

### Problem 01

ID:

`01`

Problem sentence:

> The company needed one platform. Every team had a reason to say no.

Metadata:

> `Adobe · 2020–2024 →`

Full theory:

> **A company-level strategy doesn’t become a team-level priority on its own.**

Ending hook:

`data-wt-ending="01"`

### Problem 02

ID:

`02`

Problem sentence:

> The product was growing. The economics were breaking.

Metadata:

> `Adobe · 2019–2022 →`

Row annotation:

> *The product has to measure what the business values.*

Full theory:

> **A business model only works if the product can measure what it values.**

Ending hook:

`data-wt-ending="02"`

### Problem 03

ID:

`03`

Problem sentence:

> The product was no longer something customers bought.

Metadata:

> `Adobe · 2018 →`

Row annotation:

> *Positioning starts before the story.*

Full theory:

> **Positioning starts before the story. It starts with deciding what job the product plays in the business.**

Ending hook:

`data-wt-ending="03"`

If a shorter row annotation is not separately defined, use the full theory as the earned row annotation.

Do not invent a new Problem 01 short annotation during integration.

## Home — first visit

Show:
- Working Theory label
- hero
- intro
- AI provenance
- three finished problem rows
- Nicole context
- footer

Do not show:
- Working theory so far
- CTA tied to earned theories
- progress state
- completion language
- hints that anything is missing

A first visit must feel complete.

## Home — hero

Label:

`WORKING THEORY`

Hero:

> **A point of view strong enough to act on,** *and open enough to change when the evidence does.*

Intro:

> **My work has moved between Product and Product Marketing, usually where technical complexity, customer understanding, business decisions, and go-to-market meet.**

Then:

> **These are a few real decisions from that work, reconstructed around what I thought was true, what the evidence complicated, and what I changed.**

AI provenance:

> Built the way I work now: AI throughout the research, synthesis, design, and build. The judgment stays mine.

## Earned-theory state

A theory is earned only when the corresponding final learning enters the viewport.

Opening a case does not earn it.

Leaving a case before the final learning does not earn it.

Scrolling to the final learning earns it.

Use the ending hooks:
- `data-wt-ending="01"`
- `data-wt-ending="02"`
- `data-wt-ending="03"`

The shell watches the ending element for the active route.

Do not attach the earned trigger to route open, proof section, case midpoint, navigation, or time on page.

## Persistence

Persist earned case IDs in browser `localStorage`.

Storage key: `working-theory-earned-v3`.

Preserve earned order.

Example:

If the visitor reads:
1. Problem 03
2. Problem 01
3. Problem 02

then “Working theory so far” must display:
1. 03
2. 01
3. 02

Do not sort earned theories numerically after the fact.

If persistence is unavailable, the product should degrade to first-visit behavior rather than fail.

## Problem-row behavior after earning

When a theory is earned:
- add a quiet italic annotation under that problem sentence
- do not otherwise change the row
- do not dim unread rows
- do not add a checkmark
- do not add “read”
- do not add “complete”

The full theory belongs in “Working theory so far.”

The row annotation is a compressed reminder.

## Working theory so far

Show only after at least one theory has been earned.

Display theories in earned order.

Each theory number links back to its case.

Canonical synthesis:

> **These are working theories. I carry them into the next problem until the evidence gives me a reason to change them.**

Canonical CTA:

> *If one of these is a problem you’re working through, [I’d like to hear about it.](mailto:hello@nicoleminoza.com)*

Reading one case is enough for this section to feel complete.

Do not add count, total, “all three,” progress, “continue,” or recommendations.

## Navigation transitions

### Open case

When moving from home to a case:
1. save exact current home scroll position
2. fade current content out over about `140ms`
3. swap to the case route
4. position the case at top
5. fade in over about `200ms`

Do not slide, zoom, skeleton-load, or smooth-scroll through the page.

### Return home

When returning from a case:
1. swap to home immediately
2. restore exact prior home scroll position
3. fade in as currently implemented

Do not smooth-scroll.

The visitor should land back on the row they chose.

## Scroll restoration

Save the home scroll offset when a case opens.

Restore that exact offset when returning home.

Preserve the home offset for the session so browser back works and reloading a case and returning home still returns to the prior location where technically supported.

Do not reset home to the top unless there is no saved position.

## Case route behavior

Each case:
- starts at top
- uses the shared header
- renders one final approved case implementation
- contains one final ending hook
- is followed by a quiet `← All problems` navigation treatment outside the editorial conclusion
- uses the shared footer

No case may render an older embedded version.

## Source-of-truth hierarchy

Use this priority order:

### 1. Final approved case implementations

Authoritative for:
- case copy
- case-specific visual structure
- case-specific interaction
- case proof
- case conclusion

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
- home behavior
- transitions
- scroll restoration
- earned-state behavior
- cross-case integration

### 5. Existing integrated implementation

Reference only when it conflicts with any approved source above.

Do not preserve stale implementation merely because it is currently live in the repo.

## Integration rule

There must be one active visitor-facing implementation for each case route.

Avoid active duplication such as:
- old inline case plus new case component
- hard-coded copy plus conflicting data object
- duplicate imported case versions
- stale HTML fragment still reachable from a route

Obsolete code can remain only if it is clearly unreachable and intentionally retained.

Prefer removing obsolete active paths so an older case cannot accidentally render.

Do not use integration as an excuse for a broad architecture rewrite.

## Problem 02 stale-copy checks

During integration, search globally for stale Problem 02 content.

At minimum check:
- `2019–2020`
- `You can't pay for usage you can't see`
- `You can’t pay for usage you can’t see`
- `Nothing is being taken away`
- old rollout chronology
- removed `In the product` row
- removed `Sales and Support` row
- duplicate Enterprise audience row

Update or remove obsolete visitor-facing matches.

Historical design notes may retain old wording when clearly labeled as old or superseded.

## About

Home-page context section:

> **Nicole Miñoza**

> I spent 23 years at Adobe across Product Marketing and Product, building complex products for creative professionals, most recently leading the fonts and typography business. I now run **Make It Land**, a positioning practice that takes strategy through to shipped work.

Make It Land is linked inline.

Standalone CTA:

> **Résumé →**

The link points to https://nicoleminoza.com/resume.html.

## Responsive behavior

Preserve the existing editorial hierarchy on mobile.

Expected behavior:
- compact top bar
- row metadata may wrap below the problem sentence
- earned row annotation remains quiet
- theory typography scales down
- no additional fixed UI beyond the slim top bar

Do not introduce mobile-only progress or navigation systems.

## QA states

### Fresh visitor

Expected:
- `#/`
- no earned theories
- three finished problems visible
- Problem 02 metadata reads `Adobe · 2019–2022 →`
- no Working theory so far section

### Partial case read

Expected:
- open a case
- leave before final theory enters view
- return home
- no theory earned
- row unchanged

### Single case read

Expected:
- scroll final theory into view
- return home
- row receives earned annotation
- Working theory so far appears
- one theory displayed
- synthesis and CTA displayed

### Multi-case reading order

Test:
- 01 → 02 → 03
- 03 → 01 → 02

Expected:
- theories remain in earned order

### Browser navigation

Expected:
- browser back works
- home scroll position restores
- direct case routes work

### Persistence

Expected:
- earned theory state survives reload
- unavailable storage fails gracefully to first-visit behavior

### Mobile

Verify:
- no horizontal overflow
- all case content readable
- problem metadata wraps correctly
- theory section remains legible
- header does not obscure case content

## Non-goals

Do not add:
- user accounts
- server persistence
- analytics requirements
- progress dashboards
- case sequencing
- recommended next case
- search
- filters
- new case frameworks
- new visual system
- role-specific labels inside the visitor experience

The product should remain a small, editorial, stateful experience.
