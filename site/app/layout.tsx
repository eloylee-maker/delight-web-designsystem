import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Topbar } from '@/components/Topbar';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'delight.ai Web Design System',
  description: 'DWDS — Tokens, components, and patterns for delight.ai surfaces.',
  icons: { icon: '/assets/delight-logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="site-shell">
          <Topbar />
          <Sidebar />
          <main className="site-main">{children}</main>
        </div>
        <footer className="site-footer">
          <span>© 2026 Sendbird, Inc. — DWDS v0.1</span>
          <span>
            <a href="https://github.com/eloylee-maker/delight-web-designsystem" target="_blank" rel="noreferrer noopener">
              Source on GitHub ↗
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
