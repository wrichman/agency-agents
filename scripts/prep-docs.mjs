#!/usr/bin/env node
/**
 * prep-docs.mjs — Copy agent directories into src/content/docs/ for Astro/Starlight.
 * Adds a `title` frontmatter field (from `name`) to each file if missing.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsDir = join(root, 'src', 'content', 'docs');

const agentDirs = [
  'design',
  'engineering',
  'executive',
  'game-development',
  'hr',
  'marketing',
  'paid-media',
  'product',
  'project-management',
  'sales',
  'spatial-computing',
  'specialized',
  'support',
  'testing',
];

let copied = 0;

for (const dir of agentDirs) {
  const srcDir = join(root, dir);
  const destDir = join(docsDir, dir);

  if (!existsSync(srcDir)) continue;
  mkdirSync(destDir, { recursive: true });

  for (const file of readdirSync(srcDir)) {
    if (!file.endsWith('.md')) continue;

    const srcFile = join(srcDir, file);
    const destFile = join(destDir, file);
    let content = readFileSync(srcFile, 'utf-8');

    // Add `title` from `name` if not already present
    if (content.startsWith('---')) {
      const endIndex = content.indexOf('\n---', 3);
      if (endIndex !== -1) {
        const frontmatter = content.slice(3, endIndex);
        const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
        const hasTitle = /^title:/m.test(frontmatter);

        if (nameMatch && !hasTitle) {
          const name = nameMatch[1].trim().replace(/"/g, '\\"');
          content = '---\ntitle: "' + name + '"' + content.slice(3);
        }
      }
    }

    writeFileSync(destFile, content);
    copied++;
  }
}

console.log(`✓ Prepared ${copied} agent docs in src/content/docs/`);
