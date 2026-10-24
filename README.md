# Working Theory

Working Theory is an interactive editorial web application built around real decisions from Nicole Miñoza’s work across Product Marketing and Product.

It reconstructs each problem around:

- what she believed
- what the evidence complicated
- what changed
- what she carried forward

The central idea is:

> **A point of view strong enough to act on, and open enough to change when the evidence does.**

## Current cases

### Problem 01 · Adobe · 2020–2024

**The company needed one platform. Every team had a reason to say no.**

A platform-strategy case about getting a shared text engine adopted across product teams and turning migration into cross-product governance.

### Problem 02 · Adobe · 2019–2022

**The product was growing. The economics were breaking.**

A business-model case about moving partner royalties from activation to usage and making the transition work across Product, partners, and customers.

### Problem 03 · Adobe · 2018

**The product was no longer something customers bought.**

A positioning and go-to-market case about Typekit becoming Adobe Fonts and the shift from standalone purchase to Creative Cloud membership value.

## Experience

Routes:

- `#/` — Home
- `#/01` — Problem 01, Shared Text Engine
- `#/02` — Problem 02, Usage-based partner economics
- `#/03` — Problem 03, Typekit → Adobe Fonts

The application remembers theories the visitor has earned by reaching the end of a case and reflects them back on the home page.

Reading one case is a complete visit.

There is no required sequence, completion state, or progress system.

## Working theory

The three current earned theories are:

1. **A company-level strategy doesn’t become a team-level priority on its own.**
2. **A business model only works if the product can measure what it values.**
3. **Positioning starts before the story. It starts with deciding what job the product plays in the business.**

The home page shows only the theories the visitor has actually earned, in the order they earned them.

## Documentation

- `docs/WORKING_THEORY_PRD.md` — product and application brief
- `docs/CASE_DESIGN_PRINCIPLES.md` — cross-case editorial and design rules
- `docs/EXPERIENCE_ARCHITECTURE.md` — routes, state, persistence, navigation, and integration behavior

See `CLAUDE.md` for Claude Code working instructions and source-of-truth rules.

## Build approach

Working Theory was developed with:

- Claude for research and pressure-testing
- Claude Design for visual exploration
- Claude Code for implementation

The judgment remains Nicole’s.

## Current development phase

Problems 01–03 are editorially and visually approved.

Current work is focused on:

- integrating the final case versions into the stateful application
- removing stale embedded case copy
- validating earned-theory behavior
- validating scroll restoration and navigation
- responsive QA
- final production cleanup

Do not treat the current phase as open-ended design exploration.
