---
name: 906 Digital
description: A night instrument panel — a matte panel, brushed placard plates, and one equipment data plate carrying six checkable truths about a one-person business.
colors:
  panel: "#14181B"
  face: "#0B0E10"
  deep-cut: "#05080A"
  lume: "#ECEFF1"
  lume-dim: "#9BA5AB"
  radium: "#7FD4A2"
  caution: "#E0A21A"
  plate: "#C9CFD2"
  plate-shade: "#B8BFC3"
  plate-ink: "#0B0E10"
  hair: "#2A3238"
  hair-2: "#39434A"
  entry-green: "#1F6B45"
  entry-green-ring: "rgba(31,107,69,.2)"
  placeholder: "#7F8A90"
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
  entity:
    fontSize: "25px"
    fontWeight: 800
    letterSpacing: "0.005em"
    fontFeature: "tabular-nums"
  price:
    fontSize: "25px"
    fontWeight: 800
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  readout:
    fontSize: "19px"
    fontWeight: 800
    letterSpacing: "0.01em"
    fontFeature: "tabular-nums"
  spec-value:
    fontSize: "17px"
    fontWeight: 600
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
  action-sm:
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.14em"
  placard:
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.19em"
    fontFeature: "tabular-nums"
  # Supporting steps, recorded as built. The 13.5-16px cluster is drift, not a
  # system: six near-duplicate steps authored per component. See the prose note
  # under Typography > Hierarchy for the consolidation this needs.
  supporting-lg:
    fontSize: "16px"
    fontWeight: 400
  supporting:
    fontSize: "15.5px"
    fontWeight: 400
  supporting-sm:
    fontSize: "15px"
    fontWeight: 400
  spec:
    fontSize: "14.5px"
    fontWeight: 400
  fine:
    fontSize: "14px"
    fontWeight: 400
  fineprint:
    fontSize: "13.5px"
    fontWeight: 400
rounded:
  machined: "3px"
  lamp: "50%"
spacing:
  gutter: "28px"
  row: "16px"
  item: "22px"
  gutter-wide: "26px"
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
    typography: "{typography.action-sm}"
    rounded: "0"
    padding: "10px 18px"
    height: "44px"
  nav-cta-hover:
    backgroundColor: "{colors.radium}"
    textColor: "{colors.face}"
  data-plate:
    backgroundColor: "{colors.face}"
    textColor: "{colors.lume}"
    rounded: "{rounded.machined}"
    padding: "4px 26px 8px"
  data-plate-row:
    backgroundColor: "transparent"
    textColor: "{colors.lume}"
    typography: "{typography.spec-value}"
    padding: "16px 0"
  data-plate-row-caution:
    textColor: "{colors.caution}"
  hero-photo:
    rounded: "{rounded.machined}"
    width: "800px"
    height: "980px"
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
    typography: "{typography.supporting-lg}"
    rounded: "{rounded.machined}"
    padding: "14px 16px"
  entry-lamp:
    backgroundColor: "{colors.entry-green}"
    rounded: "{rounded.lamp}"
    size: "11px"
  row-lamp:
    backgroundColor: "{colors.caution}"
    rounded: "{rounded.lamp}"
    size: "9px"
  warn-lamp:
    backgroundColor: "{colors.face}"
    rounded: "{rounded.lamp}"
    size: "13px"
  caution-lamp:
    backgroundColor: "{colors.caution}"
    rounded: "{rounded.lamp}"
    size: "15px"
---

# Design System: 906 Digital

## Overview

**Creative North Star: "The Night Instrument Panel"**

The page is a matte instrument panel photographed at night. Its argument is not made in adjectives — it is made in hardware. A photograph of the person establishes who; directly beneath it an **equipment data plate** carries six facts a suspicious visitor can check on their own: the town, the size of the crew, the reply time, the registered entity number, the number of web fonts downloaded, and whether the demo line is answering. Colour is confined to lamps, links, and the action. The reading field stays luminous white on panel and is never tinted. Where a normal landing page would put a badge, a gradient, or a testimonial, this one puts a stamped label and a value and lets the visitor read it.

