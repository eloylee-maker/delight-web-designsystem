'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SECTIONS } from '@/lib/ia';

export function Sidebar() {
  const pathname = usePathname();
  const activeSection = SECTIONS.find((s) => pathname.startsWith(`/${s.slug}`))?.slug;

  // open: which section groups are expanded.
  // by default — only the active one. user can toggle any open/closed.
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    SECTIONS.forEach((s) => { init[s.slug] = s.slug === activeSection; });
    // Always expand "Get started" if no active section (e.g. home page).
    if (!activeSection) init['get-started'] = true;
    return init;
  });

  // when path changes (user navigates), auto-open the section the user is now in
  useEffect(() => {
    if (!activeSection) return;
    setOpen((prev) => prev[activeSection] ? prev : { ...prev, [activeSection]: true });
  }, [activeSection]);

  return (
    <aside className="site-sidebar">
      <Link href="/" className="site-sidebar__home" aria-current={pathname === '/' ? 'page' : undefined}>
        <span className="site-sidebar__home-mark" aria-hidden>★</span>
        <span>Home</span>
      </Link>

      {SECTIONS.map((section, i) => {
        const isOpen = !!open[section.slug];
        const isActiveSection = section.slug === activeSection;
        const sectionHref = `/${section.slug}`;
        return (
          <div key={section.slug} className={`site-sidebar__group ${isOpen ? 'is-open' : ''}`}>
            <div className="site-sidebar__group-row">
              <Link
                href={sectionHref}
                className={`site-sidebar__group-label ${isActiveSection ? 'is-active' : ''}`}
                aria-current={pathname === sectionHref ? 'page' : undefined}
              >
                <span className="site-sidebar__group-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="site-sidebar__group-title">{section.title}</span>
              </Link>
              <button
                type="button"
                className="site-sidebar__group-toggle"
                aria-label={isOpen ? `Collapse ${section.title}` : `Expand ${section.title}`}
                aria-expanded={isOpen}
                onClick={() => setOpen((p) => ({ ...p, [section.slug]: !p[section.slug] }))}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                  <path d="M2 3.5L5 6.5L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {isOpen ? (
              <ul className="site-sidebar__pages">
                {section.pages.map((page) => {
                  const href = `/${section.slug}/${page.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={page.slug}>
                      <Link
                        href={href}
                        className="site-sidebar__link"
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className="site-sidebar__link-label">{page.title}</span>
                        {page.status === 'shell' ? (
                          <span className="site-sidebar__badge">Soon</span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </aside>
  );
}
