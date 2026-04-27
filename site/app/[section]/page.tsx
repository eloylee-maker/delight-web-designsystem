import { notFound } from 'next/navigation';
import { SECTIONS, findSection } from '@/lib/ia';
import { Crumbs } from '@/components/Crumbs';
import { Card } from '@/components/Card';

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export function generateMetadata({ params }: { params: { section: string } }) {
  const s = findSection(params.section);
  return s ? { title: `${s.title} — DWDS` } : {};
}

export default function SectionIndex({ params }: { params: { section: string } }) {
  const section = findSection(params.section);
  if (!section) notFound();

  return (
    <>
      <Crumbs items={[{ href: '/', label: 'Home' }, { label: section.title }]} />
      <p className="page-eyebrow">{section.title}</p>
      <h1 className="page-title">{section.title}</h1>
      <p className="page-lede">{section.blurb}</p>

      <div className="card-grid">
        {section.pages.map((page) => (
          <Card key={page.slug} page={page} basePath={`/${section.slug}`} />
        ))}
      </div>
    </>
  );
}
