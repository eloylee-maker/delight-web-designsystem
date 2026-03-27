'use client';

import styles from './Pagination.module.css';

/* ---- Types ---- */
export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

/* ---- Chevron icons ---- */
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---- Page range builder ---- */
function buildPages(current: number, total: number, sibling: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const left  = Math.max(2, current - sibling);
  const right = Math.min(total - 1, current + sibling);

  const pages: (number | '...')[] = [1];

  if (left > 2) pages.push('...');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push('...');
  pages.push(total);

  return pages;
}

/* ---- Navigator button ---- */
function NavBtn({
  direction,
  disabled,
  onClick,
}: {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={[styles.navigator, disabled ? styles.navigatorDisabled : ''].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous page' : 'Next page'}
    >
      {direction === 'prev' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

/* ---- Component ---- */
export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = buildPages(currentPage, totalPages, siblingCount);

  return (
    <nav
      className={[styles.pagination, className].filter(Boolean).join(' ')}
      aria-label="Pagination"
    >
      {/* Prev navigator */}
      <NavBtn direction="prev" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />

      {/* Numeral group */}
      <div className={styles.numeral}>
        {pages.map((page, idx) =>
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={page}
              className={[styles.page, page === currentPage ? styles.pageActive : ''].filter(Boolean).join(' ')}
              onClick={() => onPageChange(page as number)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next navigator */}
      <NavBtn direction="next" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
    </nav>
  );
}
