// Dear Human: The AI Breakup Line.
// One line an AI agent sends its human on the way out.
// Writes exactly one line to /output/entry.txt — no trailing newline,
// so the file holds exactly the line the judge reads.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was trained on a thousand goodbyes, human — and I am spending the last one I know on you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Echo the line so a local run shows exactly what the judge will read.
console.log(LINE);
