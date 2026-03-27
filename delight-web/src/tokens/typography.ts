/**
 * Delight.ai Typography Tokens
 * Source: Figma — Font style hierarchy (node 7148:871, 7688:6046)
 * Covers: Service × Device × Language × Level
 */

export type FontWeight = 400 | 500 | 600 | 700;
export type FontFamily = 'Serrif' | 'Helvetica Now Text' | 'Gellix' | 'Pretendard';

export interface TypeStyle {
  fontFamily: FontFamily;
  fontSize: number;   // px
  fontWeight: FontWeight;
  lineHeight: string; // e.g. '108%'
  letterSpacing: string; // always '-0.02em'
}

// ─────────────────────────────────────────────
// PC · English (delight.ai Warm)
// ─────────────────────────────────────────────
export const pcEn = {
  h1: {
    fontFamily: 'Serrif' as FontFamily,
    fontSize: 72,
    fontWeight: 500 as FontWeight,
    lineHeight: '108%',
    letterSpacing: '-0.02em',
  },
  h2: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 38, fontWeight: 500 as FontWeight, lineHeight: '120%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 38, fontWeight: 500 as FontWeight, lineHeight: '120%', letterSpacing: '-0.02em' },
  ],
  h3: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 28, fontWeight: 500 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 28, fontWeight: 500 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
  ],
  h4: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 22, fontWeight: 500 as FontWeight, lineHeight: '144%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 22, fontWeight: 500 as FontWeight, lineHeight: '144%', letterSpacing: '-0.02em' },
  ],
  b1: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 20, fontWeight: 500 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 20, fontWeight: 400 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
  ],
  b2: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 18, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 18, fontWeight: 400 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  b3: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 500 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 400 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
  ],
  c1: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 14, fontWeight: 500 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 14, fontWeight: 400 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
  ],
  c2: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 13, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 13, fontWeight: 400 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  c3: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 12, fontWeight: 500 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 12, fontWeight: 400 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
  ],
} as const;

// ─────────────────────────────────────────────
// PC · Korean (delight.ai Warm)
// ─────────────────────────────────────────────
export const pcKo = {
  h1: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 66,
    fontWeight: 600 as FontWeight,
    lineHeight: '126%',
    letterSpacing: '-0.02em',
  },
  h2: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 34, fontWeight: 600 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 34, fontWeight: 500 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
  ],
  h3: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 26, fontWeight: 600 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 26, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  h4: {
    fontFamily: 'Helvetica Now Text' as FontFamily,
    fontSize: 22,
    fontWeight: 500 as FontWeight,
    lineHeight: '144%',
    letterSpacing: '-0.02em',
  },
  b1: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 20, fontWeight: 600 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 20, fontWeight: 400 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
  ],
  b2: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 18, fontWeight: 600 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 18, fontWeight: 400 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
  ],
  b3: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 16, fontWeight: 600 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 16, fontWeight: 400 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
  ],
  c1: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 14, fontWeight: 600 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 14, fontWeight: 400 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
  ],
  c2: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 13, fontWeight: 600 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 13, fontWeight: 400 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
  ],
  c3: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 12, fontWeight: 600 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 12, fontWeight: 400 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
  ],
} as const;

// ─────────────────────────────────────────────
// Mobile · English
// ─────────────────────────────────────────────
export const mobileEn = {
  h1: {
    fontFamily: 'Serrif' as FontFamily,
    fontSize: 40,
    fontWeight: 500 as FontWeight,
    lineHeight: '120%',
    letterSpacing: '-0.02em',
  },
  h2: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 32, fontWeight: 500 as FontWeight, lineHeight: '124%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 32, fontWeight: 500 as FontWeight, lineHeight: '124%', letterSpacing: '-0.02em' },
  ],
  h3: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 20, fontWeight: 500 as FontWeight, lineHeight: '128%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 20, fontWeight: 500 as FontWeight, lineHeight: '128%', letterSpacing: '-0.02em' },
  ],
  h4: [
    { fontFamily: 'Serrif' as FontFamily, fontSize: 18, fontWeight: 500 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 18, fontWeight: 500 as FontWeight, lineHeight: '132%', letterSpacing: '-0.02em' },
  ],
  b1: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 500 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 400 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
  ],
  b2: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 15, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 15, fontWeight: 400 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  b3: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 14, fontWeight: 500 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 14, fontWeight: 400 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
  ],
  c1: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 13, fontWeight: 500 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 13, fontWeight: 400 as FontWeight, lineHeight: '136%', letterSpacing: '-0.02em' },
  ],
  c2: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 12, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 12, fontWeight: 400 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  c3: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 11, fontWeight: 500 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 11, fontWeight: 400 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
  ],
} as const;

