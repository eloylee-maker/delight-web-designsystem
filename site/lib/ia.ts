/**
 * Site Information Architecture — eBay Playbook-inspired
 * Each page registers: slug, title, blurb, status (live | shell), thumb tone.
 * "shell" pages render an empty-state Coming-soon layout.
 */

export type PageStatus = 'live' | 'shell';

export type Page = {
  slug: string;          // route under /
  title: string;
  blurb: string;
  status: PageStatus;
  // Optional: which preview/*.html (under /preview/) to embed live.
  preview?: string;
  // Optional: thumb background tone (warm gray scale)
  thumbTone?: 'lime' | 'subtle' | 'dark' | 'white';
  // Optional: graphic shorthand for the card thumb
  thumbGraphic?: string;
};

export type Section = {
  slug: string;          // e.g. "foundations"
  title: string;
  blurb: string;
  pages: Page[];
};

export const SECTIONS: Section[] = [
  {
    slug: 'get-started',
    title: 'Get started',
    blurb: 'How DWDS fits together, who it is for, and how to use it inside your team.',
    pages: [
      { slug: 'overview',    title: 'Overview',         blurb: 'What DWDS is, the brand context, and the Delight Warm theme.', status: 'live',  thumbTone: 'subtle', thumbGraphic: 'overview' },
      { slug: 'principles',  title: 'Design principles',blurb: 'The five tenets that guide every visual decision.',           status: 'shell', thumbTone: 'white' },
      { slug: 'changelog',   title: 'Changelog',        blurb: 'Versioned updates to tokens, components, and patterns.',      status: 'live',  thumbTone: 'lime',   thumbGraphic: 'changelog' },
      { slug: 'contributing',title: 'Contributing',     blurb: 'How to propose tokens, components, and patterns.',            status: 'shell', thumbTone: 'subtle' },
    ],
  },
  {
    slug: 'foundations',
    title: 'Foundations',
    blurb: 'The fundamental decisions — color, type, layout, and tone — that the rest of the system is built on.',
    pages: [
      { slug: 'color',          title: 'Color',           blurb: 'Delight Warm palette, semantic tokens, and accent rules.',   status: 'live',  preview: 'colors.html',        thumbTone: 'subtle', thumbGraphic: 'color' },
      { slug: 'typography',     title: 'Typography',      blurb: 'Serrif display, Helvetica Now Text body, Pretendard for KR.',status: 'live',  preview: 'typography.html',    thumbTone: 'white',  thumbGraphic: 'type' },
      { slug: 'spacing',        title: 'Spacing & radii', blurb: '4px base scale, container offsets, corner radii.',           status: 'live',  preview: 'spacing.html',       thumbTone: 'subtle', thumbGraphic: 'spacing' },
      { slug: 'layout',         title: 'Layout & grid',   blurb: '1920 canvas, 1552 max width, 184 PC offsets, 16-col grid.',  status: 'live',  preview: 'layout.html',        thumbTone: 'white',  thumbGraphic: 'grid' },
      { slug: 'iconography',    title: 'Iconography',     blurb: 'Hand-drawn icons used in GNB, buttons, and FAQ.',             status: 'shell', thumbTone: 'subtle' },
      { slug: 'brand-marks',    title: 'Brand marks',     blurb: 'delight.ai and Sendbird logos, sizing, switcher pill.',      status: 'live',  preview: 'brand-marks.html',   thumbTone: 'dark',   thumbGraphic: 'logo' },
      { slug: 'key-visual',     title: 'Key visual',      blurb: 'Hero illustrations and brand imagery.',                       status: 'live',  preview: 'key-visual.html',    thumbTone: 'lime',   thumbGraphic: 'kv' },
      { slug: 'voice-and-tone', title: 'Voice & tone',    blurb: 'Plainspoken, confident, slightly literary.',                  status: 'shell', thumbTone: 'white' },
      { slug: 'photography',    title: 'Photography',     blurb: 'Subject treatment, framing, and color guidance.',             status: 'shell', thumbTone: 'subtle' },
      { slug: 'illustration',   title: 'Illustration',    blurb: 'Spot illustrations and editorial drawings.',                  status: 'shell', thumbTone: 'white' },
      { slug: 'motion',         title: 'Motion',          blurb: 'Easing, durations, and choreography.',                        status: 'shell', thumbTone: 'subtle' },
      { slug: 'accessibility',  title: 'Accessibility',   blurb: 'Contrast, focus, keyboard, and screen-reader practices.',     status: 'shell', thumbTone: 'lime' },
    ],
  },
  {
    slug: 'design-system',
    title: 'Design system',
    blurb: 'Tokens, components, and patterns — the implementable layer.',
    pages: [
      { slug: 'tokens',     title: 'Tokens',     blurb: 'CSS custom properties and naming conventions.',             status: 'shell', thumbTone: 'subtle' },
      { slug: 'components', title: 'Components', blurb: 'GNB, footer, buttons, tabs, forms, pagination, popups.',     status: 'live',  thumbTone: 'white',  thumbGraphic: 'components' },
      { slug: 'patterns',   title: 'Patterns',   blurb: 'Hero, feature stack, stat band, CTA banner, FAQ.',          status: 'live',  preview: 'landing-patterns.html', thumbTone: 'subtle', thumbGraphic: 'patterns' },
      { slug: 'guidelines', title: 'Guidelines', blurb: 'Do\u2019s and don\u2019ts, fidelity checks.',                status: 'live',  preview: 'dos-and-donts.html', thumbTone: 'lime',   thumbGraphic: 'rules' },
      { slug: 'processes',  title: 'Processes',  blurb: 'Review, contribution, and release workflow.',                status: 'shell', thumbTone: 'dark' },
    ],
  },
  {
    slug: 'components',
    title: 'Components',
    blurb: 'Each component with anatomy, states, and a live preview.',
    pages: [
      { slug: 'gnb',        title: 'GNB',         blurb: 'Fixed top bar, mega-menu, language popover.',  status: 'live',  preview: 'gnb.html',     thumbTone: 'white',  thumbGraphic: 'gnb' },
      { slug: 'footer',     title: 'Footer',      blurb: 'Brand col + 4 link cols, bg-subtle band.',    status: 'live',  preview: 'footer.html',  thumbTone: 'subtle', thumbGraphic: 'footer' },
      { slug: 'buttons',    title: 'Buttons',     blurb: 'Primary black, secondary outline, tertiary link.', status: 'shell', thumbTone: 'dark' },
      { slug: 'tabs',       title: 'Tabs',        blurb: 'Pill-shaped chips with 1px active border.',   status: 'shell', thumbTone: 'white' },
      { slug: 'form',       title: 'Form',        blurb: 'Inputs, textarea, select, validation states.', status: 'shell', thumbTone: 'subtle' },
      { slug: 'pagination', title: 'Pagination',  blurb: '32px squares with active chip and ellipses.', status: 'shell', thumbTone: 'white' },
      { slug: 'popup',      title: 'Popup',       blurb: 'Modals and announcement bars.',                status: 'live',  preview: 'popup.html',  thumbTone: 'lime',   thumbGraphic: 'popup' },
    ],
  },
  {
    slug: 'resources',
    title: 'Resources',
    blurb: 'Downloads, links, and tools to help you build with DWDS.',
    pages: [
      { slug: 'downloads', title: 'Downloads', blurb: 'Fonts, logos, and asset packs.',         status: 'live',  thumbTone: 'subtle', thumbGraphic: 'download' },
      { slug: 'figma',     title: 'Figma',     blurb: 'Component library and starter files.',  status: 'shell', thumbTone: 'white' },
      { slug: 'github',    title: 'GitHub',    blurb: 'Source repository and releases.',        status: 'live',  thumbTone: 'dark',   thumbGraphic: 'github' },
    ],
  },
];

/** Lookup helpers */
export function findSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
export function findPage(sectionSlug: string, pageSlug: string): Page | undefined {
  return findSection(sectionSlug)?.pages.find((p) => p.slug === pageSlug);
}