The material vocabulary is narrow and physical: a matte panel ground (`#14181B`), instrument faces cut deeper than the panel (`#0B0E10`), brushed placard plates in light metal that carry dark text, hairline rule work, and machined 3px edges — panels are *cut*, not rounded. Depth comes from the physics of a real panel: an engraved text-shadow whose direction changes with the ground it sits on, a hard 1px top highlight and a long soft drop under raised surfaces, four corner fasteners painted into the data plate where a real panel carries screws. Nothing is drawn as an illustration; the only vector on the page is the footer's stroked arrow.

An earlier build put those same six facts on a **six-gauge instrument cluster** — compass card, graduated arcs, drum counter, annunciator plate, needles and dashed tick rings, and a damped needle settle. It was removed on 2026-08-28. The dials read as clocks, and a needle pointing at "1" on a 0–4 arc is precision about nothing: there is no scale, nobody measures a crew of one against a maximum of four, and it forced a visitor to *decode* a fact they should simply be able to *read*. The data plate is the same six facts in the same world, read instead of decoded. **Do not reintroduce dials, needles, tick rings, or any drawn gauge to carry a fact that is a label and a value.**

This world is a deliberate refusal of what the page used to be — cream ground, sans display type, a pricing grid with a featured tier. It is also budget-constrained on purpose: **no web font is downloaded, ever**. The display voice is built from weight, tracking, tabular numerals, and engraving instead of from a sourced face. That is a pinned product constraint, and it outranks the general craft rule that a display world should ship a display face. The deviation is recorded in a comment in `<head>` and must not be "fixed" by adding a font link.

Scope note: this system describes `index.html`. `advisory.html` still runs the project's older copper-and-birch light system and has not been converted; do not mix the two palettes on one page.

**Key Characteristics:**
- Panel realism from material, not from drawing: fasteners, hairlines, bezels, engraving, lamps
- Facts are stamped as label/value rows, never plotted on a scale
- Colour only on lamps, links, and the action — never on the reading field
- Amber means exactly one thing, everywhere on the page
- Machined 3px corners; circles reserved for lamps
- Zero downloaded fonts; display voice from weight, tracking, and engraving
- Every numeral is a tabular readout
- No authored motion at all

## Colors

A near-monochrome night panel with two signal colours that are rationed to the point of being a language.

### Primary
- **Radium Green** (`#7FD4A2`): the live-signal colour. With the needles gone it now marks lit lamps, every link on the panel ground, the primary button fill, the header CTA outline, the lit rule above the hero reply prompt, the entry-plate ring, the focus ring, the caret, and the selection background. 10.5:1 on panel. It carries no other job — it is not a decorative accent and it never becomes a background wash.

### Secondary
- **Caution Amber** (`#E0A21A`): means one thing and one thing only — *a system of this business that is currently off*. It appears in exactly two places: the demo-line row on the data plate (its value text plus a small lit 9px lamp beside the label), and the caution panel above the lead form. It is also borrowed by the form's invalid-field border and error status, which are the same statement (something here is not working) rather than a new one. 7.8:1 on panel.

### Neutral
- **Lume** (`#ECEFF1`): luminous markings — primary ink for all body copy, headings, and data-plate values. 15.9:1 on panel.
- **Dim Lume** (`#9BA5AB`): secondary markings — lead paragraphs, section intros, data-plate labels, placard lettering, form labels, footer text, unlit lamp rings. 7.0:1 on panel.
- **Panel** (`#14181B`): the matte panel ground; the page background.
- **Face** (`#0B0E10`): surfaces cut deeper than the panel. Used for the data plate, annunciator cells, the caution panel, form inputs, the sticky header (at 92% with an 8px blur), and the footer.
- **Raised Placard Body** (`#191F23`): the panel's raised-but-still-dark surface. Declared in `:root` and currently unreferenced — kept as a reserved step, not evidence of a pattern.
- **Deep Cut** (`#05080A`): the deepest cut on the page, now used only for the shadow ring inside each of the data plate's four fasteners. A literal in the build, not a custom property.
- **Brushed Plate** (`#C9CFD2`) and **Plate Shade** (`#B8BFC3`): the light metal placard, drawn as a top-to-bottom gradient between them. The only light surfaces on the page.
- **Plate Ink** (`#0B0E10`): text on the brushed plate. 13.4:1 on plate. Supporting copy on plates is the same ink at 66–80% alpha rather than a separate grey token.
- **Entry Green** (`#1F6B45`, with `rgba(31,107,69,.2)` as its glow ring): the lit lamp marking the entry-point plate. A *separate* green from radium on purpose — radium is calibrated for the dark panel and fails contrast on the light brushed plate, so the plate gets its own darker green. The entry marker is a lamp only; it carries no text.
- **Placeholder Grey** (`#7F8A90`): input placeholder text on the face-coloured inputs. 5.3:1 on face — chosen by measurement, because the first value used was 4.29:1 and failed.
- **Hairline** (`#2A3238`) and **Bright Hairline** (`#39434A`): all rule work. The dim hairline draws section dividers, the data plate's border and its row separators, and the annunciator's gutter; the bright one draws input borders, the photograph's mount, the scrollbar thumb, the caution panel's border, the fastener heads, and the hero's mounting seam.

