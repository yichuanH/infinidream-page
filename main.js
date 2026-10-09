/* ============ InfiniDream project page ============ */
"use strict";

const V = (rel) => `videos/${rel}.mp4`;
const P = (rel) => `posters/${rel}.jpg`;

/* ---- Lazy loading + a cap on how many videos decode at once ----------------------
   The page builds ~226 <video> elements. Loading them lazily is not enough: on a long
   scroll ~40 of them end up on screen together, and 40 concurrent H.264 decodes stall
   the browser. So visibility decides what gets a src, and a governor decides which of
   those actually play - the nearest MAX_PLAYING to the centre of the viewport. The cap
   has to cover a whole grid page, or half the cells sit on their poster and read as
   broken stills rather than as videos. */
const MAX_PLAYING = 24;   // one full grid page: 4 object rows x 6 methods
const visibleVids = new Set();
let governQueued = false;

function govern() {
  governQueued = false;
  const mid = window.innerHeight / 2;
  const ranked = [...visibleVids]
    .map((v) => {
      const r = v.getBoundingClientRect();
      return { v, d: Math.abs(r.top + r.height / 2 - mid) };
    })
    .sort((a, b) => a.d - b.d);
  ranked.forEach(({ v }, i) => {
    if (i < MAX_PLAYING) {
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      if (v.paused) v.play().catch(() => {});
    } else if (!v.paused) {
      v.pause();
    }
  });
}
function scheduleGovern() {
  if (governQueued) return;
  governQueued = true;
  requestAnimationFrame(govern);
}
window.addEventListener("scroll", scheduleGovern, { passive: true });
window.addEventListener("resize", scheduleGovern, { passive: true });

/* slow links: play() can fire before data arrives, so re-run the governor instead of
   calling play() directly - otherwise a video the governor parked would restart */
function ensurePlays(v) {
  v.addEventListener("canplay", scheduleGovern);
  v.addEventListener("loadeddata", scheduleGovern);
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") scheduleGovern();
});
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) visibleVids.add(e.target);
    else { visibleVids.delete(e.target); e.target.pause(); }
  }
  scheduleGovern();
}, { rootMargin: "100px 0px" });

function lazyVideo(rel, cls) {
  const v = document.createElement("video");
  v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none";
  v.poster = P(rel);
  v.dataset.src = V(rel);
  if (cls) v.className = cls;
  ensurePlays(v);
  io.observe(v);
  return v;
}


/* ============ Build-up hero ============ */
ensurePlays(document.getElementById("buildup-video"));
io.observe(document.getElementById("buildup-video"));

/* ============ Hero filmstrip ============ */
const FEATURED = ["sakura_firefly", "coral_reef", "canyon", "snowy_mountain",
                  "river_seed4", "coast_ginkgo", "under_water", "arctic"];
(function buildStrip() {
  const track = document.getElementById("strip-track");
  // duplicated once for the seamless marquee loop
  for (let pass = 0; pass < 2; pass++) {
    for (const s of FEATURED) {
      const v = lazyVideo(`scenes/${s}__ours`);
      v.setAttribute("aria-hidden", pass === 1 ? "true" : "false");
      track.appendChild(v);
    }
  }
})();

/* ============ Scene explorer ============ */
const sceneVids = {
  ours:   document.getElementById("sc-ours"),
  before: document.getElementById("sc-before"),
  claude: document.getElementById("sc-claude"),
  viga:   document.getElementById("sc-viga"),
  c2w:    document.getElementById("sc-c2w"),
};
for (const v of Object.values(sceneVids)) { ensurePlays(v); io.observe(v); }

