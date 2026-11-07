import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, "..", "dist");
const files = [
  "index.html",
  "style.css",
  "app.js",
  "data/signals.json",
  "blog/index.html",
  "blog/blog.css",
  "blog/blog.js",
];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const relativePath of files) {
  const source = join(root, "..", relativePath);
  if (!existsSync(source)) {
    throw new Error(`Required static file is missing: ${relativePath}`);
  }

  const destination = join(output, relativePath);
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination);
}

console.log(`Built ${files.length} static files into dist/.`);
