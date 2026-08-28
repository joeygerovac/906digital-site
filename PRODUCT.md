# Product

<!-- impeccable:product-schema 1 -->

<!--
  THIS FILE IS SERVED PUBLICLY. assets.directory is "." so this document is
  fetchable at 906digital.com/PRODUCT.md. Keep it publishable: no prospect data,
  no financials, no credentials, no personal context. Everything here is already
  true on the live pages or safe to say out loud.
-->

## Platform

web

## Users

Two distinct readers, one per surface. They do not overlap and the pages are
deliberately not merged.

**`index.html` — the owner-operator.** One person who does the work, answers the
phone, and runs a small business somewhere in Michigan's Upper Peninsula. They
have just received a cold email or text from Joey and are deciding whether the
sender is a real person in Ironwood or a scam. They are on a ladder, under a
truck, or across a counter when the decision gets made. They are not shopping;
they are verifying.

**`advisory.html` — the B2B team.** A team that already has systems and knows
they don't work — marketing stacks with broken seams, data they can't trust, ops
tooling nobody owns. They have budget authority, technical vocabulary, and no
scam question to clear. They need a technical person and don't need a full-time
one.

All traffic to both pages arrives from Joey's own outreach. There is no other
channel — no ads, no organic search strategy, no referral flow. Joey controls
which link each prospect receives, which is why one page can be written for one
reader without hedging.

## Product Purpose

906 Digital puts AI to work in small businesses in the Upper Peninsula, and sells
technical advisory to B2B teams remotely.

The website's job is narrower than the business's job. `index.html` moves a
visitor from "is this a scam?" to "this is a real guy in Ironwood." It is a
credibility check, not an acquisition funnel. `advisory.html` does the same job
for a reader who has no scam question but does have a competence question.

Success on either page is a reply to the email thread the visitor is already
holding, or a form submission — in that order. Reply is the cheaper action and is
prompted above the fold on both pages.

## Positioning

**One person, not an agency floor.** A prospect can verify in a single read that
they will talk to the person who does the work. Nothing gets promised on someone
else's behalf and handed to someone junior.

**AI is the reason the price works, not the product.** One person delivers in
days what used to take a team weeks. That mechanism is what makes UP-scale
pricing possible, and it is stated plainly rather than implied.

**Local, specifically.** Ironwood, Michigan — named, not gestured at. A national
competitor can copy the services; it cannot truthfully copy being in Ironwood and
answering its own phone.

**Payment on delivery** (advisory) is a real commercial commitment, not a
marketing line.

## Operating Context

The offering widened on 2026-08-11 from "websites + AI phone answering for UP
trades" to "AI for Upper Peninsula small business." Copy written before that date
may still be trades-specific.

Two pages ship from one Cloudflare Worker at `906digital.com`. Every push to
`main` deploys in roughly 20–60 seconds. CI runs markup validation and content
invariant checks on every push; there is no build step and no deploy step in CI.

The entire repository root is served publicly. Nothing may be added to this repo
that should not be a public URL on the marketing domain.

**The demo line is currently offline.** `(906) 767-6901` is built and works, but
is off pending an abuse alarm and a confirmed billing ceiling. Consequently the
site prints **no phone number anywhere** — a published number that rings nowhere
confirms a suspicious visitor's original hypothesis. Restore instructions live in
a banner comment beside the copy they replace.

## Capabilities and Constraints

Five services on `index.html`. Two carry published prices because they are the
same job every time:

- **Foundation Site** — $1,900–4,500 one-time, built in 10 days to 4 weeks
- **AI Receptionist** — $249–699/month plus a one-time $500 setup

Three are scoped per project with a fixed price quoted within one business day of
a short call: **Process Automation**, **Reporting You Can Trust**, **Systems
Integration**. These carry no published price on purpose — inventing one would
put a fabricated number on a live page.

`advisory.html` publishes **no prices at all**, deliberately. No rate has been
established for advisory work, and a number invented to fill a visual gap would
be one Joey has never charged.

Managed Ads was cut from the grid and stays cut: it can only be sold after ~90
days of receptionist call data, and nobody has that yet. It survives as a
deferred "ask me in 90 days" line.

