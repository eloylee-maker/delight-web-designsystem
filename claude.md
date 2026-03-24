# 프로젝트 디자인 시스템

이 프로젝트는 **delight.ai** 웹사이트 제작 프로젝트입니다.
모든 코드는 아래 디자인 시스템을 기반으로 작성해야 합니다.

---

## 폰트 파일 경로
`/Users/eloy.lee/클로드코드/fonts/`

| 파일명 | 폰트 패밀리 | 굵기 |
|---|---|---|
| Serrif-Regular.otf | Serrif | Regular |
| Serrif-Medium.otf | Serrif | Medium |
| Serrif-SemiBold.otf | Serrif | SemiBold |
| HelveticaNowText.otf | Helvetica Now Text | Regular |
| HelveticaNowTextMedium.otf | Helvetica Now Text | Medium |
| HelveticaNowTextBold.otf | Helvetica Now Text | Bold |
| Gellix-Regular.otf | Gellix | Regular |
| Gellix-Medium.otf | Gellix | Medium |
| Gellix-SemiBold.otf | Gellix | SemiBold |
| Gellix-Bold.otf | Gellix | Bold |

CSS @font-face 예시:
```css
@font-face { font-family: 'Serrif'; src: url('../fonts/Serrif-Regular.otf'); font-weight: 400; }
@font-face { font-family: 'Serrif'; src: url('../fonts/Serrif-Medium.otf'); font-weight: 500; }
@font-face { font-family: 'Serrif'; src: url('../fonts/Serrif-SemiBold.otf'); font-weight: 600; }
@font-face { font-family: 'Helvetica Now Text'; src: url('../fonts/HelveticaNowText.otf'); font-weight: 400; }
@font-face { font-family: 'Helvetica Now Text'; src: url('../fonts/HelveticaNowTextMedium.otf'); font-weight: 500; }
@font-face { font-family: 'Helvetica Now Text'; src: url('../fonts/HelveticaNowTextBold.otf'); font-weight: 700; }
@font-face { font-family: 'Gellix'; src: url('../fonts/Gellix-Regular.otf'); font-weight: 400; }
@font-face { font-family: 'Gellix'; src: url('../fonts/Gellix-Medium.otf'); font-weight: 500; }
@font-face { font-family: 'Gellix'; src: url('../fonts/Gellix-SemiBold.otf'); font-weight: 600; }
@font-face { font-family: 'Gellix'; src: url('../fonts/Gellix-Bold.otf'); font-weight: 700; }
```

---

## 컬러 시스템

### Primary Color (Sendbird cool 테마 기준)
```
Black:   #000000
White:   #FFFFFF
Gray900 (H1 텍스트):         #0E1017
Gray800 (H2 텍스트):         #1F212B
Gray700 (H3 텍스트):         #2E303D
Gray600 (H4 텍스트):         #3C3F4D
Gray500 (B1, 아이콘):        #555869
Gray400 (B2 텍스트):         #6B6E7D
Gray350 (C1 텍스트):         #7A7E91
Gray300 (C2 텍스트):         #9194A8
Gray250 (disabled):          #B1B4C7
Gray200 (bg3, line2):        #D3D6E3
Gray150 (bg2, line1):        #E3E5EF
Gray100 (bg1 배경):          #F2F3F7
```

### Accent Color
```
Delight Lime:    #F2FF66   (주 강조색)
Sendbird Purple: #7B39FE
Sendbird Lime:   #D1F778
```

### Secondary Color
```
Red500:   #FF5E69  |  Red100:   #FFE3E5
Blue500:  #27A6F7  |  Blue300:  #91D2FB  |  Blue100: #D8F0FF
Green500: #25BD85  |  Green100: #D0F3E6
```

---

## 타이포그래피

> 모든 타이포그래피 공통: `letter-spacing: -0.02em` (=-2%)

### PC — 영문(EN)

| 레벨 | 폰트 | 굵기 | 크기 | Line Height |
|---|---|---|---|---|
| H1 | Serrif | Medium | 72px | 108% |
| H2 | Serrif | Medium / Regular | 38px | 120% |
| H2 | Helvetica Now Text | Medium | 38px | 120% |
| H3 | Serrif | Medium / Regular | 28px | 132% |
| H3 | Helvetica Now Text | Medium | 28px | 132% |
| H4 | Serrif | Medium / Regular | 22px | 144% |
| H4 | Helvetica Now Text | Medium | 22px | 144% |
| B1 | Helvetica Now Text | Medium / Regular | 20px | 136% |
| B2 | Helvetica Now Text | Medium / Regular | 18px | 138% |
| B3 | Helvetica Now Text | Medium / Regular | 16px | 140% |
| C1 | Helvetica Now Text | Medium / Regular | 14px | 136% |
| C2 | Helvetica Now Text | Medium / Regular | 13px | 138% |
| C3 | Helvetica Now Text | Medium / Regular | 12px | 140% |

### PC — 한국어(KO)

| 레벨 | 폰트 | 굵기 | 크기 | Line Height |
|---|---|---|---|---|
| H1 | Pretendard | SemiBold | 66px | 126% |
| H2 | Pretendard | SemiBold / Medium | 34px | 132% |
| H3 | Pretendard | SemiBold / Medium | 26px | 138% |
| H4 | Helvetica Now Text | Medium | 22px | 144% |
| B1 | Pretendard | SemiBold / Regular | 20px | 152% |
| B2 | Pretendard | SemiBold / Regular | 18px | 154% |
| B3 | Pretendard | SemiBold / Regular | 16px | 156% |
| C1 | Pretendard | SemiBold / Regular | 14px | 152% |
| C2 | Pretendard | SemiBold / Regular | 13px | 154% |
| C3 | Pretendard | SemiBold / Regular | 12px | 156% |

### Mobile — 영문(EN)

| 레벨 | 폰트 | 굵기 | 크기 | Line Height |
|---|---|---|---|---|
| H1 | Serrif | Medium | 40px | 120% |
| H2 | Serrif | Medium / Regular | 32px | 124% |
| H2 | Helvetica Now Text | Medium | 32px | 124% |
| H3 | Serrif | Medium / Regular | 20px | 128% |
| H3 | Helvetica Now Text | Medium | 20px | 128% |
| H4 | Serrif | Medium / Regular | 18px | 132% |
| H4 | Helvetica Now Text | Medium | 18px | 132% |
| B1 | Helvetica Now Text | Medium / Regular | 16px | 136% |
| B2 | Helvetica Now Text | Medium / Regular | 15px | 138% |
| B3 | Helvetica Now Text | Medium / Regular | 14px | 140% |
| C1 | Helvetica Now Text | Medium / Regular | 13px | 136% |
| C2 | Helvetica Now Text | Medium / Regular | 12px | 138% |
| C3 | Helvetica Now Text | Medium / Regular | 11px | 140% |

### Mobile — 한국어(KO)

| 레벨 | 폰트 | 굵기 | 크기 | Line Height |
|---|---|---|---|---|
| H1 | Pretendard | SemiBold | 36px | 132% |
| H2 | Pretendard | SemiBold / Medium | 30px | 138% |
| H3 | Pretendard | SemiBold / Medium | 20px | 144% |
| H4 | Pretendard | Medium | 18px | 150% |
| B1 | Pretendard | SemiBold / Regular | 16px | 152% |
| B2 | Pretendard | SemiBold / Regular | 15px | 154% |
| B3 | Pretendard | SemiBold / Regular | 14px | 156% |

---

## 이펙트

```
Drop shadow 01:   box-shadow: 4px 14px 24px 3px rgba(33,33,33,0.10)
Background blur:  backdrop-filter: blur(20px) + drop shadow 01
```

---

## 페이지 레이아웃 패턴 시스템 (🔹 Layout 가이드)

> 피그마 채널 e755vnha, 파일: 🔹 Layout — Sendbird Digital Component Library v2.0
> ⚠️ 이 패턴들은 "선택 가능한 레이아웃 템플릿"이지, 페이지를 그대로 복사하는 것이 아님.
> 각 페이지의 목적과 콘텐츠 맥락에 맞는 패턴을 선택해서 적용할 것.

---

### PC Web — Header 레이아웃 (영역: 히어로/첫 화면)

**역할**: 페이지 최상단에 위치. 브랜드 정체성, 핵심 메시지, primary CTA를 한 눈에 전달.
페이지당 Header는 **단 하나**만 존재해야 함.