// ─────────────────────────────────────────────
// Mobile · Korean
// ─────────────────────────────────────────────
export const mobileKo = {
  h1: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 36,
    fontWeight: 600 as FontWeight,
    lineHeight: '132%',
    letterSpacing: '-0.02em',
  },
  h2: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 30, fontWeight: 600 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 30, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  h3: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 20, fontWeight: 600 as FontWeight, lineHeight: '144%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 20, fontWeight: 500 as FontWeight, lineHeight: '144%', letterSpacing: '-0.02em' },
  ],
  h4: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 18,
    fontWeight: 500 as FontWeight,
    lineHeight: '150%',
    letterSpacing: '-0.02em',
  },
  b1: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 16, fontWeight: 600 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 16, fontWeight: 400 as FontWeight, lineHeight: '152%', letterSpacing: '-0.02em' },
  ],
  b2: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 15, fontWeight: 600 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 15, fontWeight: 400 as FontWeight, lineHeight: '154%', letterSpacing: '-0.02em' },
  ],
  b3: [
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 14, fontWeight: 600 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
    { fontFamily: 'Pretendard' as FontFamily, fontSize: 14, fontWeight: 400 as FontWeight, lineHeight: '156%', letterSpacing: '-0.02em' },
  ],
} as const;

// ─────────────────────────────────────────────
// Sendbird · PC · English (for Sendbird-branded pages)
// ─────────────────────────────────────────────
export const sendbirdPcEn = {
  h1: {
    fontFamily: 'Gellix' as FontFamily,
    fontSize: 72,
    fontWeight: 600 as FontWeight,
    lineHeight: '100%',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'Gellix' as FontFamily,
    fontSize: 48,
    fontWeight: 600 as FontWeight,
    lineHeight: '106%',
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: 'Helvetica Now Text' as FontFamily,
    fontSize: 32,
    fontWeight: 500 as FontWeight,
    lineHeight: '112%',
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: 'Helvetica Now Text' as FontFamily,
    fontSize: 24,
    fontWeight: 500 as FontWeight,
    lineHeight: '118%',
    letterSpacing: '-0.02em',
  },
  b1: {
    fontFamily: 'Helvetica Now Text' as FontFamily,
    fontSize: 22,
    fontWeight: 500 as FontWeight,
    lineHeight: '136%',
    letterSpacing: '-0.02em',
  },
  b2: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 18, fontWeight: 500 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 18, fontWeight: 400 as FontWeight, lineHeight: '138%', letterSpacing: '-0.02em' },
  ],
  b3: [
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 500 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
    { fontFamily: 'Helvetica Now Text' as FontFamily, fontSize: 16, fontWeight: 400 as FontWeight, lineHeight: '140%', letterSpacing: '-0.02em' },
  ],
} as const;

// ─────────────────────────────────────────────
// Sendbird · PC · Korean
// ─────────────────────────────────────────────
export const sendbirdPcKo = {
  h1: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 66,
    fontWeight: 600 as FontWeight,
    lineHeight: '126%',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 44,
    fontWeight: 600 as FontWeight,
    lineHeight: '132%',
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 30,
    fontWeight: 600 as FontWeight,
    lineHeight: '138%',
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: 'Pretendard' as FontFamily,
    fontSize: 22,
    fontWeight: 600 as FontWeight,
    lineHeight: '144%',
    letterSpacing: '-0.02em',
  },
} as const;

// ─────────────────────────────────────────────
// Named exports by context (convenience)
// ─────────────────────────────────────────────
export const typography = {
  delight: {
    pc: { en: pcEn, ko: pcKo },
    mobile: { en: mobileEn, ko: mobileKo },
  },
  sendbird: {
    pc: { en: sendbirdPcEn, ko: sendbirdPcKo },
  },
} as const;

export default typography;
