---
name: 906 Digital
description: A night instrument panel — six gauges, each owning one checkable truth about a one-person business, and one amber lamp naming what is currently off.
colors:
  panel: "#14181B"
  face: "#0B0E10"
  face-2: "#191F23"
  drum-void: "#05080A"
  lume: "#ECEFF1"
  lume-dim: "#9BA5AB"
  radium: "#7FD4A2"
  caution: "#E0A21A"
  plate: "#C9CFD2"
  plate-shade: "#B8BFC3"
  plate-ink: "#0B0E10"
  hair: "#2A3238"
  hair-2: "#39434A"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(38px, 5.4vw, 68px)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
    fontFeature: "tabular-nums"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.5vw, 42px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.022em"
    fontFeature: "tabular-nums"
  title:
    fontSize: "22px"
    fontWeight: 800
    letterSpacing: "-0.022em"
  readout:
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  price:
    fontSize: "25px"
    fontWeight: 800
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.62
  lead:
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.62
  action:
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.13em"
  placard:
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.19em"
    fontFeature: "tabular-nums"
  micro-placard:
    fontSize: "9.5px"
    fontWeight: 700
    letterSpacing: "0.17em"
rounded:
  machined: "3px"
  lamp: "50%"
spacing:
  gutter: "28px"
  item: "22px"
  block: "34px"
  group: "44px"
  section: "88px"
  section-compact: "62px"
components:
  button-primary:
    backgroundColor: "{colors.radium}"
    textColor: "{colors.face}"
    typography: "{typography.action}"
    rounded: "0"
    padding: "15px 30px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lume}"
    textColor: "{colors.face}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.lume-dim}"
    padding: "0"
  button-link-hover:
    textColor: "{colors.lume}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.radium}"
    rounded: "0"
    padding: "10px 18px"
    height: "44px"
  nav-cta-hover:
    backgroundColor: "{colors.radium}"
    textColor: "{colors.face}"
  instrument-panel:
    backgroundColor: "{colors.face}"
    rounded: "{rounded.machined}"
    padding: "26px 22px 22px"
  placard-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.machined}"
    padding: "30px 32px"
  annunciator-cell:
    backgroundColor: "{colors.face}"
    textColor: "{colors.lume}"
    rounded: "0"
    padding: "30px 28px"
  caution-panel:
    backgroundColor: "{colors.face}"
    textColor: "{colors.lume-dim}"
    rounded: "{rounded.machined}"
    padding: "28px 30px"
  input-readout:
    backgroundColor: "{colors.face}"
    textColor: "{colors.lume}"
    rounded: "{rounded.machined}"
    padding: "14px 16px"
  entry-lamp:
    backgroundColor: "#1F6B45"
    rounded: "{rounded.lamp}"
    size: "11px"
---

# Design System: 906 Digital

## Overview

**Creative North Star: "The Night Instrument Panel"**

The page is a matte instrument panel photographed at night. Its argument is not made in adjectives — it is made in instruments. Six gauges sit on a fastened face in the first viewport, each owning exactly one fact a suspicious visitor can check on their own: the town, the size of the crew, the reply time, the registered entity number, the number of web fonts downloaded, and whether the demo line is answering. Colour is confined to needles and lamps. The reading field stays luminous white on panel and is never tinted. Where a normal landing page would put a badge, a gradient, or a testimonial, this one puts a marked dial and lets the visitor read it.

The material vocabulary is narrow and physical: a matte panel ground (`#14181B`), instrument faces cut deeper than the panel (`#0B0E10`), brushed placard plates in light metal that carry dark text, hairline rule work, and machined 3px edges — panels are *cut*, not rounded. Dials are drawn as SVG with dashed tick rings, not sourced as images. Depth comes from the physics of a real panel: an engraved text-shadow whose direction changes with the ground it sits on, a hard 1px top highlight and a long soft drop under raised surfaces, four corner fasteners drawn on the six-pack where a real instrument panel carries screws.

This world is a deliberate refusal of what the page used to be — cream ground, sans display type, a pricing grid with a featured tier. It is also budget-constrained on purpose: **no web font is downloaded, ever**. The display voice is built from weight, tracking, tabular numerals, and engraving instead of from a sourced face. That is a pinned product constraint (a font request is the fastest way to undo a ~0.13s load on rural mobile signal), and it outranks the general craft rule that a display world should ship a display face. The deviation is recorded in a comment in `<head>` and must not be "fixed" by adding a font link.

