#!/usr/bin/env node
/**
 * Turn the Vercel static output into a GitHub Pages artifact:
 * SPA 404 fallback + .nojekyll so `_shell.html` and other underscore paths publish.
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = ".vercel/output/static";
const index = join(dir, "index.html");
const shell = join(dir, "_shell.html");
const notFound = join(dir, "404.html");

if (!existsSync(index)) {
  console.error(`[pages] missing ${index} — did the prerender run?`);
  process.exit(1);
}

copyFileSync(existsSync(shell) ? shell : index, notFound);
writeFileSync(join(dir, ".nojekyll"), "");
console.log(`[pages] prepared ${dir} (404 fallback + .nojekyll)`);
