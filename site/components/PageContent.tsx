import { PreviewFrame } from './PreviewFrame';

/**
 * Page content router — live pages get specific markup;
 * the rest fall back to a generic "Live preview + iframe" layout.
 */
export function PageContent({
  sectionSlug,
  pageSlug,
  preview,
}: {
  sectionSlug: string;
  pageSlug: string;
  preview?: string;
}) {
  const key = `${sectionSlug}/${pageSlug}`;

  // ── Custom-authored pages ──
  if (key === 'get-started/overview') return <Overview />;
  if (key === 'get-started/changelog') return <Changelog />;
  if (key === 'foundations/color') return <ColorPage preview={preview} />;
  if (key === 'foundations/typography') return <TypographyPage preview={preview} />;
  if (key === 'foundations/spacing') return <SpacingPage preview={preview} />;
  if (key === 'foundations/layout') return <LayoutPage preview={preview} />;
  if (key === 'foundations/brand-marks') return <BrandMarksPage preview={preview} />;
  if (key === 'foundations/key-visual') return <KeyVisualPage preview={preview} />;
  if (key === 'design-system/components') return <ComponentsIndex />;
  if (key === 'design-system/patterns') return <PatternsPage preview={preview} />;
  if (key === 'design-system/guidelines') return <GuidelinesPage preview={preview} />;
  if (key === 'components/gnb') return <ComponentDoc preview="gnb.html" spec={GnbSpec} />;
  if (key === 'components/footer') return <ComponentDoc preview="footer.html" spec={FooterSpec} />;
  if (key === 'components/buttons') return <ComponentDoc preview="buttons.html" spec={ButtonsSpec} />;
  if (key === 'components/tabs') return <ComponentDoc preview="tabs.html" spec={TabsSpec} />;
  if (key === 'components/form') return <ComponentDoc preview="form.html" spec={FormSpec} />;
  if (key === 'components/pagination') return <ComponentDoc preview="pagination.html" spec={PaginationSpec} />;
  if (key === 'components/popup') return <ComponentDoc preview="popup.html" spec={PopupSpec} />;
  if (key === 'resources/downloads') return <DownloadsPage />;
  if (key === 'resources/github') return <GitHubPage />;

  // ── Generic fallback: just embed the preview if provided ──
  if (preview) {
    return (
      <>
        <PreviewFrame src={preview} height={780} />
      </>
    );
  }
  return null;
}

/* ============================================================
   Page implementations
   ============================================================ */

function Overview() {
  return (
    <div className="prose">
      <h2>What this is</h2>
      <p>
        DWDS is the Web Design System for <strong>delight.ai</strong> — Sendbird&apos;s enterprise AI customer-experience platform.
        It pairs Serrif display type with Helvetica Now Text body, a warm-tinted gray palette, black CTAs, and a single lime accent.
      </p>
      <h2>Brand context</h2>
      <p>
        delight.ai is a Sendbird product. Sendbird and delight.ai coexist via a covert GNB logo switcher, but each has its own theme:
      </p>
      <ul>
        <li><strong>Delight Warm</strong> — this system. Pure-white background, warm grays, black CTAs, lime accent.</li>
        <li><strong>Sendbird Cool</strong> — for Sendbird-branded surfaces. Cool grays + Sendbird Purple. Documented for cross-brand pages.</li>
      </ul>
      <h2>How to use it</h2>
      <ol>
        <li>Link <code>colors_and_type.css</code> first — it brings <code>@font-face</code>, tokens, and type utility classes.</li>
        <li>Link <code>ui_kits/web/components.css</code> for GNB, buttons, tabs, forms, pagination, footer.</li>
        <li>Copy markup patterns from <code>ui_kits/web/index.html</code>.</li>
      </ol>
      <h2>Non-negotiables</h2>
      <ul>
        <li>Background is always <code>#FFFFFF</code>. Never tint.</li>
        <li>One Primary CTA per page. Order is Secondary → Primary, left to right.</li>
        <li>GNB is <code>position: fixed</code>, never <code>sticky</code>.</li>
        <li>Footer background is <code>var(--bg-subtle)</code>, never white.</li>
        <li>Lime <code>#F2FF66</code> is for the dark CTA banner only — never as a body button.</li>
        <li>Italic <code>&lt;em&gt;</code> is reset to upright.</li>
      </ul>
    </div>
  );
}

