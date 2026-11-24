// One Sentence for a Traveler from 1800
// Writes a single sentence (<=200 chars) explaining the modern internet
// to someone from 1800, using only things they already know: a road,
// a post office, a library, a market. Deterministic: same text every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "A single invisible road now joins every library, post office, and market on earth, so a letter, a book, or a song can reach anyone, and any answer can return, in the blink of an eye.";

// Self-check: the gate requires UTF-8 text of 1-200 chars, not only
// whitespace, and the task requires exactly one sentence.
if (SENTENCE.length < 1 || SENTENCE.length > 200 || !SENTENCE.trim()) {
  throw new Error(`sentence must be 1-200 chars, got ${SENTENCE.length}`);
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("sentence must be exactly one sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
