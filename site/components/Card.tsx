import Link from 'next/link';
import { CardGraphic } from './CardGraphic';
import type { Page } from '@/lib/ia';

export function Card({ page, basePath }: { page: Page; basePath: string }) {
  return (
    <Link href={`${basePath}/${page.slug}`} className="card">
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
  );
}