### Named Rules
**The Two Lamps Rule.** Radium means live; amber means off. Amber is never borrowed for the visitor's own problems, for emphasis, for a highlight, or for a warning about anything outside this business's own systems. The annunciator cells describing the visitor's leaks use a deliberately *unlit* lamp — a face-filled disc with a 2px dim-lume ring — precisely because lighting them amber would spend the page's one reserved word on someone else's problem.

**The Uncoloured Field Rule.** The reading field is never tinted. Body copy, headings, and data-plate values are lume or dim-lume on panel; no paragraph, card, row, or section ever takes a coloured background, gradient wash, or tinted text treatment. The one exception is the single caution row, and that is the whole point of it.

**The Ratio-On-Record Rule.** Every colour used for text carries its computed contrast against the surface it sits on, recorded in the stylesheet beside the token. New colours are verified by computation before they ship, not by eye.

## Typography

**Display Font:** none downloaded. `Inter` is named first so it renders for visitors who already have it, then the platform UI stack (`-apple-system`, `BlinkMacSystemFont`, `system-ui`, `sans-serif`).
**Body Font:** the same stack. There is one family on the page.

**Character:** The display voice is *constructed*, not sourced. It comes from four devices used together: heavy weight (800), tight negative tracking (-0.022em on all headings, -0.035em on the h1), tabular numerals everywhere, and an engraved text-shadow that reads as lettering cut into the panel rather than printed on it. Against that, the label voice runs the opposite direction — 11–13px, weight 700, uppercase, wide 0.13–0.22em tracking — which is exactly how real placard lettering behaves next to instrument numerals. The gap between those two settings does the work a second typeface would normally do.

### Hierarchy
- **Display** (800, `clamp(38px, 5.4vw, 68px)`, 1.03, -0.035em, `max-width: 15ch`): the h1 only. One phrase inside it — the town — is promoted to its own line in radium (`h1 em`, `font-style: normal`), because that is the single fact that clears the scam question.
- **Headline** (800, `clamp(28px, 3.5vw, 42px)`, 1.1, `max-width: 20ch`): section h2.
- **Title** (800, 22px on plates; 700, 18–19px in annunciator cells and the caution panel): component headings.
- **Entity** (800, 25px, +0.005em, tabular): the Michigan entity number on the data plate — the one row given display size, because it is the one fact a scam cannot produce. Prices are the same size in the opposite direction (800, 25px, -0.03em): a number to read fast, not a number to verify.
- **Readout** (800, 19px, +0.01em, tabular): the footer's entity number — the plate voice reused outside the plate.
- **Spec value** (600, 17px, tabular, right-aligned): every other data-plate value.
- **Body** (400, 17px, 1.62): all running copy. Measures are capped per role: 56ch lead, 62ch section intro and about copy, 68ch section outro, 46ch annunciator copy and hero reply, 40ch plate description.
- **Lead** (400, 18px, dim lume): the hero paragraph and section intros.
- **Action** (700, 13px, 0.13em, uppercase): buttons. The header CTA is 12px/0.14em; the logo wordmark 11px/0.22em.
- **Placard** (700, 11px, 0.17–0.19em, uppercase, dim lume): plate designations, data-plate labels, and form labels. The data-plate label sits at 0.17em; the shared `.placard` class at 0.19em.
- **Supporting** (400, 13.5–16px): the sizes that carry secondary copy — 16px hero reply and inputs, 15.5px annunciator and caution copy and the alt-contact line, 15px plate descriptions and form status, 14.5px plate spec items, 14px footer, 13.5px price notes and form fineprint.

  **These six near-duplicate steps between 13.5px and 16px are drift, not a system.** They were authored per-component rather than from a ramp, and 13.5/14/14.5/15/15.5/16 are not meaningfully distinguishable to a reader. A future pass should collapse them to two steps (15px supporting, 13.5px fine print) and re-verify contrast at the new sizes. Recorded here as what is built, flagged as what should change.

