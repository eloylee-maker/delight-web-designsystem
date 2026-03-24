# delight.ai — PPT Brand Guidelines

> Foundations, slide templates, and component specs for consistent brand expression.
> v2.0 — March 2026

---

## 01 · Color

### Primary

| Token | Hex | Usage |
|-------|-----|-------|
| **Black** | `#0D0D0D` | Default background for ALL slides |
| **White** | `#FFFFFF` | Exception only — white cards, logo showcase |

> **Rule:** Black is the default background. Every slide starts dark. White backgrounds are never used for full slides — only for embedded cards (stats, testimonials).

### Accent

| Token | Hex | Usage |
|-------|-----|-------|
| **Accent Yellow** | `#F2FF66` | Category pills, flow diagram borders, CTA buttons |

> **Rule:** Use sparingly. The power of accent comes from its rarity. Never use as text color on body copy or as a large fill area.

### Secondary — Diagrams & Charts

| Token | Hex | Usage |
|-------|-----|-------|
| **Teal** | `#5EBBAA` | Success, growth, positive ↑ KPI arrows |
| **Soft Blue** | `#8A9DD4` | Information, process, flow |
| **Coral** | `#D49490` | Alerts, callouts, negative ↓ KPI arrows |
| **Orange** | `#D4A870` | Warnings, energy |

> **Rule:** Secondary colors have lower saturation than accent so accent always stands out. Use only in diagrams, charts, and KPI indicators — never as slide backgrounds.

### Supporting

| Token | Hex | Usage |
|-------|-----|-------|
| Card Dark | `#1E1E1E` | Dark content cards, flow containers |
| Border | `#2A2A2A` | Card borders, dividers |
| Text Gray | `#8A8A8A` | Subtitles, descriptions, header tagline |
| Copyright Gray | `#666666` | Footer text, page numbers |

---

## 02 · Typography

### Font

- **Primary:** Arial
- **Alternative:** Roboto
- **Never use:** Serrif, Georgia, Times New Roman, or any serif font

### Type Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Cover title | 48–64pt | Bold | `#FFFFFF` |
| Slide headline | 36–44pt | Regular | `#FFFFFF` |
| Section subtitle | 14–16pt | Regular | `#8A8A8A` |
| Body / bullets | 14–16pt | Regular | `#FFFFFF` or `#CCCCCC` |
| Category pill label | 12–14pt | Bold | `#F2FF66` |
| Header tagline | 11pt | Regular | `#8A8A8A` |
| Copyright / page number | 10pt | Regular | `#666666` |

### Key Rules

- Cover titles are LARGE and BOLD — they dominate the slide
- Slide headlines (non-cover) use regular/light weight, still large (36–44pt)
- Line-height: 1.1–1.15 for headlines, 1.5–1.9 for body text
- Always left-aligned except closing/CTA (centered)

---

## 03 · Cover Page

### Layout

```
┌──────────────────────────────────────────────────┐
│ [✱ delight.ai] | [customer logo]      [© 2026]  │  ← Header: y = 2.5%
│                                                  │
│                                                  │
│  The [Industry]                                  │  ← Title: 48–64pt Bold
│  shift                                           │     x = 3.5%, y = 28%
│                                                  │
│ ┌──────────────────────────────────────────────┐ │
│ │              Hero Photo                      │ │  ← Bottom 42%, full width
│ │              (full width)                    │ │     margins 2.8%, radius 8px
│ └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Header** | Logo (1.5" wide) + vertical divider + "customer logo" placeholder. Copyright top-right, 10pt `#666666` |
| **Title** | Arial Bold, 48–64pt, `#FFFFFF`. Left-aligned, positioned center-left. Text intentionally overlaps the top edge of the hero photo for dramatic effect |
| **Hero photo** | Full slide width with 2.8% side margins. Occupies bottom 42% of slide. Border-radius 8px on top corners. No border |
| **Background** | `#0D0D0D` solid. No gradients or textures |

---

## 04 · Feature Page

The most frequently used template — repeated 3–5 times per deck, once per feature/use case.

### Layout

```
┌──────────────────────────────────────────────────┐
│ [✱ delight.ai | tagline]              [© 2026]  │  ← Header bar
│                                                  │
│  Resolve complex        │  Accent subheadline    │
│  issues without         │  ┌──────────────────┐  │
│  escalation             │  │                  │  │
│                         │  │   Product UI /   │  │
│  ┌───────────────┐      │  │   Chat Mockup    │  │
│  │Troubleshooting│      │  │                  │  │
│  └───────────────┘      │  │                  │  │
│                         │  └──────────────────┘  │
│  ● Bullet point 1      │                        │
│  ● Bullet point 2      │                        │
│  ● Bullet point 3      │                        │
│  ─────────────────      │                        │
│  ↓ KPI 1    ↓ KPI 2    │                        │
└──────────────────────────────────────────────────┘
        ← Left 50% →           ← Right 50% →
```

