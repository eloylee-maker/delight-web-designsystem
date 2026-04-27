'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SECTIONS } from '@/lib/ia';

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="site-sidebar">
      {SECTIONS.map((section) => (
        <div key={section.slug} className="site-sidebar__group">
          <p className="site-sidebar__group-label">
            <Link href={`/${section.slug}`}>{section.title}</Link>
          </p>
          {section.pages.map((page) => {
            const href = `/${section.slug}/${page.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={page.slug}
                href={href}
                className="site-sidebar__link"
                aria-current={active ? 'page' : undefined}
              >
                <span>{page.title}</span>
                {page.status === 'shell' ? <span className="site-sidebar__badge">Soon</span> : null}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