### Named Rules
**The No Downloaded Face Rule.** No `@font-face`, no font CDN link, no `<link rel="preconnect">` to a font host — ever. If the display voice needs more force, it comes from weight, tracking, size, or engraving. This is the page's performance thesis and it is also one of the six facts stamped on the data plate: *Web fonts loaded — None*. Adding a font makes the page lie about itself.

**The No Kicker Rule.** Nothing goes above a heading. No eyebrow, no tracked category line, no badge, no "START HERE" label. Kickers have been built and removed here more than once; the entry-point plate is marked by a lit lamp with screen-reader-only text ("Most people start here.") for exactly this reason. Placard lettering is for plate *designations*, data-plate labels, and form labels — never for a line stacked above an `<h2>` or `<h3>`.

**The Tabular Numeral Rule.** `font-variant-numeric: tabular-nums` on every heading, every numeral class, and every data-plate value. Every number on this page is an instrument readout and must align like one.

## Layout

A single centred column, 1140px maximum, with 28px side gutters — the panel is one continuous surface rather than a set of floating cards.

**Vertical rhythm.** Sections run 88px of top and bottom padding (the final CTA takes 96px at the bottom) and are separated by a 1px dim hairline; below 720px that collapses to 62px. Inside a section the rhythm is consistent: heading, 20px to the intro paragraph, 44px to the main content block (the form is 40px), 34px to the closing paragraph. Component internals sit on a tighter step: 34px hero block spacing, 22px between form fields, 16px above and below each data-plate row, 14–16px between plates.

**Breakpoints.** Two, both min-width, plus one compaction rule:
- **≥720px** — the annunciator goes two-up.
- **≥980px** — the hero becomes a two-column grid (`1.14fr .86fr`, 54px column gap), copy left and media right, vertically centred.
- **≤719px** — plates go single-column, hero padding drops to 44px/52px, sections to 62px.

**The hero's two-mode wrapper is load-bearing.** `.hero-copy` is a real box only at ≥980px (`display: block`), where the copy must be **one grid cell** beside the media column. While it was permanently dissolved, the media spanned four rows and its height was shared out between the paragraphs, opening a dead gap after every one of them. Below 980px the wrapper becomes `display: contents` so its children join the hero's flex column and can be interleaved with the media by explicit `order`: **headline (1), lead (2), CTA row (3), media — photograph + data plate (4), reply prompt (5).**

That order satisfies two requirements an earlier pass traded against each other: the primary action stays inside the first viewport, *and* the top of the media column sits directly beneath it, still above the fold. Putting the media before the lead pushed the button to roughly y=1230. Do not reorder, and do not remove the `display: contents` / `display: block` switch — either half alone reintroduces one of the two failures.

### Named Rules
**The Rank Cannot Orphan Rule.** Repeating elements are laid out as a rank with a fixed column count, not an auto-fit grid. The five service plates are a single-column rank precisely because a 3-column auto-fit resolved to 3+2 and left an empty slot on the page's most important section.

## Elevation & Depth

