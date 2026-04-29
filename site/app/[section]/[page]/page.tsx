import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SECTIONS, findPage, findSection } from '@/lib/ia';
import { Crumbs } from '@/components/Crumbs';
import { ComingSoon } from '@/components/ComingSoon';
import { PreviewFrame } from '@/components/PreviewFrame';
import { PageContent } from '@/components/PageContent';

export function generateStaticParams() {
  const out: { section: string; page: string }[] = [];
  for (const s of SECTIONS) for (const p of s.pages) out.push({ section: s.slug, page: p.slug });
  return out;
}

export function generateMetadata({ params }: { params: { section: string; page: string } }) {
  const p = findPage(params.section, params.page);
  return p ? { title: `${p.title} — DWDS` } : {};
}

export default function PageView({ params }: { params: { section: string; page: string } }) {
  const section = findSection(params.section);
  const page = findPage(params.section, params.page);
  if (!section || !page) notFound();

  // Sibling pages in this section, for the bottom nav
  const idx = section.pages.findIndex((p) => p.slug === page.slug);
  const prev = section.pages[idx - 1];
  const next = section.pages[idx + 1];

  return (
    <>
      <Crumbs
        items={[
          { href: '/', label: 'Home' },
          { href: `/${section.slug}`, label: section.title },
          { label: page.title },
        ]}
      />
      <p className="page-eyebrow">{section.title}</p>
      <h1 className="page-title">{page.title}</h1>
      <p className="page-lede">{page.blurb}</p>

      {page.status === 'live' ? (
        <PageContent sectionSlug={section.slug} pageSlug={page.slug} preview={page.preview} />
      ) : (
        <ComingSoon title={`${page.title} — coming soon`} blurb={page.blurb} />
      )}

      {/* Prev / Next */}
      <nav
        style={{
          marginTop: 96,
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: 16,
          justifyContent: 'space-between',
          fontFamily: 'Helvetica Now Text, sans-serif',
          fontSize: 14,
          letterSpacing: '-0.01em',
        }}
      >
        {prev ? (
          <Link href={`/${section.slug}/${prev.slug}`} style={{ color: 'var(--text-muted)' }}>
            ← <span style={{ color: 'var(--text-dim)' }}>Previous</span> &nbsp; {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/${section.slug}/${next.slug}`} style={{ color: 'var(--text-muted)', textAlign: 'right' }}>
            {next.title} &nbsp; <span style={{ color: 'var(--text-dim)' }}>Next</span> →
          </Link>
        ) : <span />}
      </nav>
    </>
  );
}