Scope note: this system describes `index.html`. `advisory.html` still runs the project's older copper-and-birch light system and has not been converted; do not mix the two palettes on one page.

**Key Characteristics:**
- Instrument-panel realism: drawn dials, tick rings, bezels, fasteners, lamps
- Colour only on needles, lamps, and links — never on the reading field
- Amber means exactly one thing, everywhere on the page
- Machined 3px corners; circles reserved for lamps and dial faces
- Zero downloaded fonts; display voice from weight, tracking, and engraving
- Every numeral is a tabular readout
- One authored motion, and it is optional

## Colors

A near-monochrome night panel with two signal colours that are rationed to the point of being a language.

### Primary
- **Radium Green** (`#7FD4A2`): the live-signal colour. It marks needles, needle hubs, lit lamps, the marked good range on an arc gauge, every link on the panel ground, the primary button fill, the header CTA outline, the lit rule above the hero reply prompt, the entry-plate ring, the focus ring, the caret, and the selection background. 10.5:1 on panel. It carries no other job — it is not a decorative accent and it never becomes a background wash.

### Secondary
- **Caution Amber** (`#E0A21A`): means one thing and one thing only — *a system of this business that is currently off*. It appears in exactly two places: the demo-line annunciator instrument in the six-pack, and the caution panel above the lead form. It is also borrowed by the form's invalid-field border and error status, which are the same statement (something here is not working) rather than a new one. 7.8:1 on panel.

### Neutral
- **Lume** (`#ECEFF1`): luminous markings — primary ink for all body copy, headings, readouts, and drum digits on the panel. 15.9:1 on panel.
- **Dim Lume** (`#9BA5AB`): secondary markings — lead paragraphs, section intros, gauge labels, placard lettering, form labels, footer text, unlit lamp rings. 7.0:1 on panel.
- **Panel** (`#14181B`): the matte panel ground; the page background.
- **Face** (`#0B0E10`): instrument faces, cut deeper than the panel. Used for the six-pack ground, dial faces, annunciator cells, form inputs, the sticky header (at 92% with an 8px blur), and the footer.
- **Raised Placard Body** (`#191F23`): the panel's raised-but-still-dark surface.
- **Drum Void** (`#05080A`): the deepest cut on the page — the drum counter's window and the shadow ring inside each panel fastener. A literal in the build, not a custom property.
- **Brushed Plate** (`#C9CFD2`) and **Plate Shade** (`#B8BFC3`): the light metal placard, drawn as a top-to-bottom gradient between them. The only light surfaces on the page.
- **Plate Ink** (`#0B0E10`): text on the brushed plate. 13.4:1 on plate. Supporting copy on plates is the same ink at 66–80% alpha rather than a separate grey token.
- **Hairline** (`#2A3238`) and **Bright Hairline** (`#39434A`): all rule work. The dim hairline draws section dividers, the panel border, and the rule above a gauge label; the bright one draws bezels, tick separators, input borders, the scrollbar thumb, and the hero's mounting seam.

### Named Rules
**The Two Lamps Rule.** Radium means live; amber means off. Amber is never borrowed for the visitor's own problems, for emphasis, for a highlight, or for a warning about anything outside this business's own systems. The annunciator cells describing the visitor's leaks use a deliberately *unlit* lamp — a dark disc with a dim-lume ring — precisely because lighting them amber would spend the page's one reserved word on someone else's problem.

**The Uncoloured Field Rule.** The reading field is never tinted. Body copy, headings, and readouts are lume or dim-lume on panel; no paragraph, card, or section ever takes a coloured background, gradient wash, or tinted text treatment.

**The Ratio-On-Record Rule.** Every colour used for text carries its computed contrast against the surface it sits on, recorded in the stylesheet beside the token. New colours are verified by computation before they ship, not by eye.

## Typography

**Display Font:** none downloaded. `Inter` is named first so it renders for visitors who already have it, then the platform UI stack (`-apple-system`, `BlinkMacSystemFont`, `system-ui`, `sans-serif`).
**Body Font:** the same stack. There is one family on the page.

**Character:** The display voice is *constructed*, not sourced. It comes from four devices used together: heavy weight (800), tight negative tracking (-0.022em on all headings, -0.035em on the h1), tabular numerals everywhere, and an engraved text-shadow that reads as lettering cut into the panel rather than printed on it. Against that, the label voice runs the opposite direction — 9.5–12px, weight 700, uppercase, wide 0.13–0.22em tracking — which is exactly how real placard lettering behaves next to instrument numerals. The gap between those two settings does the work a second typeface would normally do.

