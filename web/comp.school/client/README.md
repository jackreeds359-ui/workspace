# Client JavaScript coverage

This extends the original public crawl with actual browser network captures, AST dependency extraction and readable copies. It is not an original-source rebuild or proof of every possible application state.

## Summary

- observations: 159
- request_attributed_observations: 58
- unique_requested_urls: 50
- unique_observed_urls: 57
- explicit_entry_observations: 86
- network_code_objects: 136
- shared_code_objects: 133
- parsed_code_objects: 121
- formatted_and_preserved: 121
- unavailable_literal_code_urls: 13
- missing_concrete_import_preload_worker_targets: 0
- unresolved_unique_sites: 58
- extracted_embedded_blobs: 1
- blocked_nonread_requests: 405

## Navigation states

| ID | State | Observed URL | Network code objects | Notes |
| --- | --- | --- | --- | --- |
| 0 | dashboard | https://comp.school/ | 3 |  |
| 1 | paper1-menu | https://comp.school/?menu=paper-1 | 3 |  |
| 2 | paper2-menu | https://comp.school/?menu=paper-2 | 3 |  |
| 3 | more-menu | https://comp.school/?menu=more | 3 |  |
| 4 | coding-entry | https://comp.school/?sql=mock | 10 |  |
| 5 | recall-entry | https://comp.school/recall/?sql=mock | 6 |  |
| 6 | exams-entry | https://comp.school/exams/?sql=mock | 10 |  |
| 7 | admin-entry | https://admin.comp.school/ | 33 |  |
| 8 | homework-entry | https://homework.comp.school/ | 3 |  |
| 9 | marking-entry | https://mark.comp.school/ | 2 |  |
| 10 | printouts-entry | https://printouts.comp.school/ | 2 |  |
| 11 | self-assess-entry | https://self-assess.comp.school/?sql=mock | 6 |  |
| 12 | issues-entry | https://issues.comp.school/?sql=mock | 6 |  |
| 13 | component-library | https://library.comp.school/ | 3 |  |
| 14 | coding-menu | https://comp.school/?menu=paper-2-coding | 3 |  |
| 15 | paper2-topics | https://comp.school/?menu=paper-2-topics | 3 |  |
| 16 | IT-club-menu | https://comp.school/?menu=it-club | 3 |  |
| 17 | code-if | https://comp.school/code/essentials/if?sql=mock | 3 |  |
| 18 | code-io | https://comp.school/code/essentials/io?sql=mock | 3 |  |
| 19 | code-for | https://comp.school/code/essentials/for?sql=mock | 3 |  |
| 20 | code-while | https://comp.school/code/essentials/while?sql=mock | 3 |  |
| 21 | code-functions | https://comp.school/code/essentials/functions?sql=mock | 3 |  |
| 22 | code-scratch | https://comp.school/code/essentials/scratch?sql=mock | 3 |  |
| 23 | sql-challenges | https://comp.school/code/sql-challenges?sql=mock | 5 |  |
| 24 | paper1-exams | https://comp.school/exams/?paper=1&sql=mock | 71 |  |
| 25 | paper2-exams | https://comp.school/exams/?paper=2&sql=mock | 71 |  |
| 26 | recall-topic1 | https://comp.school/recall/?paper=1&topic=1.1&sql=mock | 5 |  |
| 27 | careers-game | https://comp.school/exams/games/careers?sql=mock | 74 |  |
| 28 | games-room-selector | https://comp.school/exams/games/games-room?sql=mock | 74 |  |
| 29 | python-playground | https://comp.school/code/python?paper=2&sql=mock | 8 |  |
| 30 | sql-playground | https://comp.school/code/sql?paper=2&sql=mock | 6 |  |
| 31 | code-editor | https://comp.school/code/editor?paper=2&sql=mock | 3 |  |
| 32 | python-challenge-menu | https://comp.school/?menu=python-challenges | 3 |  |
| 33 | code-if-editor | https://comp.school/code/essentials/if?sql=mock | 3 |  |
| 34 | recall-terms | https://comp.school/recall?paper=1&topic=1.1&sql=mock | 5 |  |
| 35 | recall-games | https://comp.school/recall?paper=1&topic=1.1&sql=mock | 5 |  |
| 36 | recall-questions | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 37 | paper1-year-selector | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 38 | paper2-year-selector | https://comp.school/exams?paper=2&sql=mock | 71 |  |
| 39 | preview-root-preview-1349.comp.school | https://preview-1349.comp.school/ | 3 | Login shell; feature access not established |
| 40 | preview-root-preview-1373.admin.comp.school | https://preview-1373.admin.comp.school/ | 3 |  |
| 41 | preview-root-preview-1373.code.comp.school | https://preview-1373.code.comp.school/ | 3 |  |
| 42 | preview-root-preview-1373.comp.school | https://preview-1373.comp.school/ | 3 | Login shell; feature access not established |
| 43 | preview-root-preview-1373.exams.comp.school | https://preview-1373.exams.comp.school/ | 6 |  |
| 44 | preview-root-preview-1373.forms.comp.school | https://preview-1373.forms.comp.school/ | 3 |  |
| 45 | preview-root-preview-1373.games.comp.school | https://preview-1373.games.comp.school/ | 3 |  |
| 46 | preview-root-preview-1373.issues.comp.school | https://preview-1373.issues.comp.school/ | 3 |  |
| 47 | preview-root-preview-1373.mark.comp.school | https://preview-1373.mark.comp.school/ | 3 |  |
| 48 | preview-root-preview-1373.printouts.comp.school | https://preview-1373.printouts.comp.school/ | 3 |  |
| 49 | preview-root-preview-1373.recall.comp.school | https://preview-1373.recall.comp.school/ | 3 |  |
| 50 | preview-root-preview-1373.self-assess.comp.school | https://preview-1373.self-assess.comp.school/ | 3 |  |
| 51 | preview-root-preview-main-1134.comp.school | https://preview-main-1134.comp.school/ | 3 | Login shell; feature access not established |
| 52 | preview-root-preview-main-1134.printouts.comp.school | https://preview-main-1134.printouts.comp.school/ | 3 |  |
| 53 | recall-flashcards | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 54 | recall-matching | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 55 | recall-guess-the-term | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 56 | recall-crossword | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 57 | recall-crit-wall | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 58 | recall-tell-me-why | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 59 | recall-exam-style | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 60 | recall-game-quiz:-fetch-execute-cycle | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.1 | 5 |  |
| 61 | recall-game-upgrade-bay | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.2 | 5 |  |
| 62 | recall-game-hidden-computers | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.3 | 5 |  |
| 63 | exam-flashcards | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 64 | exam-matching | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 65 | exam-guess-the-term | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 66 | exam-frayer-models | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 67 | exam-example-notes | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 68 | exam-take-the-paper | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 69 | code-search-sort | https://comp.school/code/python-sort-search-algorithms?paper=2&sql=mock | 8 |  |
| 70 | crossword-lobby-no-join | https://comp.school/exams/games/crossword?sql=mock | 79 |  |
| 71 | code-climb-selector-no-join | https://comp.school/exams/games/code-climb?sql=mock | 78 |  |
| 72 | code-if-theme | https://comp.school/code/essentials/if?sql=mock | 7 |  |
| 73 | entry-diagnostic-dashboard | https://comp.school/ | 3 |  |
| 74 | entry-diagnostic-paper1-menu | https://comp.school/?menu=paper-1 | 3 |  |
| 75 | entry-diagnostic-paper2-menu | https://comp.school/?menu=paper-2 | 3 |  |
| 76 | entry-diagnostic-more-menu | https://comp.school/?menu=more | 3 |  |
| 77 | entry-diagnostic-coding-entry | https://comp.school/?sql=mock | 6 |  |
| 78 | entry-diagnostic-recall-entry | https://comp.school/recall/?sql=mock | 5 |  |
| 79 | entry-diagnostic-exams-entry | https://comp.school/ | 74 |  |
| 80 | entry-diagnostic-admin-entry | https://admin.comp.school/ | 3 |  |
| 81 | entry-diagnostic-homework-entry | https://homework.comp.school/ | 3 |  |
| 82 | entry-diagnostic-marking-entry | https://mark.comp.school/ | 2 |  |
| 83 | entry-diagnostic-printouts-entry | https://printouts.comp.school/ | 2 |  |
| 84 | entry-diagnostic-self-assess-entry | https://self-assess.comp.school/?sql=mock | 6 | JavaScript exceptions observed |
| 85 | entry-diagnostic-issues-entry | https://issues.comp.school/?sql=mock | 6 |  |
| 86 | entry-diagnostic-component-library | https://library.comp.school/ | 3 |  |
| 87 | entry-preview-root-preview-1349.comp.school | https://preview-1349.comp.school/ | 3 | Login shell; feature access not established |
| 88 | entry-preview-root-preview-1373.admin.comp.school | https://preview-1373.admin.comp.school/ | 3 |  |
| 89 | entry-preview-root-preview-1373.code.comp.school | https://preview-1373.code.comp.school/ | 3 |  |
| 90 | entry-preview-root-preview-1373.comp.school | https://preview-1373.comp.school/ | 3 | Login shell; feature access not established |
| 91 | entry-preview-root-preview-1373.exams.comp.school | https://preview-1373.exams.comp.school/ | 6 |  |
| 92 | entry-preview-root-preview-1373.forms.comp.school | https://preview-1373.forms.comp.school/ | 3 |  |
| 93 | entry-preview-root-preview-1373.games.comp.school | https://preview-1373.games.comp.school/ | 3 |  |
| 94 | entry-preview-root-preview-1373.issues.comp.school | https://preview-1373.issues.comp.school/ | 3 |  |
| 95 | entry-preview-root-preview-1373.mark.comp.school | https://preview-1373.mark.comp.school/ | 3 |  |
| 96 | entry-preview-root-preview-1373.printouts.comp.school | https://preview-1373.printouts.comp.school/ | 3 |  |
| 97 | entry-preview-root-preview-1373.recall.comp.school | https://preview-1373.recall.comp.school/ | 3 |  |
| 98 | entry-preview-root-preview-1373.self-assess.comp.school | https://preview-1373.self-assess.comp.school/ | 3 |  |
| 99 | entry-preview-root-preview-main-1134.comp.school | https://preview-main-1134.comp.school/ | 3 | Login shell; feature access not established |
| 100 | entry-preview-root-preview-main-1134.printouts.comp.school | https://preview-main-1134.printouts.comp.school/ | 3 |  |
| 101 | verified-entry-diagnostic-dashboard | https://comp.school/ | 3 |  |
| 102 | verified-entry-diagnostic-paper1-menu | https://comp.school/?menu=paper-1 | 3 |  |
| 103 | verified-entry-diagnostic-paper2-menu | https://comp.school/?menu=paper-2 | 3 |  |
| 104 | verified-entry-diagnostic-more-menu | https://comp.school/?menu=more | 3 |  |
| 105 | verified-entry-diagnostic-coding-entry | https://comp.school/?sql=mock | 6 |  |
| 106 | verified-entry-diagnostic-recall-entry | https://comp.school/recall/?sql=mock | 5 |  |
| 107 | verified-entry-diagnostic-exams-entry | https://comp.school/ | 74 |  |
| 108 | verified-entry-diagnostic-admin-entry | https://admin.comp.school/ | 3 |  |
| 109 | verified-entry-diagnostic-homework-entry | https://homework.comp.school/ | 3 |  |
| 110 | verified-entry-diagnostic-marking-entry | https://mark.comp.school/ | 2 |  |
| 111 | verified-entry-diagnostic-printouts-entry | https://printouts.comp.school/ | 2 |  |
| 112 | verified-entry-diagnostic-self-assess-entry | https://self-assess.comp.school/?sql=mock | 3 |  |
| 113 | verified-entry-diagnostic-issues-entry | https://issues.comp.school/?sql=mock | 6 |  |
| 114 | verified-entry-diagnostic-component-library | https://library.comp.school/ | 3 |  |
| 115 | verified-entry-preview-root-preview-1349.comp.school | https://preview-1349.comp.school/ | 3 |  |
| 116 | verified-entry-preview-root-preview-1373.admin.comp.school | https://preview-1373.admin.comp.school/ | 3 |  |
| 117 | verified-entry-preview-root-preview-1373.code.comp.school | https://preview-1373.code.comp.school/ | 3 |  |
| 118 | verified-entry-preview-root-preview-1373.comp.school | https://preview-1373.comp.school/ | 3 |  |
| 119 | verified-entry-preview-root-preview-1373.exams.comp.school | https://preview-1373.exams.comp.school/ | 6 |  |
| 120 | verified-entry-preview-root-preview-1373.forms.comp.school | https://preview-1373.forms.comp.school/ | 3 |  |
| 121 | verified-entry-preview-root-preview-1373.games.comp.school | https://preview-1373.games.comp.school/ | 3 |  |
| 122 | verified-entry-preview-root-preview-1373.issues.comp.school | https://preview-1373.issues.comp.school/ | 3 |  |
| 123 | verified-entry-preview-root-preview-1373.mark.comp.school | https://preview-1373.mark.comp.school/ | 3 |  |
| 124 | verified-entry-preview-root-preview-1373.printouts.comp.school | https://preview-1373.printouts.comp.school/ | 3 |  |
| 125 | verified-entry-preview-root-preview-1373.recall.comp.school | https://preview-1373.recall.comp.school/ | 3 |  |
| 126 | verified-entry-preview-root-preview-1373.self-assess.comp.school | https://preview-1373.self-assess.comp.school/ | 3 |  |
| 127 | verified-entry-preview-root-preview-main-1134.comp.school | https://preview-main-1134.comp.school/ | 3 | Login shell; feature access not established |
| 128 | verified-entry-preview-root-preview-main-1134.printouts.comp.school | https://preview-main-1134.printouts.comp.school/ | 3 |  |
| 129 | verified-python-playground | https://comp.school/code/python?paper=2&sql=mock | 8 |  |
| 130 | verified-sql-playground | https://comp.school/code/sql?paper=2&sql=mock | 6 |  |
| 131 | verified-code-editor | https://comp.school/code/editor?paper=2&sql=mock | 3 |  |
| 132 | verified-python-challenge-menu | https://comp.school/?menu=python-challenges | 3 |  |
| 133 | verified-code-if-editor | https://comp.school/code/essentials/if?sql=mock | 3 |  |
| 134 | verified-recall-terms | https://comp.school/recall?paper=1&topic=1.1&sql=mock | 5 |  |
| 135 | verified-recall-games | https://comp.school/recall?paper=1&topic=1.1&sql=mock | 5 |  |
| 136 | verified-recall-questions | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 137 | verified-paper1-year-selector | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 138 | verified-paper2-year-selector | https://comp.school/exams?paper=2&sql=mock | 71 |  |
| 139 | verified-recall-flashcards | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 140 | verified-recall-matching | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 141 | verified-recall-guess-the-term | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 142 | verified-recall-crossword | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 143 | verified-recall-crit-wall | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 144 | verified-recall-tell-me-why | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 145 | verified-recall-exam-style | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1 | 5 |  |
| 146 | verified-recall-game-quiz:-fetch-execute-cycle | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.1 | 5 |  |
| 147 | verified-recall-game-upgrade-bay | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.2 | 5 |  |
| 148 | verified-recall-game-hidden-computers | https://comp.school/recall?paper=1&topic=1.1&sql=mock&sub=1.1.3 | 5 |  |
| 149 | verified-exam-flashcards | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 150 | verified-exam-matching | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 151 | verified-exam-guess-the-term | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 152 | verified-exam-frayer-models | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 153 | verified-exam-example-notes | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 154 | verified-exam-take-the-paper | https://comp.school/exams?paper=1&sql=mock | 71 |  |
| 155 | verified-code-search-sort | https://comp.school/code/python-sort-search-algorithms?paper=2&sql=mock | 8 |  |
| 156 | verified-crossword-lobby-no-join | https://comp.school/exams/games/crossword?sql=mock | 79 |  |
| 157 | verified-code-climb-selector-no-join | https://comp.school/exams/games/code-climb?sql=mock | 79 |  |
| 158 | verified-code-if-theme | https://comp.school/code/essentials/if?sql=mock | 7 |  |

