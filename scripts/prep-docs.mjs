#!/usr/bin/env node
/**
 * prep-docs.mjs — Copy agent directories into src/content/docs/ for Astro/Starlight.
 * - Adds `title` frontmatter field (from `name`) to each file if missing.
 * - Generates a section index.md for each directory (fixes 404s on section URLs).
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsDir = join(root, 'src', 'content', 'docs');

const agentDirs = [
  { dir: 'design',              label: 'Design',              emoji: '🎨' },
  { dir: 'engineering',         label: 'Engineering',          emoji: '💻' },
  { dir: 'executive',           label: 'Executive',            emoji: '👔' },
  { dir: 'game-development',    label: 'Game Development',     emoji: '🎮' },
  { dir: 'hr',                  label: 'People & HR',          emoji: '👥' },
  { dir: 'marketing',           label: 'Marketing',            emoji: '📢' },
  { dir: 'paid-media',          label: 'Paid Media',           emoji: '💰' },
  { dir: 'product',             label: 'Product',              emoji: '📦' },
  { dir: 'project-management',  label: 'Project Management',   emoji: '📋' },
  { dir: 'sales',               label: 'Sales',                emoji: '💼' },
  { dir: 'spatial-computing',   label: 'Spatial Computing',    emoji: '🥽' },
  { dir: 'specialized',         label: 'Specialized',          emoji: '🎯' },
  { dir: 'support',             label: 'Support',              emoji: '🤝' },
  { dir: 'testing',             label: 'Testing',              emoji: '🧪' },
];

let copied = 0;

for (const { dir, label, emoji } of agentDirs) {
  const srcDir = join(root, dir);
  const destDir = join(docsDir, dir);

  if (!existsSync(srcDir)) continue;
  mkdirSync(destDir, { recursive: true });

  const agents = [];

  for (const file of readdirSync(srcDir).sort()) {
    if (!file.endsWith('.md')) continue;

    const srcFile = join(srcDir, file);
    const destFile = join(destDir, file);
    let content = readFileSync(srcFile, 'utf-8');

    // Parse frontmatter
    let agentName = file.replace('.md', '');
    let agentDesc = '';

    if (content.startsWith('---')) {
      const endIndex = content.indexOf('\n---', 3);
      if (endIndex !== -1) {
        const frontmatter = content.slice(3, endIndex);
        const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
        const descMatch = frontmatter.match(/^description:\s*"?(.+?)"?\s*$/m);
        const hasTitle = /^title:/m.test(frontmatter);

        if (nameMatch) agentName = nameMatch[1].trim();
        if (descMatch) agentDesc = descMatch[1].trim().slice(0, 100);

        if (nameMatch && !hasTitle) {
          const name = agentName.replace(/"/g, '\\"');
          content = '---\ntitle: "' + name + '"' + content.slice(3);
        }
      }
    }

    writeFileSync(destFile, content);
    agents.push({ name: agentName, desc: agentDesc, slug: file.replace('.md', '') });
    copied++;
  }

  // Generate section index page
  const rows = agents
    .map(a => `| [${a.name}](./${a.slug}/) | ${a.desc} |`)
    .join('\n');

  const indexContent = `---
title: "${emoji} ${label}"
description: "${agents.length} specialized agents in the ${label} division."
---

# ${emoji} ${label}

${agents.length} specialized agents ready to deploy.

| Agent | Description |
|-------|-------------|
${rows}
`;

  writeFileSync(join(destDir, 'index.md'), indexContent);
}

console.log(`✓ Prepared ${copied} agent docs + ${agentDirs.length} section indexes in src/content/docs/`);
