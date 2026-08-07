#!/usr/bin/env node
// Content checks for index.html that html-validate does not cover:
//   1. Every in-page #anchor points at an element that exists.
//   2. Retired placeholder strings have not crept back in.
//
// Run with: node scripts/check-content.mjs

import { readFile } from "node:fs/promises";

const FILE = "index.html";
const html = await readFile(FILE, "utf8");

// Strip <style> and <script> blocks before hunting for ids — CSS attribute
// selectors like [aria-invalid="true"] otherwise read as id="true".
const markup = html
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

const failures = [];

// --- 1. anchor targets resolve ---------------------------------------------
const ids = new Set([...markup.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
const anchors = [...markup.matchAll(/\bhref="#([^"]+)"/g)].map((m) => m[1]);

for (const target of new Set(anchors)) {
  if (!ids.has(target)) {
    failures.push(`broken in-page link: href="#${target}" has no matching id`);
  }
}

// --- 2. retired placeholders stay retired ----------------------------------
// These were the launch placeholders listed in README.md. They have all been
// replaced with real values; this guards against a regression, not a to-do.
// Note: 906-555-0199 is the phone input's placeholder= attribute (real UI) and
// is deliberately NOT matched here.
const RETIRED = ["906-555-0000", "cal.com/906digital/intro"];

for (const needle of RETIRED) {
  const lines = html
    .split("\n")
    .map((line, i) => [i + 1, line])
    .filter(([, line]) => line.includes(needle));

  for (const [lineNo, line] of lines) {
    failures.push(
      `placeholder "${needle}" is back at ${FILE}:${lineNo}: ${line.trim()}`,
    );
  }
}

// --- report -----------------------------------------------------------------
if (failures.length > 0) {
  console.error(`✖ ${failures.length} problem(s) in ${FILE}\n`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

console.log(
  `✓ ${FILE}: ${new Set(anchors).size} in-page anchors resolve, ` +
    `no retired placeholders`,
);
