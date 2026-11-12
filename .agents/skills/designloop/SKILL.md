---
name: designloop
description: Screenshot-driven UI and UX iteration using the upstream design-loop (doop) plugin. Use for doop, fix, lint and score work - capture a screenshot, score it, fix the top issues, rebuild and verify. Also use when asked to polish, redesign, rate or visually lint a frontend.
---

# designloop

Project copy of the complete upstream repository https://github.com/tonymfer/design-loop at commit `1d740bc429d58f23d613e875b3ad4f42c5b447cc`, extracted with `git archive` on 2026-11-12. This file is the only local addition. Everything else in this folder is unmodified upstream content. The upstream licence is preserved in `LICENSE`.

## Path resolution

Upstream is a Claude Code plugin and its files reference each other relative to the plugin root. In this repository the plugin root is `.agents/skills/designloop/`. Resolve every upstream path such as `orchestrator/orchestrator.md` against that folder, and treat `${CLAUDE_PLUGIN_ROOT}` as that folder.

## Entrypoints

| Tier | Entrypoint | Browser | Modifies files |
| --- | --- | --- | --- |
| doop | `skills/doop/SKILL.md` | yes | yes, per iteration |
| fix | `skills/fix/SKILL.md` | yes | yes, one or two fixes |
| score | `skills/score/SKILL.md` | yes | no |
| lint | `skills/lint/SKILL.md` | no | no |

Every entrypoint delegates to `orchestrator/orchestrator.md`. Load the entrypoint, the orchestrator and the files the orchestrator names before starting. Do not run from an entrypoint alone.

## Supporting files

- `orchestrator/`: `orchestrator.md`, `loop-engine.md`, `lint-engine.md`, `scan-context.md`, `code-fingerprint.md`, `visual-fingerprint.md`, `reference-analyzer.md`, `interview-flow.md`, `report-engine.md`, `safety-engine.md`, and `screenshot-engine/` with `baseline-init.md`, `iteration-workflow.md`, `fidelity-scoring.md`.
- `skills/modes/`: `creative-unleash`, `precision-polish`, `theme-respect-elevate`, `fix`, `score`.
- `agents/`: `visual-reviewer.md`, `apply-agent.md`, `preview-agent.md`, and `reviewers/`.
- `references/common/`: rubric, screenshots, constraints, output format, anti-hardcode, companion integration. `references/examples/` and `references/inspirations/` hold hints and sources.
- `commands/`: slash command definitions for doop, fix, lint, score, design-loop, export-loop and version.
- `hooks/`, `tests/`, `site/`, `docs/`: upstream hooks, test fixtures, demo site and plans, kept for completeness.

Upstream `CLAUDE.md` names some files that are not present at this commit, for example `orchestrator/screenshot-engine/provider.md` and `skills/modes/polish/`. They are missing upstream, not from this copy. Use the files listed above.

## Tools

Upstream expects one of Claude Preview MCP, Playwright MCP or the agent-browser CLI for screenshots. Use whichever browser or screenshot tool is actually available in the current run and map the capture, resize, click and evaluate steps onto it. If no browser tool is available, only `lint` can run. State that plainly. Reading source is not visual verification.

## Updating

Clone upstream, then run `git -C <clone> archive HEAD | tar -x -C .agents/skills/designloop`, keep this `SKILL.md`, and update the commit recorded above and in `.agents/state/handoff.md`.
