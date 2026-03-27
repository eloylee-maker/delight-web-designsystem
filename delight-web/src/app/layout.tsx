import type { Metadata } from 'next';
import './globals.css';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'delight.ai',
  description: 'Enterprise AI customer experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
