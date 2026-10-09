# InfiniDream — project page

Static page. No build step: every asset is checked in, `index.html` is the entry point.

## Local preview

    python3 serve.py 8000

`serve.py` is a small dev server that supports HTTP Range requests, which the videos
need in order to seek. Opening `index.html` straight off the filesystem works too, but
seeking inside the long hero clip will not.

## Layout

    index.html          markup and all page copy
    data.js             DATA.scenes / DATA.objects / DATA.diversity - what each grid lists
    main.js             lazy loading, playback cap, scene switcher, grid pagers
    style.css
    pipeline/*.webp     the three stepped figures (why-SCE, asset pipeline, scene pipeline)
    videos/, posters/   one poster per video; grids show the poster until a clip plays
    images/refs/        reference image per object row

## Things worth knowing before editing

- `data.js` drives the grids. Adding a row means adding its entry there AND dropping the
  matching files into `videos/…` and `posters/…`; the filenames are built by convention
  (`<id>__<method>.mp4`, `<id>__seed<n>.mp4`).
- `main.js` caps how many videos decode at once (`MAX_PLAYING`). The page holds ~226
  video elements; without the cap roughly 40 play together and the browser stalls.
- `index.html` versions its own CSS/JS (`style.css?v=NN`). Bump it when editing either,
  or browsers keep serving the old copy.