| # | 패턴 | 구성 | 사용 맥락 |
|---|---|---|---|
| 1 | **Text 2col + Image 1col** | 좌: 헤드라인+CTA (2칸), 우: 이미지/UI (1칸) | 제품 소개, 리드폼 포함 Hero |
| 2 | **Text 1col + Image 1col** | 중앙: 좁은 텍스트, 하단 또는 우측: 이미지 | 특정 기능/산업 페이지 Hero |
| 3 | **Only Text 1col** | 전체 너비 가운데 정렬 텍스트만 | 간결한 메시지 중심 페이지 |
| 4 | **Text 2col + Image 2col** | 좌: 헤드라인+리스트, 우: 제품 스크린샷 | 기능 목록 강조 Hero |

### PC Web — Body 레이아웃 (영역: 히어로 아래 콘텐츠 섹션)

**역할**: Header의 메시지를 구체적으로 풀어냄. 유저를 자연스럽게 마지막 액션으로 유도.
Body는 여러 섹션이 반복되며, **시각적 리듬을 위해 동일 패턴을 연속 사용 금지**.

| # | 패턴 | 구성 | 사용 맥락 |
|---|---|---|---|
| 1 | **Text 2col + Image 1col + Caption 3col** | 좌: 설명, 우: 이미지, 하단: 3개 캡션 카드 | 핵심 기능 + 세부 설명 3개 |
| 2 | **Text 2col + Image 2col** | 좌: 텍스트, 우: 이미지 (또는 반전) | Feature Section 좌우 교차 |
| 3 | **Text 1col + Contents 2col** | 가운데 타이틀, 하단 2열 콘텐츠 그리드 | Stats, 피처 카드 나열 |
| 4 | **Text 1col + Contents 2col** (변형) | 가운데 타이틀, 이미지+텍스트 카드 그리드 | 블로그/리소스 카드 나열 |
| 5 | **Text 2col + Contents 2col** | 좌: 섹션 타이틀, 우: 아코디언 FAQ | FAQ 섹션 |
| 6 | **Text 2col + Contents 2col** (변형) | 좌: 텍스트 소개, 우: 피처 카드 3개 | 하단 피처 강조 섹션 |

### 레이아웃 사용 원칙 (Usage Principles)

**✅ 해야 할 것**
- 각 레이아웃은 정의된 use case에 맞게 선택
- 페이지 내 레이아웃 패턴을 다양하게 교체하여 시각적 리듬 유지
- Text·Image 컬럼·버튼은 정의된 구조와 위치에서만 사용

**❌ 하지 말아야 할 것**
- 페이지에 Primary CTA는 **단 하나**만 허용 (Secondary CTA 중복 금지)
- 이미지 비율(aspect ratio), 간격, 정렬을 임의로 변경 금지
- 동일 레이아웃 패턴 연속 반복 금지
- 이 가이드에 정의되지 않은 레이아웃 변형 사용 금지 (디자인 리뷰 필요)

---

## 그리드 시스템

| 디바이스 | 캔버스 너비 | 컬럼 수 | 거터 | 좌우 여백(offset) |
|---|---|---|---|---|
| Desktop | 1920px | 16 | 16px | 184px |
| Mobile | 375px | 4 | 16px | 16px |

---

## 피그마 연동

- 피그마 채널 연결 시 채널 코드를 먼저 입력해야 함
- 작업 중인 피그마 파일명: **delight.ai vs Decagon**
- 피그마 MCP 플러그인: `claude-talk-to-figma`

---

## 변수 파일 원본
전체 디자인 토큰 원본: `/Users/eloy.lee/클로드코드/variables/variables.json`

---

## 페이지 레이아웃 구조 — delight.ai Main (피그마 파일: design)

피그마 채널: 매 세션마다 새 코드 입력 필요 / 플러그인: `claude-talk-to-figma`

---

### 1. delight.ai Main page — PC (1920×7430)

역할: delight.ai 제품 메인 랜딩 페이지

| # | 섹션명 | 크기 | 설명 |
|---|---|---|---|
| 1 | GNB | 1920×72 | 좌: 로고+메뉴, 우: 언어+로그인+CTA |
| 2 | Hero | 1920×842 | 좌: 헤드라인+본문+CTA, 우: 제품 UI 스크린샷 |
| 3 | Logo Garden | 1552×116 | 고객사 로고 가로 스크롤 스트립 (20개 로고) |
| 4 | Feature Section 1 | 1552×660 | 2단: 좌 텍스트, 우 제품 UI 이미지 |
| 5 | Feature Section 2 | 1552×660 | 2단: 좌 제품 UI, 우 텍스트 |
| 6 | Stats Bar | 1552×~ | 3개 숫자 지표 (4B+, 300M+, 99.9%+) + 설명 텍스트 |
| 7 | Trust OS Section | 1552×584 | "Trust OS: Responsible AI" 헤드라인 + 피처 카드 3개 |
| 8 | Rolling Feature Carousel | 1552×818 | 5단계 스텝 기반 슬라이드 (hero rolling) |
| 9 | Bottom Feature Cards | 1542×120 | 3개 카드 가로 나열 |
| 10 | Accordion FAQ | 964×502 | 좌: 타이틀, 우: 아코디언 4개 |
| 11 | CTA Banner | 1920×360 | 다크+플라워 배경. "Build an AI concierge" + 버튼 |
| 12 | Footer | 1920×~ | 5단 링크 컬럼 + 하단 법적 고지 |

---

### 2. delight.ai Main page — Mobile (375×11703)

| # | 섹션명 | 크기 | 설명 |
|---|---|---|---|
| 1 | GNB | 375×72 | 좌: 로고, 우: 언어+햄버거 |
| 2 | Hero | 375×260 | 헤드라인 + CTA 버튼 |
| 3 | Hero 이미지 | 343×383 | 제품 UI 스크린샷 |
| 4 | Logo Garden | 375×~ | 가로 스크롤 |
| 5 | Feature Sections | 375×558 × 여러개 | 각 피처 세로 스택 (이미지 상단, 텍스트 하단) |
| 6 | Stats | 375×184 | 숫자 지표 3개 세로/가로 나열 |
| 7 | Rolling Carousel | 375×929 | 탭 버튼(160×40) + 슬라이드 콘텐츠 |
| 8 | Accordion FAQ | 344×640 | 4개 항목 |
| 9 | CTA + Footer | 375×1226 | CTA 배너 + Footer |

---

## 페이지 레이아웃 구조 — delight.ai vs Decagon

피그마 파일: **delight.ai vs Decagon** 기준으로 추출한 섹션 구조입니다.

---

### PC 레이아웃 (1920px × 6041px)

최대 콘텐츠 너비: **1552px**, 좌우 여백: **184px**

| # | 섹션명 | 크기 | 설명 |
|---|---|---|---|
| 1 | GNB | 1920×72 | 좌: 로고+메뉴, 우: 언어선택+로그인+CTA 버튼 |
| 2 | Hero | 1920×842 | 2단 레이아웃. 좌: 헤드라인+본문, 우: 리드폼(768×544) |
| 3 | Logo Garden | 1552×116 | 고객사 로고 가로 스크롤 스트립 |
| 4 | Stats Bar | 1552×189 | 4개 숫자 지표 (7B+, 300M+, 99.9%+, 10yr), 세로 구분선 포함 |
| 5 | Comparison Table (Blue) | 1552×~720 | 파란 카드. "7 capabilities" 비교표. 좌: Delight.ai, 우: Decagon |
| 6 | Agent Memory Feature | 1553×637 | "Only on delight.ai" 헤드라인 + 3개 피처 카드 (For-You / Omnipresence / Trust OS) |
| 7 | Differentiator Intro | 670×366 | "Where Decagon is strong. Where we differ." 텍스트 + CTA 버튼 |
| 8 | When to Choose (Blue) | 1552×718 | 파란 카드. 플랫폼 선택 기준 비교표 (Volume deflection / Customer relationships / Regulated industries) |
| 9 | Bottom Feature Cards | 1542×120 | 3개 카드 가로 나열 (Well-designed AOPS / Watchtower QA / Fast deployment) |
| 10 | Accordion FAQ | 964×502 | 좌: "Questions worth asking" 타이틀, 우: 아코디언 4개 항목 |
| 11 | CTA Banner | 1920×~360 | 다크 배경 + 플라워 이미지. "See the difference in 30 minutes" + Contact sales 버튼 |
| 12 | Footer | 1920×~400 | 5단 링크 컬럼 + 하단 법적 고지 |

---

### Mobile 레이아웃 (375px × 8473px)

좌우 여백: **16px**