### Hierarchy
- **Display** (800, `clamp(38px, 5.4vw, 68px)`, 1.03, -0.035em, `max-width: 15ch`): the h1 only. One phrase inside it — the town — is promoted to its own line in radium (`h1 em`, `font-style: normal`), because that is the single fact that clears the scam question.
- **Headline** (800, `clamp(28px, 3.5vw, 42px)`, 1.1, `max-width: 20ch`): section h2.
- **Title** (800, 22px on plates; 700, 18–19px in annunciator cells and the caution panel): component headings.
- **Readout** (800, 19px, -0.02em): gauge values and the footer's entity number. Long values drop to 15px via a modifier rather than wrapping. Prices are the same voice one step up (800, 25px, -0.03em).
- **Body** (400, 17px, 1.62): all running copy. Measures are capped per role: 56ch lead, 62ch section intro and about copy, 68ch section outro, 46ch annunciator copy and hero reply, 40ch plate description.
- **Lead** (400, 18px, dim lume): the hero paragraph and section intros.
- **Action** (700, 13px, 0.13em, uppercase): buttons. The header CTA is 12px/0.14em; the logo wordmark 11px/0.22em.
- **Placard** (700, 11px, 0.19em, uppercase, dim lume): instrument and plate designations, form labels.
- **Micro-placard** (700, 9.5px, 0.15–0.17em, uppercase, dim lume): gauge labels and readout units — the smallest lettering on the panel, always a label and never a sentence.

### Named Rules
**The No Downloaded Face Rule.** No `@font-face`, no font CDN link, no `<link rel="preconnect">` to a font host — ever. If the display voice needs more force, it comes from weight, tracking, size, or engraving. This is the page's performance thesis and it is also one of the six gauge readings: *0 web fonts downloaded*. Adding a font makes the page lie about itself.

**The No Kicker Rule.** Nothing goes above a heading. No eyebrow, no tracked category line, no badge, no "START HERE" label. Four such kickers were built and removed; the entry-point plate is now marked by a lit lamp with screen-reader-only text ("Most people start here.") for exactly this reason. Placard lettering is for instrument and plate *designations* and form labels — never for a line stacked above an `<h2>` or `<h3>`.

**The Tabular Numeral Rule.** `font-variant-numeric: tabular-nums` on every heading and every numeral class. Every number on this page is an instrument readout and must align like one.

## Layout

A single centred column, 1140px maximum, with 28px side gutters — the panel is one continuous surface rather than a set of floating cards.

**Vertical rhythm.** Sections run 88px of top and bottom padding (the final CTA takes 96px at the bottom) and are separated by a 1px dim hairline; below 720px that collapses to 62px. Inside a section the rhythm is consistent: heading, 20px to the intro paragraph, 44px to the main content block (the annunciator grid, the plate rank, the form is 40px), 34px to the closing paragraph. Component internals sit on a tighter step: 34px hero block spacing, 22px between form fields, 14–18px between plates and gauge cells.

**Breakpoints.** Two, both min-width except one compaction rule:
- **≥720px** — the annunciator goes two-up and the six-pack goes from 2 columns to 3, which is what makes it read as a *rank* of six rather than a stack.
- **≥980px** — the hero becomes a two-column grid (`1.05fr .95fr`, 54px column gap) with named areas, headline block left and the instrument panel right, vertically centred.
- **≤719px** — plates go single-column, hero padding drops to 44px/52px, sections to 62px.

**The mobile hero order is load-bearing.** Below 980px the hero is a flex column with explicit `order`: headline (1), lead (2), CTA row (3), instrument panel (4), reply prompt (5). This satisfies two requirements at once that an earlier pass traded against each other — the primary action stays inside the first viewport, *and* the panel's first row of instruments sits directly beneath it, still above the fold. Putting the panel before the lead pushed the button to roughly y=1230. Do not reorder.

### Named Rules
**The Rank Cannot Orphan Rule.** Repeating elements are laid out as a rank with a fixed column count, not an auto-fit grid. The five service plates are a single-column rank precisely because a 3-column auto-fit resolved to 3+2 and left an empty slot on the page's most important section.

## Elevation & Depth

