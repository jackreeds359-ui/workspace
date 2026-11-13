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