| # | 섹션명 | 크기 | 설명 |
|---|---|---|---|
| 1 | GNB | 375×72 | 좌: 로고, 우: 언어+햄버거 메뉴 |
| 2 | Hero | 375×1697 | 단일 컬럼. 헤드라인 → 본문 → 리드폼 세로 스택 |
| 3 | Logo Garden | 375×~ | 가로 스크롤 로고 스트립 |
| 4 | Stats Cards | 375×826 | 7개 지표 카드 세로 스택 (각 375×124) |
| 5 | Comparison Cards | 375×741 | 3개 피처 비교 카드 세로 스택 |
| 6 | Tab Buttons | 375×51 | Delight.ai / Decagon 탭 토글 버튼 2개 |
| 7 | Comparison Text Block | 343×440 | 3개 카드 세로 나열 |
| 8 | Accordion FAQ | 344×640 | 아코디언 4개 항목 |
| 9 | CTA + Feature Cards | 375×961 | 피처 3개 카드 + CTA 버튼 |

---

### 공통 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| `Button/Solid purple` | 배경 #7B39FE, 텍스트 White, 높이 44px(PC) / 52px(일부) |
| `Button/Contact sales` | 배경 Black, 텍스트 White |
| Comparison Card (Blue) | 배경 파랑 계열, border-radius 있음, 내부 테이블 구조 |
| Logo Garden | 가로 스크롤, 로고 16개 (Lotte, Redfin, Teladoc, Noom, Match, Hyundai, Hinge, SK telecom 등) |
| Accordion Item | 높이 86px (닫힘) / 244px (열림) |

---

## Delight Warm 테마 — CSS 토큰 (실제 구현 기준)

