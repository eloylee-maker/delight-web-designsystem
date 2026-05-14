// ============================================================
// Playground v2 — Level → Size → Prompt → Image → Generate
// ============================================================
(function () {
  'use strict';

  // ------- Size options per level -------
  const SIZES = {
    header:  [
      { v: '1552', label: '1552px · 16 columns', w: 1552, h: 780, desc: 'Header — 1552px on a 16-column grid.' }
    ],
    content: [
      { v: '1552', label: '1552px · 16 columns', w: 1552, h: 720, desc: 'Wide content section — 1552px on a 16-column grid.' },
      { v: '866',  label: '866px · 9 columns',  w: 866,  h: 540, desc: 'Standard content mockup — 866px on a 9-column sub-grid.' }
    ],
    blog:    [
      { v: '670',  label: '670px · 7 columns',  w: 670,  h: 760, desc: 'Blog body width — 670px on a 7-column grid. Exports at 1328px (2×).' }
    ]
  };

  // ------- State -------
  const state = {
    level: 'header',
    type: 'mockup',
    size: '1552',
    prompt: '',
    images: [],         // [{ name, dataUrl }, ...]
    generated: false,   // has a preview been rendered?
    zoom: 0.4
  };

  // ------- DOM refs -------
  const $ = (id) => document.getElementById(id);
  const levelSeg = $('pg-level');
  const typeSeg  = $('pg-type');
  const typeHelp = $('pg-type-help');
  const sizeSeg  = $('pg-size');
  const sizeHelp = $('pg-size-help');
  const promptEl = $('pg-prompt');
  const fileEl   = $('pg-file');
  const upWrap   = $('pg-attachments');
  const genBtn   = $('pg-generate');
  const resetBtn = $('pg-reset');
  const dlBtn    = $('pg-download');
  const metaChip = $('pg-meta');
  const empty    = $('pg-empty');
  const scaler   = $('pg-canvas-scaler');
  const canvas   = $('pg-canvas');
  const wrap     = $('pg-wrap');
  const zOut = $('pg-zoom-out'), zIn = $('pg-zoom-in'), zFit = $('pg-zoom-fit'), zLab = $('pg-zoom-label');

  const modal = $('pg-modal');
  const pngSizeLab = $('pg-format-png-size');

  // ------- Init -------
  renderSizeOptions();
  bindEvents();
  updateMeta();
  updateGenerateState();

  function updateGenerateState() {
    const empty = !state.prompt.trim();
    genBtn.disabled = empty;
    genBtn.classList.toggle('is-disabled', empty);
  }

  // ------- Level segmented -------
  function bindEvents() {
    levelSeg.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-v]');
      if (!b) return;
      state.level = b.dataset.v;
      [...levelSeg.children].forEach(x => x.classList.toggle('active', x === b));
      // reset size to first option of new level
      state.size = SIZES[state.level][0].v;
      renderSizeOptions();
      updateMeta();
    });

    typeSeg.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-v]');
      if (!b) return;
      state.type = b.dataset.v;
      [...typeSeg.children].forEach(x => x.classList.toggle('active', x === b));
      typeHelp.textContent = state.type === 'diagram'
        ? 'Diagram — schematic illustration with connectors and labeled blocks.'
        : 'Mockup — UI screenshot or product visual.';
      updateMeta();
    });

    sizeSeg.addEventListener('change', (e) => {
      state.size = e.target.value;
      const cur = currentSize();
      sizeHelp.textContent = cur.desc;
      updateMeta();
    });

    promptEl.addEventListener('input', () => {
      state.prompt = promptEl.value;
      updateGenerateState();
    });

    fileEl.addEventListener('change', (e) => {
      const files = e.target.files ? [...e.target.files] : [];
      if (!files.length) return;
      let pending = files.length;
      files.forEach(f => {
        const reader = new FileReader();
        reader.onload = () => {
          state.images.push({ name: f.name, dataUrl: reader.result });
          if (--pending === 0) renderAttachments();
        };
        reader.readAsDataURL(f);
      });
      // allow re-selecting the same file later
      fileEl.value = '';
    });

    genBtn.addEventListener('click', generate);
    resetBtn.addEventListener('click', reset);
    dlBtn.addEventListener('click', openModal);

    // Modal
    modal.addEventListener('click', (e) => {
      if (e.target.matches('[data-close]')) closeModal();
      const fmt = e.target.closest('.pg-format');
      if (fmt) {
        modal.querySelectorAll('.pg-format').forEach(x => x.classList.toggle('active', x === fmt));
      }
    });
    document.getElementById('pg-modal-download').addEventListener('click', () => {
      const active = modal.querySelector('.pg-format.active');
      if (active) downloadAs(active.dataset.format);
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // Zoom
    zOut.addEventListener('click', () => setZoom(state.zoom - 0.1));
    zIn.addEventListener('click',  () => setZoom(state.zoom + 0.1));
    zFit.addEventListener('click', fitZoom);
    window.addEventListener('resize', () => { if (state.generated) fitZoom(); });
  }

  // ------- Size options render -------
  function renderSizeOptions() {
    const opts = SIZES[state.level];
    sizeSeg.innerHTML = opts.map(o =>
      `<option value="${o.v}" ${o.v === state.size ? 'selected' : ''}>${o.label}</option>`
    ).join('');
    const cur = currentSize();
    sizeHelp.textContent = cur.desc;
  }

  function currentSize() {
    return SIZES[state.level].find(o => o.v === state.size) || SIZES[state.level][0];
  }

  function updateMeta() {
    const s = currentSize();
    const tLab = state.type === 'diagram' ? 'Diagram' : 'Mockup';
    metaChip.textContent = `${s.w} × ${s.h} px · ${labelLevel()} · ${tLab}`;
    if (pngSizeLab) pngSizeLab.textContent = `${s.w * 2} × ${s.h * 2} px`;
  }

  function labelLevel() {
    return { header: 'Header', content: 'Content', blog: 'Blog' }[state.level];
  }

  // ------- Generate -------
  async function generate() {
    const s = currentSize();
    setLoading(true);
    startTimer();

    canvas.style.width  = s.w + 'px';
    canvas.style.height = s.h + 'px';
    canvas.style.minHeight = s.h + 'px';

    // 1) Show stub immediately so user sees something
    const headline = state.prompt.trim().split(/\n|\.\s/)[0] || 'Mockup preview';
    const body = state.prompt.trim().slice(headline.length).replace(/^\.\s*/, '') ||
      'Generated mockup will appear here.';
    canvas.innerHTML = renderStubLayout({
      level: state.level, size: state.size, w: s.w, h: s.h,
      headline, body, image: state.images[0] && state.images[0].dataUrl
    });
    state.generated = true;
    empty.hidden = true;
    scaler.hidden = false;
    dlBtn.disabled = false;
    fitZoom();

    // 2) Try to upgrade with Claude-generated richer HTML
    try {
      if (window.claude && window.claude.complete) {
        const sys = [
          `You are a senior visual designer. Generate ONLY a single self-contained HTML fragment (no <html>/<head>/<body>, no <style> blocks, no markdown fences) that fills a ${s.w}x${s.h}px canvas exactly.`,
          `Use only inline styles. Use these design tokens:`,
          `- bg: #FFFFFF, surface-2: #F7F5F0, border: #DDD7CC, text: #1A1612, text-muted: #6B6258`,
          `- accent: #F2FF66 (lime), CTA black: #000000`,
          `- title font: 'Serrif', body font: 'Helvetica Now Text'`,
          `- letter-spacing: -0.02em on text`,
          `Level: ${labelLevel()} (${s.w}x${s.h}). The root element must be width:${s.w}px; height:${s.h}px; box-sizing:border-box; overflow:hidden.`,
          state.images.length ? `Use these images: ${state.images.map((_, i) => `[IMG${i}]`).join(', ')} — replace [IMGn] tokens with the actual data URLs in <img src> attributes.` : `Do not include <img> tags unless drawing as colored boxes.`,
          `Return ONLY the HTML fragment. No commentary.`
        ].join('\n');

        const userMsg = `Prompt: ${state.prompt}`;
        let html = await window.claude.complete({
          messages: [
            { role: 'user', content: sys + '\n\n' + userMsg }
          ]
        });
        // Replace [IMGn] tokens
        state.images.forEach((img, i) => {
          html = html.split(`[IMG${i}]`).join(img.dataUrl);
        });
        // Strip markdown fences if any
        html = html.replace(/^```html\s*/i, '').replace(/```\s*$/, '').trim();
        if (html && /<\w+/.test(html)) {
          canvas.innerHTML = html;
          fitZoom();
        }
      }
    } catch (err) {
      console.warn('[playground] claude generation failed, keeping stub', err);
    }

    setLoading(false);
    stopTimer();
  }

  // ------- Generate timer (% progress, asymptotic) -------
  let timerHandle = null;
  function startTimer() {
    const lab = document.getElementById('pg-gen-time');
    if (!lab) return;
    lab.hidden = false;
    lab.classList.remove('done');
    const t0 = performance.now();
    const EXPECTED_MS = 60000; // typical generation time
    const tick = () => {
      const elapsed = performance.now() - t0;
      // asymptotic curve — approaches 95% but never reaches it until done
      const pct = Math.min(95, 95 * (1 - Math.exp(-elapsed / EXPECTED_MS)));
      lab.textContent = `Generating · ${pct.toFixed(0)}%`;
    };
    tick();
    timerHandle = setInterval(tick, 200);
  }
  function stopTimer() {
    clearInterval(timerHandle);
    const lab = document.getElementById('pg-gen-time');
    if (!lab) return;
    lab.classList.add('done');
    lab.textContent = '100% · Done';
  }

  function renderStubLayout({ level, size, w, h, headline, body, image }) {
    const isHeader = level === 'header';
    const isBlog = level === 'blog';
    const pad = isHeader ? 96 : isBlog ? 80 : 64;
    const titleSize = isHeader ? 72 : (isBlog ? 36 : 48);
    const bodySize = isBlog ? 16 : 20;
    const accent = isHeader ? '#1A1612' : '#FFFFFF';
    const textColor = isHeader ? '#FFFFFF' : '#1A1612';
    const cardBg = isHeader ? '#1A1612' : (isBlog ? '#FFFFFF' : '#F7F5F0');

    return `
      <div style="
        width:100%; height:100%;
        background:${cardBg}; color:${textColor};
        padding:${pad}px;
        display:grid; grid-template-columns:${image ? '1.1fr 1fr' : '1fr'};
        gap:48px; align-items:center;
        border-radius:${isBlog ? 16 : 0}px;
        box-sizing:border-box;
        font-family:'Helvetica Now Text', sans-serif;
      ">
        <div style="display:flex; flex-direction:column; gap:18px; min-width:0;">
          <span style="
            display:inline-flex; align-items:center; gap:8px; width:fit-content;
            padding:6px 12px; border-radius:6px;
            background:${isHeader ? 'rgba(255,255,255,0.10)' : '#1A1612'};
            color:${isHeader ? '#F2FF66' : '#FFFFFF'};
            font:500 12px/1 'Helvetica Now Text', sans-serif;
            letter-spacing:0.08em; text-transform:uppercase;
          ">${labelLevel()} · ${size}</span>
          <h2 style="
            margin:0;
            font:500 ${titleSize}px/1.1 'Serrif', 'Helvetica Now Text', serif;
            letter-spacing:-0.025em;
          ">${escapeHtml(headline)}</h2>
          <p style="
            margin:0; max-width:680px;
            font:400 ${bodySize}px/1.5 'Helvetica Now Text', sans-serif;
            color:${isHeader ? 'rgba(255,255,255,0.72)' : '#6B6258'};
            letter-spacing:-0.01em;
          ">${escapeHtml(body)}</p>
          <div style="display:flex; gap:10px; margin-top:12px;">
            <span style="
              display:inline-flex; align-items:center; height:42px; padding:0 18px;
              border-radius:8px; background:#F2FF66; color:#1A1612;
              font:500 15px/1 'Helvetica Now Text', sans-serif;
            ">Primary action</span>
            <span style="
              display:inline-flex; align-items:center; height:42px; padding:0 18px;
              border-radius:8px; background:transparent; color:${textColor};
              border:1px solid ${isHeader ? 'rgba(255,255,255,0.30)' : '#1A1612'};
              font:500 15px/1 'Helvetica Now Text', sans-serif;
            ">Learn more</span>
          </div>
        </div>
        ${image ? `
          <div style="
            width:100%; aspect-ratio:4/3;
            border-radius:16px; overflow:hidden;
            background:#F2EFE8; box-shadow:0 24px 60px rgba(0,0,0,0.18);
          ">
            <img src="${image}" style="width:100%; height:100%; object-fit:cover; display:block;" />
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderAttachments() {
    if (!state.images.length) {
      upWrap.hidden = true;
      upWrap.innerHTML = '';
      return;
    }
    upWrap.hidden = false;
    upWrap.innerHTML = state.images.map((img, i) => `
      <div class="pg-chip" data-i="${i}">
        <img src="${img.dataUrl}" alt="" />
        <span title="${escapeHtml(img.name)}">${escapeHtml(img.name)}</span>
        <button type="button" aria-label="Remove" data-remove="${i}">✕</button>
      </div>
    `).join('');
    upWrap.querySelectorAll('button[data-remove]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const i = +btn.dataset.remove;
        state.images.splice(i, 1);
        renderAttachments();
      });
    });
  }

  function setLoading(v) {
    genBtn.disabled = v;
    genBtn.querySelector('.pg-btn-label').textContent = v ? 'Generating…' : 'Generate';
    genBtn.querySelector('.pg-btn-spin').hidden = !v;
  }

  function reset() {
    state.prompt = ''; promptEl.value = '';
    state.images = []; fileEl.value = '';
    renderAttachments();
    state.generated = false;
    canvas.innerHTML = '';
    scaler.hidden = true; empty.hidden = false;
    dlBtn.disabled = true;
    updateGenerateState();
  }

  // ------- Zoom -------
  function setZoom(z) {
    state.zoom = Math.max(0.1, Math.min(1.5, +z.toFixed(2)));
    scaler.style.transform = `scale(${state.zoom})`;
    zLab.textContent = Math.round(state.zoom * 100) + '%';

    // reserve height so the wrap grows with the scaled canvas
    const s = currentSize();
    scaler.style.width  = s.w + 'px';
    scaler.style.height = s.h + 'px';
    wrap.style.minHeight = (s.h * state.zoom + 64) + 'px';
  }
  function fitZoom() {
    const s = currentSize();
    const avail = wrap.clientWidth - 48;
    setZoom(avail / s.w);
  }

  // ------- Modal + downloads -------
  function openModal() {
    if (!state.generated) return;
    modal.hidden = false;
  }
  function closeModal() { modal.hidden = true; }

  async function downloadAs(format) {
    if (!state.generated) return;
    closeModal();
    const s = currentSize();
    // Make sure transforms don't bake into export
    const prevTransform = scaler.style.transform;
    scaler.style.transform = 'scale(1)';
    const node = canvas;

    try {
      if (format === 'png') {
        const dataUrl = await window.htmlToImage.toPng(node, {
          pixelRatio: 2, width: s.w, height: s.h,
          backgroundColor: null, cacheBust: true
        });
        triggerDownload(dataUrl, `dwds-${state.level}-${state.size}-${s.w}x${s.h}@2x.png`);
      } else if (format === 'svg') {
        const dataUrl = await window.htmlToImage.toSvg(node, {
          width: s.w, height: s.h, cacheBust: true
        });
        triggerDownload(dataUrl, `dwds-${state.level}-${state.size}-${s.w}x${s.h}.svg`);
      }
    } catch (err) {
      console.error('[playground] export failed', err);
      alert('Export failed: ' + err.message);
    } finally {
      scaler.style.transform = prevTransform;
    }
  }

  function triggerDownload(href, filename) {
    const a = document.createElement('a');
    a.href = href; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
  }
})();
