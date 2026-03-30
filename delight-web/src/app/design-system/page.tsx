'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Tab from '@/components/Tab';
import Pagination from '@/components/Pagination';
import { pcEn, pcKo, mobileEn } from '@/tokens/typography';

/* ---- Sidebar nav ---- */
const NAV = [
  { group: 'Foundation', items: [
    { id: 'tokens',     label: 'CSS Tokens' },
    { id: 'colors',     label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'effects',    label: 'Effects' },
    { id: 'spacing',    label: 'Spacing' },
    { id: 'grid',       label: 'Grid' },
  ]},
  { group: 'Components', items: [
    { id: 'logos',      label: 'Logo & Brand' },
    { id: 'buttons',    label: 'Buttons' },
    { id: 'forms',      label: 'Forms' },
    { id: 'tabs',       label: 'Tab' },
    { id: 'pagination', label: 'Pagination' },
    { id: 'faq',        label: 'FAQ Accordion' },
  ]},
  { group: 'Patterns', items: [
    { id: 'gnb',    label: 'GNB (Navigation)' },
    { id: 'footer', label: 'Footer' },
    { id: 'cta',    label: 'CTA Banner' },
  ]},
];

export default function DesignSystemPage() {
  const [active, setActive] = useState('tokens');
  const [pgMain, setPgMain] = useState(1);
  const [pgState, setPgState] = useState(1);

  function scrollTo(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={styles.layout}>
      {/* ---- Sidebar ---- */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>delight.ai</div>
          <div className={styles.sidebarSub}>Design System</div>
        </div>
        {NAV.map(({ group, items }) => (
          <div key={group} className={styles.navGroup}>
            <div className={styles.navGroupLabel}>{group}</div>
            {items.map(({ id, label }) => (
              <button
                key={id}
                className={[styles.navLink, active === id ? styles.navLinkActive : ''].join(' ')}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* ---- Main content ---- */}
      <main className={styles.content}>

        {/* ===== CSS TOKENS ===== */}
        <section id="tokens" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>CSS Tokens</h2>
          <p className={styles.sectionDesc}>Delight Warm 테마의 기준 CSS 변수. 모든 페이지 <code className={styles.code}>:root</code>에 선언할 것.</p>
          <table className={styles.tokenTable}>
            <thead>
              <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            </thead>
            <tbody>
              {[
                { token: '--bg',           value: '#FFFFFF',  usage: '메인 배경 — 반드시 순수 White', dot: '#FFFFFF', border: true },
                { token: '--bg-subtle',    value: '#F7F5F0',  usage: '서브 배경, hover, 섹션 교차 bg', dot: '#F7F5F0' },
                { token: '--surface',      value: '#FFFFFF',  usage: '카드, 인풋, 폼 배경', dot: '#FFFFFF', border: true },
                { token: '--surface-2',    value: '#F7F5F0',  usage: 'disabled 인풋, 보조 카드 배경', dot: '#F7F5F0' },
                { token: '--border',       value: '#D9D6D2',  usage: '기본 구분선, 인풋 border · WGray200', dot: '#D9D6D2' },
                { token: '--border-light', value: '#E5E3DF',  usage: '연한 구분선, 섹션 내부 divider · WGray150', dot: '#E5E3DF' },
                { token: '--text',         value: '#292016',  usage: '본문 기본 텍스트 · WGray900', dot: '#292016' },
                { token: '--text-muted',   value: '#66625E',  usage: '보조 텍스트, 부제목 · WGray500', dot: '#66625E' },
                { token: '--text-dim',     value: '#8C867E',  usage: 'placeholder, disabled · WGray350', dot: '#8C867E' },
                { token: '--disabled',     value: '#C4C0B9',  usage: '비활성 요소 · WGray250', dot: '#C4C0B9' },
                { token: '--lime',         value: '#F2FF66',  usage: 'Delight Lime — 포인트 강조색', dot: '#F2FF66' },
                { token: '--cta-dark',     value: '#18140F',  usage: 'CTA 섹션 다크 배경', dot: '#18140F' },
                { token: '--max-w',        value: '1552px',   usage: '최대 콘텐츠 너비', dot: null },
              ].map(({ token, value, usage, dot, border }) => (
                <tr key={token}>
                  <td className={styles.tokenName}>
                    {dot && <span className={styles.tokenDot} style={{ background: dot, border: border ? '1px solid #D9D6D2' : undefined }} />}
                    <code>{token}</code>
                  </td>
                  <td className={styles.tokenValue}>{value}</td>
                  <td className={styles.tokenUsage}>{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ===== COLORS ===== */}
        <section id="colors" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <p className={styles.sectionDesc}>Delight Warm 팔레트. Sendbird cool gray 계열과 Sendbird Purple은 사용 금지.</p>

          <div className={styles.groupTitle}>Warm Grays</div>
          <div className={styles.colorGrid}>
            {[
              { hex: '#FFFFFF', label: 'White', border: true },
              { hex: '#F7F5F0', label: 'WGray100' },
              { hex: '#E5E3DF', label: 'WGray150' },
              { hex: '#D9D6D2', label: 'WGray200' },
              { hex: '#C4C0B9', label: 'WGray250' },
              { hex: '#A8A39B', label: 'WGray300' },
              { hex: '#8C867E', label: 'WGray350' },
              { hex: '#66625E', label: 'WGray500' },
              { hex: '#47413B', label: 'WGray700' },
              { hex: '#292016', label: 'WGray900' },
              { hex: '#000000', label: 'Black' },
            ].map(c => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex, border: c.border ? '1px solid #D9D6D2' : undefined }} />
                <div className={styles.colorLabel}>{c.label}</div>
                <div className={styles.colorHex}>{c.hex}</div>
              </div>
            ))}
          </div>

          <div className={styles.groupTitle} style={{ marginTop: 40 }}>Accent</div>
          <div className={styles.colorGrid}>
            {[
              { hex: '#F2FF66', label: 'Delight Lime' },
              { hex: '#7B39FE', label: 'Sendbird Purple' },
              { hex: '#D1F778', label: 'Sendbird Lime' },
            ].map(c => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex }} />
                <div className={styles.colorLabel}>{c.label}</div>
                <div className={styles.colorHex}>{c.hex}</div>
              </div>
            ))}
          </div>

          <div className={styles.groupTitle} style={{ marginTop: 40 }}>Secondary</div>
          <div className={styles.colorGrid}>
            {[
              { hex: '#FF5E69', label: 'Red500' },
              { hex: '#FFE3E5', label: 'Red100' },
              { hex: '#27A6F7', label: 'Blue500' },
              { hex: '#91D2FB', label: 'Blue300' },
              { hex: '#D8F0FF', label: 'Blue100' },
              { hex: '#25BD85', label: 'Green500' },
              { hex: '#D0F3E6', label: 'Green100' },
            ].map(c => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex }} />
                <div className={styles.colorLabel}>{c.label}</div>
                <div className={styles.colorHex}>{c.hex}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TYPOGRAPHY ===== */}
        <section id="typography" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <p className={styles.sectionDesc}>모든 타이포그래피 공통: <code className={styles.code}>letter-spacing: -0.02em</code></p>

          <div className={styles.groupTitle}>PC · English</div>
          <div className={styles.typeStack}>
            {[
              { tag: 'H1 · Serrif 72px', style: { fontFamily: 'Serrif', fontWeight: 500, fontSize: 72, lineHeight: '108%' }, text: 'The future of AI' },
              { tag: 'H2 · Serrif 38px', style: { fontFamily: 'Serrif', fontWeight: 500, fontSize: 38, lineHeight: '120%' }, text: 'Enterprise AI Platform' },
              { tag: 'H3 · Serrif 28px', style: { fontFamily: 'Serrif', fontWeight: 500, fontSize: 28, lineHeight: '132%' }, text: 'Intelligent customer experience' },
              { tag: 'H4 · HNT 22px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 500, fontSize: 22, lineHeight: '144%' }, text: 'Build trust at every touchpoint' },
              { tag: 'B1 · HNT 20px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 400, fontSize: 20, lineHeight: '136%', color: 'var(--text-muted)' }, text: 'Delight AI helps enterprises deliver personalized AI concierge experiences.' },
              { tag: 'B2 · HNT 18px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 400, fontSize: 18, lineHeight: '138%', color: 'var(--text-muted)' }, text: 'Build, deploy and scale AI agents with memory and context.' },
              { tag: 'B3 · HNT 16px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 400, fontSize: 16, lineHeight: '140%', color: 'var(--text-muted)' }, text: 'See how top enterprises use AI agents to reduce support costs.' },
              { tag: 'C1 · HNT 14px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 400, fontSize: 14, lineHeight: '136%', color: 'var(--text-dim)' }, text: 'Label · Caption · Meta text' },
              { tag: 'C2 · HNT 12px',    style: { fontFamily: 'Helvetica Now Text', fontWeight: 400, fontSize: 12, lineHeight: '140%', color: 'var(--text-dim)' }, text: '© 2025 Sendbird, Inc. All rights reserved.' },
            ].map(({ tag, style, text }) => (
              <div key={tag} className={styles.typeRow}>
                <span className={styles.typeTag}>{tag}</span>
                <span style={{ ...style, letterSpacing: '-0.02em' }}>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles.groupTitle} style={{ marginTop: 40 }}>PC · Korean</div>
          <div className={styles.typeStack}>
            {[
              { tag: `H1 · Pretendard ${pcKo.h1.fontSize}px`, style: { fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.h1.fontWeight, fontSize: pcKo.h1.fontSize, lineHeight: pcKo.h1.lineHeight }, text: 'AI 컨시어지의 미래' },
              { tag: `H2 · Pretendard ${pcKo.h2[0].fontSize}px`, style: { fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.h2[0].fontWeight, fontSize: pcKo.h2[0].fontSize, lineHeight: pcKo.h2[0].lineHeight }, text: '엔터프라이즈 AI 플랫폼' },
              { tag: `B2 · Pretendard ${pcKo.b2[0].fontSize}px`, style: { fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.b2[1].fontWeight, fontSize: pcKo.b2[0].fontSize, lineHeight: pcKo.b2[0].lineHeight, color: 'var(--text-muted)' }, text: 'AI 에이전트로 고객 지원 비용을 절감하세요.' },
            ].map(({ tag, style, text }) => (
              <div key={tag} className={styles.typeRow}>
                <span className={styles.typeTag}>{tag}</span>
                <span style={{ ...style, letterSpacing: '-0.02em' }}>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles.groupTitle} style={{ marginTop: 40 }}>Mobile · English</div>
          <div className={styles.typeStack}>
            {[
              { tag: `H1 · Serrif ${mobileEn.h1.fontSize}px`, style: { fontFamily: 'Serrif', fontWeight: mobileEn.h1.fontWeight, fontSize: mobileEn.h1.fontSize, lineHeight: mobileEn.h1.lineHeight }, text: 'The future of AI' },
              { tag: `H2 · Serrif ${mobileEn.h2[0].fontSize}px`, style: { fontFamily: 'Serrif', fontWeight: mobileEn.h2[0].fontWeight, fontSize: mobileEn.h2[0].fontSize, lineHeight: mobileEn.h2[0].lineHeight }, text: 'Enterprise AI Platform' },
              { tag: `B1 · HNT ${mobileEn.b1[0].fontSize}px`, style: { fontFamily: 'Helvetica Now Text', fontWeight: mobileEn.b1[1].fontWeight, fontSize: mobileEn.b1[0].fontSize, lineHeight: mobileEn.b1[0].lineHeight, color: 'var(--text-muted)' }, text: 'Personalized AI concierge for every customer.' },
              { tag: `C1 · HNT ${mobileEn.c1[0].fontSize}px`, style: { fontFamily: 'Helvetica Now Text', fontWeight: mobileEn.c1[1].fontWeight, fontSize: mobileEn.c1[0].fontSize, lineHeight: mobileEn.c1[0].lineHeight, color: 'var(--text-dim)' }, text: 'Label · Caption · Meta text' },
            ].map(({ tag, style, text }) => (
              <div key={tag} className={styles.typeRow}>
                <span className={styles.typeTag}>{tag}</span>
                <span style={{ ...style, letterSpacing: '-0.02em' }}>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EFFECTS ===== */}
        <section id="effects" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>Effects & Shadows</h2>
          <div className={styles.effectGrid}>
            <div className={styles.effectCard} style={{ boxShadow: '4px 14px 24px 3px rgba(33,33,33,0.10)' }}>
              <span className={styles.effectLabel}>Drop Shadow 01</span>
              <code className={styles.effectCode}>4px 14px 24px 3px rgba(33,33,33,0.10)</code>
            </div>
            <div className={styles.effectCard} style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.13)' }}>
              <span className={styles.effectLabel}>Dropdown Shadow</span>
              <code className={styles.effectCode}>0 8px 40px rgba(0,0,0,0.13)</code>
            </div>
            <div className={styles.effectCard} style={{ backdropFilter: 'blur(20px)', boxShadow: '4px 14px 24px 3px rgba(33,33,33,0.10)', background: 'rgba(255,255,255,0.7)' }}>
              <span className={styles.effectLabel}>Background Blur</span>
              <code className={styles.effectCode}>backdrop-filter: blur(20px)</code>
            </div>
          </div>
        </section>

        {/* ===== SPACING ===== */}
        <section id="spacing" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>Spacing</h2>
          <p className={styles.sectionDesc}>8px 그리드 기반. 모든 간격은 8의 배수로 사용.</p>
          <div className={styles.spacingList}>
            {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100].map(s => (
              <div key={s} className={styles.spacingRow}>
                <div className={styles.spacingBar} style={{ width: s, height: 20, background: '#F2FF66', border: '1px solid #d8e45c', borderRadius: 3, flexShrink: 0 }} />
                <span className={styles.spacingLabel}>{s}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== GRID ===== */}
        <section id="grid" className={styles.section}>
          <div className={styles.sectionEyebrow}>Foundation</div>
          <h2 className={styles.sectionTitle}>Grid System</h2>
          <div className={styles.gridInfo}>
            {[
              { label: 'Desktop', detail: '1920px canvas · 16 cols · 16px gutter · 184px offset' },
              { label: 'Content Max Width', detail: '1552px' },
              { label: 'GNB Inner Max Width', detail: '1616px' },
              { label: 'Mobile', detail: '375px canvas · 4 cols · 16px gutter · 16px offset' },
            ].map(({ label, detail }) => (
              <div key={label} className={styles.gridCard}>
                <span className={styles.gridLabel}>{label}</span>
                <div className={styles.gridDetail} dangerouslySetInnerHTML={{ __html: detail.replace(/(\d+(?:px|cols?))/g, '<b>$1</b>') }} />
              </div>
            ))}
          </div>
        </section>

        {/* ===== LOGO & BRAND ===== */}
        <section id="logos" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>Logo & Brand</h2>
          <div className={styles.logoGrid}>
            <div className={styles.logoCard}>
              <div className={styles.logoPreview} style={{ background: '#FFFFFF' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M12.5254 9.47461H22V12.5254H14.683L19.8569 17.6993L17.7001 19.8569L12.5254 14.6815V22H9.47461V14.6823L4.30071 19.8569L2.14307 17.7001L7.31773 12.5254H0V9.47461H7.3185L2.14383 4.29994L4.30071 2.14307L9.47461 7.31696V0H12.5254V9.47461Z" fill="#1A1612"/>
                  <path d="M19.4737 4.44604C19.4737 5.5246 18.5994 6.39894 17.5208 6.39894C16.4423 6.39894 15.5679 5.5246 15.5679 4.44604C15.5679 3.36749 16.4423 2.49315 17.5208 2.49315C18.5994 2.49315 19.4737 3.36749 19.4737 4.44604Z" fill="#1A1612"/>
                </svg>
              </div>
              <div className={styles.logoLabel}>delight.ai (Light)</div>
            </div>
            <div className={styles.logoCard}>
              <div className={styles.logoPreview} style={{ background: '#1A1612' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M12.5254 9.47461H22V12.5254H14.683L19.8569 17.6993L17.7001 19.8569L12.5254 14.6815V22H9.47461V14.6823L4.30071 19.8569L2.14307 17.7001L7.31773 12.5254H0V9.47461H7.3185L2.14383 4.29994L4.30071 2.14307L9.47461 7.31696V0H12.5254V9.47461Z" fill="#FFFFFF"/>
                  <path d="M19.4737 4.44604C19.4737 5.5246 18.5994 6.39894 17.5208 6.39894C16.4423 6.39894 15.5679 5.5246 15.5679 4.44604C15.5679 3.36749 16.4423 2.49315 17.5208 2.49315C18.5994 2.49315 19.4737 3.36749 19.4737 4.44604Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div className={styles.logoLabel}>delight.ai (Dark)</div>
            </div>
            <div className={styles.logoCard}>
              <div className={styles.logoPreview} style={{ background: '#FFFFFF' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49977 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11Z" fill="#0E1017"/>
                </svg>
              </div>
              <div className={styles.logoLabel}>Sendbird (Light)</div>
            </div>
            <div className={styles.logoCard}>
              <div className={styles.logoPreview} style={{ background: '#0E1017' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49977 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div className={styles.logoLabel}>Sendbird (Dark)</div>
            </div>
          </div>
        </section>

        {/* ===== BUTTONS ===== */}
        <section id="buttons" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonGroups}>
            {[
              { label: 'Primary', btns: [
                { cls: `${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`,  text: 'Large Button' },
                { cls: `${styles.btn} ${styles.btnPrimary} ${styles.btnMedium}`, text: 'Medium Button' },
                { cls: `${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`,  text: 'Small' },
              ]},
              { label: 'Secondary', btns: [
                { cls: `${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`,  text: 'Large Button' },
                { cls: `${styles.btn} ${styles.btnSecondary} ${styles.btnMedium}`, text: 'Medium Button' },
                { cls: `${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`,  text: 'Small' },
              ]},
              { label: 'Tertiary', btns: [
                { cls: `${styles.btn} ${styles.btnTertiary} ${styles.btnTertiaryLg}`, text: 'Learn more →' },
                { cls: `${styles.btn} ${styles.btnTertiary} ${styles.btnTertiarySm}`, text: 'See all →' },
              ]},
              { label: 'Disabled', btns: [
                { cls: `${styles.btn} ${styles.btnPrimary} ${styles.btnMedium}`,   text: 'Disabled', disabled: true as const },
                { cls: `${styles.btn} ${styles.btnSecondary} ${styles.btnMedium}`, text: 'Disabled', disabled: true as const },
              ]},
            ].map(({ label, btns }) => (
              <div key={label} className={styles.buttonGroup}>
                <span className={styles.groupTitle}>{label}</span>
                <div className={styles.buttonRow}>
                  {btns.map((btn) => (
                    <button key={btn.text} className={btn.cls} disabled={'disabled' in btn ? btn.disabled : false}>{btn.text}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FORMS ===== */}
        <section id="forms" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>Forms</h2>
          <div className={styles.formDemo}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Full name <span className={styles.required}>*</span></label>
              <input className={styles.formInput} type="text" placeholder="John Smith" />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Work email <span className={styles.required}>*</span></label>
              <input className={`${styles.formInput} ${styles.formInputFocus}`} type="email" placeholder="john@company.com" />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Company</label>
              <input className={styles.formInput} type="text" placeholder="Acme Corp" />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Message (Error state)</label>
              <input className={`${styles.formInput} ${styles.formInputError}`} type="text" defaultValue="invalid input" />
              <span className={styles.formError}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="#FF5E69"/>
                  <path d="M6 3.5v3M6 8v.5" stroke="#FF5E69" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Please enter a valid message
              </span>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Disabled</label>
              <input className={styles.formInput} type="text" placeholder="Disabled field" disabled />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Company size</label>
              <select className={styles.formInput}>
                <option value="">Select size</option>
                <option>1–10</option><option>11–100</option><option>100+</option>
              </select>
            </div>
          </div>
        </section>

        {/* ===== TAB ===== */}
        <section id="tabs" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>Tab</h2>
          <p className={styles.sectionDesc}>Pill chip · 36px · border-radius 50px · Default: transparent border · Active: #000 border · Hover: var(--border)</p>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>States</div>
            <div className={styles.tabStates}>
              {[
                { label: 'Default', style: {} },
                { label: 'Hover', style: { borderColor: 'var(--border)' } },
                { label: 'Active', style: { borderColor: '#000000', fontWeight: 500 } },
                { label: 'Disabled', style: { opacity: 0.5, cursor: 'not-allowed' } },
              ].map(({ label, style }) => (
                <div key={label} className={styles.tabStateItem}>
                  <span className={styles.previewLabel}>{label}</span>
                  <button className={styles.tabItemDemo} style={style}>Tab</button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>인터랙션 — Category Filter</div>
            <Tab
              items={[
                { label: 'All', value: 'all' },
                { label: 'AI Agent', value: 'ai-agent' },
                { label: 'Insights', value: 'insights' },
                { label: 'Product', value: 'product' },
                { label: 'Engineering', value: 'engineering' },
                { label: 'Security', value: 'security' },
              ]}
              defaultValue="all"
            />
          </div>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>인터랙션 — Feature Selector</div>
            <Tab
              items={[
                { label: 'Agent Memory', value: 'memory' },
                { label: 'Omnipresence', value: 'omni' },
                { label: 'Trust OS', value: 'trust' },
                { label: 'Voice AI', value: 'voice' },
                { label: 'AI Copilot', value: 'copilot' },
              ]}
              defaultValue="memory"
            />
          </div>
        </section>

        {/* ===== PAGINATION ===== */}
        <section id="pagination" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>Pagination</h2>
          <p className={styles.sectionDesc}>32px 버튼 · border-radius 6px · 최대 5개 페이지 번호 노출</p>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>인터랙션 — 10 Pages</div>
            <Pagination totalPages={10} currentPage={pgMain} onPageChange={setPgMain} />
          </div>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>First Page</div>
            <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} />
          </div>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>Last Page</div>
            <Pagination totalPages={10} currentPage={10} onPageChange={() => {}} />
          </div>

          <div className={styles.previewFrame}>
            <div className={styles.previewLabel}>인터랙션 — 20 Pages</div>
            <Pagination totalPages={20} currentPage={pgState} onPageChange={setPgState} />
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className={styles.section}>
          <div className={styles.sectionEyebrow}>Components</div>
          <h2 className={styles.sectionTitle}>FAQ Accordion</h2>
          <div className={styles.faqDemo}>
            <div className={styles.faqItem}>
              <span className={styles.faqQ}>How does Agent Memory Platform work?</span>
              <div className={styles.faqIcon}>
                <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className={`${styles.faqItem} ${styles.faqItemOpen}`}>
              <span className={styles.faqQ}>What makes delight.ai different?</span>
              <div className={`${styles.faqIcon} ${styles.faqIconOpen}`}>
                <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                  <path d="M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.faqItem}>
              <span className={styles.faqQ}>Is delight.ai enterprise-ready?</span>
              <div className={styles.faqIcon}>
                <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GNB ===== */}
        <section id="gnb" className={styles.section}>
          <div className={styles.sectionEyebrow}>Patterns</div>
          <h2 className={styles.sectionTitle}>GNB (Navigation)</h2>
          <p className={styles.sectionDesc}>position: fixed · height: 72px · max-width 1616px · sticky 사용 금지</p>
          <div className={styles.patternInfo}>
            <div className={styles.patternRow}><span className={styles.patternKey}>Height</span><span>72px</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Position</span><span>fixed (sticky 사용 금지)</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Inner max-width</span><span>1616px</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Background</span><span>#FFFFFF · scroll 시 border-bottom: #e5e3df</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Spacer</span><span>.gnb-spacer {"{ height: 72px }"} — gnb-wrap 바로 다음 필수</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Menu items</span><span>Capabilities ▾ · Solutions ▾ · Resources ▾ · Customers</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Right</span><span>EN ▾ · Log in · Contact sales (139×42px)</span></div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <section id="footer" className={styles.section}>
          <div className={styles.sectionEyebrow}>Patterns</div>
          <h2 className={styles.sectionTitle}>Footer</h2>
          <p className={styles.sectionDesc}>PC: 5컬럼 그리드 · background: var(--bg-subtle) · 아코디언 사용 금지 (모바일 전용)</p>
          <div className={styles.patternInfo}>
            <div className={styles.patternRow}><span className={styles.patternKey}>PC Layout</span><span>grid-template-columns: 284px repeat(4, 1fr)</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Background</span><span>var(--bg-subtle) · #F7F5F0</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Brand tagline</span><span>Serrif SemiBold 28px</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Col header</span><span>HNT 12px Medium uppercase · letter-spacing 1px · color #A8A39B</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Link</span><span>HNT 16px Regular · color var(--text-muted)</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Bottom bar</span><span>G2 배지 + 소셜 아이콘 + 법적 고지 + © Sendbird</span></div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section id="cta" className={styles.section}>
          <div className={styles.sectionEyebrow}>Patterns</div>
          <h2 className={styles.sectionTitle}>CTA Banner</h2>
          <div className={styles.ctaPreview}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaHeadline}>Build an AI concierge<br/>your customers will love.</div>
              <button className={`${styles.btn} ${styles.btnLime} ${styles.btnLarge}`}>Contact sales</button>
            </div>
          </div>
          <div className={styles.patternInfo} style={{ marginTop: 24 }}>
            <div className={styles.patternRow}><span className={styles.patternKey}>Background</span><span>var(--cta-dark) · #18140F</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Padding</span><span>100px 0</span></div>
            <div className={styles.patternRow}><span className={styles.patternKey}>Button</span><span>Lime bg (#F2FF66) + dark text — CTA 섹션 전용</span></div>
          </div>
        </section>

      </main>
    </div>
  );
}
