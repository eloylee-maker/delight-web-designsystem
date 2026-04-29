import Link from 'next/link';
import { SECTIONS } from '@/lib/ia';
import { CardGraphic } from '@/components/CardGraphic';

export default function HomePage() {
  return (
    <>
      <p className="page-eyebrow">DWDS · v0.1</p>
      <h1 className="page-title">A quiet system for delight.ai surfaces.</h1>
      <p className="page-lede">
        DWDS is the design system behind delight.ai — Sendbird&apos;s enterprise AI customer-experience product.
        It pairs Serrif display type with Helvetica Now Text, a warm-gray palette, black CTAs, and a single lime accent.
        Use it whenever you build a delight.ai marketing, landing, or product surface.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.slug}>
          <h2 className="section-eyebrow">{section.title}</h2>
          <p className="section-title" style={{ fontSize: 28, marginBottom: 6 }}>
            <Link href={`/${section.slug}`}>{section.title}</Link>
          </p>
          <p className="section-desc">{section.blurb}</p>
          <div className="card-grid">
            {section.pages.slice(0, 6).map((page) => (
              <Link key={page.slug} href={`/${section.slug}/${page.slug}`} className="card">
                <div className="card__thumb">
                  <div className="card__thumb-graphic">
                    <CardGraphic kind={page.thumbGraphic} tone={page.thumbTone} />
                  </div>
                  {page.status === 'shell' ? <span className="card__status">Coming soon</span> : null}
                </div>
                <div className="card__body">
                  <h3 className="card__title">{page.title}</h3>
                  <p className="card__desc">{page.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