Depth here is physical and directional, not a generic drop shadow. Every raised surface gets the same two-part treatment: a 1px hard highlight on its top lip (light from above) plus a long, soft, dark drop beneath it. Instrument faces go the other way — they are *cut into* the panel, so they get a dark fill and a bright hairline stroke instead of a shadow. Lamps glow with concentric rgba rings.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 0 rgba(255,255,255,.04), 0 18px 40px rgba(0,0,0,.55)`): the six-pack instrument face mounted on the panel. The deepest lift on the page.
- **Plate** (`box-shadow: 0 1px 0 rgba(255,255,255,.14), 0 10px 22px rgba(0,0,0,.45)`): brushed placard plates. Brighter top lip because light metal catches more.
- **Entry ring** (`var(--shadow-plate), 0 0 0 2px var(--radium)`): the one plate that is the recommended entry point. A ring, not a raise — its elevation is identical to its siblings.
- **Focus glow on inputs** (`0 0 0 3px rgba(127,212,162,.16)` with a radium border): a lamp coming up behind the readout.
- **Caution lamp glow** (`0 0 0 4px rgba(224,162,26,.13), 0 0 16px rgba(224,162,26,.5)`): the only true glow on the page, on the only lit amber lamp.
- **Fasteners**: four `radial-gradient` screws painted into the six-pack's background at 11px from each corner — bright hairline head, drum-void shadow ring, no extra elements.

### Named Rules
**The Engraved-By-Ground Rule.** Lettering is engraved, and engraving is lit from above on whichever ground it sits on — so the shadow *must* invert between grounds. On the dark panel, headings carry `0 -1px 0 rgba(236,239,241,.09), 0 1px 0 rgba(0,0,0,.5)`: a faint lume catch on the top lip, a dark drop below. On the light brushed plate, the plate heading carries `0 1px 0 rgba(255,255,255,.55)`: a white lift below the glyph. Using either value on the other ground is the known failure — black-at-zero-blur on both rendered as nothing on the panel and as cheap embossing on the plates.

**The Cut-Or-Raised Rule.** A surface is either cut into the panel (dark fill `#0B0E10`, bright hairline stroke, no shadow) or raised off it (top-lip highlight plus long drop). There is no third treatment, and nothing floats without one of the two.

## Shapes

**The corner language is 3px, everywhere.** Panels are cut, not rounded: `--radius: 3px` is a machined edge, applied to the instrument panel, plates, the caution panel, form inputs, and the square instrument frames. Buttons take no radius at all (0). Nothing on this page is pill-shaped or softly rounded.

**Circles are reserved.** `border-radius: 50%` appears only on lamps (11–15px discs) and, in SVG, on dial faces, bezels, tick rings, and needle hubs. A circle on this page means *instrument* or *lamp*; it is never a decorative shape or an avatar frame.

**Rule work is hairline.** All borders and dividers are 1px in `--hair` or `--hair-2`. Two exceptions, both structural: SVG bezels and instrument frames stroke at 3px, and the hero's bottom seam is a 1px gradient rule that fades to transparent at 12% and 88% — a mounting rail, not a divider.

**List markers are engraved dashes.** Spec-list bullets are a 10px × 1.5px bar at 45% plate-ink, not a glyph, disc, or checkmark. No icon font, no emoji, no glyph icons anywhere; the only SVG icon on the page is the footer's stroked arrow at `currentColor`.

## Components

### Buttons
- **Shape:** hard corners (0 radius), 1px transparent border reserved so hover can colour it without shifting layout.
- **Primary:** radium fill, face-coloured text, 13px/700/0.13em uppercase, 15px 30px padding, 48px minimum height. Hover swaps the fill to lume — brighter, not darker; a lamp turning up.
- **Header CTA:** the outline variant — radium text on a 1px radium border, 10px 18px, 44px minimum height. Hover inverts to a radium fill.
- **Quiet link:** dim-lume text on a bright-hairline underline, 15px/500, no tracking, no uppercase, zero padding. Hover raises both to lume. Used for the hero's secondary action.
- **Transitions:** 0.18s on `--ease-damp` for background, colour, and border-colour only.

### Instruments (signature component)
Six instruments sit on one fastened face. **They are six different instruments on purpose** — an earlier build shipped six identical dials separated only by needle angle, which is six clocks pointing at nothing.

Shared dial anatomy, drawn in a 120×120 SVG viewBox, `aria-hidden` with the value carried in text below:
- **Face** — `r=52` circle, face fill, bright-hairline stroke at 1.5
- **Bezel** — `r=55` open circle, bright-hairline stroke at 3
- **Minor tick ring** — `r=44` dashed circle, dim-lume stroke, `stroke-dasharray: 1.4 6.28`, 55% opacity (a heavier major ring at `2.2 20.84` is declared and available but unused in the shipped panel)
- **Needle** — 2.5px radium line from centre, round cap, rotated about its base
- **Hub** — `r=3.5` radium disc over the needle root

