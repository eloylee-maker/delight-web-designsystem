import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <p className="page-eyebrow">404</p>
      <h1 className="page-title">Not found.</h1>
      <p className="page-lede">
        We couldn&apos;t find that page. It may have moved, been renamed, or it&apos;s waiting in a future release.
      </p>
      <p>
        <Link href="/" style={{ textDecoration: 'underline' }}>← Back to home</Link>
      </p>
    </>
  );
}
