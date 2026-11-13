# Handoff

## Architecture

No application exists yet. The repository holds agent infrastructure only.

| Path | Purpose |
| --- | --- |
| `.agents/scripts/autoupdate.py` | One-shot checkpoint updater |
| `.agents/state/` | Briefings, manifest, checkpoint metadata, log, staging list |
| `.agents/skills/` | Project copies of skills |
| `AGENTS.md` | Portable copy of the owner's standing rules |
| `skills-lock.json` | Lock file from the skills CLI: source and hash per installed skill |
| `handoff.zip` | Verified package of everything above, rebuilt by the updater |
| `.gitignore` | Ignores `handoff.zip.tmp`, dependency folders and env files |

## Updater behaviour

Run `python3 .agents/scripts/autoupdate.py "short summary"`. The summary is optional and becomes the commit subject after `checkpoint: `.

1. Finds the Git root and branch. Works on a branch with no commits.
2. Lists tracked files plus untracked files that are not ignored.
3. Drops symlinks, secrets (`.env`, `.env.*` except example, sample and template, `.npmrc`, `.netrc`, credential and token JSON files, key and certificate extensions), cache folders, and untracked `dist` or `build` folders. Tracked `dist` and `build` content is kept because it was committed on purpose.
4. Hashes the remaining content. If the hash matches `checkpoint.json` and the zip and manifest exist, nothing is rewritten.
5. Otherwise writes `checkpoint.json` and `manifest.json`, builds `handoff.zip.tmp`, and replaces `handoff.zip` atomically.
6. Verifies the zip with `ZipFile.testzip()`.
7. Stages `.agents/state`, the updater, `handoff.zip`, `AGENTS.md` and every path in `.agents/state/changedfiles.txt`. Nothing else is staged.
8. If anything is staged: checks the Git identity, appends a line to `autoupdate.log`, commits.
9. Reads the remote refs with `git ls-remote`. If the upstream ref already equals `HEAD` it reports `current`. Otherwise it pushes with the explicit refspec `HEAD:<upstream ref>`. Never forces.
10. Prints a JSON report: `commit`, `push`, `stale`, `remaining`.

Report fields to act on:

- `commit: unchanged` means nothing differed from the last checkpoint.
- `stale` lists briefings older than five minutes or missing. Update them with real content and rerun.
- `remaining` lists paths still dirty after the commit. Add agent-owned ones to `changedfiles.txt`. Leave unrelated user edits alone.
- `push: current` means the remote branch already equals `HEAD`. `push: pushed ...` means a push ran and succeeded.
- `push: skipped: no upstream` means the branch was never published. Publish once with `git push -u origin HEAD:refs/heads/<branch>`.
- `push: skipped: upstream is the remote default branch` means the branch is the remote default while other branches exist. The workspace policy keeps agents off the default branch.

Failures are appended to `autoupdate.log` as `error` lines and the script exits with code 1.

## Decisions

- Content hash gate. The baseline updater rewrote the zip on every run, which would add a new binary blob to history every five minutes even when idle. The hash gate keeps idle checkpoints free.
- The log line is written before the commit so the tree is clean after a checkpoint. It records the parent commit, not the new one.
- Default branch guard. The push is skipped when the upstream is the remote default and another branch exists. A repository whose only branch is the thread branch has no separate mainline, so the push is allowed there.
- Paths are filtered on repo-relative directory names, so a parent folder named `build` cannot hide the whole repository.
- Skills are copies, not symlinks, so the repository and the zip are self-contained.
- Commit attribution. The Hoplite `prepare-commit-msg` hook appends `Co-authored-by: Hoplite` by default. The owner's rule is never to use an agent identity, so the updater commits with `-c hoplite.commitCoAuthor=false` and the workspace has `git config hoplite.commitCoAuthor false`. The workspace setting is lost when the sandbox resets. Reapply it before any manual commit. Commit `497363a` was made before this and keeps its trailer.

## Dependencies

- Python 3.11 or newer for `hashlib.file_digest`. Verified with 3.12.3. Standard library only.
- Git 2.43.0, GitHub CLI 2.86.0.
- Node 24.22.2 and npm 11.19.1 for `npx skills` and `npx shadcn`.

## Skills inventory

