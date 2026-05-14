// Catalog data — maps reference images to pattern categories.
window.MOCK_CATALOG = [
  {
    id: 'stack', badge: 'Concept', name: 'Concept Stack',
    desc: 'Tag cards stacked vertically with dotted arrow connectors. Concept → Apply → Outcome step framing.',
    specs: ['2–4 cards', 'dotted connector', 'black pill'],
    refs: ['img 334235.png']
  },
  {
    id: 'numlist', badge: 'List', name: 'Numbered Definition',
    desc: 'Black circular numbers + bold titles + grey body. Default for category definitions and checklists.',
    specs: ['1–6 items', 'single card'],
    refs: ['img 1.png']
  },
  {
    id: 'stepbar', badge: 'Process', name: 'Step + Progress',
    desc: 'Numbered step list + inner card (progress bar + dark CTA bar). Highlights flow output.',
    specs: ['5 steps', 'progress bar', 'lime CTA'],
    refs: ['img 2.png']
  },
  {
    id: 'stats', badge: 'Stats', name: 'Big Number Stats',
    desc: 'Giant serif numbers + divider + caption. 1–3 cards in a horizontal row.',
    specs: ['serif 168px', '1–3 cards'],
    refs: ['img 8.png']
  },
  {
    id: 'quote', badge: 'Quote', name: 'Customer Quote',
    desc: 'Image left, quote right. CUSTOMER STORY black pill, serif quotation marks.',
    specs: ['1:2 split', 'serif quote'],
    refs: ['img 334526.png']
  },
  {
    id: 'iflow', badge: 'Flow', name: 'Icon Process Flow',
    desc: 'Centered title + dark icon-box steps + dotted connector + dark trigger callout (lime pill).',
    specs: ['760px center', 'dark callout'],
    refs: ['img 2373577.png']
  },
  {
    id: 'cmp', badge: 'Compare', name: 'Before / Now Table',
    desc: 'Comparison table. Row label + BEFORE (dark) / NOW (lime) columns.',
    specs: ['3-column table', 'pill header'],
    refs: ['img 42425.png']
  },
  {
    id: 'panels', badge: 'Panels', name: '3-Panel Comparison',
    desc: 'Three horizontal panels with arrow connectors. PANEL 1/2/3 grey pills, serif titles.',
    specs: ['3 cards', '→ connector'],
    refs: ['img 24564.png']
  },
  {
    id: 'window', badge: 'UI Mockup', name: 'Browser Window UI',
    desc: 'macOS traffic lights + title bar + content. Used to spotlight a single screen.',
    specs: ['traffic lights', 'big number/chart'],
    refs: ['img 234.png']
  },
  {
    id: 'crop-dash', badge: 'UI Mockup', name: 'Dashboard Crop',
    desc: 'Real dashboard cropped on the right/bottom. Sidebar + main + intentional cutoff.',
    specs: ['right-cropped 1328', 'dropdown focus'],
    refs: ['img 1_1.png', 'img 13525.png']
  },
  {
    id: 'snippet', badge: 'Component', name: 'Component Snippet',
    desc: 'A single component (form/slider/code) shown oversized. Surrounded by empty canvas.',
    specs: ['1 component', 'lots of whitespace'],
    refs: ['img 22352.png', 'img 153463.png', 'img 136436.png']
  },
  {
    id: 'modal', badge: 'UI Mockup', name: 'Modal / Settings',
    desc: 'Modal dialog. Header title + close + inner form sections. Optional left/right split.',
    specs: ['modal card', 'sectioned'],
    refs: ['img 1656.png', 'img 35645.png', 'img 37686.png']
  },
  {
    id: 'mobile', badge: 'UI Mockup', name: 'Mobile Chat',
    desc: 'Two phone screens overlapped + hand-drawn arrow. before/after, "look here" emphasis.',
    specs: ['2-screen overlap', 'curved arrow'],
    refs: ['img 45641.png']
  },
  {
    id: 'tree', badge: 'Diagram', name: 'Flow Diagram Tree',
    desc: 'IF/ELSE/CONDITION/CONTENT node tree. Dot grid background + color-coded boxes.',
    specs: ['dot grid', 'colored nodes'],
    refs: ['img 4654.png', 'img 2154.png']
  }
];
