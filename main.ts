// One Sentence for a Traveler from 1800
// Writes a single sentence explaining the modern internet to a person
// from the year 1800, using only things they already know: a library,
// a letter, a house, ink. Node stdlib only, no network, no disk reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Think of a library the size of the world, its shelves open to every house at once, where any letter you write arrives before the ink is dry.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single line (no line break anywhere in it).
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

// MAKEFUN_OUTPUT_DIR names the output directory (default /output);
// a value that already ends in entry.txt is accepted as-is, so the
// program also works when the full file path is handed to it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const dir = outDir.endsWith("entry.txt")
  ? outDir.slice(0, -"entry.txt".length) || "."
  : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