/* ---- Input vs Ours wipe slider ---- */
const cmp = document.getElementById("compare");
function setCmp(clientX) {
  const r = cmp.getBoundingClientRect();
  const pct = Math.min(97, Math.max(3, ((clientX - r.left) / r.width) * 100));
  cmp.style.setProperty("--cmp", pct + "%");
}
cmp.addEventListener("pointermove", (e) => setCmp(e.clientX));
cmp.addEventListener("pointerdown", (e) => setCmp(e.clientX));
/* keep the two layers in lockstep */
sceneVids.ours.addEventListener("timeupdate", () => {
  const a = sceneVids.ours, b = sceneVids.before;
  if (b.readyState >= 2 && Math.abs(a.currentTime - b.currentTime) > 0.12) {
    b.currentTime = a.currentTime;
  }
});

function actionBadge(o) {
  if (o.action === "add") {
    const n = o.count && o.count > 1 ? ` ×${o.count}` : "";
    return `<span class="badge badge-add">added${n}</span>`;
  }
  return `<span class="badge badge-replace">replaced</span>`;
}

function selectScene(id) {
  const scene = DATA.scenes.find((s) => s.id === id);
  document.querySelectorAll("#scene-chips .chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.id === id);
    c.setAttribute("aria-selected", c.dataset.id === id ? "true" : "false");
  });
  document.getElementById("scene-prompt").textContent = scene.prompt;

  cmp.style.setProperty("--cmp", "38%");
  for (const [m, v] of Object.entries(sceneVids)) {
    const rel = `scenes/${id}__${m}`;
    v.pause();
    v.poster = P(rel);
    v.dataset.src = V(rel);
    if (visibleVids.has(v)) {
      v.src = V(rel);
      v.load();
      scheduleGovern();          // let the cap decide, do not force play here
    } else {
      v.removeAttribute("src");
      v.load();
    }
  }

  const strip = document.getElementById("asset-strip");
  strip.querySelectorAll("video").forEach((v) => io.unobserve(v));
  strip.innerHTML = "";
  for (const o of scene.objects) {
    const fig = document.createElement("figure");
    fig.className = "asset-card";
    fig.appendChild(lazyVideo(`scene_assets/${id}__${o.id}`));
    const cap = document.createElement("figcaption");
    cap.className = "cap";
    cap.innerHTML = `${actionBadge(o)}${o.label}`;
    fig.appendChild(cap);
    strip.appendChild(fig);
  }
}

(function buildChips() {
  const box = document.getElementById("scene-chips");
  for (const s of DATA.scenes) {
    const b = document.createElement("button");
    b.className = "chip";
    b.dataset.id = s.id;
    b.textContent = s.title;
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => selectScene(s.id));
    box.appendChild(b);
  }
  selectScene("plain_sunflower");
})();

/* ============ Object comparison grid ============ */
const OBJ_METHODS = [
  { key: "tcb_one_shot", label: "VLM (One-shot)" },
  { key: "tcb_harness",  label: "VLM (Harness)" },
  { key: "viga",         label: "VIGA" },
  { key: "blenderag",    label: "BlenderRAG" },
  { key: "infinigen",    label: "Infinigen" },
  { key: "ours",         label: "InfiniDream (Ours)", ours: true },
];

(function buildObjGrid() {
  const grid = document.getElementById("obj-grid");
  grid.appendChild(document.createElement("div")); // top-left empty
  const refHead = document.createElement("div");
  refHead.className = "colhead ref-col";
  refHead.textContent = "Reference";
  grid.appendChild(refHead);
  for (const m of OBJ_METHODS) {
    const h = document.createElement("div");
    h.className = "colhead" + (m.ours ? " ours-col" : "");
    h.textContent = m.label;
    grid.appendChild(h);
  }
  let objRow = 0;
  for (const o of DATA.objects) {
    const rowTag = (el) => { el.dataset.row = objRow; return el; };
    const rh = rowTag(document.createElement("div"));
    rh.className = "rowhead";
    rh.textContent = o.label;
    grid.appendChild(rh);
    const refCell = rowTag(document.createElement("div"));
    refCell.className = "ref-cell";
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = `images/refs/${o.id}.jpg`;
    img.alt = `Reference image for ${o.label}`;
    refCell.appendChild(img);
    grid.appendChild(refCell);
    for (const m of OBJ_METHODS) {
      const cell = rowTag(document.createElement("div"));
      if (m.ours) cell.className = "ours-cell";
      cell.appendChild(lazyVideo(`objects/${o.id}__${m.key}`));
      grid.appendChild(cell);
    }
    objRow++;
  }
  setupPager("obj", grid, DATA.objects.length, 4);
})();