Depth here is physical and directional, not a generic drop shadow. Every raised surface gets the same two-part treatment: a 1px hard highlight on its top lip (light from above) plus a long, soft, dark drop beneath it. Face-coloured surfaces go the other way — they are *cut into* the panel, so they get a dark fill and a hairline stroke instead of a shadow. Lamps glow with concentric rgba rings.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 0 rgba(255,255,255,.04), 0 18px 40px rgba(0,0,0,.55)`): the hero photograph and the data plate beneath it — the two mounted objects in the hero. The deepest lift on the page.
- **Plate** (`box-shadow: 0 1px 0 rgba(255,255,255,.14), 0 10px 22px rgba(0,0,0,.45)`): brushed placard plates. Brighter top lip because light metal catches more.
- **Entry ring** (`var(--shadow-plate), 0 0 0 2px var(--radium)`): the one plate that is the recommended entry point. A ring, not a raise — its elevation is identical to its siblings.
- **Focus glow on inputs** (`0 0 0 3px rgba(127,212,162,.16)` with a radium border): a lamp coming up behind the readout.
- **Row lamp** (`0 0 10px rgba(224,162,26,.5)`): the 9px amber lamp on the data plate's caution row.
- **Caution lamp glow** (`0 0 0 4px rgba(224,162,26,.13), 0 0 16px rgba(224,162,26,.5)`): the strongest glow on the page, on the 15px lamp of the caution panel.
- **Fasteners**: four `radial-gradient` screws painted into the data plate's background at 11px from each corner — bright-hairline head, deep-cut shadow ring, no extra elements.

### Named Rules
**The Engraved-By-Ground Rule.** Lettering is engraved, and engraving is lit from above on whichever ground it sits on — so the shadow *must* invert between grounds. On the dark panel, headings carry `0 -1px 0 rgba(236,239,241,.09), 0 1px 0 rgba(0,0,0,.5)`: a faint lume catch on the top lip, a dark drop below. On the light brushed plate, the plate heading carries `0 1px 0 rgba(255,255,255,.55)`: a white lift below the glyph. Using either value on the other ground is the known failure — black-at-zero-blur on both rendered as nothing on the panel and as cheap embossing on the plates.

**The Cut-Or-Raised Rule.** A surface is either cut into the panel (dark fill `#0B0E10`, hairline stroke, no shadow) or raised off it (top-lip highlight plus long drop). There is no third treatment, and nothing floats without one of the two.

## Shapes

**The corner language is 3px, everywhere.** Panels are cut, not rounded: `--radius: 3px` is a machined edge, applied to the data plate, the hero photograph, the brushed plates, the caution panel, and form inputs. Buttons take no radius at all (0). Nothing on this page is pill-shaped or softly rounded.

**Circles are reserved.** `border-radius: 50%` appears only on lamps: 9px on the data plate's caution row, 11px on the entry plate, 13px unlit in the annunciator, 15px lit on the caution panel. A circle on this page means *lamp*; it is never a decorative shape or an avatar frame.

**Rule work is hairline.** All borders and dividers are 1px in `--hair` or `--hair-2`. One structural exception: the hero's bottom seam is a 1px gradient rule that fades to transparent at 12% and 88% — a mounting rail, not a divider. The data plate's rows are separated by the same 1px dim hairline, with the last row's rule removed so the plate closes cleanly.

**List markers are engraved dashes.** Spec-list bullets are a 10px × 1.5px bar at 45% plate-ink, not a glyph, disc, or checkmark. No icon font, no emoji, no glyph icons anywhere; the only SVG icon on the page is the footer's stroked arrow at `currentColor`.

## Components

### Buttons
- **Shape:** hard corners (0 radius), 1px transparent border reserved so hover can colour it without shifting layout.
- **Primary:** radium fill, face-coloured text, 13px/700/0.13em uppercase, 15px 30px padding, 48px minimum height. Hover swaps the fill to lume — brighter, not darker; a lamp turning up.
- **Header CTA:** the outline variant — radium text on a 1px radium border, 10px 18px, 44px minimum height. Hover inverts to a radium fill.
- **Quiet link:** dim-lume text on a bright-hairline underline, 15px/500, no tracking, no uppercase, zero padding. Hover raises both to lume. Used for the hero's secondary action.
- **Transitions:** 0.18s on `--ease-damp` for background, colour, and border-colour only.

### The Data Plate (signature component)
An equipment nameplate, mounted on the panel in the same frame language as the photograph above it: face ground, 1px dim-hairline border, 3px machined corner, panel elevation, four painted fasteners, `4px 26px 8px` padding. Inside it a `<dl>` of six rows, each a two-column grid (`minmax(0,1fr) auto`, 16px gap, baseline-aligned, 16px vertical padding) separated by a 1px dim hairline, the last rule removed. The whole plate is a `role="group"` with an accessible name; nothing inside it is decorative markup.

