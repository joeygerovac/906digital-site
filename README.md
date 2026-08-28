# 906 Digital — Website

Source for `906digital.com`. One page, no build step, no framework, no
dependencies, no package manager.

> **Rewritten 2026-08-07.** The May version was wrong on nearly every point: it
> described placeholders that no longer exist, claimed a Google Fonts dependency
> that was never loaded, understated page weight by 3×, and gave three deploy
> methods, none of which is how this site ships. Following it would have created a
> second competing deployment. Check claims here against the live site, not
> against intent.

## What's in here

| File | |
|---|---|
| `index.html` | The small-business site — 849 lines, 43 KB. Markup, CSS, and JS in one file. Still zero dependencies and zero new network requests; the only asset is the hero photograph. |
| `advisory.html` | Redirect stub to `/#advisory`. The advisory content lives in `index.html`. |
| `scripts/check-content.mjs` | Content checks. See "Checks" below. |
| `.circleci/config.yml` | CI pipeline. |
| `.htmlvalidate.json` | Validator config. |

### One page — decided 2026-08-28

The site used to be two pages for two readers: `index.html` for the
owner-operator clearing a scam question, `advisory.html` for a B2B team with
budget authority and no scam question. The rule said *do not merge them*, on
the reasoning that a B2B buyer who lands on "your name on the truck" sees
someone too small to bet on.

Joey heard that reasoning and chose one page anyway. Advisory is now a section
at the bottom of `index.html` (`#advisory`), after the contact form so it cannot
pull an owner-operator out of the funnel. `/advisory` redirects there via
`_redirects`; `advisory.html` is a meta-refresh stub kept as a fallback. The
cost is known and accepted: a B2B prospect Joey emails scrolls past five trades
services to reach their pitch. Revisit if advisory becomes a real line of
business rather than a side one.

**The home page is where the scam question gets cleared.** Keep it a person, not
a firm. Never introduce "we" or "our team". There is one person.

## Structure of the HTML files

Every section is marked with a banner comment (`<!-- ====== HERO ====== -->`).
Search for those rather than line numbers, which drift as you edit.

In `index.html`, in order: JSON-LD → all CSS inline → direction contract comment →
skip link → header → hero (headline + photograph) → facts strip → the leaks → what I build →
who runs this → final CTA with the demo-line caution panel **above** the lead form
→ footer → needle settle + form handling → analytics beacon.

### The visual world — settled 2026-08-28

Three worlds were tried in one day and two were rejected: a dark "night
instrument panel" (read as cold and coded to tech — the exact thing the reader
fears) and a hometown-newspaper treatment (read as cheap). Joey then pinned the
direction in his own words — *modern, authentic, very trustable, built around the
photograph* — and chose the light version of a prototype.

**What the page is now:** no metaphor. An off-white ground, warm ink, one sage
accent sampled from the work shirt in the photograph, hairlines for dividers
only, soft radii, no shadows, no motion, the platform's own sans. `DESIGN.md` is
the authority; this is only the map.

Rules that outlived all three worlds, because they were never about a palette:

1. **Check contrast by computing it, not by eye.** Four regressions have been
   caused by ignoring this. The current build is at zero WCAG AA failures.
2. **A colour with a reserved job keeps it.** Sage means "mine": the button,
   links, the phrase in the headline, and the one fact that is currently off.
3. **No web fonts, ever.** The stack is the platform UI face. Nothing downloads.
4. **Reply outranks the form.** The reply callout precedes the button in DOM
   order on every viewport, because every visitor arrives holding an email.
5. **No kickers above headings, no boxes-as-structure, no cards for prose.**

The hero holds a **real photograph of Joey**. The rule that governed the slot
while it was empty governs any replacement: no illustration, monogram, avatar,
silhouette, stock photo, or AI-generated image — a placeholder person is a
fabricated person.

## How it deploys

- **Host:** Cloudflare **Workers** project `906digital-site` (not Pages, not
  Netlify, not GitHub Pages)
- **Repo:** `github.com/joeygerovac/906digital-site` — **public**
- **Deploying branch:** `main` (see below)
- **Custom domain:** `906digital.com`, live since 2026-05-09
- **Always-works URL:** `https://906digital-site.joey-gerovac.workers.dev`
- **Auth:** `gh` CLI credential helper. No token in the remote URL — if pushes
  fail, re-run `gh auth login`. Do not paste a token back into the remote.

Every push to `main` deploys. Deploys take ~20–60 seconds.

### The deploying branch is `main` — confirmed 2026-08-07

An earlier note in this file warned that the live assets came from
`cloudflare/workers-autoconfig` rather than `main`, on the evidence that
`906digital.com/wrangler.jsonc` returned HTTP 200 while that file exists only on
that branch. **That inference was wrong**, and the check that settles it is:

```
curl -s https://906digital.com/scripts/check-content.mjs
```

That file exists only on `main` and the served copy is byte-identical to `main`'s
HEAD. `main` deploys.

The `wrangler.jsonc` that misled the earlier check is **generated by Cloudflare's
build**, not served from a branch — the served copy carries
`compatibility_date: "2026-08-08"` while the one on `cloudflare/workers-autoconfig`
says `"2026-07-20"`. Different files. Fetching it proves nothing about branches.

