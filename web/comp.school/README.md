# comp.school: read-only web archive and map

## Coverage

Captured at 2026-11-13T19:19:14.802153+00:00. This is a bounded browser-delivered-code and public-response archive, not a complete server or private-data dump.

- 502 URL response/error records; 309 unique saved response objects (45,125,436 bytes).
- 96 distinct JavaScript objects; 35 distinct API-string variants; 487 route/path string candidates.
- 212 publicly evidenced hostnames queried through public DNS.
- 163 asset URLs returned HTML rather than the expected file type. They are preserved as observations, not counted as working assets.
- 120 queued URLs remain; 1531 references were deliberately deferred, with reasons in discovery.json.

## Host and application map

| Host | Root result observed | Final location |
| --- | --- | --- |
| admin.comp.school | 200 | https://admin.comp.school/ |
| code.comp.school | 200 | https://comp.school/code/ |
| comp.school | 200 | https://comp.school/ |
| docs.comp.school | 410 | HTTP Error 410: Gone |
| exams.comp.school | 200 | https://comp.school/exams/ |
| games.comp.school | 410 | HTTP Error 410: Gone |
| homework.comp.school | 200 | https://homework.comp.school/ |
| issues.comp.school | 200 | https://issues.comp.school/ |
| mark.comp.school | 200 | https://mark.comp.school/ |
| printouts.comp.school | 200 | https://printouts.comp.school/ |
| recall.comp.school | 200 | https://comp.school/recall/ |
| self-assess.comp.school | 200 | https://self-assess.comp.school/ |

### Navigation and application families

- `comp.school/`: login, dashboard and paper/topic menus. Normal login succeeded; only sanitized main-menu links are archived.
- `/exams/`, `/recall/`, `/code/`: separate app shells and client bundles. Legacy subdomain root redirects were observed for these apps.
- Games/careers are linked through `/exams/games/careers` and `/exams/games/games-room`; client helpers also reference lobby and crossword routes.
- Admin, homework, marking, printouts, issues and self-assessment have separately delivered public shells/bundles. Fetching a login shell does not establish permission to its private records.
- Topic, paper, subtopic and activity/session state often live in query parameters or client state. A route family is not a separate recoverable server HTML page for every possible state.

### API and infrastructure evidence

- `codeindex.json` maps client API/path literals to the source URL, object hash and character offset. Nearby method labels are hints only.
- `analysis.json` records manually inspected routing and client fetch methods. No API record enumeration, credential reset, enrollment, grading or learning-progress submission was performed.
- Cloudflare response headers and public edge addresses were observed. They do not identify the origin server, database, deployment repository or backend implementation.
- GitHub links in the main bundle referred to third-party libraries, not an identified application-source repository.

## Files and reproduction

- `inventory.json`: URL, final URL, HTTP status, content type, timestamp, selected non-secret headers, byte count and SHA-256.
- `objects/<sha256>`: exact public response bodies. Identical content is stored once.
- `links.json`, `navigation.json`: discovered reference graph and sanitized normal-navigation links.
- `dns.json`, `certificates.json`: passive hostname and DNS evidence, including historical preview names and source/pagination limitations.
- `codeindex.json`, `analysis.json`, `summary.json`: code/reference inventory, supported architecture conclusions and coverage metrics.

From the repository root:

```bash
python3 .agents/scripts/webrestore.py /path/to/empty/destination
```

The restore command verifies hashes and recreates host/path files. It omits HTML fallbacks masquerading as assets. This is not a runnable offline replica: backend behavior, protected data and external runtimes/media are not emulated.

The collector can resume with `python3 .agents/scripts/webdump.py`; review its limits and scope first. It sends no authentication credentials and performs only public GETs. It prioritizes code, avoids repeating identical response expansions, and does not request `/api/` endpoints, guessed source maps, hidden files, external origins or credential/action paths.

## Explicit limits and exclusions

- Private server-side source was not obtained. Browser access supplies responses and client code, not arbitrary backend files. An owner-provided repository/deployment export is required for that source.
- No claim of all subdomains: certificate transparency and client links do not expose unpublished names. CT pagination errors/limits are recorded rather than treated as complete discovery.
- No published source-map references were found in collected code. Original TS/TSX files, comments, source tree and build manifests were not recovered.
- 145 checked legacy `/assets/svg/` references returned fallback HTML; remaining references in that legacy namespace are listed but not repeatedly fetched. Computed/template references are not treated as literal fetchable URLs.
- No account history, rosters, submissions, licensed API media, credentials, cookies, session storage or authorization headers are included. Normal account navigation is not a bulk-data export.
- Third-party CDN scripts, fonts, media and runtime dependencies are inventoried where referenced but not mirrored outside the requested domain.
- The site can change during collection; each response has its own timestamp and hash. This is not a transactionally frozen deployment.

## Next-agent continuity

Read the current `.agents/state/` briefings at startup. Continue from the saved inventory and explicit remaining/deferred lists rather than restarting the crawl. Keep status, handoff, next, progress and changedfiles accurate, then run the existing updater to verify `handoff.zip`, commit and push at intervals of no more than five minutes during active work. Never put supplied credentials or browser auth state in the archive. Leave exact verification, limitations and next actions for the following agent, and cancel checkpoint wakes when idle.
