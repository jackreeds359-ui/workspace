# Next

## Actions in priority order

1. Get the first project task from the owner. There is no product code and no backlog.
2. Owner action: connect Unicorn Studio MCP in Hoplite Settings, Project, MCP. Add `https://agentmcp-qbght5huyq-uc.a.run.app/mcp`, run Analyze connection, save OAuth, Connect, approve in the browser, keep Allow agents enabled. Afterwards an agent verifies that the tools are discovered.
3. When a shadcn-compatible React project is created here, merge the `@react-bits` registry key into its `components.json` as described in `.agents/skills/reactbits/SKILL.md`.
4. Re-arm the recurring five-minute wake when it expires on 2026-11-13 12:00 UTC, if work is still active.

## Do not redo

- Skill installation. All thirteen folders are present. Reinstall only to update.
- The updater. Repair it in place. Never add a second checkpoint script.
- `AGENTS.md`. Edit it, do not replace it.

## Warnings

- `npx skills add ... -y` wrote the skills into about fifty agent-specific folders at the repository root, plus `data/`, `agent/` and `skills/`. Only `.agents/skills/` and `skills-lock.json` were kept. After any future install, check `git status` and remove the extra folders before committing. Read `npx skills add --help` for an agent-targeting option first.
- Never read or print the credential files under `.git/`.
- Upstream `designloop` files are unmodified third-party content. Change only `.agents/skills/designloop/SKILL.md`.
- A run that changes nothing reports `commit: unchanged` and writes no log line. That is expected.