## Evidence files

- bundles.json: original hashes/URLs, readable paths, parser and semantic-format results.
- dependencies.json: static imports, dynamic imports, Vite preloads, workers and asset-literal evidence with source offsets.
- pages.json: page -> entry scripts -> observed code -> dependency closure, shared objects, unavailable and computed references.
- readable/: formatted copies keyed by original SHA-256. Originals remain unchanged in ../objects/.
- embedded.json and embedded/: statically recoverable JavaScript Blob sources, kept separately with source offsets and structural verification; unresolved Blob parts remain explicit.
- fetches.json: actual results for directly referenced additional modules, workers and runtimes.

## Limits

- Formatting is not deobfuscation: original identifier names, comments and module/source structure cannot be recovered when absent from delivered code.
- Non-read requests were blocked except the explicitly requested login. This prevents saving, submissions and room creation; affected features are not asserted to work end to end.
- Earlier response-window captures and later request-owner-attributed captures are distinguished in pages.json; no speculative request origin is backfilled.
- No run/save/submit/join controls were used. Worker/runtime dependencies may be statically captured without instantiating them.
- Login/restricted shells, loading states, missing controls and JavaScript exceptions are reported per state, not counted as successful feature execution.
- Concrete missing module URLs and computed/bare specifiers remain explicit. Default library worker filenames returning HTML are not mislabeled as captured modules.
- No original symbol names, TS/TSX source tree or private backend source is reconstructed by formatting. No personal account payloads, credentials or cookies are archived.
- Preview coverage is limited to previously source-evidenced HTTP200 roots and code references discoverable from their delivered entries; arbitrary historical deploys and other roles are not covered.

## Reproduction

Run python3 .agents/scripts/clientsetup.py to restore the exact approved formatter, node .agents/scripts/jsindex.mjs for graph and readable extraction, then python3 .agents/scripts/pagecoverage.py. Browser capture requires the preinstalled agent-browser/Chrome and an explicit safe navigation plan; login data is supplied through stdin only and must never be saved.
