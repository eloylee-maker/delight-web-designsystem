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
  if (key === 'components/gnb') return <ComponentDoc preview="gnb.html" anatomy={GnbAnatomy} />;
  if (key === 'components/footer') return <ComponentDoc preview="footer.html" anatomy={FooterAnatomy} />;
  if (key === 'components/buttons') return <ComponentDoc preview="buttons.html" anatomy={ButtonsAnatomy} />;
  if (key === 'components/tabs') return <ComponentDoc preview="tabs.html" anatomy={TabsAnatomy} />;
  if (key === 'components/form') return <ComponentDoc preview="form.html" anatomy={FormAnatomy} />;
  if (key === 'components/pagination') return <ComponentDoc preview="pagination.html" anatomy={PaginationAnatomy} />;
  if (key === 'components/popup') return <ComponentDoc preview="popup.html" anatomy={PopupAnatomy} />;
  if (key === 'resources/downloads') return <DownloadsPage />;
  if (key === 'resources/github') return <GitHubPage />;

  // ── Generic fallback: just embed the preview if provided ──
  if (preview) {
    return (
      <>
        <h2 className="section-eyebrow" style={{ marginTop: 0 }}>Live preview</h2>
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
  const tokens = [
    { name: '--bg',           value: '#FFFFFF', notes: 'Page background. Always pure white.' },
    { name: '--bg-subtle',    value: '#F7F5F0', notes: 'Footer, hover, soft surfaces (WGray100).' },
    { name: '--text',         value: '#292016', notes: 'Primary text + CTAs (WGray900).' },
    { name: '--text-muted',   value: '#736E68', notes: 'Body secondary (WGray400).' },
    { name: '--text-dim',     value: '#8C867E', notes: 'Captions, eyebrows (WGray350).' },
    { name: '--border',       value: '#E5E3DF', notes: 'Hairline (WGray150).' },
    { name: '--border-light', value: '#D9D6D2', notes: 'Light hairline (WGray200).' },
    { name: '--lime',         value: '#F2FF66', notes: 'Single accent. CTA banner only.' },
    { name: '--cta-dark',     value: '#18140F', notes: 'Dark CTA banner background.' },
  ];
  return (
    <>
      <h2 className="section-eyebrow" style={{ marginTop: 0 }}>Tokens</h2>
      <table className="token-table">
        <thead>
          <tr><th></th><th>Token</th><th>Hex</th><th>Notes</th></tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.name}>
              <td style={{ width: 56 }}><span className="token-swatch" style={{ background: t.value }} /></td>
              <td><code>{t.name}</code></td>
              <td><code>{t.value}</code></td>
              <td style={{ color: 'var(--text-muted)' }}>{t.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="section-eyebrow">Live preview</h2>
      {preview ? <PreviewFrame src={preview} height={1100} /> : null}
    </>
  );
}

function TypographyPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Type system</h2>
        <p>
          DWDS uses three font families. <strong>Serrif</strong> (display) for headlines and editorial moments.
          <strong> Helvetica Now Text</strong> (sans) for body, UI, and interactive copy.
          <strong> Pretendard</strong> for Korean translations.
          Every text element carries <code>letter-spacing: -0.02em</code>.
        </p>
        <h3>Utility classes</h3>
        <ul>
          <li><code>.t-h1</code> → <code>.t-h4</code> — Serrif display heads</li>
          <li><code>.t-h2-sans</code> → <code>.t-h4-sans</code> — Helvetica sans heads</li>
          <li><code>.t-b1</code> → <code>.t-b3</code> — body sizes (20 / 18 / 16 px)</li>
          <li><code>.t-c1</code> → <code>.t-c3</code> — captions (14 / 13 / 12 px)</li>
        </ul>
      </div>
      <h2 className="section-eyebrow">Live preview</h2>
      {preview ? <PreviewFrame src={preview} height={1500} /> : null}
    </>
  );
}

function SpacingPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Scale</h2>
        <p>4px base. Common steps: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128.</p>
        <h2>Radii</h2>
        <ul>
          <li><code>--r-sm</code> 6px — pagination, small chips</li>
          <li><code>--r-md</code> 8px — inputs, default cards</li>
          <li><code>--r-lg</code> 12px — modals, large cards</li>
          <li><code>--r-xl</code> 16px — hero containers</li>
          <li><code>--r-pill</code> 999px — buttons, tabs, status pills</li>
        </ul>
      </div>
      <h2 className="section-eyebrow">Live preview</h2>
      {preview ? <PreviewFrame src={preview} height={900} /> : null}
    </>
  );
}

