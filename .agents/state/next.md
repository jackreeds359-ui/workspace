# Next

## Actions in priority order

1. Current read-only delivery is complete. Read web/comp.school/README.md, HOSTS.md, ROUTES.md and summary.json for coverage, map and limitations. Do not rerun the full crawl or continue idle-only checkpoints.
2. For unpublished backend source, obtain an owner-provided repository or deployment export. Normal website login does not supply backend source. Do not probe hidden files, backups, origins or exploit paths.
3. If a later task needs more passive hostname history, review certificates.json and its saved cursor and provider rate budget first. Do not evade that limit. Preview builds were root-mapped, not recursively mirrored; external CDN/runtime/media and private API records are not dumped.
4. Restore files with python3 .agents/scripts/webrestore.py /path/to/empty/destination. They are captured static responses, not a runnable replacement backend.
5. At the start of any new active task, revalidate this state against Git and the current files, re-arm five-minute checkpoints, and keep status, handoff, next, progress, manifest and changedfiles accurate. The next agent must continue doing this through its work and leave exact verification/limitations/next actions when done. Cancel wakes when idle; never include credentials, cookies, auth state or unrelated personal records in backups.

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

## Mapping checkpoint 2026-11-13T19:20:43.438626+00:00

Finish pass 3 remaining assets. Merge newly discovered production roots from observations.json and crawl their directly referenced assets in a final pass. Finish root reachability map, regenerate webreport.py outputs, validate all hashes and restored paths, scan for secrets, package downloadable archive, and save a final handoff. CT enumeration is incomplete at the actual provider rate budget; preserve its cursor and limit evidence, do not evade that limit.

## Read-only delivery 2026-11-13T19:25:02.279397+00:00

Final checks passed: SHA-256 for all 324 objects, JSON validity, no supplied-credential/private-key/token-pattern matches, Python compilation and git diff --check. Restore wrote 611 files; repeating restore to a nonempty destination returned exit 2 as intended. Final package includes only target snapshots and their helper scripts; server source, account records, licensed API media and auth/session state are excluded. Requested broad all-pages/all-server-code coverage is not asserted.

## Client coverage extension 2026-11-13T19:49:29.191235+00:00

Finish browser audit of entry routes, derive additional actual navigation/features from normal DOM and offline route evidence, visit safe UI states to trigger lazy code without writes, collect missing static/dynamic imports and worker/runtime URLs, and generate page->entry/shared/lazy graph plus readable originals mapping. Original TS/TSX names and all roles/deployments cannot be assumed. No CT expansion or backend probing needed. Reconcile runtime route limitations honestly rather than claiming universal all-pages coverage.

## Runtime coverage checkpoint 2026-11-13T19:50:41.986385+00:00

Continue plan2 guarded browser capture, inspect observed UI and code-import evidence for additional safe routes/actions, include known HTTP200 preview roots with code collection and access limits, then resolve dependency graph gaps. JS index agent is building AST map/readables; use it once ready. Need final closure validation per page and code dependency, readable parse/equivalence checks and updated downloadable package. Keep every <=5min checkpoint, no credentials or API bodies.

## Client coverage progress 2026-11-13T19:55:03.870944+00:00

Finish current safe feature-style browser pass, collect JS dependency index results and fetch directly evidenced missing code/assets, then repeat AST index to closure. Generate page->entry/static/dynamic/shared/worker coverage and explicit access/errors/unresolved list. Do not claim all pages or original source reconstruction from readable formatting. Test worker/code loader coverage without running user programs or submitting grades. Preserve checkpoint/next-agent continuity.

## Dependency closure checkpoint 2026-11-13T19:59:49.056655+00:00

Finish updated AST graph pass, fetch missing concrete module references and worker/runtime dependencies once, then default formatter pass with semantic checks/cache. Produce page entry/shared/lazy/worker dependency closure, explicit computed/default/unavailable/access-gated list and readable hash-to-source organization. Final validation must show graph coverage and current raw/readable hash checks; do not equate formatted minified code with recovered TS/TSX source. Maintain next-agent briefing/checkpoints and cancel wake when done.

## Client graph verification 2026-11-13T20:04:01.174709+00:00

Finish semantic formatter result, resolve any remaining new concrete dependencies once, extract statically recoverable blob-worker code without evaluating it, then final graph/coverage/hash/syntax checks. Confirm no private project or account text in runtime.json. Produce updated archive with originals+readables+page graph and explicit limits. No blanket all-pages or all-roles claim; preserve remaining computed/bare/default-unavailable references.