### Verifying a deploy actually landed

Don't judge by looking at the page — a cached or unchanged page proves nothing.
Fetch a file you just changed, with a cache-buster:

```
curl -s "https://906digital.com/README.md?x=$RANDOM" | head -3
```

A push that silently fails to deploy is not hypothetical here. A dead PAT and
three stale `.lock` files made every push from this repo fail silently for 63 days
in 2026-05.

## Checks

CircleCI runs on every push. Both checks run locally too:

```bash
npx html-validate@8.29.0 index.html advisory.html   # markup validity
node scripts/check-content.mjs                      # content invariants
```

`.htmlvalidate.json` disables purely stylistic rules (lowercase doctype,
self-closing `<meta/>`, inline styles) — all valid HTML5. Substantive rules stay
on. The validator version is pinned so a new rule in a future release cannot turn
the build red on its own; bump it deliberately.

`check-content.mjs` enforces three things on every page:

1. Every in-page `#anchor` resolves to a real `id`.
2. Retired placeholders stay retired — `906-555-0000`, the old Cal.com link, and
   `REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN`.
3. Every page carries a Cloudflare analytics beacon with a real 32-hex token.
   Guarding the placeholder alone would not catch the tag being **deleted**, which
   is the failure mode that actually happened.

There is no build and no deploy step in CI. Cloudflare handles deployment.

## Placeholders

All resolved. Kept as a record:

| Was | Now |
|---|---|
| `906-555-0000` | Retired. `(906) 767-6901` is the real number, but **it is not printed anywhere on either page** — see "Demo line: offline mode". It appears only inside the restore comments. |
| `https://cal.com/906digital/intro` | Retired. Booking is a Web3Forms form plus `mailto:` links |
| `REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN` | Filled 2026-08-07 — see "Analytics" |

`joey@906digital.com` is the intended permanent address and is **not** guarded
against. The `906-555-0199` in `index.html` is a form input's `placeholder`
attribute — example text for the user. Leave it.

## Analytics

Cloudflare Web Analytics, installed by hand on **both** pages. The token is a
public identifier, not a secret.

**The dashboard setting must stay on "Enable with JS Snippet installation."**
Cloudflare's automatic edge injection does not reach Worker-generated responses —
switching to plain "Enable" was tested on 2026-08-07 and produced no beacon on
either page. If someone switches it, reporting stops silently.

Zone-level analytics (Cloudflare proxy) have always existed and are separate.
They count bots and crawlers; Web Analytics only counts what executes JS, so the
numbers will be much lower. That gap is expected.

## Editing

Edit the HTML, commit, push. Nothing to build, nothing to install.

To preview locally, open the file directly in a browser — `file://` works. The
form will not submit from `file://`, but everything else renders.

## Assets are content-hashed and cached for a year

`_headers` marks the hero photo and the share image `immutable, max-age=31536000`,
and their filenames carry a content hash (`joey-<hash>.webp`). **Never overwrite
one of these files under the same name** — a visitor who has it cached will keep
the old one for a year. A new photo gets a new hash, a new filename, a new
`_headers` entry, and the old file is deleted. The HTML is deliberately not
listed in `_headers`: it always revalidates, which is how a push goes live in
under a minute.

## Everything at the repo root is served publicly

`assets.directory` is `"."`, so every file here is fetchable on the live domain.
Confirmed HTTP 200: `/README.md`, `/.gitignore`, `/wrangler.jsonc`,
`/.htmlvalidate.json`, `/.circleci/config.yml`, `/scripts/check-content.mjs`.
Unknown paths correctly 404.

None of those are sensitive, but the rule stands: **never put anything in this
repo you would not publish.** Client notes, prospect data, credentials, and the
business records in the parent directory belong in the private `906digital` repo,
which is why this one is nested and gitignored there.

## Demo line: offline mode

The site prints **no phone number anywhere** while the demo line is off — a
published number that rings nowhere is the most efficient way to confirm a
suspicious visitor's original hypothesis.

Restore instructions live in the banner comment next to the copy they replace
(search `DEMO LINE — OFFLINE MODE`). They include this, which is not optional:

> The AI-disclosure sentence is ethically load-bearing. It must travel with the
> digits every single time they appear. Do not ship one without it.

Only restore the number after dialling it from a phone that has never called it
and hearing the AI pick up.

## External requests

Three, by design:

- `api.web3forms.com/submit` — lead form POST, on submit only
- `static.cloudflareinsights.com/beacon.min.js` — analytics
- `linkedin.com` / `github.com` — outbound profile links in the advisory section only,
  not requests

**No web fonts.** The stack starts with `'Inter'` so it's used where already
installed, then falls back to system fonts. Nothing is downloaded. Keep it that
way — a font request is the single easiest way to undo this page's load time.

## When to replace this

`index.html` does one job: get a UP business owner who just received an email from
"is this a scam?" to "this is a real guy in Ironwood." It is a credibility check,
not an acquisition funnel. The `#advisory` section does the same job for a B2B reader.

Reconsider the stack when there are 3+ paying clients, real photos, and
testimonials — i.e. when there is enough genuine proof that a single page can't
hold it. Not before. A framework would not fix anything currently wrong here, and
the highest-value missing asset is a photograph, not a feature.