**Technical constraints, all durable:**

- No build step, no framework, no dependencies, no package manager. Markup, CSS,
  and JS live inline in each HTML file.
- **No web fonts.** The stack starts with `'Inter'` so it is used where already
  installed, then falls back to system fonts. Nothing is downloaded. A font
  request is the single easiest way to undo the page's load time (~0.13–0.16s).
- Exactly three external requests, by design: the Web3Forms lead POST on submit,
  the Cloudflare analytics beacon, and outbound profile links on `advisory.html`.
- `--copper` is split into three roles because one value cannot meet WCAG AA on
  both light and dark backgrounds. `--copper` is non-text only; `--copper-dark`
  is text on light; `--copper-lite` is text on dark. Two contrast regressions
  have already been caused by ignoring this.
- Sections are marked with banner comments. Search for those, not line numbers.

## Brand Commitments

**One person. Never "we" or "our team" on `index.html`.** There is one person,
and the whole reason the page converts is that a suspicious visitor can verify
that in one read.

The literal denial "I'm not an agency" was retired on `index.html` when the
offering widened — it stopped being the right sentence — but its substance is
preserved: one person, in Ironwood, who answers his own phone. Do not restore the
denial and do not drop the substance.

**Concrete over abstract.** The problem headline is "Stop losing work while
you're busy doing the work," not "grow your business." The standing instruction
is "do not water it down." The failure mode is replacing a physical image with a
phrase that says nothing and sounds like everyone.

**The AI-disclosure sentence is ethically load-bearing.** It must travel with the
phone number every single time the digits appear. Never ship one without the
other.

**Voice:** plain, direct, unpolished in a deliberate way. Short sentences. No
superlatives, no urgency tricks, no invented social proof.

## Evidence on Hand

**Real, and on the pages now:** fourteen years across technical support,
implementation engineering, software engineering, and engineering management,
most of it in B2B SaaS and marketing technology. Every line in the advisory
background section traces to a specific employer, role, and date. The companies
listed were employers, not clients, and the page says so.

**Deliberately absent — do not fabricate:**

- **No testimonials, no case studies, no client logos, no ratings, no reviews.**
  There are zero paying clients. The advisory page replaces the testimonial block
  a page like this would normally carry with employment history precisely because
  the testimonials do not exist.
- **No `og:image`.** No share image asset exists. Referencing a missing file is
  worse than omitting the tag.
- **No hero photograph.** The photo slot in `index.html` is intentionally empty
  and must not be filled with an illustration, monogram, avatar, silhouette,
  stock photo, or AI-generated image. A placeholder person is a fabricated
  person. *(Status 2026-08-27: a real photo is reported to exist but its path is
  not yet confirmed. The slot stays empty until the actual file is in hand. When
  it lands: 4:3, explicit width/height to prevent layout shift, and consider
  reusing it as `og:image`.)*
- **No published phone number** while the demo line is off.
- **No street address, hours, or price in the JSON-LD** — only verified facts.

## Product Principles

1. **The scam question comes first.** A visitor who has not cleared it never
   evaluates the product. Credibility outranks persuasion on `index.html`.
2. **Never publish a fact that isn't one.** No invented prices, photos,
   testimonials, or claims. An absence stated plainly beats a placeholder.
3. **Two readers, two pages, no merging.** The overlap is in the services, not
   the readers, and the page is written for the reader.
4. **Reply beats form.** Every visitor arrives holding an email thread. Design
   for the cheapest action they already have, then the form.
5. **Speed and independence are features.** No fonts, no frameworks, no
   dependencies — because the page's job is to load instantly for someone
   checking a stranger out on a phone, possibly on rural signal.

## Accessibility & Inclusion

WCAG AA, verified by computing contrast ratios rather than eyeballing them —
this is an established practice here, not an aspiration. `<main>` landmark, skip
link, and focus management on anchor jumps and form state changes are all in
place. The honeypot is CSS-hidden, keyboard-skipped, and screen-reader-hidden
rather than `type="hidden"`. No CAPTCHA on the lead form, deliberately.

Assume rural mobile connections and older devices. Page weight and request count
are accessibility concerns here, not just performance ones.