The six types, and when each is right:
1. **Compass card** — a direction, not a quantity. Cardinal letters (N/E/S/W) in place of numerals, needle at 0°. Used for *where I am*.
2. **Graduated arc gauge** — a count on a plain scale, numerals 0–4 around the arc. Used for *the crew: 1 person*.
3. **Arc gauge with a marked range** — the same dial plus a 4px radium arc across the part of the scale that is the good part. Used for *reply within 1 business day* and *0 web fonts*. Reach for this when the number only means something against a standard.
4. **Drum counter** — a square instrument frame with a drum-void window, nine tick separators, and nine tabular digits. Used for a registration number, which is an identifier and not a quantity on any scale.
5. **Annunciator plate** — a square instrument frame with a rectangular plate, a lamp, and a word (`OFF`) at 21px/800. Used for a lit/unlit state, which must not be drawn as a reading on a scale.
6. **Square instrument frame** — the 106×106 rounded-3px bezel that the drum and the annunciator both sit in, at the dials' own diameter. Without it, short instruments float with ~50px of empty face above them and the rank stops scanning as a rank.

Below every instrument: the readout (19px/800, or 15px when long) with its unit as a micro-placard block beneath, then a `gauge-label` micro-placard separated by a 7px gap above a dim hairline. **The reading lives under the face, never on it** — a text block behind a sweeping needle is what made the first build unreadable.

The caution modifier (`.gauge.is-caution`) recolours needle, hub, lamp, and readout to amber in one place, so the off-state is an instrument state rather than a defect notice bolted on.

### Brushed Placard Plate
The panel's document form — a machined plate, not a card. Light-metal gradient (`#C9CFD2` → `#B8BFC3`), dark ink, 3px corners, plate shadow, 30px 32px padding, and a two-column split (designation + description + price on the left, spec list on the right, 34px apart) that collapses to one column below 720px. Price sits in the readout voice at 25px/800 with a 13px/600 qualifier; a price note follows at 13.5px. Spec items are 14.5px at 80% ink with the engraved dash marker.
- **Entry variant:** the recommended plate keeps identical elevation and adds a 2px radium ring plus an 11px lamp disc (`#1F6B45` with a 3px translucent ring) spanning the full grid width above the heading, followed by screen-reader-only text. The lamp is the entire visual marker; the words exist only for assistive technology.

### Annunciator Panel
A 1px-gutter grid over a hairline background so the cells read as a single hinged panel rather than separate cards: face-coloured cells, 30px 28px padding, a lamp column and a text column 20px apart. One column below 720px, two above. Each cell leads with an **unlit** 13px lamp — face fill, 2px dim-lume ring — then a 19px/700 heading and 15.5px dim-lume copy at 46ch.

### Caution Panel
The single amber statement outside the six-pack, and it sits *before* the form, never after: a visitor clears the doubt and then converts. Face ground, bright-hairline border, 3px corners, 28px 30px padding, 720px maximum, a lit 15px amber lamp with its double glow, an 18px/700 amber heading, and dim-lume copy. It states the standard being upheld rather than apologising.

### Inputs / Fields
Inputs are readouts: recessed face-coloured wells with luminous 16px type, bright-hairline border, 3px corners, 14px 16px padding, placeholder at `#7F8A90`. Labels above are placard lettering (11px/700/0.19em uppercase, dim lume) with an "(optional)" qualifier at looser 0.1em tracking.
- **Focus:** border goes radium and a 3px translucent radium glow comes up behind it — the readout lighting.
- **Invalid:** border goes amber (`aria-invalid="true"`), and the shared live-region status below turns amber. Success turns the same region radium at 17px.
- The submit button is the primary button at full width.

### Navigation
A sticky 66px top rail: face ground at 92% alpha with an 8px backdrop blur, dim hairline below. One row only. The logo pairs a 22px/800 numeral with an 11px/0.22em uppercase dim-lume wordmark on a shared baseline. One CTA on the right, in the outline button variant.

### Footer — the data plate
Face ground above a hairline, 40px vertical padding, 14px dim-lume text, flex row that wraps. The entity number is treated as the strongest verifiable artifact on the page: a placard label above it, then the number itself in lume at 19px/800 — the readout voice, reused outside the panel.

