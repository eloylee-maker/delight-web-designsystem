# delight.ai Web Design System (DWDS)

Next.js 사이트로 구축된 delight.ai의 통합 웹 디자인 시스템.
토큰, 컴포넌트, 패턴, 가이드라인을 한 곳에서 관리.

## 라이브 사이트
Vercel 자동 배포 — main 푸시 시 즉시 반영.

## 로컬 개발
```bash
cd site
npm install
npm run dev
# → http://localhost:3000
```

## 레포 구조
```
site/                  ← Next.js 14 App Router (Vercel이 빌드함)
├── app/               ← 라우팅 (home, [section], [section]/[page])
├── components/        ← Sidebar, Topbar, PageContent, PreviewFrame 등
├── lib/ia.ts          ← 정보 구조 (5섹션, 모든 페이지)
├── public/
│   ├── fonts/         ← Serrif, Helvetica Now Text, Gellix (OTF)
│   ├── assets/        ← 로고, 키 비주얼
│   └── preview/       ← 컴포넌트 라이브 프리뷰 HTML
├── styles/globals.css ← 디자인 토큰 + 글로벌 스타일
└── package.json
CLAUDE.md              ← 전체 디자인 시스템 명세
vercel.json            ← Vercel 빌드 설정
```

## IA
| 섹션 | 슬러그 | 페이지 |
|---|---|---|
| Get started | get-started | Overview, Principles, Changelog, Contributing |
| Foundations | foundations | Color, Typography, Spacing, Layout, Iconography, Brand marks, Key visual, Voice & tone, Photography |
| Design system | design-system | Tokens, Components, Patterns, Guidelines, Processes |
| Components | components | GNB, Footer, Buttons, Tabs, Form, Pagination, Popup |
| Resources | resources | Downloads, Figma, GitHub |

## 디자인 원칙
- **배경**: 항상 순수 화이트 (#FFFFFF). tint 금지.
- **타입**: Serrif (display), Helvetica Now Text (body), Pretendard (KR).
- **컬러**: Warm-gray + Black CTA + 단일 Lime 강조 (#F2FF66).
- **CTA**: 페이지당 Primary 1개. `Secondary → Primary` 순서.
- **GNB**: position: fixed (sticky 금지). 72px 높이, 스크롤 시 1px 헤어라인.

전체 규칙은 [CLAUDE.md](./CLAUDE.md) 참조.

---
© 2026 Sendbird, Inc.
