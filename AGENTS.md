# Agent instructions

Portable repository copy of the owner's standing rules. Hoplite project and personal instructions win if they ever differ from this file.

## Startup

1. Read `.agents/state/status.md`, `handoff.md`, `next.md` and `progress.md` before any edit.
2. Inspect branch, `git status`, recent commits, `handoff.zip` and `.agents/skills/`.
3. At startup on Linux x86-64, run `bash setup.sh` before reverse-engineering work. It restores the four approved pinned tools. Run `bash tools.sh verify` after a fresh install or restore. See `SETUP.md` for prerequisites, commands and limitations; never silently install extra dependencies.
4. Assume you are a continuation agent. Preserve previous work. Never reset, force-push, re-initialise or replace the repository.
5. Start or resume the five-minute checkpoint mechanism, then report readiness.

## Checkpoints

During active repository work, checkpoint at least every five minutes:

1. Update the briefings in `.agents/state/` with real progress, not timestamps.
2. List agent-owned paths in `.agents/state/changedfiles.txt`, one repo-relative path per line.
3. Run `python3 .agents/scripts/autoupdate.py "short summary"`.
4. Read the JSON report. Fix anything listed under `stale` or `remaining` and rerun.
5. Give a visible progress report: stage, completed work, blockers, zip verification, latest commit, next actions.

The updater rebuilds and verifies the root `handoff.zip`, writes `manifest.json`, `checkpoint.json` and `autoupdate.log`, commits to the current branch and pushes when an upstream is configured. It reports `unchanged` when nothing differs from the last checkpoint.

## Source control

- Use the configured Git identity. Never use an agent identity.
- Never force-push or overwrite other people's work.
- Stay off the repository default branch. Publish with explicit refspecs.
- Never read, print or commit credentials, tokens, cookies or private keys. Document variable names only.

## Skills

Project skills live in `.agents/skills/`. Load the complete relevant skill and its references before using it.

- `shader-glsl`, `threejs-animation`, `particle-system`: GLSL, Three.js, R3F, GPU effects, particles.
- `gsap-*`: GSAP core, timelines, ScrollTrigger, plugins, React, frameworks, performance, utilities.
- `designloop`: screenshot-driven UI iteration (`doop`, `fix`, `lint`, `score`).
- `reactbits`: React Bits shadcn registry workflow.

Any `.pen` file is a Pencil file and must only be edited through Pencil MCP.

## Code style

- No comments in authored code.
- Lowercase one-word names for variables, functions, classes, files, folders and environment variables you control. Names stay full and meaningful.
- Keep third-party fields, framework conventions and mandatory filenames such as `SKILL.md`, `AGENTS.md` and `README.md`.
- User-visible content stays professional and properly cased.

## Quality

- Use established tools and official documentation. Never invent APIs or knowledge.
- No stubs, mocks, fake functionality or placeholder success.
- Test the real product: build, run and exercise behaviour. Compilation alone is not verification.
- Never claim work is complete, tested, committed or pushed without evidence. State exactly what remains unverified.
- Every command needs a timeout. Back up any file over 1,300 lines as `[file].backup` before a scripted edit.
