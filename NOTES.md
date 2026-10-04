# Fork notes

Fork of [hoard](https://github.com/SolRaze/extentions/tree/main/userscript/hoard) by SolRaze.
MIT licensed. Not affiliated with or endorsed by the original author.

## What the fork changes

- Adds a "save as zip" button that produces standalone ZIP archives in batches of 200 posts.
- Each ZIP contains the media (jpg/mp4), sidecars (json), profile pictures, and a viewer HTML.
- The last batch writes an `index.html` covering the entire library.
- Uses [fflate](https://github.com/101arrowz/fflate) for ZIP generation.

## What the fork does NOT change

- `normalize`, `record`, `sidecar`, `renameFolders`, `buildIndex`, the offline viewer template,
  collection name learning, and the HIDE selectors are byte-for-byte identical to upstream v1.7.
- `sync to disk` is unchanged except for the fork's per-batch checkpoint and throttled archive save.

## Attribution

Original work: SolRaze — https://github.com/SolRaze/extentions
License: MIT (see LICENSE file)