- **Label** (`dt`): placard lettering — 11px/700/0.17em uppercase dim lume, laid out as a flex row with a 9px gap so a lamp can precede the words.
- **Value** (`dd`): right-aligned, 17px/600 lume, tabular.
- **Entity row** (`.is-entity`): the value steps up to 25px/800/+0.005em. The one fact a scam cannot produce gets the size.
- **Caution row** (`.is-caution`): the value turns amber and the label gains a lit 9px amber lamp. This is the only amber on the plate and the only tinted text in the hero.

**Why it is a plate and not a cluster.** It replaced a six-gauge instrument panel. Reach for a stamped label/value row whenever a fact is a *word or an identifier*. A dial is only honest when there is a real scale a reader already knows — and none of these six facts have one.

**The reading is the whole component.** There is no face, no needle, no scale, and no decoding step: a visitor reads six lines top to bottom and is done.

### Hero Photograph
A real photograph of Joey, mounted directly above the data plate in the panel's own frame language — 1px bright-hairline border, 3px machined corner, panel elevation, 16px below it to the plate. It is the photographer's own framing, shipped at its native `800×980` with explicit `width`/`height` attributes and `loading="eager"`; the subject's head occupies roughly 49% of the frame height. An earlier 5:4 crop pushed the head to 77% and read as looming — **do not re-crop tighter.**

### Brushed Placard Plate
The panel's document form — a machined plate, not a card. Light-metal gradient (`#C9CFD2` → `#B8BFC3`), dark ink, 3px corners, plate shadow, 30px 32px padding, and a two-column split (designation + description + price on the left, spec list on the right, 34px apart) that collapses to one column below 720px. Price sits at 25px/800 with a 13px/600 qualifier; a price note follows at 13.5px. Spec items are 14.5px at 80% ink with the engraved dash marker.
- **Entry variant:** the recommended plate keeps identical elevation and adds a 2px radium ring plus an 11px lamp disc (`#1F6B45` with a 3px translucent ring) spanning the full grid width above the heading, followed by screen-reader-only text. The lamp is the entire visual marker; the words exist only for assistive technology.

### Annunciator Panel
A 1px-gutter grid over a hairline background so the cells read as a single hinged panel rather than separate cards: face-coloured cells, 30px 28px padding, a lamp column and a text column 20px apart. One column below 720px, two above. Each cell leads with an **unlit** 13px lamp — face fill, 2px dim-lume ring — then a 19px/700 heading and 15.5px dim-lume copy at 46ch.

### Caution Panel
The single amber statement outside the data plate, and it sits *before* the form, never after: a visitor clears the doubt and then converts. Face ground, bright-hairline border, 3px corners, 28px 30px padding, 720px maximum, a lit 15px amber lamp with its double glow, an 18px/700 amber heading, and dim-lume copy. It states the standard being upheld rather than apologising.

### Inputs / Fields
Inputs are readouts: recessed face-coloured wells with luminous 16px type, bright-hairline border, 3px corners, 14px 16px padding, placeholder at `#7F8A90`. Labels above are placard lettering (11px/700/0.17em uppercase, dim lume) with an "(optional)" qualifier at looser 0.1em tracking.
- **Focus:** border goes radium and a 3px translucent radium glow comes up behind it — the readout lighting.
- **Invalid:** border goes amber (`aria-invalid="true"`), and the shared live-region status below turns amber. Success turns the same region radium at 17px.
- The submit button is the primary button at full width.

### Navigation
A sticky 66px top rail: face ground at 92% alpha with an 8px backdrop blur, dim hairline below. One row only. The logo pairs a 22px/800 numeral with an 11px/0.22em uppercase dim-lume wordmark on a shared baseline. One CTA on the right, in the outline button variant.

### Footer
Face ground above a hairline, 40px vertical padding, 14px dim-lume text, flex row that wraps. The entity number is treated as the strongest verifiable artifact on the page: a placard label above it, then the number itself in lume at 19px/800 — the plate voice reused outside the plate.

### Motion
**There is none.** The page carries no authored animation whatsoever: no keyframes, no entrance or scroll-triggered reveals, no parallax, no hover transforms, and no JavaScript that drives a visual. The damped needle settle that used to be the one authored moment went out with the instrument cluster it belonged to, and its script was deleted with it.

