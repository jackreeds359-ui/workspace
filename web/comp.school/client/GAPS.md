# Client-code coverage limits

All concrete import/preload/worker module URLs currently evidenced by the captured graph are archived. This does not enumerate arbitrary user programs, other account roles or unknown deployments.

## Filename literals that did not return code

These are generic filename strings, not missing concrete import/preload/worker edges. Actual hashed PDF worker modules were captured.

| URL | Result |
| --- | --- |
| https://comp.school/code/assets/script.js | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://comp.school/exams/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://comp.school/recall/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://library.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://mark.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1349.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1373.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1373.exams.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1373.mark.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1373.recall.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-1373.self-assess.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://preview-main-1134.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |
| https://self-assess.comp.school/assets/pdf.worker.mjs | 200; HTML fallback, not a JavaScript/worker module; not saved as code |

## Computed or bare-specifier sites

Repeated uses across pages/origins are collapsed below by original source hash, AST node offset and kind. The parent readable bundles retain the construction logic. No URL was invented for a runtime-computed value.

| Kind | Specifier / reason | Source | Offset |
| --- | --- | --- | --- |
| worker | computed-worker | https://mark.comp.school/assets/App-BruRv-ox.js | 1554347 |
| dynamic | computed-specifier | https://mark.comp.school/assets/App-BruRv-ox.js | 1556249 |
| static | @emotion/is-prop-valid | https://comp.school/recall/assets/App-Cywbl0vP.js | 3922081 |
| worker | computed-worker | https://comp.school/recall/assets/App-Cywbl0vP.js | 6254541 |
| dynamic | computed-specifier | https://comp.school/recall/assets/App-Cywbl0vP.js | 6256444 |
| worker | computed-worker | https://preview-1373.mark.comp.school/assets/index-CYincVF4.js | 1846808 |
| dynamic | computed-specifier | https://preview-1373.mark.comp.school/assets/index-CYincVF4.js | 1848710 |
| worker | computed-worker | https://comp.school/exams/assets/LobbyPage-CiLiZaEi.js | 179590 |
| dynamic | computed-specifier | https://comp.school/exams/assets/react-vendor-BK1G6oO1.js | 166295 |
| worker | computed-worker | https://preview-1373.exams.comp.school/assets/index-Bm_1y3_1.js | 2463227 |
| dynamic | computed-specifier | https://preview-1373.exams.comp.school/assets/index-Bm_1y3_1.js | 2465130 |
| static | @emotion/is-prop-valid | https://preview-1373.exams.comp.school/assets/index-Bm_1y3_1.js | 4549787 |
| static | fs | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 1163 |
| static | path | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 1190 |
| dynamic | ws | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 86240 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 87218 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 87341 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 87592 |
| static | crypto | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 165053 |
| static | ws | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 244760 |
| static | ws | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 249130 |
| static | child_process | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 287679 |
| worker | computed-worker | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.asm.js | 525359 |
| worker | computed-worker | https://comp.school/exams/assets/AppRoutes-Br4afREO.js | 765261 |
| dynamic | computed-specifier | https://comp.school/exams/assets/AppRoutes-Br4afREO.js | 767163 |
| static | fs | https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/sql-wasm.js | 14396 |
| static | path | https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/sql-wasm.js | 14413 |
| static | crypto | https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/sql-wasm.js | 19464 |
| dynamic | computed-specifier | https://comp.school/assets/index-CHiQZc8e.js | 250328 |
| dynamic | computed-specifier | https://comp.school/code/assets/index-DwyvelI3.js | 167450 |
| worker | computed-worker | https://preview-1373.self-assess.comp.school/assets/index-Dc_JeE3t.js | 3556797 |
| dynamic | computed-specifier | https://preview-1373.self-assess.comp.school/assets/index-Dc_JeE3t.js | 3558699 |
| worker | computed-worker | https://comp.school/assets/index-Cyo9THSS.js | 250 |
| worker | computed-worker | https://preview-1349.comp.school/assets/index-BoOY-xik.js | 2808457 |
| dynamic | computed-specifier | https://preview-1349.comp.school/assets/index-BoOY-xik.js | 2810359 |
| dynamic | computed-specifier | https://preview-1373.recall.comp.school/assets/index-QKGYsOmw.js | 168462 |
| worker | computed-worker | https://preview-1373.recall.comp.school/assets/index-QKGYsOmw.js | 4517948 |
| dynamic | computed-specifier | https://preview-1373.recall.comp.school/assets/index-QKGYsOmw.js | 4519851 |
| dynamic | ws | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js | 5722 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js | 6723 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js | 6863 |
| dynamic | computed-specifier | https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js | 7131 |
| dynamic | computed-specifier | https://preview-1373.code.comp.school/assets/index-CaMW2TFr.js | 167342 |
| static | @emotion/is-prop-valid | https://preview-1373.code.comp.school/assets/index-CaMW2TFr.js | 671462 |
| dynamic | computed-specifier | https://preview-1373.exams.comp.school/assets/react-vendor-DDzPbSso.js | 165937 |
| dynamic | computed-specifier | https://library.comp.school/assets/index-CTxi99Mm.js | 5329567 |
| static | @emotion/is-prop-valid | https://library.comp.school/assets/index-CTxi99Mm.js | 5423859 |
| worker | computed-worker | https://library.comp.school/assets/index-CTxi99Mm.js | 6346828 |
| dynamic | computed-specifier | https://library.comp.school/assets/index-CTxi99Mm.js | 6348731 |
| worker | computed-worker | https://preview-1373.comp.school/assets/index-BIpziTN_.js | 4314810 |
| dynamic | computed-specifier | https://preview-1373.comp.school/assets/index-BIpziTN_.js | 4316713 |
| worker | computed-worker | https://self-assess.comp.school/assets/index-wqfvhi8V.js | 3355424 |
| dynamic | computed-specifier | https://self-assess.comp.school/assets/index-wqfvhi8V.js | 3357326 |
| dynamic | computed-specifier | https://self-assess.comp.school/assets/index-wqfvhi8V.js | 3523112 |
| worker | computed-worker | https://preview-main-1134.comp.school/assets/index-B8SE2nXj.js | 4350584 |
| dynamic | computed-specifier | https://preview-main-1134.comp.school/assets/index-B8SE2nXj.js | 4352487 |
| static | @emotion/is-prop-valid | https://comp.school/exams/assets/proxy-DGk2Wawc.js | 39907 |
| dynamic | computed-specifier | https://comp.school/recall/assets/index-OXn7GuU2.js | 168072 |

## Browser limitations

- Seven observations ended at login shells; these are not counted as evidence of successful feature access.
- A TypeError was recorded on the self-assessment entry without the required application state. Its code was captured, but that UI state was not validated as functioning.
- Read-only guard blocked 405 non-read requests, including telemetry and saved-state/progress attempts; no submit/save/run/join controls were used.
- Earlier captures use response-time windows; the final 58-state sweep uses request-owner attribution. Exact provenance is stored per observation.
- Teachers/admins and other roles were not exercised. No authentication or authorization bypass was attempted.
- One literal JavaScript Blob bootstrap was separated and verified; other computed Blob wrappers remain inside their parent readable bundles.
