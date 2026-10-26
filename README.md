<div align="center">

# 🛡️ Hyrule Tracker App ⚔️

Offline app tracker for **100 % completion** of a **2017 open-world adventure game** with shrines and tiny creatures hidding in the **wild** 👀. Personal project, not published on any store *<sub>hehe</sub>*


> **Not affiliated to Nintendo in any form.** No copyrighted asset is included in
> this repository. You will have to import them yourself, **lazy *f\*ck*!**

</div>

## Setup

```bash
npm install
npx expo start
```

## Map image (required, not versioned)

The map image is not part of the repository. Provide your own file at:

```
assets/map/hyrule.jpg
```

The folder is gitignored. Without this file, the build fails with a missing
asset error.

## Scripts

| Script                 | Role                       |
| ---------------------- | -------------------------- |
| `npm run lint`         | Oxlint (lint + type-aware) |
| `npm run format`       | Oxfmt                      |
| `npm run format:check` | Oxfmt, check only          |
| `npx tsc --noEmit`     | Typecheck                  |

Do not use `npx expo lint`: it installs ESLint, which is *sloweeerrr*.
