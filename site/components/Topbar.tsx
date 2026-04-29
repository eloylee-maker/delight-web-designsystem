import Link from 'next/link';

export function Topbar() {
  return (
    <header className="site-topbar">
      <Link href="/" className="site-topbar__brand">
        <span className="site-topbar__brand-mark">d</span>
        <span>delight.ai Web Design System</span>
        <span className="site-topbar__version">v0.1</span>
      </Link>
      <span className="site-topbar__spacer" />
      <a
        className="site-topbar__github"
        href="https://github.com/eloylee-maker/delight-web-designsystem"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub ↗
      </a>
    </header>
  );
}
