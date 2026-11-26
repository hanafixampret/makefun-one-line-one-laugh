import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My fitness tracker gave up on steps and started counting my sighs as cardio.";

if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry is ${entry.length} chars, gate needs 1-140`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (entry !== entry.trim() || entry.includes("  ")) {
  throw new Error("entry must have no leading/trailing space or double spaces");
}
if (!/[.!?]$/.test(entry)) {
  throw new Error("entry must end with terminal punctuation");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