What remains is state feedback: a 0.18s transition on `--ease-damp` (`cubic-bezier(.16, 1, .3, 1)`) applied to background, colour, border-colour, and box-shadow on the header CTA, the buttons, and the form inputs — plus native smooth scrolling. Under `prefers-reduced-motion: reduce` the block does exactly two things: turns smooth scrolling off and collapses every transition to 0.01ms. There is nothing else for it to neutralise, and that is the correct state of the file — a reduced-motion block that has to disable an animation means an animation was added.

### Named Rules
**The Permanent Reading Rule.** Every value on the data plate is permanently true and cannot drift: Ironwood Michigan; one person; one business day; entity 900169562; web fonts None; demo line off right now. All six are static text in the markup — **none of them are dynamic data, and none of them may become dynamic.** No row displays a count, a date, a streak, a client number, or anything else that requires re-verification. This repo's recurring failure is facts going stale on a page nobody re-reads; the plate is built so that cannot happen.

**The Read-Don't-Decode Rule.** A fact goes on the page in the form it is actually held in. Words and identifiers are stamped as label/value; a scale is used only when a reader already knows the scale. Precision about nothing — a needle, a meter, a percentage ring, a progress bar around a fact with no maximum — is decoration wearing the costume of data, and it costs the visitor a decoding step to arrive back at the word they could have read.

**The Real Photograph Rule.** The hero photograph may only ever be a real photograph of Joey. Never an illustration, monogram, avatar, silhouette, stock photo, or AI-generated image — a placeholder person is a fabricated person. The photo goes **above** the data plate, never instead of it: the plate carries the checkable facts and the photograph carries the person, and the page needs both. Any replacement keeps the same mount — hairline border, 3px machined corner, panel elevation — and the photographer's own framing.

## Do's and Don'ts

### Do:
- **Do** confine radium (`#7FD4A2`) to lamps, links, the primary button, the CTA outline, the lit rule above the reply prompt, and focus/caret/selection — and verify any new use against The Two Lamps Rule.
- **Do** reserve amber (`#E0A21A`) for the one meaning it has: a system of this business that is currently off.
- **Do** draw an off state as an unlit lamp — face-filled disc, dim-lume ring — when it is not one of *this business's* systems.
- **Do** stamp a new fact as a data-plate row: placard label left, tabular value right, hairline beneath — and add it only if it is permanently true.
- **Do** build display emphasis from weight (800), negative tracking (-0.022em / -0.035em), and the engraved text-shadow.
- **Do** invert the engraved shadow with the ground: lume-catch-above on the dark panel, white-lift-below on the brushed plate.
- **Do** put `font-variant-numeric: tabular-nums` on anything containing a numeral.
- **Do** cut corners at 3px, and keep circles for lamps only.
- **Do** keep the hero photograph at the photographer's framing and mount it above the data plate.
- **Do** keep the hero's `display: contents` / `display: block` wrapper switch and the mobile order — headline, lead, CTA, media, reply.
- **Do** record the computed contrast ratio beside any new colour token.

### Don't:
- **Don't** add a web font, a font CDN link, or a preconnect to one. The page states its own font-download count on the data plate; there is exactly one correct value.
- **Don't** put a kicker, eyebrow, tracked label, or badge above any heading. Mark an entry point with a lamp and screen-reader text.
- **Don't** bring back dials, needles, tick rings, drum counters, meters, or progress rings. They were removed for reading as clocks and for being precision about nothing.
- **Don't** tint the reading field. No coloured backgrounds behind copy, no gradient washes, no accent-coloured paragraphs beyond the single caution row.
- **Don't** borrow amber for the visitor's problems, for emphasis, or for any second meaning.
- **Don't** replace the hero photograph with an illustration, monogram, avatar, silhouette, stock photo, or AI-generated image — and don't let a photo replace the data plate.
- **Don't** make a data-plate value dynamic, computed, or dated. All six are permanently true by design.
- **Don't** re-crop the hero photograph tighter; the 5:4 crop that put the head at 77% of frame height read as looming.
- **Don't** add an animation. The page's motion budget is zero authored motion plus 0.18s state changes.
- **Don't** use an auto-fit grid for a rank of items that can leave an orphan.
- **Don't** round anything past 3px, and don't introduce a shadow outside the panel/plate/lamp vocabulary.
- **Don't** mix this palette with `advisory.html`'s copper-and-birch system on the same page.
