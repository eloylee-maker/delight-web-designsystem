import styles from './page.module.css';
import { pcEn, pcKo, mobileEn } from '@/tokens/typography';

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>delight.ai Design System</h1>
        <p className={styles.pageDesc}>컴포넌트 & 디자인 토큰 레퍼런스</p>

        {/* ---- Colors ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color System</h2>

          {/* Accent */}
          <h3 className={styles.groupTitle}>Accent Color</h3>
          <div className={styles.colorGrid}>
            {[
              { hex: '#7B39FE', label: 'Sendbird Purple(W)', token: '--purple' },
              { hex: '#8147F4', label: 'Sendbird Purple(D)', token: '--purple-d' },
              { hex: '#D1F778', label: 'Sendbird Lime', token: '--sendbird-lime' },
              { hex: '#F2FF66', label: 'Delight Lime', token: '--lime' },
            ].map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex }} />
                <div className={styles.colorInfo}>
                  <span className={styles.colorLabel}>{c.label}</span>
                  <span className={styles.colorHex}>{c.hex}</span>
                  <span className={styles.colorToken}>{c.token}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delight Warm */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>Primary — Delight Warm</h3>
          <div className={styles.colorGrid}>
            {[
              { hex: '#F7F5F0', label: 'WGray100 · bg1', token: '--w-gray-100' },
              { hex: '#E5E3DF', label: 'WGray150 · bg2, line1', token: '--w-gray-150' },
              { hex: '#D9D6D2', label: 'WGray200 · bg3, line2', token: '--w-gray-200' },
              { hex: '#C4C0B9', label: 'WGray250 · disabled', token: '--w-gray-250' },
              { hex: '#A8A39B', label: 'WGray300 · C2', token: '--w-gray-300' },
              { hex: '#8C867E', label: 'WGray350 · C1', token: '--w-gray-350' },
              { hex: '#736E68', label: 'WGray400 · B2', token: '--w-gray-400' },
              { hex: '#66625E', label: 'WGray500 · B1', token: '--w-gray-500' },
              { hex: '#54504B', label: 'WGray600 · H4', token: '--w-gray-600' },
              { hex: '#47413B', label: 'WGray700 · H3', token: '--w-gray-700' },
              { hex: '#3B3530', label: 'WGray800 · H2', token: '--w-gray-800' },
              { hex: '#292016', label: 'WGray900 · H1', token: '--w-gray-900' },
            ].map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex, border: c.hex === '#F7F5F0' ? '1px solid #E5E3DF' : undefined }} />
                <div className={styles.colorInfo}>
                  <span className={styles.colorLabel}>{c.label}</span>
                  <span className={styles.colorHex}>{c.hex}</span>
                  <span className={styles.colorToken}>{c.token}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sendbird Cool */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>Primary — Sendbird Cool</h3>
          <div className={styles.colorGrid}>
            {[
              { hex: '#F2F3F7', label: 'Gray100 · bg1', token: '--c-gray-100' },
              { hex: '#E3E5EF', label: 'Gray150 · bg2, line1', token: '--c-gray-150' },
              { hex: '#D3D6E3', label: 'Gray200 · bg3, line2', token: '--c-gray-200' },
              { hex: '#B1B4C7', label: 'Gray250 · disabled', token: '--c-gray-250' },
              { hex: '#9194A8', label: 'Gray300 · C2', token: '--c-gray-300' },
              { hex: '#7A7E91', label: 'Gray350 · C1', token: '--c-gray-350' },
              { hex: '#6B6E7D', label: 'Gray400 · B2', token: '--c-gray-400' },
              { hex: '#555869', label: 'Gray500 · B1', token: '--c-gray-500' },
              { hex: '#3C3F4D', label: 'Gray600 · H4', token: '--c-gray-600' },
              { hex: '#2E303D', label: 'Gray700 · H3', token: '--c-gray-700' },
              { hex: '#1F212B', label: 'Gray800 · H2', token: '--c-gray-800' },
              { hex: '#0E1017', label: 'Gray900 · H1', token: '--c-gray-900' },
            ].map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex, border: c.hex === '#F2F3F7' ? '1px solid #E3E5EF' : undefined }} />
                <div className={styles.colorInfo}>
                  <span className={styles.colorLabel}>{c.label}</span>
                  <span className={styles.colorHex}>{c.hex}</span>
                  <span className={styles.colorToken}>{c.token}</span>
                </div>
              </div>
            ))}
          </div>

          {/* White / Black */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>White / Black</h3>
          <div className={styles.colorGrid}>
            {[
              { hex: '#FFFFFF', label: 'White' },
              { hex: '#000000', label: 'Black' },
            ].map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #E5E3DF' : undefined }} />
                <div className={styles.colorInfo}>
                  <span className={styles.colorLabel}>{c.label}</span>
                  <span className={styles.colorHex}>{c.hex}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>Secondary Color</h3>
          <div className={styles.colorGrid}>
            {[
              { hex: '#FFE3E5', label: 'Red100', token: '--red-100' },
              { hex: '#FF5E69', label: 'Red500', token: '--red-500' },
              { hex: '#D8F0FF', label: 'Blue100', token: '--blue-100' },
              { hex: '#91D2FB', label: 'Blue300', token: '--blue-300' },
              { hex: '#27A6F7', label: 'Blue500', token: '--blue-500' },
              { hex: '#D0F3E6', label: 'Green100', token: '--green-100' },
              { hex: '#25BD85', label: 'Green500', token: '--green-500' },
            ].map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex }} />
                <div className={styles.colorInfo}>
                  <span className={styles.colorLabel}>{c.label}</span>
                  <span className={styles.colorHex}>{c.hex}</span>
                  <span className={styles.colorToken}>{c.token}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Typography ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typography</h2>

          {/* PC EN */}
          <h3 className={styles.groupTitle}>PC · English (delight.ai Warm)</h3>
          <div className={styles.typeStack}>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H1 · Serrif {pcEn.h1.fontSize}px/{pcEn.h1.lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `${pcEn.h1.fontFamily}, sans-serif`, fontWeight: pcEn.h1.fontWeight, fontSize: pcEn.h1.fontSize, lineHeight: pcEn.h1.lineHeight, letterSpacing: pcEn.h1.letterSpacing }}>
                The future of AI
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H2 · Serrif {pcEn.h2[0].fontSize}px/{pcEn.h2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `${pcEn.h2[0].fontFamily}, sans-serif`, fontWeight: pcEn.h2[0].fontWeight, fontSize: pcEn.h2[0].fontSize, lineHeight: pcEn.h2[0].lineHeight, letterSpacing: pcEn.h2[0].letterSpacing }}>
                Enterprise AI Platform
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H3 · Serrif {pcEn.h3[0].fontSize}px/{pcEn.h3[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `${pcEn.h3[0].fontFamily}, sans-serif`, fontWeight: pcEn.h3[0].fontWeight, fontSize: pcEn.h3[0].fontSize, lineHeight: pcEn.h3[0].lineHeight, letterSpacing: pcEn.h3[0].letterSpacing }}>
                Intelligent customer experience
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H4 · HNT {pcEn.h4[1].fontSize}px/{pcEn.h4[1].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.h4[1].fontFamily}', sans-serif`, fontWeight: pcEn.h4[1].fontWeight, fontSize: pcEn.h4[1].fontSize, lineHeight: pcEn.h4[1].lineHeight, letterSpacing: pcEn.h4[1].letterSpacing }}>
                Build trust at every touchpoint
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>B1 · HNT {pcEn.b1[0].fontSize}px/{pcEn.b1[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.b1[0].fontFamily}', sans-serif`, fontWeight: pcEn.b1[1].fontWeight, fontSize: pcEn.b1[0].fontSize, lineHeight: pcEn.b1[0].lineHeight, letterSpacing: pcEn.b1[0].letterSpacing, color: 'var(--text-muted)' }}>
                Delight AI helps enterprises deliver personalized AI concierge experiences.
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>B2 · HNT {pcEn.b2[0].fontSize}px/{pcEn.b2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.b2[0].fontFamily}', sans-serif`, fontWeight: pcEn.b2[1].fontWeight, fontSize: pcEn.b2[0].fontSize, lineHeight: pcEn.b2[0].lineHeight, letterSpacing: pcEn.b2[0].letterSpacing, color: 'var(--text-muted)' }}>
                Build, deploy and scale AI agents with memory and context.
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>B3 · HNT {pcEn.b3[0].fontSize}px/{pcEn.b3[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.b3[0].fontFamily}', sans-serif`, fontWeight: pcEn.b3[1].fontWeight, fontSize: pcEn.b3[0].fontSize, lineHeight: pcEn.b3[0].lineHeight, letterSpacing: pcEn.b3[0].letterSpacing, color: 'var(--text-muted)' }}>
                See how top enterprises use AI agents to reduce support costs.
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>C1 · HNT {pcEn.c1[0].fontSize}px/{pcEn.c1[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.c1[0].fontFamily}', sans-serif`, fontWeight: pcEn.c1[1].fontWeight, fontSize: pcEn.c1[0].fontSize, lineHeight: pcEn.c1[0].lineHeight, letterSpacing: pcEn.c1[0].letterSpacing, color: 'var(--text-dim)' }}>
                Label · Caption · Meta text
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>C2 · HNT {pcEn.c2[0].fontSize}px/{pcEn.c2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${pcEn.c2[0].fontFamily}', sans-serif`, fontWeight: pcEn.c2[1].fontWeight, fontSize: pcEn.c2[0].fontSize, lineHeight: pcEn.c2[0].lineHeight, letterSpacing: pcEn.c2[0].letterSpacing, color: 'var(--text-dim)' }}>
                © 2025 Sendbird, Inc. All rights reserved.
              </span>
            </div>
          </div>

          {/* PC KO */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>PC · Korean (delight.ai Warm)</h3>
          <div className={styles.typeStack}>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H1 · Pretendard {pcKo.h1.fontSize}px/{pcKo.h1.lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.h1.fontWeight, fontSize: pcKo.h1.fontSize, lineHeight: pcKo.h1.lineHeight, letterSpacing: pcKo.h1.letterSpacing }}>
                AI 컨시어지의 미래
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H2 · Pretendard {pcKo.h2[0].fontSize}px/{pcKo.h2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.h2[0].fontWeight, fontSize: pcKo.h2[0].fontSize, lineHeight: pcKo.h2[0].lineHeight, letterSpacing: pcKo.h2[0].letterSpacing }}>
                엔터프라이즈 AI 플랫폼
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H3 · Pretendard {pcKo.h3[0].fontSize}px/{pcKo.h3[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.h3[0].fontWeight, fontSize: pcKo.h3[0].fontSize, lineHeight: pcKo.h3[0].lineHeight, letterSpacing: pcKo.h3[0].letterSpacing }}>
                지능형 고객 경험을 구축하세요
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>B2 · Pretendard {pcKo.b2[0].fontSize}px/{pcKo.b2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: pcKo.b2[1].fontWeight, fontSize: pcKo.b2[0].fontSize, lineHeight: pcKo.b2[0].lineHeight, letterSpacing: pcKo.b2[0].letterSpacing, color: 'var(--text-muted)' }}>
                AI 에이전트로 고객 지원 비용을 절감하세요.
              </span>
            </div>
          </div>

          {/* Mobile EN */}
          <h3 className={styles.groupTitle} style={{ marginTop: 40 }}>Mobile · English</h3>
          <div className={styles.typeStack}>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H1 · Serrif {mobileEn.h1.fontSize}px/{mobileEn.h1.lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `${mobileEn.h1.fontFamily}, sans-serif`, fontWeight: mobileEn.h1.fontWeight, fontSize: mobileEn.h1.fontSize, lineHeight: mobileEn.h1.lineHeight, letterSpacing: mobileEn.h1.letterSpacing }}>
                The future of AI
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>H2 · Serrif {mobileEn.h2[0].fontSize}px/{mobileEn.h2[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `${mobileEn.h2[0].fontFamily}, sans-serif`, fontWeight: mobileEn.h2[0].fontWeight, fontSize: mobileEn.h2[0].fontSize, lineHeight: mobileEn.h2[0].lineHeight, letterSpacing: mobileEn.h2[0].letterSpacing }}>
                Enterprise AI Platform
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>B1 · HNT {mobileEn.b1[0].fontSize}px/{mobileEn.b1[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${mobileEn.b1[0].fontFamily}', sans-serif`, fontWeight: mobileEn.b1[1].fontWeight, fontSize: mobileEn.b1[0].fontSize, lineHeight: mobileEn.b1[0].lineHeight, letterSpacing: mobileEn.b1[0].letterSpacing, color: 'var(--text-muted)' }}>
                Personalized AI concierge for every customer.
              </span>
            </div>
            <div className={styles.typeRow}>
              <span className={styles.typeTag}>C1 · HNT {mobileEn.c1[0].fontSize}px/{mobileEn.c1[0].lineHeight}</span>
              <span className={styles.typePreview} style={{ fontFamily: `'${mobileEn.c1[0].fontFamily}', sans-serif`, fontWeight: mobileEn.c1[1].fontWeight, fontSize: mobileEn.c1[0].fontSize, lineHeight: mobileEn.c1[0].lineHeight, letterSpacing: mobileEn.c1[0].letterSpacing, color: 'var(--text-dim)' }}>
                Label · Caption · Meta text
              </span>
            </div>
          </div>
        </section>

        {/* ---- Buttons ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonGroups}>
            <div className={styles.buttonGroup}>
              <span className={styles.groupTitle}>Primary</span>
              <div className={styles.buttonRow}>
                <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>Large Button</button>
                <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMedium}`}>Medium Button</button>
                <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}>Small</button>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <span className={styles.groupTitle}>Secondary</span>
              <div className={styles.buttonRow}>
                <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>Large Button</button>
                <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMedium}`}>Medium Button</button>
                <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}>Small</button>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <span className={styles.groupTitle}>Tertiary</span>
              <div className={styles.buttonRow}>
                <button className={`${styles.btn} ${styles.btnTertiary} ${styles.btnTertiaryLg}`}>Learn more →</button>
                <button className={`${styles.btn} ${styles.btnTertiary} ${styles.btnTertiarySm}`}>See all →</button>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <span className={styles.groupTitle}>Disabled</span>
              <div className={styles.buttonRow}>
                <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMedium}`} disabled>Disabled</button>
                <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMedium}`} disabled>Disabled</button>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Form ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Form Components</h2>
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
              <label className={styles.formLabel}>Message</label>
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
              <label className={styles.formLabel}>Company size</label>
              <select className={styles.formInput}>
                <option value="">Select size</option>
                <option>1–10</option>
                <option>11–100</option>
                <option>100+</option>
              </select>
            </div>
          </div>
        </section>

        {/* ---- Effects ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Effects & Shadows</h2>
          <div className={styles.effectGrid}>
            <div className={styles.effectCard} style={{ boxShadow: '4px 14px 24px 3px rgba(33,33,33,0.10)' }}>
              <span className={styles.effectLabel}>Drop Shadow 01</span>
              <span className={styles.effectCode}>4px 14px 24px 3px rgba(33,33,33,0.10)</span>
            </div>
            <div className={styles.effectCard} style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.13)' }}>
              <span className={styles.effectLabel}>Dropdown Shadow</span>
              <span className={styles.effectCode}>0 8px 40px rgba(0,0,0,0.13)</span>
            </div>
            <div className={styles.effectCardBlur} style={{ backdropFilter: 'blur(20px)', boxShadow: '4px 14px 24px 3px rgba(33,33,33,0.10)', background: 'rgba(255,255,255,0.7)' }}>
              <span className={styles.effectLabel}>Background Blur</span>
              <span className={styles.effectCode}>backdrop-filter: blur(20px)</span>
            </div>
          </div>
        </section>

        {/* ---- FAQ Icon ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ Accordion Icon</h2>
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
          </div>
        </section>

        {/* ---- Grid ---- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Grid System</h2>
          <div className={styles.gridInfo}>
            <div className={styles.gridCard}>
              <span className={styles.gridLabel}>Desktop</span>
              <div className={styles.gridDetail}><b>1920px</b> canvas · <b>16 cols</b> · <b>16px</b> gutter · <b>184px</b> offset</div>
            </div>
            <div className={styles.gridCard}>
              <span className={styles.gridLabel}>Content Max Width</span>
              <div className={styles.gridDetail}><b>1552px</b></div>
            </div>
            <div className={styles.gridCard}>
              <span className={styles.gridLabel}>Mobile</span>
              <div className={styles.gridDetail}><b>375px</b> canvas · <b>4 cols</b> · <b>16px</b> gutter · <b>16px</b> offset</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
