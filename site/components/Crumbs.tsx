import Link from 'next/link';

type Crumb = { href?: string; label: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((c, i) => (
        <span key={i}>
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
          {i < items.length - 1 ? <span className="crumbs__sep">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
