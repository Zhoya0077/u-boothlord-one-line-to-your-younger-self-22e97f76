// One Line to Your Younger Self — u-boothlord-one-line-to-your-younger-self-22e97f76
// Writes a single line (1-200 chars, English, one breath) to entry.txt and
// prints it to stdout. Deterministic: the same line on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Take the night shift at the bakery — the 3 a.m. regular with the chipped mug is the one you'll marry, and the flour never washes out.";

// Self-checking gate: the sealed scorer requires UTF-8 text of 1-200
// characters, not only whitespace, a single line, no second sentence.
function gate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry length ${text.length} outside 1-200 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // One sentence doing the work: no sentence terminator followed by a
  // capitalised new sentence (abbreviations like "a.m." are lowercase after).
  const body = text.slice(0, -1);
  if (/[.!?]\s+[A-Z]/.test(body)) {
    throw new Error("entry contains a second sentence");
  }
}

gate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back re-gate: what landed on disk must be byte-identical to the
// gated line, so a write failure or encoding slip can never ship silently.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("entry.txt on disk differs from the gated entry");
}
gate(onDisk);
console.log(ENTRY);
