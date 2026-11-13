# Next

## Actions in priority order

1. Finish the current read-only comp.school crawl and verify every saved response object against its manifest hash. Preserve failures, redirects and MIME mismatches rather than calling fallback HTML a working JS/image file.
2. Finish passive DNS/certificate inventory and client-side route/API-reference analysis. Record provenance and bounded completeness; do not brute-force subdomains or probe server internals.
3. Produce the archive, map and coverage report. User requested all pages/subdomains/code; report honestly that arbitrary private server-side source, all stateful page combinations and unpublished hosts are not obtainable by normal browsing.
4. Verify the archive contains no credentials, cookies, auth state or personal account records. Only sanitized navigation is persisted.
5. Update all briefings and run the existing checkpoint updater, commit and push. Next agents must keep doing this throughout active work at intervals of no more than five minutes, and preserve precise continuation instructions when done. Cancel idle wakes on completion.

## Do not redo

- Skill installation. All thirteen folders are present. Reinstall only to update.
- The updater. Repair it in place. Never add a second checkpoint script.
- `AGENTS.md`. Edit it, do not replace it.

## Warnings

- `npx skills add ... -y` wrote the skills into about fifty agent-specific folders at the repository root, plus `data/`, `agent/` and `skills/`. Only `.agents/skills/` and `skills-lock.json` were kept. After any future install, check `git status` and remove the extra folders before committing. Read `npx skills add --help` for an agent-targeting option first.
- Never read or print the credential files under `.git/`.
- Upstream `designloop` files are unmodified third-party content. Change only `.agents/skills/designloop/SKILL.md`.
- A run that changes nothing reports `commit: unchanged` and writes no log line. That is expected.

## Checkpoint inspection 2026-11-12T23:57:06.761807+00:00

Scheduled continuation check: no new project task was supplied. Preserve the bootstrap and wait for the owner; do not begin unrelated implementation.

## Checkpoint inspection 2026-11-12T23:57:34.306389+00:00

Wait for the first project task. Existing owner actions remain pending; do not begin unrelated implementation.

## Checkpoint inspection 2026-11-13T00:00:45.611057+00:00

Await the first project task. Do not restart setup or invent implementation work; existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:05:27.053039+00:00

Await the first product task; pending owner-dependent integration and branch decisions are unchanged. No unrelated work is planned.

## Checkpoint inspection 2026-11-13T00:10:24.741086+00:00

Await the first project task. Do not repeat setup or start unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:15:22.778456+00:00

Await the first project task. Do not repeat completed setup or start unrelated work. Integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:20:38.937263+00:00

Await the first project task. No setup work needs repeating and no unrelated implementation is planned. Existing owner-dependent decisions remain pending.

## Checkpoint inspection 2026-11-13T00:25:22.676950+00:00

Await the first project task; no unrelated implementation or repeated setup is needed. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:30:27.683688+00:00

Await the first project task without repeating setup or beginning unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:35:24.684904+00:00

Await the first project task. Do not repeat completed setup or begin unrelated work. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:40:24.420149+00:00

Await the first project task without repeating completed setup or starting unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:45:23.468186+00:00

Await the first project task without repeating setup or starting unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:50:22.829805+00:00

Await the first project task. No repeated setup or unrelated implementation is needed. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T00:55:24.880540+00:00

Await the first project task without repeating setup or starting unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T01:00:29.141880+00:00

Await the first project task without repeating completed setup or starting unrelated implementation. Existing integration and default-branch decisions remain pending.

## Checkpoint inspection 2026-11-13T01:05:30.388608+00:00

Await the first project task without repeating completed setup or starting unrelated implementation. Existing integration and default-branch decisions remain pending.

## Idle handoff 2026-11-13T01:10:37.285522+00:00

Await the first project task. When active repository work resumes, re-arm the five-minute checkpoint wake; the previous wake rem_2da06cc68afc41898f8779de4ad29e20 is cancelled. No further idle checkpoint commits are needed. Existing integration and default-branch decisions remain pending.

## Toolkit readiness 2026-11-13T07:12:18.515507+00:00

Next essential dependency is the pending toolkit installation approval. If all four tools are approved, install project-locally, verify checksums and headless/PE/disassembly behavior, then persist and rerun the approved setup. If only Python tools are approved, do not install Java or Ghidra. No game, build or feature is selected. Cancel active-work checkpoint wakes while awaiting approval.

## Approved toolkit setup 2026-11-13T07:17:43.444610+00:00

Complete clean-directory setup/verification, then final checkpoint. For subsequent agents: read SETUP.md and run bash setup.sh immediately as part of Linux x86-64 startup; run bash tools.sh verify after a fresh install or restore. No game binary or target feature exists yet; do not infer compatibility from toolkit verification. Cancel active wake on completion.

## Toolkit completion 2026-11-13T07:18:00.601575+00:00

Installation and verification are complete. Next task requires a specific target binary/build and requested behavior. Future agents run bash setup.sh at Linux x86-64 startup, then bash tools.sh verify on fresh installs/restores. No repeated idle checkpoint commits are needed.

## Web task 2026-11-13T19:05:55Z

This supersedes the earlier line saying the next task needs a target binary. The next task is web work. Its target, requested behaviour and deliverable are not known yet: get them from the owner before choosing a stack or writing code. bash setup.sh is not needed for web-only work.

When work starts: re-arm the five-minute checkpoint wake, load the relevant project skills, and verify UI changes with real screenshots from the bundled Chrome or agent-browser. Installing anything new, for example Playwright, needs the owner's approval of tool, source and version first. The default-branch decision still matters for pull requests: there is no main branch to target.

## comp.school mapping 2026-11-13T19:10:55.591190+00:00

Continue public asset crawl; analyze routes/API references offline; map production host responses and passive CT names. Review ordinary authenticated navigation without collecting personal records or triggering learning/progress writes. Report bounded coverage and unverified/inaccessible areas explicitly. Server-side code needs an owner-provided source/deployment export, unless published in delivered assets. On completion, leave precise continuation instructions and tell the next agent to maintain briefings/checkpoints as part of startup and ongoing work.

## Mapping progress 2026-11-13T19:16:04.041731+00:00

Current milestone: collection pass 2 is running; generated codeindex.json will need regeneration after the final assets arrive. DNS/CT agent and offline bundle analysis agent are still working. Need final README/MAP, object/hash verification, restoration test, credential scan, downloadable artifact and final checkpoint. No offensive actions or server-code probing.
