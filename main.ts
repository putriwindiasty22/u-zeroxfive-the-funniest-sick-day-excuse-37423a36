// The Funniest Sick-Day Excuse — a make.fun bounty entry.
// Writes one single-line excuse to entry.txt, then reads it back and
// verifies the file holds exactly that line (no trailing newline).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry, can't come in today — my toddler superglued my keys to the ceiling and honestly, I respect the hustle.";

// --- Validation: the gate needs 1–200 characters, one line, not only whitespace.
// Leading/trailing spaces are also rejected: they count toward the 200-char
// limit while adding nothing, and a padded line lands flat with the judge. ---
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1–200 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line.");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}
if (LINE !== LINE.trim()) {
  throw new Error("Line must not start or end with whitespace.");
}

// --- Output directory: $OUTPUT_DIR, else /output, else ./output if /output is not writable. ---
function writeLine(dir: string): string {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, LINE, "utf8");
  return file;
}

let outFile: string;
try {
  outFile = writeLine(process.env.OUTPUT_DIR ?? "/output");
} catch {
  outFile = writeLine("./output");
}

// Read back and verify an exact match.
const readBack = readFileSync(outFile, "utf8");
if (readBack !== LINE) {
  throw new Error("Verification failed: entry.txt does not match the line exactly.");
}

console.log(`Wrote ${LINE.length} characters to ${outFile}`);