### Specifications

| Element | Spec |
|---------|------|
| **Headline** | 36–44pt Regular (not bold), `#FFFFFF`, line-height 1.1–1.12. Left column, top-aligned at x=3.5% |
| **Category pill** | Fixed position below headline. Rounded rectangle: `#F2FF66` border 1.5px, no fill, radius 20px. Text: 12–14pt Bold `#F2FF66`. Always uses accent color |
| **Bullets** | 14–16pt, `#CCCCCC`. Gray circle bullets (●). Line-height 1.9. 3 bullet points per slide |
| **KPI indicators** | Below a thin horizontal divider (`#333333`). ↑ positive = Teal `#5EBBAA`, ↓ reduction = Coral `#D49490`. 12–14pt |
| **UI mockup** | Right 50% of slide. Container: `#1A1A1A` background, border `#2A2A2A`, radius 8px. Optional accent subheadline (`#F2FF66`, 12pt) above the mockup |

---

## 05 · Testimonial Page

### Layout

```
┌──────────────────────────────────────────────────┐
│ [✱ delight.ai | tagline]              [© 2026]  │  ← Header bar
│                                                  │
│  Great support doesn't just resolve              │  ← Headline: 36–44pt
│  issues. It drives growth.                       │     Regular, #FFFFFF
│                                                  │     Top 10%, full width
│ ┌──────────────────────┬───────────────────────┐ │
│ │  [customer logo]     │                       │ │
│ │                      │                       │ │  ← White card: #FFFFFF
│ │  "Quote text from    │    [Brand image       │ │     radius 12px
│ │   the customer..."   │     or customer       │ │     Bottom 52%
│ │                      │     logo]             │ │     margins 3.5%
│ │  Name, Title         │                       │ │
│ └──────────────────────┴───────────────────────┘ │
└──────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Headline** | 36–44pt Regular, `#FFFFFF`, line-height 1.1. Positioned at top 10% of slide, spanning full width. 2–3 lines maximum |
| **White card** | `#FFFFFF`, border-radius 12px. Occupies bottom 52% of slide with 3.5% side margins. Contains two columns separated by a thin vertical divider (`#EEEEEE`) |
| **Left column — Quote** | Customer logo at top-left (small, ~1" wide). Quote text: 16pt `#333333`, line-height 1.35. Attribution: name in Bold `#0D0D0D` + title in Regular `#888888` |
| **Right column — Image** | Brand photo or large customer logo. Fills right half of card. Subtle light background (`#F0F0F0`) if no image |

---

## 06 · Diagram Page

Product overview page showing a multi-phase flow diagram.

### Layout

```
┌──────────────────────────────────────────────────┐
│ [✱ delight.ai | tagline]              [© 2026]  │  ← Header bar
│                                                  │
│  delight.ai for [X].    Short description text.  │  ← Title + subtitle
│                                                  │
│ ┌──────────────────────────────────────────────┐ │
│ │  ┌──────────┐ → ┌──────────┐ → ┌──────────┐ │ │  ← Dark card #1E1E1E
│ │  │ Phase 1  │   │ Phase 2  │   │ Phase 3  │ │ │     border #2A2A2A
│ │  └──────────┘   └──────────┘   └──────────┘ │ │     radius 10px
│ │                                              │ │     Bottom 60%
│ │  Role Name       Role Name       Role Name   │ │
│ │  ● Point 1       ● Point 1       ● Point 1   │ │
│ │  ● Point 2       ● Point 2       ● Point 2   │ │
│ │  ● Point 3       ● Point 3       ● Point 3   │ │
│ └──────────────────────────────────────────────┘ │
│                                             [4]  │  ← Page number
└──────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Title** | "delight.ai for [industry]." — 36–40pt Regular. Subtitle positioned to the right in `#8A8A8A`, 14pt |
| **Dark container** | `#1E1E1E` fill, border `#2A2A2A`, radius 10px. Occupies bottom 60% of slide with 3% margins |
| **Flow boxes** | `#F2FF66` border 1.5px, no fill, radius 8px. Connected by → arrows (`#666666`). Bold white label centered inside. Last box may have a loop arrow back to the middle box |
| **Role details** | Bold role name: 14–16pt `#FFFFFF`. Bullets: 12–14pt `#8A8A8A`, gray ● circles. 3 bullet points per role. Aligned directly below each phase box |
| **Page number** | Bottom-right, 10pt `#666666`. Starts from slide 4 |

---

## 07 · Logo & Rules

### Logo Variants

| Variant | Usage |
|---------|-------|
| **White logo** | On dark backgrounds (default) |
| **Black logo** | On white backgrounds (exceptional — e.g., inside white cards) |

- Logo aspect ratio: **5.14 : 1** — always maintain. Height = width ÷ 5.14
- Cover: top-left, large (~5" wide)
- Internal slides: small in header bar (~1" wide)
- Never skew, rotate, stretch, or recolor

### Do

- Use black (`#0D0D0D`) as the default background
- Use accent sparingly — category pills and CTA buttons only
- Include the header bar on every internal slide
- Follow the template sequence consistently
- Use Arial or Roboto exclusively

### Don't

- Use white backgrounds for full slides
- Use serif fonts (Georgia, Times New Roman, etc.)
- Skip the header bar on content slides
- Use accent as body text color or large background fill
- Mix template patterns inconsistently within a deck
- Use colors outside the defined brand palette

---

## 08 · Quick Reference

| Property | Value | Notes |
|----------|-------|-------|
| Background | `#0D0D0D` | All slides — dark is default |
| White Cards | `#FFFFFF` | Stats & testimonials only |
| Accent | `#F2FF66` | Pills, flow borders, CTA |
| Teal | `#5EBBAA` | Success, positive ↑ KPI |
| Soft Blue | `#8A9DD4` | Info, process diagrams |
| Coral | `#D49490` | Alerts, reduction ↓ KPI |
| Orange | `#D4A870` | Warnings, energy |
| Font | Arial / Roboto | No serif fonts |
| Cover Title | 48–64pt Bold | Large + dramatic |
| Headline | 36–44pt Regular | Feature / testimonial titles |
| Body | 14–16pt | Bullets, descriptions |
| Header Bar | Logo + "\|" + tagline | Every internal slide |
| Deck Flow | Cover → Stats → Quote → Overview → Features → CTA | Standard 9-slide sequence |

---

## Standard Deck Sequence

| Slide | Template | Content |
|-------|----------|---------|
| 1 | Cover | "The [Industry] shift" + hero photo |
| 2 | Pain Points | 3 industry stats (white cards on dark bg) |
| 3 | Testimonial | Customer quote + brand validation |
| 4 | Diagram | "delight.ai for [X]." + 3-phase flow |
| 5–8 | Feature ×3–4 | One feature per slide (2-column layout) |
| 9 | Closing / CTA | Centered logo + CTA button |

---

## Global Header Bar

Present on every slide except the cover.

```
[✱ delight.ai logo (small, ~1")] | [Your branded AI concierge]          [© 2026 Sendbird, Inc]
```

- **Left:** Logo (~1" wide) + vertical divider line (`#444444`, 0.5px) + tagline "Your branded AI concierge" in `#8A8A8A`, 11pt
- **Right:** "© 2026 Sendbird, Inc" in `#666666`, 10pt
- **Position:** y = 2.5% from top edge
- **Co-branded variant:** Replace tagline with customer logo placeholder

---

## Design Components

### Category Pill

- Shape: Rounded rectangle, border-radius 20px
- Border: `#F2FF66`, 1.5px stroke, **no fill** (transparent)
- Text: 12–14pt Bold, `#F2FF66`
- Padding: ~4px vertical, ~12px horizontal
- Examples: "Onboarding", "Troubleshooting", "Feature Guidance", "Churn Prevention"

### KPI Indicators

- ↑ Positive outcome: Teal `#5EBBAA` (e.g., "↑ Revenue", "↑ Time to value")
- ↓ Reduction/saving: Coral `#D49490` (e.g., "↓ Support costs", "↓ Churn rate")
- Positioned below a thin horizontal divider line (`#333333`)
- Font: 12–14pt, displayed in horizontal pairs

### White Cards (on dark background)

- Fill: `#FFFFFF`
- Border-radius: 8–12px
- No border/stroke
- Used for: pain point stats, testimonial quotes
- Text on white cards: `#0D0D0D` (black)

### Dark Content Cards

- Fill: `#1E1E1E`
- Border: `#2A2A2A`, 1px
- Border-radius: 8–10px
- Used for: flow diagrams, product overview containers

### Page Numbers

- Position: bottom-right corner
- Font: 10pt, `#666666`
- Start from slide 4 (product overview onward)

---

*delight.ai · Powered by Sendbird · San Mateo, CA*
