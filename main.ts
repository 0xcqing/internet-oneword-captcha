import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), "captcha", {
  encoding: "utf8",
  mode: 0o644,
});
