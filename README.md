# Bible Study Library

**55 self-contained interactive Bible studies** across eight collections, each a
single HTML file that opens in any browser with no server, no install and no
login. Built out of years of weekly study with a Friday morning group in Clemson,
SC — teaching notes, leadership discussions and journals turned into tools that
serve the content rather than replacing it.

Every study is one file. Open it, and it works — offline, on a phone, from a USB
stick, forwarded as an attachment. That constraint is the design.

![The Bible Study Library index, showing the study collections](docs/hero.webp)

*Placeholder still. Filtering, the characteristic matrix and the cross-reference modals are all interactive — a demo GIF replaces this.*

**Live → [ptander01.github.io/Bible-Study-Library](https://ptander01.github.io/Bible-Study-Library/)**

---

## The collections

| Collection | Studies | What it covers |
|---|---|---|
| **Standalone** | 14 | Single-topic deep dives — Amos, fasting, identity in Christ, digital Babylon, anger and self-control, the character of God |
| **First Principles** | 10 | Foundations — repentance, seeking God, counting the cost, Jesus is Lord, light and darkness |
| **Leadership** | 7 | Studies through a life — Moses, Joshua, David, Peter, Paul, Jesus |
| **Women's** | 6 | Identity and worth, anxiety and fear, comparison and contentment, Proverbs 31, the tongue, womanhood and calling |
| **Resource Series** | 6 | Multi-week series guides — Colossians, Philippians, Ephesians, Word of God, Rooted and Established, and the Holy Spirit study |
| **Listen** | 5 | Audio-companion formats for existing studies |
| **Core Four** | 4 | Gospel, discipleship, disciplemaking, community |
| **Stage of Life** | 3 | Marriage, discipling your children, discipline and formation |

`index.html` is the library front page and the way in.

---

## The flagship: the Holy Spirit study

`resource-series/holy-spirit-study_32.html` is the largest of them and the one the
rest grew out of — **83 Spirit observations from Genesis to Revelation**, each
tagged against ten theological characteristics (Creator, Empowers, Guides, Reveals,
Indwells, Convicts, Transforms, Unifies, Intercedes, Sovereign) and presented
across five interactive tabs. Every passage card and scripture reference opens a
modal with the ESV text, study commentary, reflection, and navigable
cross-references.

It came out of eighteen months of weekly study. The tagging is the analytical part:
ten characteristics mapped simultaneously as columns turns a list of proof-texts
into something you can filter, sort and argue with — where the Spirit's work
clusters by testament, which characteristics travel together, and which passages
carry several at once.

**The detail that would have made it wrong:** *the characteristics are a reading,
not a taxonomy handed down.* They were derived from the group's own study and are
one way of organising the material. The tool makes that reading inspectable rather
than authoritative — you can see exactly which passages produced which tag.

---

## Quickstart

There is no build and no dependency.

```bash
open index.html
```

Or open any individual study file directly. Each carries its own CSS and
JavaScript inline; `core.css` holds the shared design language for studies that
reference it.

---

## Project layout

```
index.html            the library front page
core.css              shared design language
core-four/            4 studies
first-principles/     10
leadership/           7
listen/               5
resource-series/      6, including holy-spirit-study_32.html
stage-of-life/        3
standalone/           14
womens/               6
assets/               shared images
rebuild.py            SUPERSEDED — inlined app.compiled.js into a single-file
                      build back when the Holy Spirit study lived at the root.
                      Kept as build history; its paths no longer resolve.
PROJECT_STATUS.md     session log
```

---

## Why single files

Group study happens on phones, in church basements with bad wifi, and on borrowed
laptops. A study that needs `npm install`, a dev server, or a login does not get
used. Everything here is one file that can be emailed, sideloaded, opened offline
and kept.

The cost is duplication — shared logic is copied between studies rather than
imported — and that is a deliberate trade. Fifty-five files that each work forever
beat one framework that works until a dependency breaks.

---

## Limits

**Interpretive content, not neutral reference.** These are study materials written
from a particular tradition for a particular group. The scripture text is the ESV;
the commentary, tagging and reflection are the authors' reading.

**No search across the library.** Each study filters within itself; the index links
out but does not index content. That is the main thing missing.

**Duplication is real.** A design change means touching many files. See above —
accepted knowingly, not overlooked.

**`rebuild.py` no longer runs.** It refers to `holy-spirit-study.html` and
`app.compiled.js` at the repository root, which moved when the library was
reorganised. Marked rather than deleted, since it documents how the single-file
build was originally produced.
