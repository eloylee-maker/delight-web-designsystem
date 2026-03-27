'use client';

import { useState } from 'react';
import styles from './Tab.module.css';

/* ---- Types ---- */
export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface TabProps {
  items: TabItem[];
  /** Controlled: 현재 선택된 value */
  value?: string;
  /** Uncontrolled: 초기 선택값 */
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/* ---- Component ---- */
export default function Tab({
  items,
  value,
  defaultValue,
  onChange,
  className = '',
}: TabProps) {
  const [internal, setInternal] = useState<string>(
    defaultValue ?? items.find(i => !i.disabled)?.value ?? ''
  );

  const active = value !== undefined ? value : internal;

  function handleClick(item: TabItem) {
    if (item.disabled) return;
    if (value === undefined) setInternal(item.value);
    onChange?.(item.value);
  }

  return (
    <div
      className={[styles.tabBar, className].filter(Boolean).join(' ')}
      role="tablist"
    >
      {items.map(item => (
        <button
          key={item.value}
          role="tab"
          aria-selected={item.value === active}
          disabled={item.disabled}
          className={[
            styles.tabItem,
            item.value === active ? styles.active : '',
            item.disabled ? styles.disabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
