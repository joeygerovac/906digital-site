#!/usr/bin/env node
// Content checks the HTML validator does not cover, run against every page:
//   1. Every in-page #anchor points at an element that exists.
//   2. Retired placeholder strings have not crept back in.
//   3. Unfilled REPLACE_ME-style tokens are reported.
//
// Run with: node scripts/check-content.mjs

import { readFile } from "node:fs/promises";

const PAGES = ["index.html", "advisory.html"];

// Retired launch placeholders. These were replaced with real values; this guards
// against a regression, not a to-do.
// Note: 906-555-0199 is the phone input's placeholder= attribute (real UI) and
// is deliberately NOT matched here.
const RETIRED = ["906-555-0000", "cal.com/906digital/intro"];

// Tokens that are still unfilled. These are WARNINGS, not failures — the build
// should not go red for something that was already shipping before CI existed.
// Move an entry into RETIRED once it is filled in, so it stays filled.
const UNFILLED = ["REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN"];

const failures = [];
const warnings = [];

for (const page of PAGES) {
  const html = await readFile(page, "utf8");

  // Strip <style> and <script> blocks before hunting for ids — CSS attribute
  // selectors like [aria-invalid="true"] otherwise read as id="true".
  const markup = html
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  // --- 1. anchor targets resolve --------------------------------------------
  const ids = new Set([...markup.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const anchors = [...markup.matchAll(/\bhref="#([^"]+)"/g)].map((m) => m[1]);

  for (const target of new Set(anchors)) {
    if (!ids.has(target)) {
      failures.push(`${page}: href="#${target}" has no matching id`);
    }
  }

  // --- 2 & 3. placeholder scans ---------------------------------------------
  const scan = (needle, sink, label) => {
    html.split("\n").forEach((line, i) => {
      if (line.includes(needle)) {
        sink.push(`${page}:${i + 1}: ${label} "${needle}" — ${line.trim()}`);
      }
    });
  };

  for (const needle of RETIRED) scan(needle, failures, "retired placeholder");
  for (const needle of UNFILLED) scan(needle, warnings, "unfilled token");

  if (!failures.some((f) => f.startsWith(page))) {
    console.log(
      `✓ ${page}: ${new Set(anchors).size} in-page anchors resolve, ` +
        `no retired placeholders`,
    );
  }
}

for (const w of warnings) console.warn(`⚠ ${w}`);

if (failures.length > 0) {
  console.error(`\n✖ ${failures.length} problem(s)\n`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn(
    `\n${warnings.length} unfilled token(s) above. Not failing the build — ` +
      `these shipped before CI existed. Fill them in.`,
  );
}
