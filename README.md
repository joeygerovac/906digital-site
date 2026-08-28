# 906 Digital — Website

Source for `906digital.com`. Two pages, no build step, no framework, no
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
| `index.html` | The small-business site — 1153 lines, 52 KB. Markup, CSS, and JS in one file. Still zero dependencies and zero new network requests; the only asset is the hero photograph. |
| `advisory.html` | The B2B technical advisory page — 1,153 lines, 37 KB. Same deal. |
| `scripts/check-content.mjs` | Content checks. See "Checks" below. |
| `.circleci/config.yml` | CI pipeline. |
| `.htmlvalidate.json` | Validator config. |

### Two pages, two readers — keep them apart

*Rewritten 2026-08-11. The old rule said to keep the pages apart because they sold
different services. After the home page widened from trades to UP small business,
that is no longer true — both now sell AI work. The separation still holds, but
for a different and more durable reason, so the reasoning is restated rather than
left standing on a premise that expired.*

`index.html` sells to an **owner-operator**: one person who does the work, answers
the phone, and is deciding whether a stranger who emailed them is a real person in
Ironwood. Five services, two with published prices.

`advisory.html` sells to a **team** that already has systems and knows they don't
work — marketing stacks, untrustworthy data, ops tooling. That reader has budget
authority, technical vocabulary, and no scam question to clear.

**Do not merge them.** The overlap is in the services, not the readers, and the
reader is what the page is written for. An owner-operator who lands on advisory
copy sees a consultant and leaves; a B2B buyer who lands on "I answer my own
phone" sees someone too small to bet on. All traffic arrives from Joey's own
outreach, so he controls which link each prospect gets. The only cross-link is in
each footer, after the conversion point.

**The home page is where the scam question gets cleared.** Keep it a person, not a
firm. It says "one person, in Ironwood, who answers his own phone" and not "I'm
not an agency" — the denial was retired when the offering widened, the substance
was not. Never introduce "we" or "our team" on `index.html`. There is one person.

## Structure of the HTML files

Every section is marked with a banner comment (`<!-- ====== HERO ====== -->`).
Search for those rather than line numbers, which drift as you edit.

In `index.html`, in order: JSON-LD → all CSS inline → direction contract comment →
skip link → header → hero (headline + photograph + data plate) → the leaks → what I build →
who runs this → final CTA with the demo-line caution panel **above** the lead form
→ footer → needle settle + form handling → analytics beacon.

### The visual world was replaced on 2026-08-28

The cream-and-copper page is gone. `index.html` is now a **night instrument
panel**; `DESIGN.md` is the authority on it and this section is only the map.
The old `--copper` / `--copper-dark` / `--copper-lite` split no longer exists —
do not go looking for it.

Three rules from that system survive because they were never really about copper:

1. **Check contrast by computing it, not by eye.** Four regressions have now been
   caused by ignoring this. The current build is at zero WCAG AA failures,
   measured across every text node against its effective background.
2. **A colour with a reserved job keeps it.** `--radium` is needles, lamps, and
   links. `--caution` amber means exactly one thing — a system of Joey's that is
   currently off — and appears only on the demo-line annunciator and the caution
   panel. The "leaks" lamps are deliberately unlit rather than amber, because
   those are the visitor's problems, not Joey's outage.
3. **No web fonts, ever.** The display voice is built from weight, tracking,
   tabular numerals, and a ground-dependent engraved shadow instead of a sourced
   face. This knowingly overrides the usual "source a display face" advice; the
   deviation is recorded in a comment in `<head>`.

The hero photo slot is **still empty and still governed by the old rule**: no
illustration, monogram, avatar, silhouette, stock photo, or AI-generated image.
A placeholder person is a fabricated person. When a real photo exists it goes
*above* the six-pack, not instead of it.

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
- `linkedin.com` / `github.com` — outbound profile links on `advisory.html` only,
  not requests

**No web fonts.** The stack starts with `'Inter'` so it's used where already
installed, then falls back to system fonts. Nothing is downloaded. Keep it that
way — a font request is the single easiest way to undo this page's load time.

## When to replace this

`index.html` does one job: get a UP business owner who just received an email from
"is this a scam?" to "this is a real guy in Ironwood." It is a credibility check,
not an acquisition funnel. `advisory.html` does the same job for a B2B reader.

Reconsider the stack when there are 3+ paying clients, real photos, and
testimonials — i.e. when there is enough genuine proof that a single page can't
hold it. Not before. A framework would not fix anything currently wrong here, and
the highest-value missing asset is a photograph, not a feature.
