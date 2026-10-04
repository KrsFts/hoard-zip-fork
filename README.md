# hoard (zip batch fork)

A fork of [hoard](https://github.com/SolRaze/extentions/tree/main/userscript/hoard) by
[SolRaze](https://github.com/SolRaze), MIT licensed, adding a **per-batch ZIP export** so the
entire Instagram saved library can be downloaded to disk in self-contained archives.

**This is not the original script.** For the upstream version, install from
[Greasy Fork](https://greasyfork.org/scripts/598006).

## What this fork adds

The original hoard writes media and sidecars one file at a time. This fork keeps that path
(`sync to disk`) and adds **`save as zip`**, which:

- Downloads media for every post in the batch (jpg, mp4, webp, …)
- Bundles them into a single ZIP per batch of 200 posts
- Names batches `hoard-reference-0001-0200.zip`, `hoard-reference-0201-0400.zip`, …
- Writes a batch-scoped viewer `view-<from>-<to>.html` in every ZIP
- Writes a full-library viewer `index.html` in the **final** ZIP only

Extract every ZIP into the same folder and open `index.html` to browse the complete library offline.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open the raw script:
   `https://raw.githubusercontent.com/KrsFts/hoard-zip-fork/main/hoard.user.js`
3. Click Install in the userscript manager.
4. Visit `https://www.instagram.com/<your-username>/saved/`.
5. Click the **hoard** pill in the bottom-left corner.

## Usage

1. **refresh** — reads your saved feed through Instagram's own API (paced at 1.5 s per page).
2. **save as zip** — downloads the library in batches of 200 posts.
3. Extract all ZIPs into one folder and open `index.html`.

## Extracting the batch ZIPs

All ZIPs share the same internal paths (`<collection>/…`, `profiles/…`), so they are designed
to be extracted into **one** destination folder. Windows' built-in "Extract All" creates a
subfolder per ZIP and breaks the paths — do not use it.

**Use 7-Zip (or WinRAR):**

1. Put all the ZIPs in an empty folder, e.g. `D:\hoard\`.
2. Create the destination folder, e.g. `D:\hoard\reference\`.
3. In Explorer, select all ZIPs, right-click → **7-Zip** → **Extract Files…**
4. Set **Extract to:** `D:\hoard\reference\`
5. Under **Overwrite mode** pick **Overwrite all** (media paths are unique per post; profile
   pics are identical bytes, so overwriting is safe).
6. Click OK. 7-Zip processes each ZIP into the same tree.

Or from a 7-Zip command prompt:

```
cd /d D:\hoard
7z x hoard-reference-*.zip -oD:\hoard\reference -y
```

`-y` means "yes to all overwrites".

## Which file to open

Open **`index.html`** in the destination folder. That is the complete library.

The `view-<from>-<to>.html` files are per-batch viewers. You can ignore or delete them once
`index.html` is confirmed working. They exist as a fallback in case the final batch did not complete.

## Folder layout after extraction

```
D:\hoard\reference\
├── <collection>/
│   ├── user_ABC123.jpg       ← post media
│   └── user_ABC123.json      ← sidecar metadata
├── unsorted/                  ← posts in no collection
├── profiles/
│   └── someuser.jpg          ← profile pictures
├── view-0001-0200.html       ← batch-only viewer
├── view-0201-0400.html
├── ...
└── index.html                ← FULL library viewer (open this)
```

## Configuration

At the top of `hoard.user.js`:

```js
const PAGE_DELAY = 1500;  // ms between feed pages (do not lower)
const DL_DELAY = 800;     // ms between downloaded posts (do not lower)
const FILE_DELAY = 200;   // ms between files within a carousel
const BATCH = 200;        // posts per ZIP; 0 = one single ZIP for everything
const SETTLE = 1500;      // ms to let downloads settle between batches
const COMPRESSION = 5;    // fflate DEFLATE level for text files
const SAVE_EVERY = 5;     // save archive every N posts
```

**Do not lower `PAGE_DELAY` or `DL_DELAY`.** Instagram rate-limits aggressive scripted access
and will start returning `HTTP 403`.

## Credits and license

- Original `hoard` by **SolRaze** — https://github.com/SolRaze/extentions — MIT
- Fork additions (ZIP batching, fflate integration, per-batch viewer) by **KrsFts**

Licensed under the MIT License. See `LICENSE`. This fork is not affiliated with, endorsed by,
or sponsored by the original author.