/* ============ Diversity grid ============ */
(function buildDivGrid() {
  const grid = document.getElementById("div-grid");
  grid.appendChild(document.createElement("div"));
  for (let n = 0; n < 5; n++) {
    const h = document.createElement("div");
    h.className = "colhead";
    h.textContent = `Seed ${n}`;
    grid.appendChild(h);
  }
  DATA.diversity.forEach((o, r) => {
    const rh = document.createElement("div");
    rh.className = "rowhead";
    rh.dataset.row = r;
    rh.textContent = o.label;
    grid.appendChild(rh);
    for (let n = 0; n < 5; n++) {
      const cell = document.createElement("div");
      cell.dataset.row = r;
      cell.appendChild(lazyVideo(`diversity/${o.id}__seed${n}`));
      grid.appendChild(cell);
    }
  });
  setupPager("div", grid, DATA.diversity.length, 3);
})();

/* ============ Grid pagers ============ */
function setupPager(prefix, grid, totalRows, perPage) {
  const pages = Math.ceil(totalRows / perPage);
  const prev = document.getElementById(`${prefix}-prev`);
  const next = document.getElementById(`${prefix}-next`);
  const ind = document.getElementById(`${prefix}-ind`);
  let page = 0;
  function render() {
    grid.querySelectorAll("[data-row]").forEach((el) => {
      const r = +el.dataset.row;
      el.hidden = r < page * perPage || r >= (page + 1) * perPage;
    });
    ind.textContent = `${page + 1} / ${pages}`;
    prev.disabled = page === 0;
    next.disabled = page === pages - 1;
  }
  prev.addEventListener("click", () => { if (page > 0) { page--; render(); } });
  next.addEventListener("click", () => { if (page < pages - 1) { page++; render(); } });
  render();
}


/* ============ Pipeline steppers ============ */
/* Each .pipe shows one figure at a time and advances every DWELL ms while on screen,
   looping. Hovering pauses; clicking a stage pins it so the caption can be read. */
document.querySelectorAll(".pipe").forEach((root) => {
  const DWELL = 1500;
  const imgs = [...root.querySelectorAll(".pipe-stage img")];
  const btns = [...root.querySelectorAll(".pipe-steps button")];
  const caps = [...root.querySelectorAll(".pipe-caps p")];
  const slow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null, pinned = false, onScreen = false;

  function show(n) {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach((el, k) => el.classList.toggle("is-on", k === i));
    caps.forEach((el, k) => el.classList.toggle("is-on", k === i));
    btns.forEach((el, k) => {
      el.setAttribute("aria-current", k === i ? "true" : "false");
      el.classList.remove("is-timing");
    });
    if (timer && !slow) {
      void btns[i].offsetWidth;          // restart the fill from zero
      btns[i].classList.add("is-timing");
    }
  }
  function play() {
    if (timer || pinned || !onScreen) return;
    timer = setInterval(() => show(i + 1), DWELL);
    if (!slow) { void btns[i].offsetWidth; btns[i].classList.add("is-timing"); }
  }
  function stop() {
    clearInterval(timer); timer = null;
    btns.forEach((b) => b.classList.remove("is-timing"));
  }

  btns.forEach((b, k) => b.addEventListener("click", () => { pinned = true; stop(); show(k); }));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", () => { if (!pinned) play(); });
  root.addEventListener("focusin", () => { pinned = true; stop(); });

  new IntersectionObserver((es) => {
    for (const e of es) { onScreen = e.isIntersecting; onScreen ? play() : stop(); }
  }, { threshold: 0.01 }).observe(root);

  show(0);
});
