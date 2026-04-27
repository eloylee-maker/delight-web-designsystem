/**
 * SVG illustration shorthand used inside card thumbnails.
 * Tiny, geometric, on-brand — no AI art. Each is keyed by ia.ts thumbGraphic.
 */
import * as React from 'react';

const wrap = (children: React.ReactNode, fill = 'transparent') => (
  <svg viewBox="0 0 320 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ background: fill }}>
    {children}
  </svg>
);

const TEXT = '#292016';
const DIM = '#A8A39B';
const LIME = '#F2FF66';

export function CardGraphic({ kind, tone }: { kind?: string; tone?: 'lime' | 'subtle' | 'dark' | 'white' }) {
  const bg =
    tone === 'lime'   ? '#F2FF66' :
    tone === 'dark'   ? '#18140F' :
    tone === 'white'  ? '#FFFFFF' :
                        '#F7F5F0';
  const stroke = tone === 'dark' ? '#FFFFFF' : TEXT;
  const muted  = tone === 'dark' ? '#736E68' : DIM;

  switch (kind) {
    case 'overview':
      return wrap(
        <>
          <rect x="40" y="44" width="240" height="14" rx="4" fill={stroke} opacity="0.92" />
          <rect x="40" y="68" width="180" height="10" rx="3" fill={muted} />
          <rect x="40" y="86" width="200" height="10" rx="3" fill={muted} />
          <rect x="40" y="120" width="60" height="40" rx="6" fill={stroke} />
          <rect x="108" y="120" width="60" height="40" rx="6" fill="none" stroke={stroke} strokeWidth="1.4" />
        </>, bg);
    case 'changelog':
      return wrap(
        <>
          <circle cx="80" cy="100" r="6" fill={TEXT} />
          <line x1="80" y1="106" x2="80" y2="160" stroke={TEXT} strokeWidth="1.4" />
          <circle cx="80" cy="60" r="4" fill={TEXT} opacity="0.4" />
          <line x1="80" y1="40" x2="80" y2="56" stroke={TEXT} strokeWidth="1.4" opacity="0.4" />
          <rect x="100" y="84" width="160" height="32" rx="6" fill="#FFFFFF" stroke={TEXT} strokeWidth="1.2" />
          <rect x="110" y="92" width="80" height="6" rx="2" fill={TEXT} />
          <rect x="110" y="102" width="120" height="5" rx="2" fill={DIM} />
        </>, bg);
    case 'color':
      return wrap(
        <>
          <rect x="32" y="48" width="64" height="104" rx="10" fill="#292016" />
          <rect x="104" y="48" width="64" height="104" rx="10" fill="#F7F5F0" stroke="#E5E3DF" />
          <rect x="176" y="48" width="64" height="104" rx="10" fill="#F2FF66" />
          <rect x="248" y="48" width="40" height="104" rx="10" fill="#FFFFFF" stroke="#E5E3DF" />
        </>, bg);
    case 'type':
      return wrap(
        <>
          <text x="40" y="120" fontFamily="Serrif, serif" fontSize="80" fontWeight="500" fill={TEXT} letterSpacing="-2">Aa</text>
          <text x="170" y="120" fontFamily="Helvetica Now Text, sans-serif" fontSize="80" fontWeight="500" fill={DIM} letterSpacing="-2">Aa</text>
        </>, bg);
    case 'spacing':
      return wrap(
        <>
          {[0,1,2,3,4,5,6].map((i) => (
            <rect key={i} x={40 + i*36} y={100 - (i*8)} width="20" height={(i*8) + 16} rx="3" fill={TEXT} opacity={0.18 + i*0.1} />
          ))}
        </>, bg);
    case 'grid':
      return wrap(
        <>
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x={20 + (i % 8) * 36} y={28 + Math.floor(i / 8) * 84} width="28" height="76" rx="3" fill={TEXT} opacity="0.06" />
          ))}
          <rect x="20" y="28" width="280" height="160" rx="3" fill="none" stroke={TEXT} strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
        </>, bg);
    case 'logo':
      return wrap(
        <>
          <rect x="80" y="60" width="160" height="80" rx="12" fill="#FFFFFF" />
          <text x="160" y="113" textAnchor="middle" fontFamily="Serrif, serif" fontSize="38" fontWeight="500" fill={TEXT} letterSpacing="-1">delight</text>
        </>, bg);
    case 'kv':
      return wrap(
        <>
          <circle cx="160" cy="100" r="62" fill={TEXT} />
          <circle cx="200" cy="80" r="22" fill={LIME} />
        </>, bg);
    case 'components':
      return wrap(
        <>
          <rect x="40" y="48" width="240" height="34" rx="6" fill="#FFFFFF" stroke={TEXT} />
          <rect x="40" y="92" width="100" height="34" rx="999" fill={TEXT} />
          <rect x="148" y="92" width="100" height="34" rx="999" fill="#FFFFFF" stroke={TEXT} />
          <rect x="40" y="136" width="240" height="34" rx="6" fill="#FFFFFF" stroke={TEXT} />
        </>, bg);
    case 'patterns':
      return wrap(
        <>
          <rect x="32" y="32" width="256" height="56" rx="6" fill="#FFFFFF" stroke={TEXT} />
          <rect x="32" y="96" width="124" height="72" rx="6" fill="#FFFFFF" stroke={TEXT} />
          <rect x="164" y="96" width="124" height="72" rx="6" fill={TEXT} />
          <rect x="184" y="124" width="84" height="6" rx="2" fill={LIME} />
        </>, bg);
    case 'rules':
      return wrap(
        <>
          <circle cx="110" cy="100" r="50" fill="none" stroke={TEXT} strokeWidth="2" />
          <path d="M88 100 L104 116 L132 86" fill="none" stroke={TEXT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="220" cy="100" r="50" fill="none" stroke={TEXT} strokeWidth="2" />
          <path d="M203 83 L237 117 M237 83 L203 117" stroke={TEXT} strokeWidth="2.5" strokeLinecap="round" />
        </>, bg);
    case 'gnb':
      return wrap(
        <>
          <rect x="0" y="40" width="320" height="36" fill="#FFFFFF" stroke={TEXT} />
          <rect x="20" y="52" width="60" height="12" rx="2" fill={TEXT} />
          <rect x="160" y="54" width="40" height="8" rx="2" fill={DIM} />
          <rect x="208" y="54" width="40" height="8" rx="2" fill={DIM} />
          <rect x="256" y="54" width="40" height="8" rx="2" fill={DIM} />
        </>, bg);
    case 'footer':
      return wrap(
        <>
          <rect x="32" y="48" width="84" height="6" rx="2" fill={TEXT} />
          <rect x="32" y="64" width="64" height="4" rx="2" fill={DIM} />
          {[0,1,2,3].map(i => (
            <g key={i} transform={`translate(${136 + i*42}, 48)`}>
              <rect x="0" y="0" width="32" height="4" rx="2" fill={TEXT} />
              <rect x="0" y="12" width="28" height="3" rx="1" fill={DIM} />
              <rect x="0" y="22" width="24" height="3" rx="1" fill={DIM} />
              <rect x="0" y="32" width="28" height="3" rx="1" fill={DIM} />
            </g>
          ))}
          <line x1="32" y1="148" x2="288" y2="148" stroke={DIM} strokeWidth="1" />
        </>, bg);
    case 'popup':
      return wrap(
        <>
          <rect x="60" y="40" width="200" height="120" rx="12" fill="#FFFFFF" stroke={TEXT} />
          <rect x="80" y="62" width="100" height="8" rx="2" fill={TEXT} />
          <rect x="80" y="82" width="160" height="5" rx="2" fill={DIM} />
          <rect x="80" y="94" width="140" height="5" rx="2" fill={DIM} />
          <rect x="80" y="120" width="76" height="24" rx="999" fill={TEXT} />
        </>, bg);
    case 'download':
      return wrap(
        <>
          <rect x="100" y="50" width="120" height="100" rx="10" fill="#FFFFFF" stroke={TEXT} />
          <path d="M160 80 L160 120 M144 104 L160 120 L176 104" stroke={TEXT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="124" y="130" width="72" height="6" rx="3" fill={TEXT} />
        </>, bg);
    case 'github':
      return wrap(
        <>
          <circle cx="160" cy="100" r="48" fill="#FFFFFF" />
          <path d="M160 64 a36 36 0 0 0 -11.4 70.2 c1.8 0.3 2.5 -0.8 2.5 -1.8 v-6.4 c-10 2.2 -12.1 -4.8 -12.1 -4.8 c-1.6 -4.2 -4 -5.3 -4 -5.3 c-3.3 -2.2 0.3 -2.2 0.3 -2.2 c3.6 0.3 5.5 3.7 5.5 3.7 c3.2 5.5 8.4 3.9 10.5 3 c0.3 -2.4 1.3 -3.9 2.3 -4.8 c-8 -0.9 -16.4 -4 -16.4 -17.8 c0 -3.9 1.4 -7.1 3.7 -9.6 c-0.4 -0.9 -1.6 -4.6 0.4 -9.6 c0 0 3 -1 9.9 3.6 a34 34 0 0 1 18 0 c6.9 -4.6 9.9 -3.6 9.9 -3.6 c2 5 0.7 8.7 0.4 9.6 c2.3 2.5 3.7 5.7 3.7 9.6 c0 13.8 -8.4 16.9 -16.4 17.7 c1.3 1.1 2.5 3.4 2.5 6.7 v9.9 c0 1 0.7 2.1 2.5 1.7 a36 36 0 0 0 -11.5 -70.1z" fill={TEXT} />
        </>, bg);
    default:
      return wrap(
        <>
          <rect x="40" y="60" width="240" height="80" rx="8" fill="#FFFFFF" stroke={TEXT} opacity="0.5" />
        </>, bg);
  }
}
