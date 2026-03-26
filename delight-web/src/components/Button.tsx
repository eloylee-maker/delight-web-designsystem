'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

/* ---- Types ---- */
export type BtnHierarchy = 'primary' | 'secondary' | 'tertiary';
export type BtnSize = 'large' | 'medium' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy?: BtnHierarchy;
  size?: BtnSize;
  loading?: boolean;
  iconLeft?: ReactNode;
  children: ReactNode;
}

/* ---- Spinner ---- */
const Spinner = ({ size }: { size: BtnSize }) => (
  <svg
    className={styles.spinner}
    width={size === 'small' ? 16 : 24}
    height={size === 'small' ? 16 : 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
    <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ---- Arrow icon (hover state, 12×9px Figma spec) ---- */
const ArrowRight = () => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className={styles.arrowIcon}>
    <path d="M7 1l4 3.5L7 8M1 4.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---- Component ---- */
export default function Button({
  hierarchy = 'primary',
  size = 'medium',
  loading = false,
  iconLeft,
  disabled,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[hierarchy],
    styles[size],
    loading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading ? (
        <Spinner size={size} />
      ) : (
        <>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <span className={styles.label}>{children}</span>
          <ArrowRight />
        </>
      )}
    </button>
  );
}