function LayoutPage({ preview }: { preview?: string }) {
  return (
    <>
      <div className="prose">
        <h2>Canvas</h2>
        <p><strong>1920px desktop canvas</strong>. Content max-width <code>1552px</code>. Side offsets <code>184px</code> on PC, <code>16px</code> on mobile.</p>
        <h2>Grid</h2>
        <p>16-column grid, 16px gutters on PC. Mobile: 4-column, 16px gutters. Use the grid for alignment, not for forced symmetry.</p>
      </div>
      <h2 className="section-eyebrow">Live preview</h2>
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
      <h2 className="section-eyebrow">Live preview</h2>
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
      <h2 className="section-eyebrow">Live preview</h2>
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
      <h2 className="section-eyebrow">Live preview</h2>
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

const GnbAnatomy = (
  <ul>
    <li><strong>Height</strong>: 72px. <code>position: fixed</code> with a 72px spacer beneath.</li>
    <li><strong>Background</strong>: white at scroll-top, white-blur with hairline border once scrolled.</li>
    <li><strong>Hover</strong>: Capabilities opens a mega-menu, Solutions/Resources open floating panels, Customers paints a 2px black underline only.</li>
    <li><strong>Right cluster</strong>: language popover (globe), login (person), Contact button (Primary, 30px).</li>
  </ul>
);

const FooterAnatomy = (
  <ul>
    <li><strong>Background</strong>: <code>var(--bg-subtle)</code>.</li>
    <li><strong>Brand column</strong>: 284px wide + 116px right margin. Logo, tagline, social icons.</li>
    <li><strong>Link columns</strong>: 4 × 240px, 64px gap, organized into two visual groups.</li>
    <li><strong>Bottom bar</strong>: 3 regions — language picker, legal links, © Sendbird, Inc.</li>
  </ul>
);

const PopupAnatomy = (
  <ul>
    <li><strong>Modal</strong>: 12px radius, white surface, 1px hairline border, drop-shadow <code>--shadow-1</code>.</li>
    <li><strong>Announcement bar</strong>: dark background, white text, single dismiss action.</li>
    <li><strong>Backdrop</strong>: <code>rgba(40,32,22,0.40)</code> with 2px blur.</li>
  </ul>
);

const ButtonsAnatomy = (
  <ul>
    <li><strong>Primary</strong>: 44px tall, <code>#18140F</code> bg, white text, full-pill radius. Use once per page.</li>
    <li><strong>Secondary</strong>: white bg, 1px black border. Pairs left of Primary in CTA stacks.</li>
    <li><strong>Tertiary</strong>: link-style with 4px underline offset. For inline calls-to-action.</li>
    <li><strong>Lime</strong>: <code>#F2FF66</code> bg — reserved for the dark CTA banner. Never on body sections.</li>
    <li><strong>Sizes</strong>: 30 / 44 / 52px. Default is 44; 30 fits inside the GNB.</li>
  </ul>
);

const TabsAnatomy = (
  <ul>
    <li><strong>Shape</strong>: 36px pill, transparent border by default, 1px black when active.</li>
    <li><strong>Type</strong>: 20px Helvetica Now Text, weight 400 → 500 on active.</li>
    <li><strong>Hover</strong>: 1px <code>#D9D6D2</code> hairline. Suppressed on the active item.</li>
    <li><strong>Use</strong>: switching peer views inside a section. Not for primary navigation.</li>
  </ul>
);

const FormAnatomy = (
  <ul>
    <li><strong>Inputs</strong>: 40px tall, 8px radius, 1px <code>#E0DAD2</code> border, white surface.</li>
    <li><strong>Focus</strong>: border darkens to <code>#000000</code>. No outer glow or shadow.</li>
    <li><strong>Errors</strong>: coral <code>#FF5E69</code> for required asterisk, error border, and helper text.</li>
    <li><strong>Labels</strong>: 13px, sit 6px above the field. Required marked with a coral asterisk.</li>
    <li><strong>Composites</strong>: PhoneInput pairs a country select + tel input inside one 8px-radius shell with a 1px divider.</li>
  </ul>
);

const PaginationAnatomy = (
  <ul>
    <li><strong>Cells</strong>: 32 × 32px squares with 6px corners.</li>
    <li><strong>Active</strong>: weight 500, full <code>--text</code> color, white fill against the tinted band.</li>
    <li><strong>Inactive</strong>: <code>#8C867E</code> text, transparent background; hover paints <code>--bg-subtle</code>.</li>
    <li><strong>Navigators</strong>: 32px chevron buttons disable at first/last page.</li>
    <li><strong>Ellipses</strong>: appear when total &gt; 7 pages, with one sibling on each side of current.</li>
  </ul>
);

function ComponentDoc({ preview, anatomy }: { preview: string; anatomy: React.ReactNode }) {
  return (
    <>
      <div className="prose">
        <h2>Anatomy</h2>
        {anatomy}
      </div>
      <h2 className="section-eyebrow">Live preview</h2>
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
