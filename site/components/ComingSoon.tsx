/**
 * Empty-state shell for pages without content yet.
 * Keeps the route alive so sidebar links resolve.
 */
export function ComingSoon({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <div className="empty-shell">
      <span className="empty-shell__pill">Coming in v0.2</span>
      <h2 className="empty-shell__title">{title}</h2>
      {blurb ? <p className="empty-shell__desc">{blurb}</p> : null}
    </div>
  );
}