| Skill folders | Source | Commit at install |
| --- | --- | --- |
| `shader-glsl`, `threejs-animation`, `particle-system` | https://github.com/iart-ai/webgl-animation-skills | `0041933813688c357804f7b13dcb85095c5a3210` |
| `gsap-core`, `gsap-frameworks`, `gsap-performance`, `gsap-plugins`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-utils` | https://github.com/greensock/gsap-skills | `aed9cfd3277740755f6bfc1155c7aa645403b760` |
| `designloop` | https://github.com/tonymfer/design-loop | `1d740bc429d58f23d613e875b3ad4f42c5b447cc` |
| `reactbits` | Written locally from https://www.reactbits.dev/get-started/mcp | not applicable |

The first two commits are the upstream `HEAD` values read with `git ls-remote` minutes after the install. `skills-lock.json` holds the per-skill content hashes.

Install commands used:

```bash
npx -y skills@latest add https://github.com/iart-ai/webgl-animation-skills --skill shader-glsl --skill threejs-animation --skill particle-system --copy -y
npx -y skills@latest add https://github.com/greensock/gsap-skills --skill '*' --copy -y
git clone --depth 1 https://github.com/tonymfer/design-loop /tmp/designloop
git -C /tmp/designloop archive HEAD | tar -x -C .agents/skills/designloop
```

## Platform constraints observed

- The workspace source-control policy blocks shell commands that execute a variable as a command. It requires staying off the default branch and publishing with explicit refspecs.
- The GitHub credential is an app installation token scoped to this repository. It cannot create repositories.
- `wake_control` accepted a cron wake. Its list operation answered `thread_wake_authority_unavailable`.
- No setup, run or archive script is configured for the project. `.hoplite/settings.json` does not exist. `.hoplite/` is ignored by Git through the local exclude file.
- No managed Preview is configured.

## Recovery

1. Clone the repository and check out the thread branch, or unzip `handoff.zip` into an empty folder.
2. Read `status.md`, `next.md` and `progress.md` in `.agents/state/`.
3. Run `python3 .agents/scripts/autoupdate.py` and read the report.
4. Re-arm the recurring wake if it has expired.

## Checkpoint inspection 2026-11-12T23:57:06.761807+00:00

Scheduled continuation check: the existing updater, staging list and checkpoint log were inspected in place. No architecture, dependency or recovery changes are needed. Continue using the existing one-shot updater.

## Checkpoint inspection 2026-11-12T23:57:34.306389+00:00

No architecture, dependency or recovery changes. The existing updater and agent-owned staging list remain the checkpoint mechanism.

## Checkpoint inspection 2026-11-13T00:00:45.611057+00:00

No changes to architecture, dependencies, recovery or the checkpoint mechanism. Reusing the existing updater and staging list.

## Checkpoint inspection 2026-11-13T00:05:27.053039+00:00

No architecture, dependency, recovery or updater changes. Existing checkpoint workflow and staging list were retained.

## Checkpoint inspection 2026-11-13T00:10:24.741086+00:00

The existing updater, backup workflow and staging list remain in use. No architecture, dependency or recovery changes occurred.

## Checkpoint inspection 2026-11-13T00:15:22.778456+00:00

No architecture, dependency, recovery or checkpoint mechanism changes. The existing updater and staging list are retained.

## Checkpoint inspection 2026-11-13T00:20:38.937263+00:00

No architecture, dependency, recovery or checkpoint workflow changes. Continuing with the existing updater and staging list.

## Checkpoint inspection 2026-11-13T00:25:22.676950+00:00

No architecture, dependency, recovery or updater changes. Existing checkpoint workflow and agent-owned staging list remain in use.

## Checkpoint inspection 2026-11-13T00:30:27.683688+00:00

No architecture, dependency, recovery or checkpoint workflow changes. Reusing the existing updater and staging list.

## Checkpoint inspection 2026-11-13T00:35:24.684904+00:00

No changes to architecture, dependencies, recovery or the checkpoint mechanism. Reusing the existing updater and staging list.

## Checkpoint inspection 2026-11-13T00:40:24.420149+00:00

No architecture, dependency, recovery or updater changes. Existing checkpoint workflow and staging list remain in use.

## Checkpoint inspection 2026-11-13T00:45:23.468186+00:00

No architecture, dependency, recovery or updater changes. Existing checkpoint mechanism and staging list remain in use.

## Checkpoint inspection 2026-11-13T00:50:22.829805+00:00

No architecture, dependency, recovery or checkpoint workflow changes. Reusing the existing updater and staging list.

## Checkpoint inspection 2026-11-13T00:55:24.880540+00:00

No architecture, dependency, recovery or checkpoint mechanism changes. Reusing the existing updater and staging list.

## Checkpoint inspection 2026-11-13T01:00:29.141880+00:00

No architecture, dependency, recovery or checkpoint workflow changes. Existing updater and staging list remain in use.

## Checkpoint inspection 2026-11-13T01:05:30.388608+00:00

No architecture, dependency, recovery or checkpoint workflow changes. Existing updater and staging list remain in use.

## Idle handoff 2026-11-13T01:10:37.285522+00:00

Idle lifecycle: the recurring wake rem_2da06cc68afc41898f8779de4ad29e20 was cancelled after setup completion. Do not generate repeated idle documentation commits. At the next active project task, re-arm native checkpoints at intervals of no more than five minutes and reuse the existing updater.

## Toolkit readiness 2026-11-13T07:12:18.515507+00:00

Toolkit readiness evidence and proposed pinned installations are documented in tools.md. There is no setup override or repository setup hook. Do not install or persist an installer until the exact tool/source/version approval is received. Preserve the existing updater; independent native static-analysis checks passed.

## Approved toolkit setup 2026-11-13T07:17:43.444610+00:00

At agent startup on Linux x86-64, run bash setup.sh; after fresh installation or restore run bash tools.sh verify. Managed Hoplite setup automatically invokes .hoplite/setup.sh, delegating to setup.sh. SETUP.md documents prerequisites, supported systems, versions and commands. Installer implementation and hash-pinned Python requirements live under .agents/scripts/. Binary tools and virtualenv are ignored, not archived. No extra tool installations are authorized by these instructions.

## Toolkit completion 2026-11-13T07:18:00.601575+00:00

Fresh-directory restore was exercised using only the setup sources: downloaded and verified both archives, installed pinned Python wheels, reran setup without reinstalling, then passed full toolkit verification. The installer uses the invoking Python interpreter and rejects unsupported Python/glibc/platform combinations. Binary caches remain excluded from handoff.zip.

## Web tooling 2026-11-13T19:05:55Z

Observed in this sandbox:

- Node v24.22.2, npm 11.19.1, pnpm 10.34.9, bun 1.3.1, yarn 4.12.0, Python 3.12.3, curl 8.5.0.
- Chrome: /usr/local/bin/google-chrome is a symlink to /opt/hoplite/agent-browser/browsers/chrome-157.0.8103.38/chrome and reports Google Chrome for Testing 157.0.8103.38. It is platform-provided, not installed by an agent.
- agent-browser CLI: /usr/bin/agent-browser. Its version command printed: agent-browser 0.31.1 (hoplite-fps-6). Present but not yet exercised on a page.
- Headless probe with a throwaway local HTML file, flags --headless=new --no-sandbox --disable-gpu: --dump-dom returned the script-written text script-42, so JavaScript ran. --screenshot with --window-size=800,600 wrote an 800x600 PNG that was viewed and showed the expected page. Chrome printed two crashpad socket errors on stderr during the screenshot; the file was still written.
- Playwright is not installed and has no browser cache.
- The repository holds no web project: no package.json, no components.json, no run script and no managed Preview configuration.
- No Unicorn Studio tools are in the agent tool list.

Only a throwaway local page has been loaded. No real site or app has been opened or tested.

## comp.school mapping 2026-11-13T19:10:55.591190+00:00

Continue the current comp.school task from web/comp.school and .agents/scripts/webdump.py. Public GET crawl records URL/status/time/SHA256 and content-addressed objects, plus links and discovery limits. Temporary browser session is compmap; do not export its cookies/auth state or archive personal records. Credentials were supplied in chat only and are not a durable dependency. Sources: client links/assets, normal account navigation and certificate transparency. No hidden-path scans, exploit attempts, auth bypasses, API record enumeration or form writes beyond requested login. Keep briefings, changedfiles list, manifest and handoff.zip current every <=5 minutes during active work; the next agent must continue this practice, including after a handoff, and pause idle wakes on completion.

## Mapping progress 2026-11-13T19:16:04.041731+00:00

The crawler now prioritizes JS/CSS, avoids recursively expanding identical response bodies across mirrored hosts, and resumes from its inventory. Fixed replay discovery to resolve references against the final response URL after redirects. Some literal legacy image paths return HTML app fallback with HTTP 200; classify MIME mismatches explicitly. codeindex.json provides client string evidence with source object hashes and offsets, not verified API contracts. webrestore.py reconstructs a host/path tree while excluding HTML responses masquerading as assets. Continue maintaining briefings/checkpoints and next-agent instructions as the user explicitly requested.

## Mapping checkpoint 2026-11-13T19:20:43.438626+00:00

All 145 tested legacy /assets/svg/ URLs returned the same HTML fallback type, so the remaining legacy references are now explicitly deferred instead of repeatedly downloading fallback markup. Other referenced code/assets continue. Root production names newly discovered in CT (analytics, forms, dates, library, www) are being checked and added to observations/seeds. Preview roots are being mapped separately without recursive source mirroring. Continue keeping the briefings and checkpoint ZIP current; do not put credentials/auth state or personal records in any deliverable.
