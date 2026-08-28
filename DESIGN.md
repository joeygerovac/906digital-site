---
name: 906 Digital
description: A modern, warm, high-trust page built around one real photograph — off-white ground, warm ink, one sage accent taken from the shirt in the portrait.
colors:
  bg: "#FCFBF9"
  surface: "#F3F4F0"
  sage-soft: "#E8EEE8"
  ink: "#1C1917"
  ink-2: "#4A453F"
  hair: "#E6E2DB"
  sage: "#4F6B56"
  sage-deep: "#435C4A"
  field: "#FFFFFF"
  field-line: "#CFC9C0"
  placeholder: "#6B655D"
  error: "#A12A18"
  scroll: "#B8B2A8"
typography:
  scale:
    small-print: "14px"
    control: "16px"
    prose: "17px"
    subhead: "17px"
    lede: "20px"
    panel-title: "20px"
    title: "22px"
    entity: "24px"
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, system-ui, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(30px, 4vw, 50px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, system-ui, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 38px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  subhead:
    fontSize: "17px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  entity:
    fontSize: "24px"
    fontWeight: 800
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums"
  price:
    fontSize: "20px"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums"
  lede:
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, system-ui, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.4
  fineprint:
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  md: "12px"
  dash: "1px"
  pill: "999px"
spacing:
  gutter: "24px"
  field: "18px"
  row: "26px"
  panel: "28px"
  block: "32px"
  stack: "40px"
  group: "56px"
  split: "64px"
  band: "56px"
  band-wide: "88px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.field}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 26px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.sage-deep}"
    textColor: "{colors.field}"
  button-link:
    textColor: "{colors.sage}"
    typography: "{typography.label}"
    height: "44px"
  nav-cta:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "13px 14px"
    width: "100%"
  field-error:
    textColor: "{colors.error}"
    typography: "{typography.fineprint}"
  callout-reply:
    backgroundColor: "{colors.sage-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  notice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
    width: "620px"
  start-pill:
    backgroundColor: "{colors.sage-soft}"
    textColor: "{colors.sage}"
    typography: "{typography.fineprint}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  next-aside:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    width: "40ch"
---

# Design System: 906 Digital

## Overview

**Creative North Star: "The Photograph and Five Facts"**

There is no metaphor here, and the absence is the decision. The owner chose this
direction himself on 2026-08-28 after two costumed worlds were built and rolled
back — a dark "night instrument panel" that read cold and coded to tech, and a
"hometown newspaper" that read cheap. The brief in his words: *modern, authentic,
very trustable — built around the photograph.* The page's whole job is to move a
visitor from "is this a scam?" to "this is a real guy in Ironwood," and it does
that with a real face, a real name, a checkable registration number, and plain
copy. Nothing on the page is dressed as anything.

The palette is sampled from the portrait rather than picked from a theory: the
off-white of the tee became the ground, the warm near-black of the beard became
the ink, and the sage of the work shirt became the single accent. The result is
warm and quiet at rest. Every surface is flat, every divider is a hairline, and
the one saturated colour appears only where the reader is meant to act or to
recognise the author's own voice. Density is generous — 56–88px between bands,
a 54ch measure on every paragraph — because the reader is skimming for evidence
on a phone, possibly on rural signal, not settling in to read.

Finish comes from restraint held consistently rather than from effects. There are
no shadows anywhere in the stylesheet, no transitions, no transforms, no
keyframes, and no downloaded font. The page is one radius, one accent, one
hairline, one surface tint, and a type ramp with three body tiers. The photograph
is the only image, it is on screen before the first scroll on every device, and
it is the only place the page raises its voice.

**Key Characteristics:**
- Off-white warm ground (#FCFBF9), never pure white as a page colour
- One sage accent (#4F6B56) with exactly one meaning: *this is mine, or act here*
- Platform UI type stack, nothing downloaded, no web font ever
- Flat by construction: zero `box-shadow` declarations in the file
- Motionless: no transition, animation, or transform; only smooth scroll, disabled under `prefers-reduced-motion`
- Declared light-only (`color-scheme: light`); no dark theme, no `prefers-color-scheme` branch
- Hairlines divide; they never colour text
- The photograph is in the first viewport at every width
- Contrast verified by computation, not by eye

## Colors

A warm, low-chroma neutral field sampled from a single photograph, carrying one
desaturated forest-sage accent and nothing else. The document declares
`color-scheme: light`, so there is one theme and the browser's own controls,
scrollbars, and form chrome render light rather than guess.

### Primary
- **Work-Shirt Sage** (#4F6B56): the only accent, and it has one job — marking what belongs to Joey or what the reader should press. It appears on the primary button, on links, on the word "Digital" in the logo, on the headline phrase *"I just make sure nobody slips through."*, on the "Most people start here" pill text, on the 8×2px dash before every spec line, on focus rings, on the text selection highlight, and as `accent-color` / `caret-color`. It clears 5.69:1 as text on the ground and carries white at 5.88:1.
- **Sage Deep** (#435C4A): the button's hover state only. White on it is 7.32:1, so the hover is a step *up* in contrast, never a fade.
- **Sage Wash** (#E8EEE8): the one tinted surface. It carries the reply callout in the hero and the "start here" pill. Ink on it computes 14.85:1; sage text on it computes 4.99:1.

### Neutral
- **Warm Paper** (#FCFBF9): the page ground. Warmer than white, cleaner than cream. The sticky header is this same colour, fully opaque — not a translucent veil, and with nothing blurred behind it.
- **Quiet Surface** (#F3F4F0): a single untinted panel colour, used once — the demo-line notice in the hero, directly under the facts strip.
- **Beard Ink** (#1C1917): all primary text, the logo, the skip link's ground, the emphasis inside body copy, the "Off right now" demo-line value, and the single full-strength rule under each service group title. 16.91:1 on the ground.
- **Second Ink** (#4A453F): secondary copy — ledes, section intros, service descriptions, the "what happens next" list, fineprint, footer, facts labels. 9.17:1 on the ground, so "secondary" never means "faint."
- **Hairline** (#E6E2DB): dividers only — header underline, band separators, facts rows, service rows, footer top edge, and the resting nav-pill border.
- **Field White** (#FFFFFF): not a ground. It is the interior of a form field, the label on the sage button, the text inside the selection highlight, and the text of the skip link.
- **Field Line** (#CFC9C0) and **Placeholder** (#6B655D): input chrome. Placeholders sit at 5.76:1 on white, above AA for body text rather than at the customary grey.
- **Scroll Thumb** (#B8B2A8): the thin scrollbar, tinted warm so the chrome matches the page.

### Tertiary
- **Alert Red** (#A12A18): one error colour doing three jobs — the status line under the form, the per-field error line beside the input, and the border of an invalid input. It is the only hue on the page besides sage, it appears only in response to a failed submit, and it never decorates. 7.10:1 on the ground.

### Named Rules
**The One Job Rule.** Sage means *mine, or press here.* If a new element is neither authored-by-Joey nor an action, it is ink or ink-2. The demo-line status in the facts strip is the test case: it is a fact, not an action, so it prints in ink like the other four. Never introduce a second accent, and never use sage to add interest to a heading, a rule, an icon, a status, or a background panel.

**The No-Pure-White-Ground Rule.** #FFFFFF is never a ground except inside a form field. Everywhere else it is text on a dark or saturated field — the button label, the selection highlight, the skip link. The page's ground is #FCFBF9, and a white block dropped onto it reads as a foreign element.

**The Token-Only Rule.** Every colour in the stylesheet is a `var(--…)`. There is no longer a single hex or `rgba()` literal outside `:root` — the header's old translucent veil was the last one, and dropping it closed the exception. A literal anywhere means a colour has escaped the system: put it in `:root` or don't ship it.

**The Computed Contrast Rule.** No colour pairing ships on the strength of how it looks. Compute the ratio; body text stays at or above 7:1, and nothing on this page has ever been allowed to sit merely at 4.5:1 by accident. Four contrast regressions here were caused by skipping this step.

## Typography

**Display Font:** the platform's own UI face — `-apple-system` / `BlinkMacSystemFont` / `Segoe UI` / `system-ui`, falling back to Helvetica Neue and Arial
**Body Font:** the same stack. There is exactly one family on the page.
**Label/Mono Font:** none. Numbers get `font-variant-numeric: tabular-nums` instead of a second family.

**Character:** neutral, native, and completely undecorated. Because the face is whatever the reader's own device uses, the page looks like it belongs to their phone rather than to a template — which is precisely the trust argument the copy is making. Headings are tight (700 weight, −0.02em, `text-wrap: balance`); body copy is unstyled and generously leaded at 1.6.

### Hierarchy
- **Display / h1** (700, `clamp(30px, 4vw, 50px)`, 1.08, max 27ch): one per page, the hero headline. The final phrase is wrapped in `<em>` that is un-italicised and coloured sage.
- **Headline / h2** (700, `clamp(28px, 3.2vw, 38px)`, 1.12, max 22ch): one per band. Never preceded by a kicker.
- **Title / h3** (700, 22px): leak titles and service names.
- **Panel title / h3** (700, 20px): the h3 inside a panel or a folded-in block — the notice and each advisory area. A step down from a page title because it is not opening a section.
- **Subhead / h3** (700, 17px): the smallest heading, used once — "What happens next" over the contact aside. It sits at prose size so it reads as a label on the list rather than as a second heading competing with the h2 beside it.
- **Entity** (800, 24px, −0.01em, tabular): the Michigan LLC number in the facts strip — the single largest non-heading text on the page, because it is the fact most worth checking. The footer repeats it at 17px/700.
- **Price** (700, 20px, tabular, `white-space: nowrap`) with its unit in a 14px/500 ink-2 span.
- **Lede** (400, 20px at ≥720px, 16px below): the hero paragraph only. It drops below the prose tier on a phone because it now shares its row with the portrait.
- **Body / prose** (400, 17px, 1.6, max 54ch): every paragraph.
- **Control** (600, 16px): nav link, buttons, form labels, form status.
- **Small print** (400–600, 14px): fineprint, footer, facts labels, price units, per-field error lines, the "start here" pill.

### Named Rules
**The Three-Tier Rule.** Prose is 17px, controls are 16px, small print is 14px — always, everywhere, no exceptions and no fourth tier. Everything larger is a heading or a number, and headings own 17/20/22/24 and the two clamps. The hero lede's 16px on a phone is the one deliberate step off the ramp, and it exists because the portrait shares that row. A new size is a design-system change, not a component decision.

**The No-Kicker Rule.** Nothing is set above a heading — no eyebrow, no label, no all-caps category line, no numeral. Headings open their own sections. The notice panel is not a counter-example: it is a hero component sitting under the facts strip, not a label above an h2.

**The Measure Rule.** Every run of prose is capped at `--measure` (54ch). A secondary column — a service description, an advisory step, the contact aside — is capped tighter at `--measure-narrow` (40ch), so a column that is already narrow does not have to rely on its container to break the line. Headings get their own caps (27ch for h1, 22ch for h2).

## Layout

A single centred column of `--container` (1120px) with a 24px gutter, sectioned
into bands. Bands are 56px tall in padding, rising to 88px at ≥980px, and each
band after the first is separated from the previous one by a single hairline —
there is no alternating background, no card, and no container-within-container.

Three breakpoints do all the responsive work:

- **Base.** The hero is a two-column grid — a 124px portrait beside the lede, 14px between them — laid out with named areas (`"h h" / "p l" / "r r" / "c c"`) so the headline runs full width above and the callout and buttons run full width below. Everything else stacks: the facts strip is one column of full-width rows, the two split bands are one column, and each service row stacks name/description, then price, then features (`.svc > .spec { order: 2 }`), because on a phone the price is the question and the feature list is the follow-up.
- **≥720px.** The facts strip becomes three columns; every service row snaps to the same three tracks `minmax(0, 1.05fr) minmax(0, 1fr) minmax(150px, 210px)` — what it is, what it includes, what it costs — with the spec list returning to its natural order, so the feature column sits at one x from the first row to the last and unpriced rows simply leave the third track empty; the lede grows to 20px. The advisory band's four areas become two columns (48px gutter) and its three steps become three columns.
- **≥900px.** The three prose-plus-something bands split into the same asymmetric pair, `minmax(0, .9fr) minmax(0, 1.1fr)` with a 64px gutter: the leaks band (headline left, two leaks right), the about band (headline left, prose right), and the contact band (heading and form left, the "what happens next" aside right). One split ratio for all three is what keeps three different bands reading as one page.
- **≥980px.** The hero re-lays to `1.05fr .95fr` with a 64px gap and areas `"h p" / "l p" / "r p" / "c p"` — copy left, portrait as the full right column, vertically centred. The facts strip opens to all five columns. Bands grow to 88px.

The sticky header is 68px tall and the document carries `scroll-padding-top: 84px`
so an anchor jump clears it. All three in-page anchors (`#offer`, `#book`,
`#advisory`) sit on the h2 itself rather than on the section, so a jump lands on
the heading rather than on whatever padding precedes it.

**Vertical rhythm:** 18px between form fields and inside a facts row, 26px inside
a service row, 28px above the notice and above a closing paragraph, 32px above a
sub-grid (advisory areas, advisory steps, the contact aside), 40px for a standard
stack (a service group's start, the leaks grid on one column), 56px between the
two service groups, 64px in the gutter of every split. The facts strip sits 44px
below the hero.

### Named Rules
**The Face-First Rule.** The photograph is in the first viewport on every device, without exception. On a phone this costs a two-column hero and a 124px portrait beside the lede; that is the price and it is worth paying, because every visitor arrives holding a cold email and the first question is whether a person exists. A layout change that pushes the portrait below the fold at any width is a regression, not a simplification.

**The Thumb-Target Rule.** Every standalone link and control stands at least 44px tall, declared rather than inherited: the primary button at a 50px minimum with 12px of vertical padding, and `min-height: 44px` with `display: inline-flex` on the link button, the header's Contact pill, and the profile links under the advisory band. The only exemption is a link running inline inside a sentence, which takes the line's own height.

**The One Split Rule.** The page is a single column that splits into two, never three. Both split bands use the same `minmax(0, .9fr) minmax(0, 1.1fr)` at 64px, and the hero is the only other two-column grid. The facts strip (five short facts) and the service row (three tracks) are the two tabular exceptions; nothing else takes a third column at any width.

## Elevation & Depth

**This system has no shadows at all.** `grep box-shadow` over the artifact returns
nothing, and that is a load-bearing property rather than an oversight. Depth is
communicated three ways and only three ways: a tint (`--surface` or `--sage-soft`
behind a panel), a hairline (`--hair` between bands and rows), and whitespace.
The sticky header is the only element that layers over content, and it does so
with no layering effect at all: a flat, fully opaque `var(--bg)` over a hairline.
It carried a 96%-opaque veil until 2026-08-28; at that opacity the translucency
was invisible, so it bought a compositing cost, a hex literal outside `:root`,
and a hairline of content bleeding through on scroll. There is no
`backdrop-filter` in the file and never was one worth keeping.

Motion is likewise absent: no `transition`, no `animation`, no `transform`, no
`@keyframes`. The only movement declared anywhere is `scroll-behavior: smooth`,
and it is switched off under `prefers-reduced-motion: reduce`.

### Named Rules
**The Flat-Forever Rule.** Do not add a box-shadow to this page, for any element, in any state. A surface that needs to separate itself gets a tint or a hairline. The first shadow would make every flat surface look unfinished.

**The Opaque-Header Rule.** The sticky header is `var(--bg)` at full opacity. Do not give it alpha, a blur, a gradient, or a scroll-triggered state change. A header that is the page's own colour is not a layer the reader has to think about.

**The Still-Page Rule.** Nothing moves, fades, slides, or scales — not on hover, not on load, not on scroll. State changes are colour changes (button ground darkens, link underline thickens from 1.5px to 2.5px, border turns sage) and they are instantaneous.

## Shapes

One radius does nearly everything: `--r` (12px) on the button, the portrait, the
reply callout, the notice, and every input. Two exceptions exist, both narrow:
a full pill (999px) on the two things that are shaped like tags rather than
panels — the header's "Contact" link and the "Most people start here" mark — and
a 1px round on the 8×2px sage dash that marks each spec line.

Borders are hairlines and they are structural: they divide bands, rows, and the
header from the page. The only full-strength rule on the page is the 1px ink line
under each service group title, which is doing the work a heading underline does.
The portrait is a plain 4:5 crop with the shared 12px radius, no frame, no border,
no overlay, and no caption — every fact a caption could carry is already on screen.
It ships as a 74 KB WebP at quality 75, sized 800×980 in the markup so nothing
shifts, and it has no max-width cap at any breakpoint: the grid column is what
sizes it.

### Named Rules
**The One Radius Rule.** Panels, fields, images, and buttons all take `--r`. Pills are reserved for tag-shaped labels. Do not introduce a third panel radius.

**The Hashed-Asset Rule.** Every shipping raster carries a content hash in its filename and is never overwritten under the same name: the portrait (`joey-99628b37.webp`), the share image (`joey-og-9006f6ca.jpg`), the 32px favicon (`favicon-0ef66b21.png`), and the 180px touch icon (`touch-208d2637.png`). A recrop, a recompression, or a redraw gets a new filename and a new link in the markup. `_headers` marks all four `immutable` for a year and deliberately does not list the HTML; that cache promise only holds if the name changes whenever the bytes do. The two icons are the "906" wordmark set in ink on the page ground — the same two colours and the same type as the header logo, not a new mark.

**The Hairlines-Divide-Only Rule.** `--hair` is a border colour. It is never a text colour, never a background, and never used to draw a box around prose.

## Components

### Buttons
- **Shape:** the shared 12px radius (`--r`); never a pill.
- **Primary:** sage ground, white label, 1px sage border, 50px minimum height, 12px vertical and 26px horizontal padding, 16px/600 label. Full width when it is the form's submit. The vertical padding matters: with a long label on a narrow phone the button wraps to two lines, and without it the text touches the edge.
- **Hover / Focus:** ground darkens to #435C4A with no transition; focus draws a 2px sage outline at 3px offset.
- **Disabled (submitting):** the label is swapped to "Sending…" and the button is disabled; no spinner, no dimming.
- **Link button:** sage 16px/600 with a 1.5px underline at 4px offset, thickening to 2.5px on hover. It is `inline-flex` at a 44px minimum height so the target matches the button beside it. This is the secondary action beside the primary button, and it is the page's only "ghost" affordance.

### Cards / Containers
There are no cards. Prose is never boxed. Two tinted panels exist and both are
announcements rather than content containers: the **reply callout** (sage wash,
12px radius, 14×16px padding, capped at the 54ch measure, ending in a tappable
`mailto:` so the callout is itself a contact path and not just an instruction) and
the **notice** (quiet surface, 12px radius, 20×22px padding, capped at 620px).
Services and leaks are plain rows separated by hairlines, not tiles.

### Inputs / Fields
- **Style:** white ground, 1px #CFC9C0 edge, 12px radius, 13×14px padding, 16px text (which also prevents iOS zoom-on-focus), full width, label above at 16px/600. Every required field's label carries a visible `required` span in ink-2/400; the one optional field carries "(optional)" in the same treatment.
- **Focus:** border turns sage *and* a 2px sage outline is drawn at 2px offset — the border shift alone was not enough of a signal.
- **Error:** `aria-invalid="true"` turns the border to the error red; a 14px error line in the same red renders directly beneath the field, and `aria-describedby` points the input at it. The field-level line collapses to nothing when empty (`.field-error:empty { display: none }`), so it occupies no space until it has something to say. The status line under the submit button carries the same message in the same words, because on a phone the button can be a full screen away from the cursor.
- **Success:** the fields, the submit, the fineprint, and the lead-in paragraph all hide, and the existing live region fills with a confirmation that echoes the contact back to the reader — naming "text" or "email" according to what they actually typed — plus an escape route.

**The One Contact Field Rule.** The form asks for a name and then for one thing: "Phone or email — whichever you'd rather I use." A single text input accepts either, and the script decides which it got (a valid email pattern, or ten or more digits) rather than making the reader decide first. Do not split it into two fields, do not set `type="tel"`, and do not make either one required over the other — the reader's preferred channel is information worth having, and asking for both is a way of getting neither.

**The Native-Floor Rule.** The markup carries no `novalidate`; the script adds it at runtime once it has loaded. With JavaScript off, the browser's own validation is the floor, so the form never silently accepts an empty required field. Requiredness is stated in the label in words before it is ever enforced.

### Navigation
One row, 68px tall, sticky, fully opaque in the page's own ground over a hairline
bottom edge. Left: the wordmark at 20px/700 with "Digital" in sage.
Right: a single pill-shaped "Contact" link, 16px/600 ink on a hairline border at a
44px minimum height, whose border darkens to full ink on hover. There is no menu,
no hamburger, and no second link at any width.

### Facts Strip (signature)
A `<dl>` of five checkable facts directly under the hero, 1 / 3 / 5 columns across
the breakpoints, each cell a 14px/600 ink-2 term over a 17px/600 ink value, with a
hairline above the strip and below every row. One cell is special: the Michigan
entity number is set at 24px/800 tabular. Nothing in the strip is coloured —
including the demo-line status, which is a fact like the other four and prints in
ink. Every value is permanently true and none of them drift; that is the point of
the component, and it is why it carries no counters, no badges, and no icons.

### Notice Panel (signature)
The one untinted panel, sitting inside the hero 28px below the facts strip. The
facts strip is where the reader learns the demo line is off; the notice is where
that is explained, in the next thing they read. It states the standard being
upheld — "I won't publish a number that rings nowhere" — rather than apologising,
which is the one sentence on this page a scam would never write. It carries no
contact link of its own: it is not an ask, and every other block on the page that
mentions reaching Joey already is one.

**The Doubt-Where-Raised Rule.** A doubt is resolved where it is raised, not later and not at the bottom of the page. The notice used to sit above the contact form, four bands away from the fact that prompted it, which made a visitor carry the question through the entire pitch. Any future caveat, status, or disclosure goes directly under the thing that raises it.

### Service Row (signature)
A plain hairline-separated row, never a card. Three tracks at ≥720px: the name (22px, with the
optional `.start` pill inline beside it) over a one-line description capped at `--measure-narrow`;
a single-column spec list, one line per item, marked by an 8×2px sage dash rather than a bullet
or a glyph icon; and, for priced rows only, a right-aligned `.svc-price` carrying the 20px price,
its 14px unit, and one 14px qualifier. Nothing in a row repeats what the group title already says:
the three scoped services carry no price cell at all. Below 720px the tracks stack name/description,
price, features — the spec list is pushed last with `order: 2`, so a phone reader gets the answer to
"how much" before the list of what is included. Rows are grouped under a `.group-title` — 16px/600
ink-2 over a full-strength 1px ink rule — which is the page's only underlined label.

### Next-Steps Aside (signature)
The right column of the contact split at ≥900px: a 17px/700 "What happens next"
over a three-item ordered list in ink-2, capped at `--measure-narrow`. Below
900px it drops beneath the form with a hairline above it and 32px of air. It is
the only ordered list on the page and the only numbered anything; the numerals
are the browser's, not drawn. Its job is to price the ask — a form with a stated
consequence is a smaller commitment than a form without one — and it says what
happens rather than what is promised.

### Advisory Band (signature)
The last section of `<main>`, folded in from a former standalone page and reachable at
`#advisory` on the heading (the old `/advisory` URL redirects there). Its discipline is that it
introduces nothing: four `.area` blocks in a hairline-topped grid — one column, two at ≥720px with a
48px gutter — each a 20px h3 over a description and a 14px ink-2 tools line; a three-step
`.steps` list that is a stack of hairline-separated rows below 720px and three columns
inside a single top-and-bottom hairline pair above it, each step's detail capped at
`--measure-narrow`; and an `.adv-cta` row pairing the standard primary button, here carrying a
`mailto:` with a prefilled subject, with two 44px-tall profile links in ink-2. No colour, radius, or
type size appears here that the rest of the page does not already use, which is what stops
a folded-in page from reading as one. It carries no inline style; `main > section.band:last-child`
supplies its top hairline.

## Do's and Don'ts

### Do:
- **Do** keep every colour inside the documented tokens, declare it in `:root`, and reference it as a `var(--…)`; compute the contrast ratio before shipping any new pairing.
- **Do** hold the three-tier ramp: prose 17px, controls 16px, small print 14px.
- **Do** use sage for exactly one thing — what is Joey's, or what the reader should press. A status is not an action.
- **Do** keep the photograph in the first viewport at every width, even when that costs a two-column hero on a phone.
- **Do** keep the reply callout ahead of the primary button in DOM order, and keep its `mailto:` tappable; PRODUCT.md ranks a reply above a form submission, and the layout has to agree.
- **Do** resolve a doubt directly under the thing that raises it.
- **Do** cap prose at `--measure` (54ch) and a secondary column at `--measure-narrow` (40ch).
- **Do** separate sections with a single hairline and generous band padding (56px, 88px at ≥980px).
- **Do** keep the five facts static and checkable; if a value would need updating, it does not belong in that strip.
- **Do** put the anchor on the heading rather than the section — all three of them — and keep `scroll-padding-top` in sync with the 68px header.
- **Do** give every standalone link and control a declared 44px minimum height.
- **Do** hash every shipping raster's filename, icons included, and let `_headers` cache them for a year; never overwrite an image under a name that has already shipped.
- **Do** leave native validation as the no-JS floor and say "required" in the label; render each field's error beside the field as well as in the status line.
- **Do** show the price before the feature list on a phone, and beside it at ≥720px.

### Don't:
- **Don't** load a web font. Ever. The platform stack is the design, and a font request is the single easiest way to undo the page's load time.
- **Don't** replace the photograph with anything that is not a real photograph of Joey — no illustration, monogram, avatar, silhouette, initial, stock photo, or AI-generated image. An empty slot is preferable to a substitute.
- **Don't** cap the portrait's width with a max-width; the grid column sizes it at every breakpoint.
- **Don't** add a box-shadow, a transition, a transform, or a keyframe animation.
- **Don't** give the sticky header alpha, a blur, or a scroll-triggered state.
- **Don't** put a kicker, eyebrow, or all-caps label above a heading.
- **Don't** wrap prose in a card, a bordered box, or a nested container.
- **Don't** introduce a second accent colour, or use sage on anything that is neither authored-by-Joey nor an action.
- **Don't** use #FFFFFF as a page or panel ground; it is for field interiors and for text sitting on ink or sage.
- **Don't** write a hex or `rgba()` literal outside `:root`. There are no exceptions left.
- **Don't** split the contact field into separate phone and email inputs, and don't set `type="tel"` on it.
- **Don't** put `novalidate` in the markup.
- **Don't** use a hairline as a text colour or a heading rule — the group-title rule is full ink on purpose.
- **Don't** add a third panel radius; 12px for panels, 999px for tag-shaped pills.
- **Don't** print a phone number anywhere while the demo line is off, and never separate the digits from the AI-disclosure sentence when they return.
