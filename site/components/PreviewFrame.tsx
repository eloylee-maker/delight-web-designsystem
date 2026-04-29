/**
 * Live preview iframe — embeds /preview/*.html in a clean container,
 * with optional fixed height (default 720) and a "Open in new tab" link.
 */
type Props = {
  src: string;          // e.g. "gnb.html"
  height?: number;      // px, default 720
  title?: string;
};

export function PreviewFrame({ src, height = 720, title = 'Live preview' }: Props) {
  const fullSrc = src.startsWith('/') ? src : `/preview/${src}`;
  return (
    <div className="preview-frame" style={{ position: 'relative' }}>
      <iframe src={fullSrc} title={title} height={height} loading="lazy" />
      <a
        href={fullSrc}
        target="_blank"
        rel="noreferrer noopener"
        style={{
          position: 'absolute',
          top: 12,
          right: 14,
          fontFamily: 'Helvetica Now Text, sans-serif',
          fontSize: 12,
          fontWeight: 500,
          color: '#292016',
          background: 'rgba(255,255,255,0.92)',
          border: '1px solid #E5E3DF',
          borderRadius: 999,
          padding: '4px 10px',
          letterSpacing: '-0.01em',
        }}
      >
        Open ↗
      </a>
    </div>
  );
}
