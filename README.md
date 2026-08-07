# 906 Digital — Launch Website

Single-file launch site for `906digital.com`. No build step, no framework,
no dependencies. Deploys anywhere that serves static HTML.

## What's in here

- `index.html` — the entire site. Edit this one file to update content.
- `scripts/check-content.mjs` — content checks (see "Checks" below).
- `.circleci/config.yml`, `.htmlvalidate.json` — CI configuration.

## Placeholders

The launch placeholders are resolved. Kept here as a record:

| Was | Now |
|---|---|
| `906-555-0000` | `+1 906 767 6901` — real, live in the hero and demo line |
| `https://cal.com/906digital/intro` | Retired. Booking is a Web3Forms form plus `mailto:` links |
| `joey@906digital.com` | In use across the form, CTAs, and footer |

`joey@906digital.com` is the intended permanent address, so it is **not**
guarded against in CI. Confirm it actually receives mail before a real send —
it depends on Google Workspace being live.

Note: `906-555-0199` appears in `index.html` as the `placeholder=` attribute on
the phone input. That is real UI, not a leftover. Do not "fix" it.

## Checks

CircleCI runs two checks on every push. Both run locally too:

```bash
npx html-validate@8.29.0 index.html   # markup validity
node scripts/check-content.mjs        # anchors resolve, placeholders stay retired
```

`.htmlvalidate.json` disables purely stylistic rules (lowercase doctype,
self-closing `<meta/>`, inline styles) — all valid HTML5. Substantive rules stay
on. The validator version is pinned so a new rule in a future release cannot
turn the build red on its own; bump it deliberately.

There is no build and no deploy step in CI. Deployment stays manual, below.

## How to deploy (pick one)

### Option 1 — Cloudflare Pages (recommended, free)

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create a new project → Direct Upload
3. Drag `index.html` into the upload zone
4. Connect your domain `906digital.com` (Cloudflare will walk you through DNS)
5. Done. SSL is automatic.

### Option 2 — Netlify (also free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag the entire `launch-website` folder onto netlify.com/drop
3. Add your custom domain in site settings
4. Done.

### Option 3 — GitHub Pages (free if you use GitHub)

1. Create a public repo named `906digital`
2. Upload `index.html` to the root
3. Settings → Pages → enable from `main` branch
4. Add CNAME pointing `906digital.com` to your GitHub Pages URL

## Editing the site

The site is plain HTML and CSS in one file. To change anything:

1. Open `index.html` in any text editor
2. Find the section you want to edit (each is clearly commented:
   `<!-- ============== HERO ============== -->`)
3. Edit the text or CSS
4. Save and re-upload to your host

## Performance

This file weighs ~12 KB uncompressed. It loads Inter from Google Fonts
(~50 KB). Total page weight is under 100 KB. It will score 95+ on
PageSpeed Insights with default Cloudflare settings.

## When to upgrade

This site is intentionally minimal and built for one job: getting a UP business
owner from your business card to a booked call. Once you have:

- 3+ paying clients
- A logo you actually like
- Real testimonials and case-study photos
- A reason to add a blog or services page

…then move it to Framer or Webflow. Until then, this is plenty.