> delight.ai 웹페이지 제작 시 반드시 이 토큰을 기준으로 사용할 것.
> Sendbird cool gray 팔레트(#F2F3F7, #555869, #9194A8 등)와 혼동 주의.

```css
:root {
  --bg:           #FFFFFF;   /* 메인 배경 — 반드시 순수 White */
  --bg-subtle:    #F5F2ED;   /* 서브 배경 (warm tint) */
  --surface:      #FFFFFF;   /* 카드/폼 배경 */
  --surface-2:    #F0EDE6;   /* 보조 카드 배경 */
  --border:       #E0DAD2;   /* 기본 선 */
  --border-light: #EAE6DF;   /* 연한 선 */
  --text:         #1A1612;   /* 본문 기본 텍스트 */
  --text-muted:   #6B6258;   /* 보조 텍스트 */
  --text-dim:     #9E9890;   /* 흐린 텍스트, disabled */
  --lime:         #F2FF66;   /* Delight Lime — 주 강조색 */
  --lime-tint:    #FAFFD4;   /* Lime 배경 tint */
  --lime-border:  #D6E84A;   /* Lime 테두리 */
  --cta-dark:     #18140F;   /* CTA 섹션 다크 배경 */
  --max-w:        1552px;    /* 최대 콘텐츠 너비 */
}
```

---

## 구현 시 주의사항 (피드백 반영)

### 근본 원칙

- **명시적 지시를 항상 최우선**: "딜라이트 웜톤"이라고 지시했으면 cool tone 계열은 사용하지 않는다. 내 기본값이나 추측으로 덮어쓰지 않는다.
- **피그마 확인 결과를 임의로 바꾸지 않음**: 피그마에서 배경이 #FFFFFF임을 확인해줬으면, 내 판단으로 다른 색으로 바꾸지 않는다. 근거 없는 변경은 하지 않는다.
- **지시하지 않은 스타일은 절대 추가하지 않음**: 기울임체(italic), 컬러 하이라이트, 아이콘 변경 등 — 유저가 명시하지 않은 스타일 처리는 임의로 적용하지 않는다.

### ❌ 하지 말아야 할 것

| 잘못된 패턴 | 이유 | 올바른 대안 |
|---|---|---|
| 배경에 #F5F2ED 또는 warm tint 사용 | 메인 배경은 피그마 확인 결과 #FFFFFF | `--bg: #FFFFFF` |
| Sendbird cool gray 사용 (#F2F3F7, #555869, #9194A8, #0E1017 등) | delight.ai Warm 테마와 충돌 — Sendbird 느낌 남 | Delight Warm 토큰 사용 |
| CTA/버튼에 Sendbird Purple (#7B39FE) 사용 | Sendbird 제품 느낌 → delight.ai 브랜드 훼손 | Lime (#F2FF66) 또는 Black (#000000) |
| Hero 리드폼 컬럼에 고정 px 사용 | 1920px 기준 고정값은 좁은 뷰포트에서 비례가 깨짐 | `grid-template-columns: 1fr 1fr` (Figma 비율 744:768 ≈ 1:1) |
| `<em>` 태그에 기울임체(italic) 적용 | 유저가 지시하지 않은 스타일 — 의도와 다른 시각 결과 | `em { font-style: normal; }` 으로 리셋 |
| 비교 테이블 카드 전체 배경에 Lime 또는 Lime-tint 사용 | 유저가 지정하지 않은 색상 — 테이블 영역에 과도한 강조 | `background: var(--surface); border: 1px solid var(--border)` |
| 아코디언 FAQ 아이콘을 임의 디자인으로 적용 | 유저가 설계한 아이콘 패턴을 따르지 않음 | 닫힘: 회색 원+`+` / 열림: Lime 원+`-` (두 SVG 전환 방식) |
| PC Footer에 모바일 아코디언 레이아웃 적용 | PC는 5컬럼 그리드, 아코디언은 모바일 전용 | `grid-template-columns: 1.4fr repeat(5, 1fr)` |
| macOS 다크모드 자동 색상 반전 방치 | 브라우저가 OS 다크모드 감지 시 색상 반전됨 | `<meta name="color-scheme" content="light">` 반드시 포함 |

### ✅ 핵심 규칙 요약

- **배경**: 항상 `#FFFFFF` (White). warm tint는 서브 배경에만
- **강조색**: Delight Lime `#F2FF66` (포인트), Black `#000000` (CTA 버튼)
- **그레이**: Warm gray 계열만 (`--text #1A1612`, `--text-muted #6B6258`, `--text-dim #9E9890`)
- **Hero 폼**: `grid-template-columns: 1fr 1fr` (비율 기준, 고정 px 금지)
- **Sendbird Purple #7B39FE**: delight.ai Warm 페이지에서 사용 금지
- **서체 스타일**: 유저가 명시한 것만 적용. `<em>` 등 HTML 시맨틱 태그에 의한 italic은 CSS로 반드시 초기화
- **FAQ 아이콘**: 닫힘=gray border 원+`+` SVG / 열림=Lime bg 원+`-` SVG (두 개의 SVG 토글 방식)
- **Footer PC 레이아웃**: 반드시 5컬럼 그리드. 아코디언 사용 금지
- **다크모드 방지**: 모든 HTML 파일 `<head>`에 `<meta name="color-scheme" content="light">` 필수

### 컴포넌트별 구현 패턴

#### FAQ 아이콘 (확정 패턴)
```html
<!-- HTML -->
<div class="faq-icon">
  <svg class="icon-plus" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg class="icon-minus" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</div>
```
```css
/* CSS */
.faq-icon { width: 34px; height: 34px; border: 1px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); flex-shrink: 0; }
.faq-icon .icon-minus { display: none; }
.faq-item.open .faq-icon { background: var(--lime); border-color: var(--lime-border); color: var(--text); }
.faq-item.open .faq-icon .icon-plus { display: none; }
.faq-item.open .faq-icon .icon-minus { display: block; }
```

#### Footer PC 레이아웃 (확정 패턴)
```css
.footer-main { display: grid; grid-template-columns: 1.4fr repeat(5, 1fr); gap: 48px; margin-bottom: 64px; }
```

#### Hero 레이아웃 (확정 패턴)
```css
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.hero-left { display: flex; flex-direction: column; align-items: flex-start; } /* align-items: flex-start 필수 — 배지 너비 방지 */
```

---

## GNB (Global Navigation Bar) — delight.ai

> 피그마 채널 e755vnha, 파일: 🔹 Navigation / **Navigation-01** 프레임 기준
>
> ⚠️ **주의**: Navigation-01 프레임은 GNB/Footer의 **레이아웃 use case 모음**입니다.
> "이런 상황에서 이렇게 쓸 수 있다"는 예시 나열이므로, 화면을 그대로 구현하면 안 됩니다.
> **컴포넌트 구조·크기·폰트 등 스펙 값은 참조하되, 레이아웃 배치 방식은 실제 페이지 맥락에 맞게 적용할 것.**

### PC GNB 구조 (1920×72px) — 피그마 확인 기준

```
[GNB_left]                                    [GNB_right]
 ┌──────────────────────────────────────────┐   ┌─────────────────────────────────────┐
 │ [✳ spark icon + ▾]  Why delight.ai       │   │ 🌐 EN ▾  │  👤 Log in  │ Contact sales│
 │                     Capabilities ▾       │   └─────────────────────────────────────┘
 │                     Solutions ▾          │
 │                     Resources ▾          │
 └──────────────────────────────────────────┘
```

| 영역 | 내용 | 스펙 |
|---|---|---|
| **로고 마크** | ✳ spark/asterisk 아이콘 + 드롭다운 chevron (delight.ai ↔ Sendbird 전환) | 소형 아이콘, 배경 없음 |
| **메뉴 아이템** | Why delight.ai (chevron 없음) / Capabilities ▾ / Solutions ▾ / Resources ▾ | Helvetica Now Text 16px Medium(500) |
| **언어 선택** | 🌐 globe 아이콘 + `EN` + ▾ chevron | Helvetica Now Text 16px Medium(500) |
| **Log in** | 👤 person 아이콘 + `Log in` 텍스트 | Helvetica Now Text 16px Medium(500) |
| **CTA 버튼** | `Contact sales` | 139×42px, radius 8px, Black bg (#000000) |

> ⚠️ 로고는 검은 사각형 박스(72×48)가 아님. ✳ spark 아이콘 + 옆에 제품 전환 드롭다운 chevron.

### 로고 SVG 정의 (확정 패턴)

#### delight.ai 로고 — 확정 SVG (피그마 원본)
스파크 모양 본체 + 우상단 원형 도트. `fill="black"` (또는 흰 배경 위에선 `#1A1612`).
파일 원본: `/Users/eloy.lee/클로드코드/asset/delight-logo.svg`
```html
<!-- delight.ai 로고 — 확정 SVG -->
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5254 9.47461H22V12.5254H14.683L19.8569 17.6993L17.7001 19.8569L12.5254 14.6815V22H9.47461V14.6823L4.30071 19.8569L2.14307 17.7001L7.31773 12.5254H0V9.47461H7.3185L2.14383 4.29994L4.30071 2.14307L9.47461 7.31696V0H12.5254V9.47461Z" fill="black"/>
  <path d="M19.4737 4.44604C19.4737 5.5246 18.5994 6.39894 17.5208 6.39894C16.4423 6.39894 15.5679 5.5246 15.5679 4.44604C15.5679 3.36749 16.4423 2.49315 17.5208 2.49315C18.5994 2.49315 19.4737 3.36749 19.4737 4.44604Z" fill="black"/>
</svg>
```

#### Sendbird 로고 — 확정 SVG (피그마 원본)
둥근 사각형 + 내부 파인 곡선 실루엣. `fill="#0E1017"`.
파일 원본: `/Users/eloy.lee/클로드코드/asset/sendbird-logo.svg`
```html
<!-- Sendbird 로고 — 확정 SVG -->
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49977 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11Z" fill="#0E1017"/>
</svg>
```

#### GNB 제품 전환 드롭다운 구조
```html
<div class="gnb-logo-switcher">
  <!-- delight.ai가 활성일 때 -->
  <svg ...delight spark.../> <!-- 또는 <svg ...sendbird leaf.../> -->
  <span class="gnb-logo-chevron">▾</span>
</div>
```
```css
.gnb-logo-switcher { width: 72px; height: 48px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; gap: 4px; cursor: pointer; flex-shrink: 0; }
.gnb-logo-chevron  { font-size: 12px; color: var(--text-muted); }
```

### GNB 아이콘 SVG — 확정 패턴 (유저 제공 원본)

> 파일 원본: `/Users/eloy.lee/Downloads/language.svg`, `/Users/eloy.lee/Downloads/login.svg`
> ⚠️ 이 SVG를 항상 그대로 사용할 것. 임의로 간략화하거나 대체하지 않을 것.

#### 언어(globe) 아이콘
```html
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.9902 2.09961C17.465 2.09974 21.9004 6.53537 21.9004 12C21.9004 17.4646 17.465 21.9003 11.9902 21.9004C6.52559 21.9004 2.09961 17.4649 2.09961 12C2.09961 6.5351 6.52559 2.09961 11.9902 2.09961ZM9.99414 16.0283C10.4272 17.4686 11.0822 18.8083 11.918 20.0166L12 20.1357L12.082 20.0166C12.9178 18.8083 13.5728 17.4686 14.0059 16.0283L14.0449 15.9004H9.95508L9.99414 16.0283ZM4.99316 16.0498C5.96517 17.7306 7.51493 19.0164 9.37793 19.6543L9.61914 19.7373L9.49805 19.5127C8.90226 18.4105 8.44506 17.2181 8.12695 15.9756L8.10742 15.9004H4.90625L4.99316 16.0498ZM15.873 15.9756C15.5549 17.2181 15.0977 18.4105 14.502 19.5127L14.3809 19.7373L14.6221 19.6543C16.4853 19.0163 18.035 17.7202 19.0068 16.0498L19.0938 15.9004H15.8926L15.873 15.9756ZM4.16309 9.97559C4.0015 10.6219 3.90039 11.3003 3.90039 12C3.90039 12.6997 4.0015 13.3781 4.16309 14.0244L4.18164 14.0996H7.75293L7.73926 13.9883C7.65948 13.3301 7.59961 12.6743 7.59961 12C7.59961 11.3257 7.65948 10.6699 7.73926 10.0117L7.75293 9.90039H4.18164L4.16309 9.97559ZM9.56055 9.98633C9.47028 10.6383 9.40039 11.3134 9.40039 12C9.40039 12.6867 9.47032 13.352 9.56055 14.0137L9.57227 14.0996H14.4277L14.4395 14.0137C14.5297 13.352 14.5996 12.6867 14.5996 12C14.5996 11.3134 14.5297 10.6383 14.4395 9.98633L14.4268 9.90039H9.57324L9.56055 9.98633ZM16.2607 10.0117C16.3405 10.6699 16.4004 11.3257 16.4004 12C16.4004 12.6743 16.3405 13.3301 16.2607 13.9883L16.2471 14.0996H19.8184L19.8369 14.0244C19.9985 13.3781 20.0996 12.6997 20.0996 12C20.0996 11.3003 19.9985 10.6219 19.8369 9.97559L19.8184 9.90039H16.2471L16.2607 10.0117ZM9.37793 4.3457C7.51493 4.98358 5.96517 6.26944 4.99316 7.9502L4.90625 8.09961H8.10742L8.12695 8.02441C8.44506 6.78191 8.90226 5.58951 9.49805 4.4873L9.61914 4.2627L9.37793 4.3457ZM11.918 3.9834C11.0822 5.19174 10.4272 6.53143 9.99414 7.97168L9.95508 8.09961H14.0449L14.0059 7.97168C13.5728 6.53143 12.9178 5.19174 12.082 3.9834L12 3.86426L11.918 3.9834ZM14.502 4.4873C15.0977 5.58951 15.5549 6.78191 15.873 8.02441L15.8926 8.09961H19.0938L19.0068 7.9502C18.035 6.27983 16.4853 4.98366 14.6221 4.3457L14.3809 4.2627L14.502 4.4873Z" fill="#1A1612"/>
</svg>
```

#### 로그인(person) 아이콘
```html
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_379_383" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask>
  <g mask="url(#mask0_379_383)">
    <circle cx="12" cy="7.5" r="4.5" stroke="#1A1612" stroke-width="2"/>
    <path d="M12 12C7.33285 12 3.49543 15.9473 3.04434 21.0011C2.99524 21.5512 3.44772 22 4 22H20C20.5523 22 21.0048 21.5512 20.9557 21.0011C20.5046 15.9473 16.6672 12 12 12Z" stroke="#1A1612" stroke-width="2"/>
  </g>
</svg>
```

### GNB Status (드롭다운 열림 상태)

| Status | 전체 높이 | 설명 |
|---|---|---|
| `Default` | 72px | 기본 닫힌 상태 |
| `whydelight` | 72px | Why delight.ai 활성 (드롭다운 없음) |
| `Capabilities` | 430px | Capabilities 드롭다운 열림 |
| `Solutions` | 305px | Solutions 드롭다운 열림 |
| `Resources` | 376px | Resources 드롭다운 열림 |
| `Lang` | 192px | 언어 선택 드롭다운 열림 |
| `Covert_GNB` | 232px | 제품 전환 메뉴 (delight.ai / Sendbird) |

### Mobile GNB 구조 (375×72px)

| 영역 | 내용 | 스펙 |
|---|---|---|
| **좌측 로고** | delight.ai 로고 | 72×48px, radius 8px |
| **언어 선택** | `EN` | 90×32px |
| **햄버거 메뉴** | 아이콘 버튼 | 32×32px |
| **active 상태** | 풀스크린 네비게이션 드로어 | 375×812px |

### GNB CSS 패턴 — 확정 (실제 구현 기준)

> ⚠️ 아래는 delight-main.html에서 실제 동작이 확인된 최종 CSS입니다. 이 값을 그대로 사용할 것.

```css
/* ---- Announcement Bar ---- */
.gnb-announcement {
  width: 100%; height: 57px; background: #0D0D0D;
  display: flex; align-items: center; justify-content: center; gap: 16px;
  font-family: 'Helvetica Now Text', sans-serif;
  font-size: 16px; font-weight: 400; color: #FFFFFF; letter-spacing: -0.02em;
}
.gnb-announcement-link { color: rgba(255,255,255,0.95); font-weight: 500; }

/* ---- GNB Wrap (position: fixed) + Spacer ---- */
/* ⚠️ sticky는 절대 사용하지 말 것 — 컨테이닝 블록 범위 이탈 시 고정 해제됨 */
.gnb-wrap {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex; flex-direction: column;
}
/* gnb-wrap 바로 다음에 <div class="gnb-spacer"></div> 반드시 추가 */
.gnb-spacer { height: 72px; }

/* ---- GNB Bar ---- */
.gnb {
  width: 100%; height: 72px; background: #FFFFFF;
  display: flex; align-items: center;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}
/* 스크롤 시 하단 구분선 (#e5e3df = --color-gray-150 from real site) */
.gnb.scrolled,
.gnb:has(.gnb-open) {
  border-color: #e5e3df;
}

.gnb-inner {
  width: 100%; max-width: 1616px;
  margin: 0 auto; padding: 0 32px;
  display: flex; align-items: center; justify-content: space-between;
}

/* ---- Logo Switcher — 74×50px ---- */
.gnb-logo-switcher {
  width: 74px; height: 50px;
  border: 1px solid #E5E3DF; border-radius: 8px; background: #F7F5F0;
  display: flex; align-items: center; padding: 8px 8px 8px 12px;
  gap: 6px; cursor: pointer; flex-shrink: 0; transition: background 0.12s;
}
.gnb-logo-switcher:hover { background: #EDEAE4; }
.gnb-logo-switcher.gnb-active { background: var(--surface-2) !important; }
.gnb-logo-switcher.gnb-active .gnb-logo-chevron svg { transform: rotate(180deg); }
.gnb-logo-chevron svg { width: 14px; height: 14px; transition: transform 0.2s ease; }

/* ---- GNB Left / Menu ---- */
.gnb-left { display: flex; align-items: center; gap: 48px; flex: 0 0 auto; }
.gnb-menu { display: flex; align-items: stretch; gap: 0; height: 72px; }
.gnb-menu-item {
  font-family: 'Helvetica Now Text', sans-serif;
  font-size: 16px; font-weight: 500; color: #29201A; letter-spacing: -0.02em;
  cursor: pointer; display: flex; align-items: center; gap: 4px;
  padding: 10px 12px; white-space: nowrap; position: relative; height: 72px;
  transition: background 0.12s ease;
}
.gnb-menu-item:hover { background: var(--bg-subtle); }
/* Active state: 하단 밑줄 */
.gnb-menu-item.gnb-active { background: transparent !important; }
.gnb-menu-item.gnb-active::after {
  content: ''; position: absolute; bottom: 0; left: 8px; right: 8px;
  height: 2px; background: var(--text); border-radius: 1px;
}
.gnb-menu-item.gnb-active .gnb-chevron svg { transform: rotate(180deg); }

/* Chevron (14×14 실측) */
.gnb-chevron { display: flex; align-items: center; }
.gnb-chevron svg { width: 14px; height: 14px; transition: transform 0.2s ease; }

/* ---- GNB Right ---- */
.gnb-right  { display: flex; align-items: center; flex: 0 0 auto; }
.gnb-utility { display: flex; align-items: center; gap: 8px; margin-right: 24px; }
/* ⚠️ EN과 Log in 사이 divider 넣지 말 것 */
.gnb-lang {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Helvetica Now Text', sans-serif;
  font-size: 16px; font-weight: 500; color: #29201A;
  cursor: pointer; padding: 6px 8px; border-radius: 6px; height: 36px;
  transition: background 0.12s ease; white-space: nowrap;
}
.gnb-login {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Helvetica Now Text', sans-serif;
  font-size: 16px; font-weight: 500; color: #000000;
  cursor: pointer; padding: 0 10px; border-radius: 6px; height: 24px;
  transition: background 0.12s ease; white-space: nowrap;
}
.gnb-lang:hover, .gnb-login:hover { background: var(--bg-subtle); }
.gnb-lang.gnb-active .gnb-chevron svg { transform: rotate(180deg); }
.gnb-cta {
  height: 42px; padding: 0 13px; min-width: 139px;
  background: #000000; color: #FFFFFF; border-radius: 8px; border: none;
  font-family: 'Helvetica Now Text', sans-serif;
  font-size: 16px; font-weight: 500; letter-spacing: -0.02em; cursor: pointer;
  transition: background 0.15s ease; white-space: nowrap;
}
.gnb-cta:hover { background: #1A1612; }

/* ---- 드롭다운 공통 애니메이션 ---- */
@keyframes dropFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.gnb-item-wrap { position: relative; display: flex; align-items: center; }

/* ---- Capabilities: 1265px 메가 메뉴 (position: absolute, JS로 left 정렬) ---- */
.gnb-drop {
  display: none; position: absolute; top: 72px; left: 0;
  width: 1265px; background: #FFFFFF;
  box-shadow: rgba(0,0,0,0.10) 0px 4px 16px 0px;
  z-index: 198; border-radius: 0 0 16px 16px; overflow: hidden;
}
.gnb-drop.gnb-open { display: block; animation: dropFadeIn 0.18s ease; }

/* 3컬럼 flex — blue-purple bg가 1px gap으로 구분선 역할 */
.drop-products-grid {
  display: flex; background: rgb(227, 229, 244); gap: 1px; min-height: 360px;
}
.drop-col { flex: 0 0 300px; background: #FFFFFF; padding: 16px; display: flex; flex-direction: column; }
.drop-col-2 { padding-top: 37px; } /* col-1의 첫 링크와 수직 정렬 */
.drop-col-header {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 12px; font-weight: 500;
  color: rgb(140, 134, 126); letter-spacing: -0.02em; padding: 4px 0 8px 12px;
}
.drop-link {
  display: flex; flex-direction: column; gap: 0; padding: 12px; border-radius: 8px;
  cursor: pointer; transition: background 0.12s; text-decoration: none; color: inherit;
}
.drop-link:hover { background: var(--bg-subtle); }
.drop-link-title {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 16px; font-weight: 500;
  color: var(--text); letter-spacing: -0.02em; line-height: 1.3;
}
.drop-link-desc {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 13px; font-weight: 400;
  color: var(--text-muted); line-height: 1.4; margin-top: 2px;
}
/* 우측 flex:1 — 프로모 카드 2개 + 인테그레이션 하단 바 */
.drop-right { flex: 1; background: #FFFFFF; display: flex; flex-direction: column; }
.drop-right-top { flex: 1; display: flex; padding: 16px; gap: 16px; }
.drop-promo-card {
  flex: 1; display: flex; flex-direction: column;
  text-decoration: none; color: inherit; cursor: pointer;
  border-radius: 10px; overflow: hidden; transition: opacity 0.15s;
}
.drop-promo-card:hover { opacity: 0.85; }
.drop-promo-eyebrow {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 12px; font-weight: 500;
  color: rgb(140, 134, 126); padding: 0 0 8px;
}
.drop-promo-img {
  width: 100%; height: 148px; border-radius: 8px; overflow: hidden;
  background: #EDEAE5; margin-bottom: 10px; flex-shrink: 0;
}
.drop-promo-img.dark-card { background: #1E2D55; }
.drop-promo-title {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 16px; font-weight: 500;
  color: var(--text); letter-spacing: -0.02em; line-height: 1.3; margin-bottom: 4px;
}
.drop-promo-desc {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 13px; font-weight: 400;
  color: var(--text-muted); line-height: 1.4;
}
.drop-right-bottom {
  padding: 6px 16px 8px; display: flex; align-items: center; gap: 12px;
  border-top: 1px solid var(--border-light); height: 79px; flex-shrink: 0;
}
.drop-int-label {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 12px; font-weight: 500;
  color: rgb(140, 134, 126); white-space: nowrap; flex-shrink: 0;
}
.drop-int-logos { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.drop-int-icon {
  width: 48px; height: 48px; border-radius: 10px;
  border: 1px solid var(--border-light); background: var(--surface);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; cursor: pointer; transition: border-color 0.12s;
}
.drop-int-icon:hover { border-color: var(--text-dim); }
.drop-int-icon svg { width: 22px; height: 22px; }

/* ---- Solutions / Resources: 플로팅 패널 (.gnb-item-wrap 안에 위치) ---- */
.gnb-drop-panel {
  display: none; position: absolute; top: 100%; left: 0;
  background: #FFFFFF; border-radius: 0 0 16px 16px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.13); border: 1px solid rgba(0,0,0,0.06);
  border-top: none;
  z-index: 200; overflow: hidden;
}
.gnb-drop-panel.gnb-open { display: block; animation: dropFadeIn 0.18s ease; }
#dropdown-solutions { width: 500px; padding: 20px 0 16px; }
.drop-solutions-layout { display: flex; }
.drop-solutions-col { flex: 1; padding: 0 4px; }
.drop-solutions-col + .drop-solutions-col { border-left: 1px solid var(--border); }
.drop-solutions-label {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 11px; font-weight: 500;
  color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.06em;
  padding: 0 16px; margin-bottom: 8px; display: block;
}
.drop-sol-link {
  display: block; padding: 9px 16px;
  font-family: 'Helvetica Now Text', sans-serif; font-size: 16px; font-weight: 500;
  color: var(--text); letter-spacing: -0.02em; text-decoration: none;
  transition: background 0.12s;
}
.drop-sol-link:hover { background: var(--bg-subtle); }
#dropdown-resources { width: 260px; padding: 10px 0; }
.drop-resources-list { display: flex; flex-direction: column; }
.drop-res-link {
  display: flex; align-items: center; gap: 12px; padding: 10px 20px;
  cursor: pointer; transition: background 0.12s; text-decoration: none; color: inherit;
}
.drop-res-link:hover { background: var(--bg-subtle); }
.drop-res-icon { width: 20px; height: 20px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--text); }
.drop-res-icon svg { width: 20px; height: 20px; }
.drop-res-label {
  font-family: 'Helvetica Now Text', sans-serif; font-size: 16px; font-weight: 500;
  color: var(--text); letter-spacing: -0.02em;
}

/* ---- 소형 팝오버 (Lang, Logo Switcher) ---- */
.gnb-drop-pop {
  display: none; position: absolute; top: calc(100% + 8px);
  background: #FFFFFF; border: 1px solid var(--border); border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10); z-index: 200; overflow: hidden; min-width: 180px;
}
.gnb-drop-pop.gnb-open { display: block; animation: dropFadeIn 0.15s ease; }
.gnb-drop-pop-item {
  display: flex; align-items: center; gap: 10px; padding: 11px 16px;
  font-family: 'Helvetica Now Text', sans-serif; font-size: 15px; font-weight: 400;
  color: var(--text); cursor: pointer; transition: background 0.12s; white-space: nowrap;
}
.gnb-drop-pop-item:hover { background: var(--bg-subtle); }
.gnb-drop-pop-item.selected { font-weight: 500; }
.gnb-drop-pop-item.selected .drop-check { display: flex; }
.drop-check { display: none; margin-left: auto; color: var(--text-muted); font-size: 13px; align-items: center; }
```

### GNB HTML 구조 — 확정 패턴

> 메뉴 순서: **Capabilities ▾ → Solutions ▾ → Resources ▾ → Customers**
> ("Why delight.ai" 항목 없음 — 실제 사이트 기준 제거됨)

```html
<!-- Announcement Bar — gnb-wrap 밖 (스크롤과 함께 사라짐, 선택적) -->
<div class="gnb-announcement">
  <span>Delight Spark 2026 is coming. The next era of AI concierge.</span>
  <a href="#" class="gnb-announcement-link">Reserve your seat →</a>
</div>

<!-- gnb-wrap: position fixed — 항상 뷰포트 상단 고정 -->
<!-- ⚠️ sticky 사용 금지. fixed만 사용할 것 -->
<div class="gnb-wrap" id="gnb-wrap">
  <header class="gnb" id="gnb">
    <div class="gnb-inner">
      <div class="gnb-left">
        <!-- Logo Switcher -->
        <div class="gnb-item-wrap">
          <div class="gnb-logo-switcher" id="trigger-covert">
            <!-- delight.ai spark SVG (24×24) -->
            <span class="gnb-logo-chevron"><!-- chevron SVG (14×14) --></span>
          </div>
          <div class="gnb-drop-pop" id="dropdown-covert" style="left:0; min-width:200px;">
            <div class="gnb-drop-pop-item selected"><!-- spark SVG --> delight.ai <span class="drop-check">✓</span></div>
            <div class="gnb-drop-pop-item"><!-- sendbird SVG --> Sendbird <span class="drop-check"></span></div>
          </div>
        </div>

        <nav class="gnb-menu">
          <!-- Capabilities: .gnb-drop 메가메뉴 (JS로 left 위치 결정) -->
          <span class="gnb-menu-item" id="trigger-capabilities">
            Capabilities <span class="gnb-chevron"><!-- chevron SVG --></span>
          </span>

          <!-- Solutions: .gnb-drop-panel (gnb-item-wrap 내부) -->
          <div class="gnb-item-wrap">
            <span class="gnb-menu-item" id="trigger-solutions">
              Solutions <span class="gnb-chevron"><!-- chevron SVG --></span>
            </span>
            <div class="gnb-drop-panel" id="dropdown-solutions">
              <!-- 2컬럼: Industries / Use cases -->
            </div>
          </div>

          <!-- Resources: .gnb-drop-panel (gnb-item-wrap 내부) -->
          <div class="gnb-item-wrap">
            <span class="gnb-menu-item" id="trigger-resources">
              Resources <span class="gnb-chevron"><!-- chevron SVG --></span>
            </span>
            <div class="gnb-drop-panel" id="dropdown-resources">
              <!-- 단일 컬럼 링크 목록 (아이콘+레이블) -->
            </div>
          </div>

          <!-- Customers: dropdown 없음, hover시 underline만 -->
          <span class="gnb-menu-item" id="trigger-customers">Customers</span>
        </nav>
      </div>

      <div class="gnb-right">
        <div class="gnb-utility">  <!-- EN + Login: gap 8px, NO divider -->
          <div class="gnb-item-wrap">
            <span class="gnb-lang" id="trigger-lang">
              <!-- language SVG --> EN <span class="gnb-chevron"><!-- chevron SVG --></span>
            </span>
            <div class="gnb-drop-pop" id="dropdown-lang">
              <div class="gnb-drop-pop-item selected">EN — English <span class="drop-check">✓</span></div>
              <div class="gnb-drop-pop-item">KO — 한국어 <span class="drop-check"></span></div>
            </div>
          </div>
          <span class="gnb-login"><!-- login SVG --> Log in</span>
        </div>
        <button class="gnb-cta">Contact sales</button>
      </div>
    </div>

    <!-- Capabilities 메가메뉴 (gnb-inner의 형제 요소) -->
    <div class="gnb-drop" id="dropdown-capabilities">
      <div class="drop-products-grid">
        <!-- Col 1: 300px — Product overview 헤더 + 링크 4개 -->
        <div class="drop-col drop-col-1">
          <div class="drop-col-header">Product overview</div>
          <a class="drop-link" href="#"><span class="drop-link-title">Agent Memory Platform</span><span class="drop-link-desc">A living memory of each customer</span></a>
          <!-- Omnipresence, Trust OS, AI Agent Builder -->
        </div>
        <!-- Col 2: 300px — 헤더 없음 (padding-top: 37px) -->
        <div class="drop-col drop-col-2">
          <a class="drop-link" href="#"><span class="drop-link-title">For You Conversations</span><span class="drop-link-desc">Make every interaction feel personal</span></a>
          <!-- Voice AI Agent, AI copilot -->
        </div>
        <!-- Right: flex:1 (~665px) -->
        <div class="drop-right">
          <div class="drop-right-top">
            <a class="drop-promo-card" href="#">
              <div class="drop-promo-eyebrow">What's new</div>
              <div class="drop-promo-img"><!-- UI 썸네일 --></div>
              <div class="drop-promo-title">Product releases</div>
              <div class="drop-promo-desc">Catch up on the latest updates from Delight</div>
            </a>
            <a class="drop-promo-card" href="#">
              <div class="drop-promo-eyebrow">Event</div>
              <div class="drop-promo-img dark-card"><!-- Delight Spark 2026 --></div>
              <div class="drop-promo-title">Delight Spark 2026</div>
              <div class="drop-promo-desc">May 7th: Build the future of AI concierge</div>
            </a>
          </div>
          <div class="drop-right-bottom">
            <span class="drop-int-label">Integrations</span>
            <div class="drop-int-logos">
              <!-- 48×48px 아이콘: Salesforce, Zendesk, Freshworks, Sprinklr, Confluence, Google Drive, Notion, ServiceNow, Intercom -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
<!-- ⚠️ gnb-wrap(fixed) 바로 다음에 반드시 gnb-spacer 추가 -->
<div class="gnb-spacer"></div>
```

### GNB JavaScript — 확정 패턴

```javascript
(function() {
  const gnb = document.getElementById('gnb');
  if (!gnb) return;
  let closeTimer = null;
  function cancelClose() { clearTimeout(closeTimer); }
  function closeAll() {
    gnb.querySelectorAll('.gnb-drop.gnb-open, .gnb-drop-pop.gnb-open, .gnb-drop-panel.gnb-open')
      .forEach(el => el.classList.remove('gnb-open'));
    gnb.querySelectorAll('.gnb-menu-item.gnb-active, .gnb-lang.gnb-active, .gnb-logo-switcher.gnb-active')
      .forEach(el => el.classList.remove('gnb-active'));
  }
  function scheduleClose() { closeTimer = setTimeout(closeAll, 160); }
  function openDrop(triggerEl, dropEl) {
    cancelClose();
    if (dropEl.classList.contains('gnb-open')) return;
    closeAll();
    // Capabilities: JS로 왼쪽 정렬
    if (dropEl.id === 'dropdown-capabilities') {
      const trigRect = triggerEl.getBoundingClientRect();
      const gnbRect  = gnb.getBoundingClientRect();
      dropEl.style.left = (trigRect.left - gnbRect.left) + 'px';
    }
    dropEl.classList.add('gnb-open');
    triggerEl.classList.add('gnb-active');
  }
  // Capabilities
  const capTrigger = document.getElementById('trigger-capabilities');
  const capDrop    = document.getElementById('dropdown-capabilities');
  if (capTrigger && capDrop) {
    capTrigger.addEventListener('mouseenter', () => openDrop(capTrigger, capDrop));
    capTrigger.addEventListener('mouseleave', scheduleClose);
    capDrop.addEventListener('mouseenter', cancelClose);
    capDrop.addEventListener('mouseleave', scheduleClose);
  }
  // Solutions & Resources: .gnb-drop-panel
  ['trigger-solutions', 'trigger-resources'].forEach(id => {
    const trigger = document.getElementById(id);
    if (!trigger) return;
    const wrapper = trigger.closest('.gnb-item-wrap');
    const drop = wrapper?.querySelector('.gnb-drop-panel');
    if (!drop) return;
    wrapper.addEventListener('mouseenter', () => openDrop(trigger, drop));
    wrapper.addEventListener('mouseleave', scheduleClose);
  });
  // Logo switcher & Lang: .gnb-drop-pop
  ['trigger-covert', 'trigger-lang'].forEach(id => {
    const trigger = document.getElementById(id);
    if (!trigger) return;
    const drop = document.getElementById('dropdown-' + id.replace('trigger-', ''));
    if (!drop) return;
    const wrapper = trigger.closest('.gnb-item-wrap') || trigger.parentElement;
    wrapper.addEventListener('mouseenter', () => openDrop(trigger, drop));
    wrapper.addEventListener('mouseleave', scheduleClose);
  });
  // Customers: underline only, no dropdown
  const customers = document.getElementById('trigger-customers');
  if (customers) {
    customers.addEventListener('mouseenter', () => { cancelClose(); closeAll(); customers.classList.add('gnb-active'); });
    customers.addEventListener('mouseleave', () => { closeTimer = setTimeout(() => customers.classList.remove('gnb-active'), 160); });
  }
  document.addEventListener('click', e => { if (!gnb.contains(e.target)) closeAll(); });
  window.addEventListener('scroll', closeAll, { passive: true });
})();

// Scroll border (gnb fixed이므로 별도 shadow 불필요 — border-color로 처리)
(function() {
  const gnbEl = document.getElementById('gnb');
  if (!gnbEl) return;
  function onScroll() {
    gnbEl.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 초기 상태 즉시 반영 (새로고침 후 스크롤 위치 대응)
})();
```

---

## Footer — delight.ai

> 피그마 채널 e755vnha 기준. Footer 컴포넌트 변형: `device=PC Web, service=delight.ai`

### PC Footer 구조 (1920×617px)

```
Section1 (531px) — 메인 링크 컬럼 영역
┌─────────────────────────────────────────────────────────────────┐
│  Brand Column (284px)     │  링크 컬럼 7개 (1152px)             │
│  "Enterprise AI            │  AI Capabilities / delight.ai      │
│   customer experience"     │  OVERVIEW / Industry / Use case /  │
│  + Contact sales 버튼      │  Resources / Developer / Company    │
└─────────────────────────────────────────────────────────────────┘

Section2 (86px) — 하단 법적 고지 바
┌─────────────────────────────────────────────────────────────────┐
│  소셜 아이콘 + G2 배지  │  법적 링크들  │  © 2025 Sendbird, Inc  │
└─────────────────────────────────────────────────────────────────┘
```

### Footer 링크 컬럼 구조 (PC) — 피그마 확인 기준

> 컬럼 순서 중요: AI Capabilities → Industry → Use Case → delight.ai Overview → Resources → Developer → Company

| 컬럼 | 헤더 | 링크 |
|---|---|---|
| 1 | **AI CAPABILITIES** | Omnipresent, Voice AI agent ↗, AI copilot, AI agent integrations, Product releases |
| 2 | **INDUSTRY** | Retail, B2B, On-demand, Travel & hospitality |
| 3 | **USE CASE** | Customer service, Enterprise |
| 4 | **delight.ai OVERVIEW** | Why choose Delight AI, AI agent platform, AI agent builder, Performance |
| 5 | **RESOURCES** | Customer stories, Ebooks & guides, Webinars & podcasts, ROI Calculator, Delight AI Perspectives |
| 6 | **DEVELOPER** | Documentation, Community, Server status |
| 7 | **COMPANY** | About, Customers, Careers, News, Partners, Security & compliance, RFP template |

### Footer 하단 바 구조 — 피그마 확인 기준

```
[좌] G2 Reviews 배지 + 소셜 아이콘(FB·LinkedIn·X·GitHub·YouTube) + English ▾
[중] Terms of Service · Privacy notice · Your privacy choices · Sub-processors
[우] © 2025 Sendbird, Inc. [Sendbird 로고]
```

### Footer 타이포그래피

| 요소 | 폰트 | 굵기 | 크기 |
|---|---|---|---|
| 브랜드 헤드라인 | Serrif | SemiBold (600) | 28px |
| 컬럼 헤더 | Helvetica Now Text | Medium (500) | 12px (uppercase) |
| 링크 텍스트 | Helvetica Now Text | Regular (400) | 16px |
| G2 배지 텍스트 | Gellix | Medium (500) | 12px |
| 법적 고지 | Helvetica Now Text | Regular (400) | 16px |
| 저작권 | Helvetica Now Text | Regular (400) | 16px |

### Mobile Footer (375×1226px)

- 모바일 Footer는 **아코디언 방식** (카테고리 클릭 시 링크 펼침)
- PC Footer는 **5~7컬럼 그리드** — 아코디언 절대 사용 금지 (이미 CLAUDE.md 규칙에 명시)

---

## 버튼 컴포넌트 시스템 — [PC/Mobile] Button hierarchy

> 피그마 채널 e755vnha 확인 기준. 버튼 컴포넌트 ID: `8152:467`

### 버튼 계층 (Hierarchy)

| Hierarchy | 배경 | 테두리 | 텍스트 | 특징 |
|---|---|---|---|---|
| **Primary** | `#000000` (Black) | 없음 | `#FFFFFF` White | 주요 CTA |
| **Secondary** | `#FFFFFF` White | `1px solid #000000` | `#000000` Black | 보조 버튼 |
| **Tertiary** | 없음 (transparent) | 없음 | `#000000` Black | 텍스트 링크 스타일 |

> ⚠️ **버튼 배치 순서**: 같은 행에 여러 버튼이 있을 경우, **Secondary → Primary** 순서로 왼쪽에서 오른쪽 배치. Primary 버튼 옆에는 반드시 Secondary 버튼. Tertiary는 Primary와 나란히 쓰지 않음.

### 버튼 사이즈

| Size | 높이 | Border Radius | 폰트 크기 | 폰트 굵기 |
|---|---|---|---|---|
| **Large** | 52px | 8px | 18px | Medium (500) |
| **Medium** | 42px | 8px | 16px | Medium (500) |
| **Small** | 30px | 6px | 14px | Medium (500) |
| **Tertiary Large** | 22px | 없음 | 16px | Medium (500) |
| **Tertiary Small** | 18px | 없음 | 13px | Medium (500) |

> 모든 버튼 폰트: `Helvetica Now Text`, `letter-spacing: -0.02em`

### 버튼 State

| State | 설명 |
|---|---|
| **Normal** | 기본 상태 |
| **Hover** | 우측에 화살표(→) 아이콘 추가 |
| **Disabled** | 배경/텍스트 모두 연하게 (회색 처리) |
| **Loading** | 텍스트 숨기고 Spinner 아이콘 표시 |

### 아이콘 (Boolean 속성)

- **좌측 아이콘**: Boolean 속성 — `true` (표시) / `false` (숨김) 로 토글 가능
- **우측 화살표**: Hover state에서 자동 추가됨
- 아이콘 크기: 20×20px (Large/Medium), 소형 버튼은 비례 축소
- 구현 시 `icon-left` 클래스로 제어:

```html
<!-- 아이콘 있는 버튼 -->
<button class="btn btn-primary btn-large">
  <span class="btn-icon"><!-- SVG icon --></span>
  <span class="btn-label">Button text</span>
</button>

<!-- 아이콘 없는 버튼 (icon 요소 제거) -->
<button class="btn btn-primary btn-large">
  <span class="btn-label">Button text</span>
</button>
```

```css
/* 버튼 CSS 기본 패턴 */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Helvetica Now Text', sans-serif;
  font-weight: 500; letter-spacing: -0.02em;
  border: none; cursor: pointer; white-space: nowrap;
  transition: all 0.15s ease;
}
/* Primary */
.btn-primary { background: #000000; color: #FFFFFF; }
.btn-primary:hover { background: #1A1612; }
.btn-primary:disabled { background: #9E9890; color: #FFFFFF; cursor: not-allowed; }

/* Secondary */
.btn-secondary { background: #FFFFFF; color: #000000; border: 1px solid #000000; }
.btn-secondary:hover { background: #F5F2ED; }
.btn-secondary:disabled { color: #9E9890; border-color: #E0DAD2; cursor: not-allowed; }

/* Tertiary */
.btn-tertiary { background: transparent; color: #1A1612; padding: 0; }
.btn-tertiary:hover::after { content: ' →'; }
.btn-tertiary:disabled { color: #9E9890; cursor: not-allowed; }

/* Sizes */
.btn-large  { height: 52px; padding: 0 24px; font-size: 18px; border-radius: 8px; }
.btn-medium { height: 42px; padding: 0 20px; font-size: 16px; border-radius: 8px; }
.btn-small  { height: 30px; padding: 0 14px; font-size: 14px; border-radius: 6px; }

/* Icon */
.btn-icon { width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; }
```

---

## 폼(Form) 컴포넌트 시스템 — [PC] Form UI style

> 피그마 채널 e755vnha 확인 기준. 노드 ID: `7153:1614`

### 폼 필드 구조

```
[Label (13px)]            ← 상단 레이블 영역 (18px 높이)
[Input box (40px)]        ← 입력 박스 (border-radius: 8px)
[Alert message (12px)]    ← 에러 시에만 표시 (19px 높이)
```

| 요소 | 높이 | 설명 |
|---|---|---|
| 전체 필드 (기본) | 64px | 레이블 18px + gap 6px + 인풋 40px |
| 전체 필드 (에러) | 83px | 레이블 + 인풋 + 에러 메시지 19px |
| 인풋 박스 | 40px | border-radius: 8px |

### 폼 필드 타입

| 타입 | 설명 |
|---|---|
| **Text** | 일반 텍스트 입력 |
| **Select** | 드롭다운 선택 (체크박스, 라디오, 일반 목록) |
| **Select + Text** | 국가코드 셀렉터 + 텍스트 입력 조합 (전화번호 등) |

### 폼 State

| State | 인풋 배경 | 테두리 | 텍스트 | 기타 |
|---|---|---|---|---|
| **Normal** | `var(--surface)` #FFFFFF | `1px solid var(--border)` #E0DAD2 | `var(--text-dim)` (placeholder) | - |
| **Focus** | `#FFFFFF` | `1px solid #000000` (강조) | `var(--text)` | 테두리 다크 강조 |
| **Typing** | `#FFFFFF` | `1px solid #000000` | `var(--text)` | 입력 중 상태 |
| **Disabled** | `var(--surface-2)` | `1px solid var(--border-light)` | `var(--text-dim)` | 클릭 불가 |
| **Checking** | `#FFFFFF` | `1px solid var(--border)` | `var(--text)` | 우측 체크(✓) 아이콘 |
| **Alerts** | `#FFFFFF` | `1px solid #FF5E69` (Red500) | `var(--text)` | 하단 에러 메시지 표시 |
| **Active** | `#FFFFFF` | `1px solid #000000` | `var(--text)` | 드롭다운 열린 상태 |

### 타이포그래피

| 요소 | 폰트 | 굵기 | 크기 | 색상 |
|---|---|---|---|---|
| Label | Helvetica Now Text | Regular (400) | 13px | `var(--text)` |
| Required `*` | Helvetica Now Text | Regular (400) | 13px | Red500 `#FF5E69` |
| Placeholder | Helvetica Now Text | Regular (400) | 14px | `var(--text-dim)` |
| Input value | Helvetica Now Text | Regular (400) | 14px | `var(--text)` |
| Error message | Helvetica Now Text | Regular (400) | 12px | Red500 `#FF5E69` |

### Radio / Checkbox

- 컴포넌트 크기: **20×20px**
- State: `Default` / `Selected`
- 타입: `Radio` (단일 선택) / `Checkbox` (복수 선택)

### CSS 구현 패턴

```css
/* 폼 필드 컨테이너 */
.form-field { display: flex; flex-direction: column; gap: 6px; }

/* 레이블 */
.form-label { font-family: 'Helvetica Now Text', sans-serif; font-size: 13px; font-weight: 400; color: var(--text); letter-spacing: -0.02em; }
.form-label .required { color: #FF5E69; }

/* 인풋 박스 */
.form-input {
  height: 40px; width: 100%;
  padding: 0 16px;
  font-family: 'Helvetica Now Text', sans-serif; font-size: 14px; font-weight: 400;
  color: var(--text); letter-spacing: -0.02em;
  background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
  outline: none; transition: border-color 0.15s ease;
}
.form-input::placeholder { color: var(--text-dim); }
.form-input:focus { border-color: #000000; }
.form-input:disabled { background: var(--surface-2); border-color: var(--border-light); color: var(--text-dim); cursor: not-allowed; }
.form-input.error { border-color: #FF5E69; }

/* 에러 메시지 */
.form-error { font-family: 'Helvetica Now Text', sans-serif; font-size: 12px; font-weight: 400; color: #FF5E69; letter-spacing: -0.02em; display: flex; align-items: center; gap: 4px; }

/* Select + Text (국가코드 + 인풋 조합) */
.form-input-combo { display: flex; gap: 0; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.form-input-combo .select-prefix { display: flex; align-items: center; gap: 4px; padding: 0 10px; border-right: 1px solid var(--border); background: var(--surface); cursor: pointer; white-space: nowrap; font-size: 14px; }
.form-input-combo .text-part { flex: 1; height: 40px; padding: 0 12px; border: none; background: transparent; font-size: 14px; outline: none; }
```

---

## 피그마 실제 적용 컬러 (Figma 확인 기준)

> 피그마 파일: **delight.ai** (채널 c09m7grh) 및 **delight.ai vs Decagon** (채널 xd1arobq) 공통 확인 사항

| 용도 | 컬러값 | 비고 |
|---|---|---|
| 페이지 메인 배경 (가장 넓은 면적) | `#FFFFFF` | White. 두 파일 모두 공통 |
| 섹션 서브 배경 | `#F2F3F7` (Gray100) | 교차 배경에 사용 |
| Primary CTA 버튼 | `#7B39FE` | Sendbird Purple |
| Secondary 버튼 | `#000000` | Black (Contact sales 등) |
| 비교 카드 강조 배경 | 파란 계열 | Comparison Card (Blue) |
| Delight Lime (강조) | `#F2FF66` | 포인트 컬러 |
| Accordion Item | 높이 86px (닫힘) / 244px (열림) |
