<div align="center">

# 🛡️ Hyrule Tracker App ⚔️

Offline app tracker for **100 % completion** of a **2017 open-world adventure game** with shrines and tiny creatures hidding in the **wild** 👀. Personal project, not published on any store _<sub>hehe</sub>_

> **Not affiliated to Nintendo in any form.** No copyrighted asset is included in
> this repository. You will have to import them yourself, **lazy _f\*ck_!**

</div>

## Setup

```bash
npm install
npx expo start
```

## Map image (required, not versioned)

The map image is not part of the repository. Provide your own file at:

```
assets/map/hyrule.png
```

The folder is gitignored. Without this file, the build fails with a missing
asset error.

## Reference data

`src/data/shrines.json` (120 base-game shrines) is generated, not typed by
hand, and validated by a Zod schema at startup. Only facts are kept (id, name,
region, trial, position in game units).

| Source                                                         | Used for                      |
| -------------------------------------------------------------- | ----------------------------- |
| [botw-tools](https://github.com/MrCheeze/botw-tools)           | Id, name, position            |
| [botw-checklist](https://github.com/jwodder/botw-checklist)    | Region, trial                 |
| [botw-object-map](https://github.com/MrCheeze/botw-object-map) | Cross-check of positions only |

## Scripts

| Script                 | Role                       |
| ---------------------- | -------------------------- |
| `npm run lint`         | Oxlint (lint + type-aware) |
| `npm run format`       | Oxfmt                      |
| `npm run format:check` | Oxfmt, check only          |
| `npx tsc --noEmit`     | Typecheck                  |

Do not use `npx expo lint`: it installs ESLint, which is _sloweeerrr_.
