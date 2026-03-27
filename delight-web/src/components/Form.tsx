'use client';

import { InputHTMLAttributes, SelectHTMLAttributes, ReactNode, useId } from 'react';
import styles from './Form.module.css';

/* ---- Field wrapper ---- */
interface FieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({ label, required, error, children, className = '' }: FieldProps) {
  return (
    <div className={[styles.field, error ? styles.hasError : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      {children}
      {error && (
        <span className={styles.error}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke="#FF5E69" />
            <path d="M6 3.5v3M6 8h.01" stroke="#FF5E69" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}

/* ---- Text Input ---- */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

export function Input({ label, required, error, className = '', ...rest }: InputProps) {
  const id = useId();
  return (
    <FormField label={label} required={required} error={error}>
      <input
        id={id}
        className={[styles.input, error ? styles.inputError : '', className].filter(Boolean).join(' ')}
        {...rest}
      />
    </FormField>
  );
}

/* ---- Textarea ---- */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

export function Textarea({ label, required, error, className = '', ...rest }: TextareaProps) {
  const id = useId();
  return (
    <FormField label={label} required={required} error={error}>
      <textarea
        id={id}
        className={[styles.textarea, error ? styles.inputError : '', className].filter(Boolean).join(' ')}
        {...rest}
      />
    </FormField>
  );
}

/* ---- Select ---- */
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, required, error, placeholder, options, className = '', ...rest }: SelectProps) {
  const id = useId();
  return (
    <FormField label={label} required={required} error={error}>
      <div className={styles.selectWrap}>
        <select
          id={id}
          className={[styles.select, error ? styles.inputError : '', className].filter(Boolean).join(' ')}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <svg className={styles.selectChevron} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </FormField>
  );
}

/* ---- Phone combo (country code + number) ---- */
export interface PhoneInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  phoneValue?: string;
  onPhoneChange?: (val: string) => void;
  countryCodes?: { value: string; label: string }[];
}

const DEFAULT_CODES = [
  { value: '+1', label: '+1 US' },
  { value: '+44', label: '+44 UK' },
  { value: '+82', label: '+82 KR' },
  { value: '+81', label: '+81 JP' },
];

export function PhoneInput({
  label,
  required,
  error,
  countryCode = '+1',
  onCountryCodeChange,
  phoneValue = '',
  onPhoneChange,
  countryCodes = DEFAULT_CODES,
}: PhoneInputProps) {
  return (
    <FormField label={label} required={required} error={error}>
      <div className={[styles.combo, error ? styles.comboError : ''].filter(Boolean).join(' ')}>
        <select
          className={styles.comboSelect}
          value={countryCode}
          onChange={e => onCountryCodeChange?.(e.target.value)}
        >
          {countryCodes.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <div className={styles.comboDivider} />
        <input
          type="tel"
          className={styles.comboInput}
          value={phoneValue}
          onChange={e => onPhoneChange?.(e.target.value)}
          placeholder="Phone number"
        />
      </div>
    </FormField>
  );
}

/* ---- Checkbox ---- */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  error?: string;
}

export function Checkbox({ label, error, className = '', ...rest }: CheckboxProps) {
  const id = useId();
  return (
    <div className={[styles.checkboxWrap, error ? styles.hasError : '', className].filter(Boolean).join(' ')}>
      <label className={styles.checkboxLabel} htmlFor={id}>
        <input id={id} type="checkbox" className={styles.checkboxInput} {...rest} />
        <span className={styles.checkboxBox} />
        <span className={styles.checkboxText}>{label}</span>
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

/* ---- Radio Group ---- */
export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  label?: string;
  required?: boolean;
  error?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

export function RadioGroup({ label, required, error, options, value, onChange, name }: RadioGroupProps) {
  return (
    <FormField label={label} required={required} error={error}>
      <div className={styles.radioGroup}>
        {options.map(opt => (
          <label key={opt.value} className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              className={styles.radioInput}
            />
            <span className={styles.radioBox} />
            <span className={styles.radioText}>{opt.label}</span>
          </label>
        ))}
      </div>
    </FormField>
  );
}
