// The Internet in One Word — make.fun entry
//
// One word for the whole internet: "Feral".
// No editor, no gatekeeper, no leash — the house cat got out and
// never came back. Funny first, true second, five letters.
//
// The grader runs this in a sandbox with no network and reads
// /output/entry.txt. MAKEFUN_OUTPUT_DIR stands in for /output when
// running outside the grader. Output is deterministic: the same
// five bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Feral";

// Gate guard: the sealed scorer accepts UTF-8 text of 1 to 30
// characters, not only whitespace, and the brief wants one word.
// Fail loudly instead of writing an entry that cannot be judged.
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  console.error("entry word fails the gate: " + JSON.stringify(WORD));
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