function Changelog() {
  const entries = [
    { ver: 'v0.1.2', date: '2026-04-27', items: [
      'GNB: switched from sticky to fixed + 72px spacer + scroll-edge border',
      'Footer: bg-subtle, 4 link cols × 2 groups, 3-region bottom bar',
      'Patterns: added Hero, Stat band, CTA banner, FAQ accordion',
      'New preview cards: gnb, footer, landing-patterns, dos-and-donts',
    ] },
    { ver: 'v0.1.1', date: '2026-04-15', items: [
      'Added preview cards for colors, typography, spacing, layout',
      'Sendbird cool gray scale documented (cross-brand only)',
      'Iconography rules added to README',
    ] },
    { ver: 'v0.1.0', date: '2026-04-01', items: [
      'Initial token export: Delight Warm gray scale, lime accent',
      'Type utility classes: .t-h1 → .t-c3, KR variants',
      'UI kit: GNB, buttons, tabs, form, pagination, footer',
    ] },
  ];
  return (
    <div className="prose">
      {entries.map((e) => (
        <div key={e.ver} style={{ paddingBottom: 28, marginBottom: 28, borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 0 }}>
            <span style={{ fontFamily: 'Serrif, serif', fontSize: 22 }}>{e.ver}</span>
            <span style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{e.date}</span>
          </h3>
          <ul>{e.items.map((i, k) => <li key={k}>{i}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

function ColorPage({ preview }: { preview?: string }) {
  const semantic = [
    { name: '--bg',           value: '#FFFFFF', role: 'Page background. Always pure white.' },
    { name: '--bg-subtle',    value: '#F7F5F0', role: 'Footer band, hover surfaces, soft tints.' },
    { name: '--surface',      value: '#FFFFFF', role: 'Cards, modals, inputs.' },
    { name: '--border',       value: '#E5E3DF', role: 'Default hairline divider.' },
    { name: '--border-light', value: '#D9D6D2', role: 'Heavier hairline (footer, table rules).' },
    { name: '--text',         value: '#292016', role: 'Primary copy, headings, CTA bg.' },
    { name: '--text-muted',   value: '#736E68', role: 'Body secondary, links.' },
    { name: '--text-dim',     value: '#8C867E', role: 'Captions, eyebrows, helper text.' },
    { name: '--text-disabled',value: '#C4C0B9', role: 'Disabled controls.' },
    { name: '--lime',         value: '#F2FF66', role: 'Single accent — CTA banner only.' },
    { name: '--cta-dark',     value: '#18140F', role: 'Dark CTA banner background.' },
  ];
  const warmScale = [
    { name: 'WGray100', token: '--w-gray-100', value: '#F7F5F0', role: 'bg1' },
    { name: 'WGray150', token: '--w-gray-150', value: '#E5E3DF', role: 'line1' },
    { name: 'WGray200', token: '--w-gray-200', value: '#D9D6D2', role: 'line2' },
    { name: 'WGray250', token: '--w-gray-250', value: '#C4C0B9', role: 'disabled' },
    { name: 'WGray300', token: '--w-gray-300', value: '#A8A39B', role: '—' },
    { name: 'WGray350', token: '--w-gray-350', value: '#8C867E', role: 'C1' },
    { name: 'WGray400', token: '--w-gray-400', value: '#736E68', role: 'B2' },
    { name: 'WGray500', token: '--w-gray-500', value: '#66625E', role: 'B1' },
    { name: 'WGray600', token: '--w-gray-600', value: '#54504B', role: 'H4' },
    { name: 'WGray700', token: '--w-gray-700', value: '#47413B', role: 'H3' },
    { name: 'WGray800', token: '--w-gray-800', value: '#3B3530', role: 'H2' },
    { name: 'WGray900', token: '--w-gray-900', value: '#292016', role: 'H1' },
  ];
  const accents = [
    { name: 'Delight Lime', token: '--lime',     value: '#F2FF66', role: 'Primary accent. Reserved for CTA banner button & dark-bg highlights.' },
    { name: 'CTA Dark',     token: '--cta-dark', value: '#18140F', role: 'Dark CTA banner background.' },
    { name: 'Black',        token: '--text',     value: '#292016', role: 'Primary CTA fill, body text. Use 100% as button bg.' },
  ];
  const semanticState = [
    { name: 'Red 500',   token: '--red-500',   value: '#FF5E69', role: 'Error border, required asterisk.' },
    { name: 'Red 100',   token: '--red-100',   value: '#FFE3E5', role: 'Error tint background.' },
    { name: 'Blue 500',  token: '--blue-500',  value: '#27A6F7', role: 'Info / link emphasis.' },
    { name: 'Blue 100',  token: '--blue-100',  value: '#D8F0FF', role: 'Info tint background.' },
    { name: 'Green 500', token: '--green-500', value: '#25BD85', role: 'Success state.' },
    { name: 'Green 100', token: '--green-100', value: '#D0F3E6', role: 'Success tint background.' },
  ];
  const sendbirdAccent = [
    { name: 'Sendbird Purple', token: '--purple',        value: '#7B39FE', role: 'Sendbird-only.' },
    { name: 'Sendbird Lime',   token: '--sendbird-lime', value: '#D1F778', role: 'Sendbird-only.' },
  ];
  return (
    <>
      <div className="prose">
        <h2>Two themes, one repo</h2>
        <p>
          DWDS ships <strong>two parallel palettes</strong> — Delight Warm (this site) and Sendbird Cool.
          Pages render one or the other, never both. The <code>--bg</code> background is <strong>always pure white</strong>;
          warm tints live only inside <code>--bg-subtle</code> bands and component surfaces.
        </p>
      </div>

      <h2 className="section-eyebrow">Semantic tokens</h2>
      <p className="section-desc" style={{ marginTop: 4 }}>Use these in CSS. The underlying scale values can change; semantic names cannot.</p>
      <SwatchRows rows={semantic.map((t) => ({ swatch: t.value, label: t.name, value: t.value, note: t.role }))} />

      <h2 className="section-eyebrow">Warm gray scale</h2>
      <p className="section-desc" style={{ marginTop: 4 }}>The full ramp behind every semantic warm-gray token.</p>
      <SwatchGrid items={warmScale.map((t) => ({ swatch: t.value, label: t.name, value: t.value, sub: t.role }))} />

      <h2 className="section-eyebrow">Accent</h2>
      <p className="section-desc" style={{ marginTop: 4 }}>One accent. Used sparingly. Lime never appears as a body button.</p>
      <SwatchRows rows={accents.map((a) => ({ swatch: a.value, label: a.name, value: a.value, note: a.role, dark: a.value === '#18140F' }))} />

      <h2 className="section-eyebrow">Semantic state colors</h2>
      <SwatchRows rows={semanticState.map((s) => ({ swatch: s.value, label: s.name, value: s.value, note: s.role }))} />

      <h2 className="section-eyebrow">Sendbird-only accents</h2>
      <p className="section-desc" style={{ marginTop: 4 }}>Documented for cross-brand reference. <strong>Do not use on delight.ai pages.</strong></p>
      <SwatchRows rows={sendbirdAccent.map((s) => ({ swatch: s.value, label: s.name, value: s.value, note: s.role }))} />

      <div className="callout callout--warn">
        <h3>Color don&apos;ts</h3>
        <ul>
          <li>Don&apos;t tint <code>--bg</code>. Backgrounds are pure white.</li>
          <li>Don&apos;t use Sendbird Cool grays (<code>#F2F3F7</code>, <code>#555869</code>, …) on a delight.ai page.</li>
          <li>Don&apos;t use Sendbird Purple <code>#7B39FE</code> as a CTA. Use <code>--text</code> (black).</li>
          <li>Don&apos;t put lime on body content. Reserve for the dark CTA banner.</li>
        </ul>
      </div>
      {preview ? <PreviewFrame src={preview} height={1100} /> : null}
    </>
  );
}

/* Inline reusable swatch components */
function SwatchRows({ rows }: { rows: { swatch: string; label: string; value: string; note: string; dark?: boolean }[] }) {
  return (
    <div className="swatch-rows">
      {rows.map((r) => (
        <div key={r.label} className="swatch-row">
          <span className={`swatch-row__chip ${r.dark ? 'is-dark' : ''}`} style={{ background: r.swatch }} />
          <div className="swatch-row__meta">
            <div className="swatch-row__label">{r.label}</div>
            <code className="swatch-row__value">{r.value}</code>
          </div>
          <div className="swatch-row__note">{r.note}</div>
        </div>
      ))}
    </div>
  );
}

function SwatchGrid({ items }: { items: { swatch: string; label: string; value: string; sub: string }[] }) {
  return (
    <div className="swatch-grid">
      {items.map((it) => (
        <div key={it.label} className="swatch-grid__cell">
          <div className="swatch-grid__chip" style={{ background: it.swatch }} />
          <div className="swatch-grid__label">{it.label}</div>
          <code className="swatch-grid__value">{it.value}</code>
          <div className="swatch-grid__sub">{it.sub}</div>
        </div>
      ))}
    </div>
  );
}

function TypographyPage({ preview }: { preview?: string }) {
  const stack = [
    { family: 'Serrif',             role: 'Display',  use: 'Hero H1, editorial section titles, brand moments.', sample: 'Aa', font: 'Serrif, serif',                 weights: '400 / 500 / 600' },
    { family: 'Helvetica Now Text', role: 'Sans',     use: 'Body, UI, navigation, buttons.',                    sample: 'Aa', font: '"Helvetica Now Text", sans-serif', weights: '400 / 500 / 700' },
    { family: 'Pretendard',         role: 'Korean',   use: 'Korean translations of every level.',                sample: '가', font: 'Pretendard, sans-serif',         weights: '400 / 500 / 600' },
    { family: 'Gellix',             role: 'Numerals', use: 'G2 badge, stat counters where Helvetica feels too neutral.', sample: '12', font: 'Gellix, sans-serif',     weights: '400 / 500 / 600 / 700' },
  ];
  const scalePC = [
    { cls: '.t-h1',      level: 'H1',  size: '72', lh: '108%', font: 'Serrif',             weight: 'Medium',  use: 'Hero headline (PC).' },
    { cls: '.t-h2',      level: 'H2',  size: '38', lh: '120%', font: 'Serrif',             weight: 'Medium',  use: 'Section opener.' },
    { cls: '.t-h2-sans', level: 'H2',  size: '38', lh: '120%', font: 'Helvetica Now Text', weight: 'Medium',  use: 'Section opener (sans alt).' },
    { cls: '.t-h3',      level: 'H3',  size: '28', lh: '132%', font: 'Serrif',             weight: 'Medium',  use: 'Subsection.' },
    { cls: '.t-h4',      level: 'H4',  size: '22', lh: '144%', font: 'Serrif',             weight: 'Medium',  use: 'Card titles, FAQ.' },
    { cls: '.t-b1',      level: 'B1',  size: '20', lh: '136%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Lede paragraphs.' },
    { cls: '.t-b2',      level: 'B2',  size: '18', lh: '138%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Body default.' },
    { cls: '.t-b3',      level: 'B3',  size: '16', lh: '140%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Compact body, GNB.' },
    { cls: '.t-c1',      level: 'C1',  size: '14', lh: '136%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Captions, table cells.' },
    { cls: '.t-c2',      level: 'C2',  size: '13', lh: '138%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Form labels.' },
    { cls: '.t-c3',      level: 'C3',  size: '12', lh: '140%', font: 'Helvetica Now Text', weight: 'Regular', use: 'Eyebrows, micro-copy.' },
  ];
  const scaleMobile = [
    { level: 'H1', size: '40', lh: '120%' },
    { level: 'H2', size: '32', lh: '124%' },
    { level: 'H3', size: '20', lh: '128%' },
    { level: 'H4', size: '18', lh: '132%' },
    { level: 'B1', size: '16', lh: '136%' },
    { level: 'B2', size: '15', lh: '138%' },
    { level: 'B3', size: '14', lh: '140%' },
  ];
  return (
    <>
      <div className="prose">
        <h2>Type system</h2>
        <p>
          DWDS pairs an old-style serif with a neutral sans. <strong>Serrif</strong> for editorial moments — hero H1s,
          section titles, brand voice. <strong>Helvetica Now Text</strong> for everything else: body, UI, buttons.
          Korean translations swap to <strong>Pretendard</strong> at every level.
        </p>
        <p>
          Every text element carries <code>letter-spacing: -0.02em</code>. <code>&lt;em&gt;</code> is reset
          to upright — italics are not used. Numerals can lift to <strong>Gellix</strong> when the context calls for
          a tighter, more designed feel (G2 badge, stat counters).
        </p>
      </div>

      <h2 className="section-eyebrow">Family stack</h2>
      <div className="font-grid">
        {stack.map((f) => (
          <div key={f.family} className="font-card" style={{ fontFamily: f.font }}>
            <div className="font-card__sample">{f.sample}</div>
            <div className="font-card__role">{f.role}</div>
            <div className="font-card__name">{f.family}</div>
            <div className="font-card__weights">{f.weights}</div>
            <div className="font-card__use">{f.use}</div>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">PC scale (English)</h2>
      <div className="type-table">
        <div className="type-table__head">
          <div>Class</div>
          <div>Level</div>
          <div>Size</div>
          <div>Line height</div>
          <div>Family</div>
          <div>Weight</div>
          <div>Use</div>
        </div>
        {scalePC.map((row) => (
          <div key={row.cls} className="type-table__row">
            <div><code>{row.cls}</code></div>
            <div className="type-table__level">{row.level}</div>
            <div>{row.size}px</div>
            <div>{row.lh}</div>
            <div>{row.font}</div>
            <div>{row.weight}</div>
            <div className="type-table__use">{row.use}</div>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">Mobile scale</h2>
      <p className="section-desc" style={{ marginTop: 4 }}>Mobile drops every level by 1–2 steps and ramps line-height up for legibility.</p>
      <div className="type-table type-table--mini">
        <div className="type-table__head">
          <div>Level</div><div>Size</div><div>Line height</div>
        </div>
        {scaleMobile.map((row) => (
          <div key={row.level} className="type-table__row">
            <div className="type-table__level">{row.level}</div>
            <div>{row.size}px</div>
            <div>{row.lh}</div>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">Specimen</h2>
      <div className="specimen">
        <div className="specimen__row" style={{ fontFamily: 'Serrif, serif', fontSize: 72, lineHeight: 1.08, fontWeight: 500, letterSpacing: '-0.025em' }}>
          A quiet system for delight.ai surfaces.
        </div>
        <div className="specimen__row" style={{ fontFamily: '"Helvetica Now Text", sans-serif', fontSize: 20, lineHeight: 1.36, color: 'var(--text-muted)', maxWidth: 720 }}>
          DWDS is the design system behind delight.ai — Sendbird&apos;s enterprise AI customer-experience product.
          It pairs Serrif display type with Helvetica Now Text body, a warm-gray palette, and a single lime accent.
        </div>
        <div className="specimen__row" style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 28, lineHeight: 1.38, fontWeight: 600, letterSpacing: '-0.02em' }}>
          엔터프라이즈 AI 컨시어지를 위한 조용한 디자인 시스템.
        </div>
      </div>

      <div className="callout">
        <h3>Type don&apos;ts</h3>
        <ul>
          <li>Don&apos;t mix Serrif and Helvetica inside one paragraph.</li>
          <li>Don&apos;t allow italic. <code>&lt;em&gt;</code> renders upright by default.</li>
          <li>Don&apos;t use Inter, Roboto, or Arial as substitutes — the metrics differ.</li>
          <li>Don&apos;t lean on weight 700 for Helvetica unless the context truly calls for it (status badges, error labels).</li>
        </ul>
      </div>
      {preview ? <PreviewFrame src={preview} height={1500} /> : null}
    </>
  );
}

function SpacingPage({ preview }: { preview?: string }) {
  const scale = [
    { token: '--sp-1',   px: 4,   role: 'Hairline gap, icon padding.' },
    { token: '--sp-2',   px: 8,   role: 'Inline gap, button icon spacing.' },
    { token: '--sp-3',   px: 12,  role: 'Tight stack (label → input).' },
    { token: '--sp-4',   px: 16,  role: 'Default gutter, card padding.' },
    { token: '--sp-6',   px: 24,  role: 'Section padding, button row.' },
    { token: '--sp-8',   px: 32,  role: 'Card body, modal padding.' },
    { token: '--sp-12',  px: 48,  role: 'Section vertical rhythm.' },
    { token: '--sp-16',  px: 64,  role: 'Footer column gap.' },
    { token: '--sp-20',  px: 80,  role: 'Large vertical break.' },
    { token: '--sp-24',  px: 96,  role: 'Hero top/bottom margin.' },
    { token: '--sp-32',  px: 128, role: 'Cross-section break.' },
  ];
  const radii = [
    { name: '--r-sm',   px: 6,   use: 'Pagination cells, small chips.' },
    { name: '--r-md',   px: 8,   use: 'Inputs, buttons, default cards.' },
    { name: '--r-lg',   px: 12,  use: 'Modals, large cards, popovers.' },
    { name: '--r-xl',   px: 16,  use: 'Hero containers, image frames.' },
    { name: '--r-pill', px: 999, use: 'Status pills, segmented tabs.' },
  ];
  const shadows = [
    { name: '--shadow-1',     value: '0 4px 14px 3px rgba(33,33,33,0.10)', use: 'Default elevation. Modals, popovers, sticky cards.' },
    { name: 'card-hover',     value: '0 14px 32px -16px rgba(33,27,22,0.18)', use: 'Card hover. Subtle lift, tight spread.' },
    { name: 'gnb-blur',       value: 'blur(12px) + 1px hairline border', use: 'Scrolled GNB. No drop shadow.' },
  ];
  return (
    <>
      <div className="prose">
        <h2>Scale</h2>
        <p>
          4px base unit. The full ramp covers most layout needs. Pick from the scale —
          don&apos;t introduce <code>17px</code> or <code>22px</code> just to fit a comp.
        </p>
      </div>

      <div className="space-rows">
        {scale.map((s) => (
          <div key={s.token} className="space-row">
            <div className="space-row__bar" style={{ width: s.px }} />
            <code className="space-row__token">{s.token}</code>
            <span className="space-row__px">{s.px}px</span>
            <span className="space-row__role">{s.role}</span>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">Radii</h2>
      <div className="radius-grid">
        {radii.map((r) => (
          <div key={r.name} className="radius-cell">
            <div className="radius-cell__shape" style={{ borderRadius: r.px === 999 ? 999 : r.px }} />
            <div>
              <code className="radius-cell__name">{r.name}</code>
              <span className="radius-cell__px">{r.px === 999 ? '999px' : `${r.px}px`}</span>
            </div>
            <div className="radius-cell__use">{r.use}</div>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">Shadows & elevation</h2>
      <div className="shadow-grid">
        {shadows.map((s) => (
          <div key={s.name} className="shadow-cell">
            <div className="shadow-cell__demo" style={s.name === '--shadow-1' ? { boxShadow: s.value } : s.name === 'card-hover' ? { boxShadow: s.value } : { backdropFilter: 'blur(12px)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.7)' }} />
            <div className="shadow-cell__name"><code>{s.name}</code></div>
            <div className="shadow-cell__value">{s.value}</div>
            <div className="shadow-cell__use">{s.use}</div>
          </div>
        ))}
      </div>

      <div className="callout">
        <h3>Spacing principles</h3>
        <ul>
          <li>Use the scale. Off-scale values (e.g. <code>17px</code>) need an explicit reason.</li>
          <li>Pair generous vertical rhythm with tight horizontal rhythm — never the inverse.</li>
          <li>One radius per component family. Don&apos;t mix <code>--r-md</code> and <code>--r-lg</code> on neighboring cards.</li>
          <li>Shadows are subtle. Never compete with the hairline border for visual weight.</li>
        </ul>
      </div>
      {preview ? <PreviewFrame src={preview} height={900} /> : null}
    </>
  );
}

function LayoutPage({ preview }: { preview?: string }) {
  const breakpoints = [
    { name: 'Desktop', range: '≥ 1100px', canvas: '1920px',  max: '1552px', cols: 16, gutter: '16px', offset: '184px' },
    { name: 'Tablet',  range: '900–1099', canvas: '1024px',  max: '960px',  cols: 12, gutter: '16px', offset: '32px'  },
    { name: 'Mobile',  range: '< 900px',  canvas: '375px',   max: '343px',  cols: 4,  gutter: '16px', offset: '16px'  },
  ];
  const containers = [
    { name: '.container',   max: '1552px', use: 'Default page container.' },
    { name: '.container--narrow', max: '964px',  use: 'Article/FAQ width. Used inside Hero, FAQ.' },
    { name: '.container--wide',   max: '1808px', use: 'Edge-to-edge band (Footer, CTA banner).' },
  ];
  return (
    <>
      <div className="prose">
        <h2>Canvas</h2>
        <p>
          delight.ai targets a <strong>1920px desktop canvas</strong>. Content sits inside a <code>1552px</code> max-width
          with <code>184px</code> side offsets — the canvas itself extends edge-to-edge for full-bleed bands (CTA, footer).
          Mobile drops to a <code>375px</code> canvas with <code>16px</code> offsets.
        </p>
      </div>

      <h2 className="section-eyebrow">Breakpoints</h2>
      <div className="bp-table">
        <div className="bp-table__head">
          <div>Name</div><div>Range</div><div>Canvas</div><div>Max width</div><div>Cols</div><div>Gutter</div><div>Offset</div>
        </div>
        {breakpoints.map((bp) => (
          <div key={bp.name} className="bp-table__row">
            <div className="bp-table__name">{bp.name}</div>
            <div><code>{bp.range}</code></div>
            <div>{bp.canvas}</div>
            <div>{bp.max}</div>
            <div>{bp.cols}</div>
            <div>{bp.gutter}</div>
            <div>{bp.offset}</div>
          </div>
        ))}
      </div>

      <h2 className="section-eyebrow">Containers</h2>
      <SwatchRows rows={containers.map((c) => ({ swatch: 'var(--bg-subtle)', label: c.name, value: c.max, note: c.use }))} />

      <h2 className="section-eyebrow">PC grid (16 col, 1552 max)</h2>
      <div className="grid-demo">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="grid-demo__col"><span>{String(i + 1).padStart(2, '0')}</span></div>
        ))}
      </div>

      <h2 className="section-eyebrow">Section rhythm</h2>
      <div className="prose">
        <ol>
          <li><strong>Hero</strong> — full-bleed, white bg, eyebrow + H1 + lede + Secondary→Primary CTA.</li>
          <li><strong>Feature stack</strong> — <code>--bg-subtle</code> band wrapping 2-up or 3-up white cards.</li>
          <li><strong>Stat band</strong> — back to white, large numerals (Serrif Medium 64px) with caption labels.</li>
          <li><strong>CTA banner</strong> — full-bleed <code>--cta-dark</code> with a single lime button.</li>
          <li><strong>Footer</strong> — <code>--bg-subtle</code> band, brand col + 4 link cols.</li>
        </ol>
      </div>
      {preview ? <PreviewFrame src={preview} height={1000} /> : null}
    </>
  );
}

function BrandMarksPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Logo</h2>
        <p>
          The delight.ai mark sits inside a 74×50 switcher pill in the GNB. The Sendbird mark appears only on Sendbird-branded surfaces.
          Both share the same pill shell so users can toggle between products.
        </p>
      </div>
      {preview ? <PreviewFrame src={preview} height={900} /> : null}
    </>
  );
}

function KeyVisualPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Hero imagery</h2>
        <p>The key visual is the warm-toned hero illustration used on the homepage. Treat it as immutable artwork — no recoloring or cropping.</p>
      </div>
      {preview ? <PreviewFrame src={preview} height={900} /> : null}
    </>
  );
}

function ComponentsIndex() {
  const items = [
    { slug: 'gnb',        title: 'GNB',         status: 'live',  desc: 'Fixed top bar, mega-menu, language popover.' },
    { slug: 'footer',     title: 'Footer',      status: 'live',  desc: 'Brand col + 4 link cols, bg-subtle band.' },
    { slug: 'buttons',    title: 'Buttons',     status: 'live',  desc: 'Primary black, secondary outline, tertiary link.' },
    { slug: 'tabs',       title: 'Tabs',        status: 'live',  desc: 'Pill-shaped chips with 1px active border.' },
    { slug: 'form',       title: 'Form',        status: 'live',  desc: 'Inputs, textarea, select, validation states.' },
    { slug: 'pagination', title: 'Pagination',  status: 'live',  desc: '32px squares with active chip and ellipses.' },
    { slug: 'popup',      title: 'Popup',       status: 'live',  desc: 'Modals and announcement bars.' },
  ];
  return (
    <div className="prose">
      <p>
        Every component lives at <code>/components/&lt;name&gt;</code> with anatomy, states, and a live preview.
        See the full list in the sidebar, or jump to a component below.
      </p>
      <ul>
        {items.map((c) => (
          <li key={c.slug}>
            <a href={`/components/${c.slug}`}><strong>{c.title}</strong></a>
            {' — '}
            <span style={{ color: 'var(--text-muted)' }}>{c.desc}</span>
            {c.status === 'shell' ? <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--text-dim)' }}>· coming soon</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PatternsPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Page rhythm</h2>
        <ol>
          <li><strong>Hero</strong> (bg-white) — eyebrow, serif H1, lede, Secondary→Primary CTA pair.</li>
          <li><strong>Feature stack</strong> (bg-subtle) — 2-up or 3-up white cards inside a tinted band.</li>
          <li><strong>Stat band</strong> (bg-white) — bare numbers with short labels.</li>
          <li><strong>CTA banner</strong> (bg-black) — serif H2 in white, lime button.</li>
          <li><strong>FAQ</strong> (bg-white) — hairline-divided rows with plus/minus icon.</li>
        </ol>
      </div>
      {preview ? <PreviewFrame src={preview} height={1400} /> : null}
    </>
  );
}

function GuidelinesPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Non-negotiables</h2>
        <p>The rules below cannot be relaxed without an explicit, written exception.</p>
      </div>
      <h2 className="section-eyebrow">Live reference</h2>
      {preview ? <PreviewFrame src={preview} height={1600} /> : null}
    </>
  );
}

type ComponentSpec = {
  intro: React.ReactNode;
  anatomy: { label: string; value: React.ReactNode }[];
  states?: { name: string; description: React.ReactNode }[];
  variants?: { name: string; usage: React.ReactNode }[];
  usage: { kind: 'do' | 'dont'; text: React.ReactNode }[];
  accessibility?: React.ReactNode;
  importPath?: string;
};

const GnbSpec: ComponentSpec = {
  intro: (
    <p>
      The Global Navigation Bar is the only persistent surface across every delight.ai page.
      It anchors brand, hosts product navigation, and exposes the single Primary CTA.
      It is <strong>always <code>position: fixed</code></strong> with a 72px spacer beneath — never <code>sticky</code>.
    </p>
  ),
  anatomy: [
    { label: 'Height',          value: '72px (announcement bar adds 57px above when present).' },
    { label: 'Background',      value: 'White at scroll-top. White-blur with 1px hairline border once scrolled past 10px.' },
    { label: 'Container width', value: <>1616px max, 32px horizontal padding (<code>padding: 0 32px</code>).</> },
    { label: 'Logo switcher',   value: '74×50 pill, 8px radius, bg-subtle fill. Houses delight.ai ↔ Sendbird toggle.' },
    { label: 'Menu items',      value: 'Helvetica Now Text 16px / 500. 12px horizontal padding. Active item gets a 2px black underline along the bottom edge.' },
    { label: 'Right cluster',   value: 'Language popover (globe + EN), Login (person icon), Contact sales button (Primary, 42px tall).' },
  ],
  states: [
    { name: 'Default',     description: 'Closed menu. White background, no border.' },
    { name: 'Scrolled',    description: 'After 10px scroll: 1px hairline border on bottom edge appears.' },
    { name: 'Capabilities open', description: 'Mega-menu drops a 1265px panel anchored under the trigger.' },
    { name: 'Solutions / Resources open', description: 'Floating panels (500/260px) inside the trigger\u2019s wrapper.' },
    { name: 'Lang / switcher open', description: 'Small popover (≥180px) with check on the selected option.' },
  ],
  usage: [
    { kind: 'do',   text: <>Use <code>position: fixed</code> + a 72px spacer immediately after the GNB.</> },
    { kind: 'do',   text: <>Keep menu order: Capabilities → Solutions → Resources → Customers.</> },
    { kind: 'do',   text: 'Pair the language popover and login as a tight cluster, with 8px gap, no divider.' },
    { kind: 'dont', text: <>Don&apos;t use <code>position: sticky</code>. It silently breaks when ancestors clip overflow.</> },
    { kind: 'dont', text: 'Don\u2019t add a drop shadow on scroll — the 1px border handles separation.' },
    { kind: 'dont', text: 'Don\u2019t place a divider between EN and Log in.' },
  ],
  accessibility: (
    <ul>
      <li>The trigger row uses <code>aria-expanded</code> on each menu item.</li>
      <li>Hover delays close by 160ms so the user can travel from trigger to panel.</li>
      <li>All popovers close on outside click and on scroll.</li>
    </ul>
  ),
  importPath: 'ui_kits/web/components.css → .gnb-* selectors',
};

const FooterSpec: ComponentSpec = {
  intro: (
    <p>
      The footer closes the page with brand reinforcement and a complete site map.
      It always sits on a <code>--bg-subtle</code> band, never white — this is what visually
      ends the page.
    </p>
  ),
  anatomy: [
    { label: 'Background',     value: <code>var(--bg-subtle)</code> },
    { label: 'Brand column',   value: '284px wide + 116px right margin. Holds logo, tagline, and social icons.' },
    { label: 'Link columns',   value: '4 × 240px, 64px gap. Grouped into two visual clusters (Product / Company).' },
    { label: 'Column header',  value: 'Helvetica Now Text 12px / 500, uppercase, 0.06em tracking.' },
    { label: 'Column links',   value: 'Helvetica Now Text 16px / 400. 8px vertical rhythm.' },
    { label: 'Bottom bar',     value: '3 regions — language picker (left), legal links (center), © Sendbird, Inc. + small mark (right).' },
  ],
  states: [
    { name: 'Default',     description: 'PC layout — 5-column grid (brand + 4 link cols).' },
    { name: 'Mobile',      description: 'Switches to a vertical stack with collapsible link groups.' },
    { name: 'Hover (link)', description: 'Color drops one step from --text to --text-muted.' },
  ],
  usage: [
    { kind: 'do',   text: <>Use the <code>.footer-main</code> 5-column grid on PC.</> },
    { kind: 'do',   text: 'Keep social icons mono-tone (no brand colors).' },
    { kind: 'dont', text: 'Don\u2019t make PC footer collapsible — accordions are mobile-only.' },
    { kind: 'dont', text: <>Don&apos;t place the footer on a white background; the <code>--bg-subtle</code> band is what closes the page.</> },
  ],
  importPath: 'ui_kits/web/components.css → .footer, .footer-main, .footer-bottom',
};

const ButtonsSpec: ComponentSpec = {
  intro: (
    <p>
      Three hierarchies, three sizes. Buttons are pills with full <code>--r-pill</code> radius and
      <code> letter-spacing: -0.02em</code>. Use Primary <strong>once per page</strong>; pair it with Secondary
      to its left when an alternative action is needed.
    </p>
  ),
  anatomy: [
    { label: 'Family',     value: 'Helvetica Now Text, weight 500.' },
    { label: 'Sizes',      value: 'Large 52px · Medium 42px · Small 30px. Default is 42px.' },
    { label: 'Radius',     value: '8px (Large/Medium) · 6px (Small). Pill variants use 999px.' },
    { label: 'Icon slot',  value: '20×20 leading icon, 8px gap to label. 16×16 trailing arrow on hover.' },
  ],
  variants: [
    { name: 'Primary',   usage: <><code>#000000</code> bg, white text. The single hero action.</> },
    { name: 'Secondary', usage: 'White bg, 1px black border. Pairs to the left of Primary in CTA stacks.' },
    { name: 'Tertiary',  usage: 'Underlined link-style. For inline calls-to-action inside copy.' },
    { name: 'Lime',      usage: <><code>#F2FF66</code> bg — reserved for the dark CTA banner only.</> },
  ],
  states: [
    { name: 'Default',  description: 'Solid fill, no border (Primary). White fill + 1px border (Secondary).' },
    { name: 'Hover',    description: 'Primary lightens to #1A1612. Secondary tints to bg-subtle. Trailing arrow appears.' },
    { name: 'Disabled', description: 'Primary fades to --text-disabled. Secondary border drops to border-light.' },
    { name: 'Loading',  description: 'Label hides, replaced by a centered spinner. Width holds.' },
    { name: 'Focus',    description: '2px black outer ring with 2px offset. Visible only on keyboard focus.' },
  ],
  usage: [
    { kind: 'do',   text: <>Order CTA stacks <strong>Secondary → Primary</strong> left to right.</> },
    { kind: 'do',   text: 'Use Tertiary for inline links inside copy. Underlined link-style.' },
    { kind: 'dont', text: 'Don\u2019t place two Primary buttons on one page (counts the GNB Contact button).' },
    { kind: 'dont', text: 'Don\u2019t use lime as a body button. Lime is for the dark CTA banner only.' },
    { kind: 'dont', text: 'Don\u2019t use Sendbird Purple #7B39FE on a delight.ai page.' },
  ],
  accessibility: (
    <ul>
      <li>Hit area minimum 44×44 on touch surfaces — Small (30px) is desktop-only.</li>
      <li>Focus ring is keyboard-only (<code>:focus-visible</code>).</li>
      <li>Disabled buttons set <code>aria-disabled</code>; loading buttons set <code>aria-busy</code>.</li>
    </ul>
  ),
  importPath: 'ui_kits/web/components.css → .btn, .btn--primary, .btn--secondary, .btn--tertiary',
};

const TabsSpec: ComponentSpec = {
  intro: (
    <p>
      Pill-shaped chips for switching peer views <em>inside</em> a section. Tabs are not for primary navigation —
      that&apos;s the GNB&apos;s job.
    </p>
  ),
  anatomy: [
    { label: 'Shape',  value: '36px tall pill. Transparent border by default; 1px black on the active item.' },
    { label: 'Type',   value: 'Helvetica Now Text 20px. Weight ramps from 400 → 500 on active.' },
    { label: 'Padding', value: '0 16px horizontal. Group gap is 8px.' },
  ],
  states: [
    { name: 'Default', description: 'Transparent fill, no border, --text-muted color.' },
    { name: 'Hover',   description: '1px --border-light hairline appears (suppressed on active).' },
    { name: 'Active',  description: '1px black border, --text color, weight 500.' },
  ],
  usage: [
    { kind: 'do',   text: 'Place tabs above their content with 24px gap below.' },
    { kind: 'do',   text: 'Keep labels short — 1–2 words, no icons.' },
    { kind: 'dont', text: 'Don\u2019t use tabs to switch between unrelated pages — link instead.' },
    { kind: 'dont', text: 'Don\u2019t exceed 4 visible tabs in one row.' },
  ],
  importPath: 'ui_kits/web/components.css → .tabs, .tab',
};

const FormSpec: ComponentSpec = {
  intro: (
    <p>
      Inputs hold to a 40px height, 8px radius, and a single hairline border.
      Focus darkens the border to black — no glow, no outer shadow.
    </p>
  ),
  anatomy: [
    { label: 'Field height', value: '40px. Composite (PhoneInput) shares the same shell.' },
    { label: 'Radius',       value: '8px (--r-md).' },
    { label: 'Border',       value: <>1px <code>#E0DAD2</code> at rest. Black on focus. Coral <code>#FF5E69</code> on error.</> },
    { label: 'Label',        value: 'Helvetica Now Text 13px / 400. Sits 6px above the field.' },
    { label: 'Required mark', value: <>Coral <code>#FF5E69</code> asterisk after the label text.</> },
    { label: 'Helper text',  value: '12px / 400. Lives 6px under the field.' },
  ],
  states: [
    { name: 'Default',  description: 'Hairline border, --text-dim placeholder.' },
    { name: 'Focus',    description: 'Border darkens to black. Placeholder hides.' },
    { name: 'Filled',   description: 'Same as default. Value uses --text.' },
    { name: 'Error',    description: 'Coral border + coral helper text. Asterisk on label.' },
    { name: 'Disabled', description: 'bg-subtle fill, --text-disabled value, no caret.' },
    { name: 'Read-only', description: 'No border, --text-muted value, copy icon trailing.' },
  ],
  usage: [
    { kind: 'do',   text: 'Label every field. Placeholders supplement, not replace.' },
    { kind: 'do',   text: 'Group required fields visually — required asterisks are not enough.' },
    { kind: 'dont', text: 'Don\u2019t use outer glows or box-shadow rings on focus. Border-darken only.' },
    { kind: 'dont', text: 'Don\u2019t shrink inputs below 40px on touch surfaces.' },
  ],
  accessibility: (
    <ul>
      <li>Every input pairs to a <code>&lt;label for&gt;</code>. Placeholder is never the only label.</li>
      <li>Errors set <code>aria-invalid</code> and link helper text via <code>aria-describedby</code>.</li>
      <li>Required fields set <code>aria-required</code>; the visual asterisk is decorative (<code>aria-hidden</code>).</li>
    </ul>
  ),
  importPath: 'ui_kits/web/components.css → .form-field, .form-input, .form-error',
};

const PaginationSpec: ComponentSpec = {
  intro: <p>32px squares with 6px corners. Sits inside a <code>--bg-subtle</code> band when used at the foot of a list.</p>,
  anatomy: [
    { label: 'Cell',       value: '32×32px. 6px radius. Centered numeral.' },
    { label: 'Active',     value: 'Weight 500, full --text color, white fill against the tinted band.' },
    { label: 'Inactive',   value: '--text-dim color. Hover paints --bg-subtle.' },
    { label: 'Navigators', value: '32px chevron buttons. Disabled at first/last page.' },
    { label: 'Ellipses',   value: 'Appear when total > 7 pages, with one sibling on each side of current.' },
  ],
  usage: [
    { kind: 'do',   text: 'Center the strip horizontally inside its band.' },
    { kind: 'do',   text: 'Show first/last + current ± 1 + ellipses for large sets.' },
    { kind: 'dont', text: 'Don\u2019t expand cells beyond 32px — the rhythm relies on tightness.' },
  ],
  importPath: 'ui_kits/web/components.css → .pagination, .page-cell',
};

const PopupSpec: ComponentSpec = {
  intro: <p>Two surfaces share the &quot;popup&quot; family: modals (centered, focus-trapped) and announcement bars (full-bleed top strip).</p>,
  anatomy: [
    { label: 'Modal',            value: <>12px radius, white surface, 1px hairline border, drop-shadow <code>--shadow-1</code>.</> },
    { label: 'Modal width',      value: 'Default 480px. Wide variant 640px. Mobile fills viewport with 16px insets.' },
    { label: 'Backdrop',         value: <><code>rgba(40,32,22,0.40)</code> with 2px blur.</> },
    { label: 'Announcement bar', value: '57px tall, full-bleed, dark background, white text, single dismiss action.' },
  ],
  states: [
    { name: 'Closed',   description: 'No DOM presence (modal). Hidden via persisted dismissal cookie (announcement).' },
    { name: 'Entering', description: 'Backdrop fades in 120ms; modal scales 0.98 → 1.0 with 200ms cubic-bezier.' },
    { name: 'Open',     description: 'Focus trapped inside modal. Esc closes. Announcement: scrollable beneath.' },
  ],
  usage: [
    { kind: 'do',   text: 'Reserve modals for confirm-style decisions or short forms.' },
    { kind: 'do',   text: 'Persist announcement-bar dismissal per session.' },
    { kind: 'dont', text: 'Don\u2019t stack modals. If a flow needs steps, use a single modal with stepper UI.' },
  ],
  accessibility: (
    <ul>
      <li>Modal sets <code>role=&quot;dialog&quot;</code> and <code>aria-modal=&quot;true&quot;</code>; focus traps inside until close.</li>
      <li>Returns focus to the trigger element on close.</li>
      <li>Esc key always closes (no destructive default actions on Esc).</li>
    </ul>
  ),
  importPath: 'ui_kits/web/components.css → .modal, .announcement-bar',
};

function ComponentDoc({ preview, spec }: { preview: string; spec: ComponentSpec }) {
  return (
    <>
      <div className="prose">{spec.intro}</div>

      <h2 className="section-eyebrow">Anatomy</h2>
      <div className="spec-table">
        {spec.anatomy.map((row) => (
          <div key={row.label} className="spec-row">
            <div className="spec-row__label">{row.label}</div>
            <div className="spec-row__value">{row.value}</div>
          </div>
        ))}
      </div>

      {spec.variants ? (
        <>
          <h2 className="section-eyebrow">Variants</h2>
          <div className="spec-table">
            {spec.variants.map((v) => (
              <div key={v.name} className="spec-row">
                <div className="spec-row__label">{v.name}</div>
                <div className="spec-row__value">{v.usage}</div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {spec.states ? (
        <>
          <h2 className="section-eyebrow">States</h2>
          <div className="spec-table">
            {spec.states.map((s) => (
              <div key={s.name} className="spec-row">
                <div className="spec-row__label">{s.name}</div>
                <div className="spec-row__value">{s.description}</div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      <h2 className="section-eyebrow">Usage</h2>
      <div className="usage-grid">
        <div className="usage-col usage-col--do">
          <div className="usage-col__head"><span className="usage-col__icon">✓</span> Do</div>
          <ul>
            {spec.usage.filter((u) => u.kind === 'do').map((u, i) => <li key={i}>{u.text}</li>)}
          </ul>
        </div>
        <div className="usage-col usage-col--dont">
          <div className="usage-col__head"><span className="usage-col__icon">✗</span> Don&apos;t</div>
          <ul>
            {spec.usage.filter((u) => u.kind === 'dont').map((u, i) => <li key={i}>{u.text}</li>)}
          </ul>
        </div>
      </div>

      {spec.accessibility ? (
        <>
          <h2 className="section-eyebrow">Accessibility</h2>
          <div className="prose">{spec.accessibility}</div>
        </>
      ) : null}

      {spec.importPath ? (
        <>
          <h2 className="section-eyebrow">Import</h2>
          <div className="prose">
            <p><code>{spec.importPath}</code></p>
          </div>
        </>
      ) : null}
      <PreviewFrame src={preview} height={780} />
    </>
  );
}

function DownloadsPage() {
  return (
    <div className="prose">
      <h2>Fonts</h2>
      <p>Local OTF files used by the system. License is per-foundry; do not redistribute.</p>
      <ul>
        <li>Serrif — <a href="/fonts/Serrif-Regular.otf">Regular</a> · <a href="/fonts/Serrif-Medium.otf">Medium</a> · <a href="/fonts/Serrif-SemiBold.otf">SemiBold</a></li>
        <li>Helvetica Now Text — <a href="/fonts/HelveticaNowText.otf">Regular</a> · <a href="/fonts/HelveticaNowTextMedium.otf">Medium</a> · <a href="/fonts/HelveticaNowTextBold.otf">Bold</a></li>
        <li>Gellix — <a href="/fonts/Gellix-Regular.otf">Regular</a> · <a href="/fonts/Gellix-Medium.otf">Medium</a> · <a href="/fonts/Gellix-SemiBold.otf">SemiBold</a> · <a href="/fonts/Gellix-Bold.otf">Bold</a></li>
        <li>Pretendard — loaded from CDN (Korean only)</li>
      </ul>
      <h2>Logos</h2>
      <ul>
        <li><a href="/assets/delight-logo.svg">delight.ai logo</a> (SVG)</li>
        <li><a href="/assets/sendbird-logo.svg">Sendbird logo</a> (SVG)</li>
      </ul>
    </div>
  );
}

function GitHubPage() {
  return (
    <div className="prose">
      <h2>Repository</h2>
      <p>
        Source lives at{' '}
        <a href="https://github.com/eloylee-maker/delight-web-designsystem" target="_blank" rel="noreferrer noopener">
          eloylee-maker/delight-web-designsystem
        </a>.
      </p>
      <ul>
        <li><code>colors_and_type.css</code> — root tokens + @font-face + type utility classes</li>
        <li><code>ui_kits/web/components.css</code> — flat component CSS (GNB, buttons, tabs, form, pagination, footer)</li>
        <li><code>ui_kits/web/index.html</code> — interactive recreation of every component</li>
        <li><code>preview/*.html</code> — design-system tab cards, embedded throughout this site</li>
        <li><code>site/</code> — the Next.js source for this site (you are here)</li>
      </ul>
    </div>
  );
}