### Motion
**One authored moment.** The needles sweep from a rest stop (`--sweep-from`, -118°) to their reading (`--sweep`, set per gauge as an inline custom property), damped, once, on load, over 1600ms on `--ease-damp` (`cubic-bezier(.16, 1, .3, 1)` — an exponential ease-out, the settle curve of a real damped needle). It is triggered by a class added after two `requestAnimationFrame` ticks, and everything is already fully legible before it runs: the settle is confirmation, not a reveal. Under `prefers-reduced-motion: reduce` the needles are pinned at their final angle with `transition: none`, smooth scrolling is turned off, and all remaining transitions collapse to 0.01ms.

Every other transition on the page is the same 0.18s `--ease-damp` state change on colour, background, border, or box-shadow. There are no scroll-triggered reveals, no parallax, no entrance animations, and no hover transforms.

*Build note (defect, not doctrine): in the shipped CSS the block that should read `.is-settled .needle { transform: rotate(var(--sweep, 0deg)); }` has been split by a duplicated chunk of dial rules (around lines 350–380, and again inside the reduced-motion block at 588–619), leaving a bare `.needle` rule that wins at equal specificity. The needles therefore paint at their final angle and the sweep never runs. Repair by restoring the `.is-settled` prefix and deleting the duplicated chunks — do not "simplify" the motion away.*

### Named Rules
**The Permanent Reading Rule.** Every value on an instrument is permanently true and cannot drift: Ironwood, 1 person, 1 business day, entity 900169562, 0 web fonts, demo line OFF. No gauge displays a count, a date, a streak, a client number, or anything else that requires re-verification. This repo's recurring failure is facts going stale on a page nobody re-reads; the six-pack is built so that cannot happen.

**The Different Face Rule.** No two instruments in a rank share a silhouette when they carry different *kinds* of fact. A state gets a plate, an identifier gets a drum, a quantity gets a graduated dial, a direction gets a compass card. Six identical faces at six angles is not a six-pack.

**The Empty Slot Rule.** The hero photo slot stays empty until a real photograph of Joey exists. It may never be filled with an illustration, monogram, avatar, silhouette, stock photo, or AI-generated image — a placeholder person is a fabricated person. When a real photo lands it goes **above** the six-pack (4:3, explicit width and height), not instead of it.

## Do's and Don'ts

### Do:
- **Do** confine radium (`#7FD4A2`) to needles, lamps, links, the primary button, and focus — and verify any new use against The Two Lamps Rule.
- **Do** reserve amber (`#E0A21A`) for the one meaning it has: a system of this business that is currently off.
- **Do** draw an off state as an unlit lamp — dark disc, dim-lume ring — when it is not one of *this business's* systems.
- **Do** build display emphasis from weight (800), negative tracking (-0.022em / -0.035em), and the engraved text-shadow.
- **Do** invert the engraved shadow with the ground: lume-catch-above on the dark panel, white-lift-below on the brushed plate.
- **Do** put `font-variant-numeric: tabular-nums` on anything containing a numeral.
- **Do** cut corners at 3px, and keep circles for lamps and instruments only.
- **Do** put a gauge's reading in text beneath the face, with a micro-placard label under a hairline.
- **Do** give a new fact the instrument silhouette that matches its kind, and add it only if it is permanently true.
- **Do** keep the mobile hero order — headline, lead, CTA, panel, reply — so the button and the first instrument row share the first viewport.
- **Do** record the computed contrast ratio beside any new colour token.

### Don't:
- **Don't** add a web font, a font CDN link, or a preconnect to one. The page counts its own font downloads on a gauge; there is exactly one correct value.
- **Don't** put a kicker, eyebrow, tracked label, or badge above any heading. Mark an entry point with a lamp and screen-reader text.
- **Don't** tint the reading field. No coloured backgrounds behind copy, no gradient washes, no accent-coloured paragraphs.
- **Don't** borrow amber for the visitor's problems, for emphasis, or for any second meaning.
- **Don't** fill the hero photo slot with an illustration, monogram, avatar, silhouette, stock photo, or AI-generated image — and don't let a real photo replace the six-pack.
- **Don't** put a number, a text block, or a logo inside a dial face behind the needle.
- **Don't** ship two instruments with the same silhouette for different kinds of fact.
- **Don't** add a second animation. The needle settle is the whole motion budget; state changes get 0.18s and nothing else.
- **Don't** use an auto-fit grid for a rank of items that can leave an orphan.
- **Don't** round anything past 3px, and don't introduce a shadow outside the panel/plate/lamp vocabulary.
- **Don't** mix this palette with `advisory.html`'s copper-and-birch system on the same page.
