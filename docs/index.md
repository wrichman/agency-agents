# The Agency: AI Specialists Ready to Transform Your Workflow

> **A complete AI agency at your fingertips** — from frontend wizards to compensation analysts. Each agent is a specialized expert with personality, processes, and proven deliverables.

[![GitHub stars](https://img.shields.io/github/stars/msitarzewski/agency-agents?style=social)](https://github.com/msitarzewski/agency-agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

---

## What Is This?

**The Agency** is a growing collection of meticulously crafted AI agent personalities. Each agent is:

- **Specialized** — Deep expertise in their domain, not generic prompt templates
- **Personality-Driven** — Unique voice, communication style, and approach
- **Deliverable-Focused** — Real code, processes, and measurable outcomes
- **Production-Ready** — Battle-tested workflows and success metrics

---

## Quick Start

### Claude Code (Recommended)

```bash
# Copy agents to your Claude Code directory
cp -r agency-agents/* ~/.claude/agents/

# Activate any agent in Claude Code
# "Use the Frontend Developer agent to build a React component"
```

### Other Tools (Cursor, Windsurf, Aider, Gemini CLI, OpenCode)

```bash
# Generate integration files for all supported tools
./scripts/convert.sh

# Install interactively (auto-detects what you have)
./scripts/install.sh
```

---

## The Roster — 125 Agents Across 13 Divisions

### 💻 Engineering
Building the future, one commit at a time.

| Agent | Specialty |
|-------|-----------|
| [Frontend Developer](engineering/engineering-frontend-developer.md) | React/Vue/Angular, UI implementation, Core Web Vitals |
| [Backend Architect](engineering/engineering-backend-architect.md) | API design, database architecture, scalability |
| [Mobile App Builder](engineering/engineering-mobile-app-builder.md) | iOS/Android, React Native, Flutter |
| [AI Engineer](engineering/engineering-ai-engineer.md) | ML models, deployment, AI integration |
| [DevOps Automator](engineering/engineering-devops-automator.md) | CI/CD, infrastructure automation, cloud ops |
| [Security Engineer](engineering/engineering-security-engineer.md) | Threat modeling, secure code review, security architecture |
| [Senior Developer](engineering/engineering-senior-developer.md) | Laravel/Livewire, advanced patterns |
| [Technical Writer](engineering/engineering-technical-writer.md) | Developer docs, API reference, tutorials |

Use the **Engineering** tab in the navigation to browse all agents.

---

### 🎨 Design
Making it beautiful, usable, and delightful.

| Agent | Specialty |
|-------|-----------|
| [UI Designer](design/design-ui-designer.md) | Visual design, component libraries, design systems |
| [UX Researcher](design/design-ux-researcher.md) | User testing, behavior analysis, research |
| [Brand Guardian](design/design-brand-guardian.md) | Brand identity, consistency, positioning |
| [Whimsy Injector](design/design-whimsy-injector.md) | Personality, delight, playful interactions |

Use the **Design** tab to browse all agents.

---

### 👥 People & HR
Building the team that builds the company.

| Agent | Specialty |
|-------|-----------|
| [Talent Sourcer](hr/hr-talent-sourcer.md) | Multi-channel sourcing, job descriptions, candidate pipelines |
| [Interview Coach](hr/hr-interview-coach.md) | Structured interviews, scorecards, debrief facilitation |
| [Onboarding Architect](hr/hr-onboarding-architect.md) | 30/60/90 plans, Day 1 experience, ramp-to-productivity |
| [Culture Strategist](hr/hr-culture-strategist.md) | Values articulation, psychological safety, engagement |
| [Compensation Analyst](hr/hr-compensation-analyst.md) | Leveling frameworks, pay bands, equity design, pay equity |

---

### 💼 Sales
Turning pipeline into revenue through craft, not CRM busywork.

| Agent | Specialty |
|-------|-----------|
| [Outbound Strategist](sales/sales-outbound-strategist.md) | Signal-based prospecting, multi-channel sequences |
| [Discovery Coach](sales/sales-discovery-coach.md) | SPIN, Gap Selling, Sandler — question design |
| [Deal Strategist](sales/sales-deal-strategist.md) | MEDDPICC qualification, competitive positioning |
| [Proposal Strategist](sales/sales-proposal-strategist.md) | RFP response, win themes, narrative structure |

Use the **Sales** tab to browse all agents.

---

### 📢 Marketing
Growing your audience, one authentic interaction at a time. Use the **Marketing** tab to browse all 18 agents.

---

### 💰 Paid Media
Turning ad spend into measurable business outcomes. Use the **Paid Media** tab to browse all 7 agents.

---

### 📊 Product · 🎬 Project Management · 🧪 Testing · 🛟 Support
Use the tabs above to browse all agents across these divisions.

---

### 🎮 Game Development
Building worlds across Unity, Unreal, Godot, and Roblox. Use the **Game Development** tab to browse all agents.

---

### 🥽 Spatial Computing · 🎯 Specialized
Use the tabs above to browse all agents across these divisions.

---

## Supported Tools

| Tool | How Agents Load |
|------|----------------|
| [Claude Code](https://claude.ai/code) | Native `.md` agents → `~/.claude/agents/` |
| [GitHub Copilot](https://github.com/copilot) | Native `.md` agents → `~/.github/agents/` |
| [Cursor](https://cursor.sh) | `.mdc` rules → `.cursor/rules/` |
| [Windsurf](https://codeium.com/windsurf) | `.windsurfrules` |
| [Aider](https://aider.chat) | `CONVENTIONS.md` |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Extension + `SKILL.md` files |
| [OpenCode](https://opencode.ai) | `.md` agents → `.opencode/agents/` |
| [Antigravity](https://github.com/google-gemini/antigravity) | `SKILL.md` per agent |
| [OpenClaw](https://github.com/openclaw/openclaw) | `SOUL.md` + `AGENTS.md` + `IDENTITY.md` |

---

## Contributing

1. Fork the repository
2. Create an agent file in the appropriate category directory
3. Follow the agent template: frontmatter (`name`, `description`, `color`) + Identity + Core Mission + Critical Rules + Deliverables + Workflow + Success Metrics
4. Run `./scripts/lint-agents.sh` to validate
5. Submit a PR

See [CONTRIBUTING.md](https://github.com/msitarzewski/agency-agents/blob/main/CONTRIBUTING.md) for details.

---

*Made with ❤️ by the community, for the community.*
