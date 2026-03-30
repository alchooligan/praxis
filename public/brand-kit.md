# Mantl — Brand Kit

## Brand Name
**Mantl** (stylized lowercase in logo: "Mantl")

## Tagline
"Automatizăm munca repetitivă din afacerile mici și medii."

## Brand Voice
- Direct, conversational, Romanian "tu" form
- No corporate jargon, no buzzwords
- Specific numbers over vague promises
- Describes the client's pain, not our technology

---

## Colors

### Primary
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Blue** (Primary) | `#0046C8` | rgb(0, 70, 200) | CTAs, buttons, links, accent text |
| **Blue Light** | `#E8EEFF` | rgb(232, 238, 255) | Hover backgrounds, badges |
| **Blue 5%** | `rgba(0,70,200,0.05)` | — | Card hover states, subtle backgrounds |
| **Blue 10%** | `rgba(0,70,200,0.10)` | — | Borders on accent elements |
| **Blue 20%** | `rgba(0,70,200,0.20)` | — | Stronger accent borders |

### Neutrals
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Dark** | `#0f1114` | rgb(15, 17, 20) | CTA box backgrounds |
| **Text Primary** | `#181c21` | rgb(24, 28, 33) | Headlines, body text |
| **Text Secondary** | `#5a5e6a` | rgb(90, 94, 106) | Descriptions, subtitles |
| **Text Tertiary** | `#8a8e9a` | rgb(138, 142, 154) | Timestamps, labels, captions |
| **Surface** | `#f7f9ff` | rgb(247, 249, 255) | Page background |
| **White** | `#ffffff` | rgb(255, 255, 255) | Card backgrounds, alternating sections |
| **Border** | `#e8eaef` | rgb(232, 234, 239) | Card borders, dividers |

### Accent (used sparingly)
| Name | Hex | Usage |
|------|-----|-------|
| **Green** | `#22c55e` | Success states, WhatsApp references, "active" indicators |
| **Orange** | `#f59e0b` | Warning states, invoice/calendar icons |
| **Coral** | `#FF7F50` | Case study tags, team role labels |
| **Red** | `#ef4444` | "Ce NU facem" X marks, error/refused states |

---

## Typography

### Font Family
**DM Sans** (Google Fonts)
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Subsets: Latin, Latin Extended

### Type Scale
| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| **H1 (Hero)** | clamp(2.2rem, 5vw, 3.4rem) | 700 | -0.03em | 1.1 |
| **H2 (Section title)** | clamp(2rem, 4vw, 3rem) | 700 | -0.02em | 1.15 |
| **H3 (Card title)** | 1.1-1.2rem | 600 | -0.01em | 1.35 |
| **H4 (Pain card title)** | 1.2rem | 600 | -0.01em | 1.35 |
| **Body** | 0.9-1.05rem | 400-500 | 0 | 1.6-1.7 |
| **Small/Label** | 0.7-0.82rem | 600-700 | 0.06-0.12em | 1.4 |
| **Button text** | 0.82rem | 600 | 0.08em | — |
| **Nav links** | 0.85rem | 500 | 0.02em | — |
| **Footer links** | 0.85rem | 400 | 0 | — |

### Accent Text Style
- Color: `#0046C8` (blue)
- Text-transform: UPPERCASE
- Used on ONE keyword per section heading (e.g., "O zi din afacerea ta, AUTOMATIZATĂ")

---

## Logo
- Text-only: "Mantl" in DM Sans Bold (700)
- Size: 1.4rem in nav, 1.6rem in footer
- Color: `#181c21` (text primary) on light backgrounds
- No icon, no symbol — just the wordmark

---

## Buttons

### Primary Button
```
Background: #0046C8
Color: #ffffff
Padding: 0.9rem 2.4rem
Border-radius: 100px (fully rounded)
Font: DM Sans 600, 0.82rem, uppercase
Letter-spacing: 0.08em
Hover: box-shadow 0 8px 30px rgba(0,70,200,0.25), translateY(-2px)
```

### Ghost Button
```
Background: transparent
Color: #0046C8
Border: 1.5px solid #e8eaef
Same padding, font, border-radius as primary
Hover: border-color #0046C8, background rgba(0,70,200,0.05)
```

### CTA Button (dark section)
```
Background: #0046C8
Color: #ffffff
Padding: 1rem 2.8rem
Same border-radius, font
Hover: background #ffffff, color #0f1114, translateY(-2px)
```

---

## Cards

### Standard Card (pain-card)
```
Background: #ffffff
Border: 1px solid #e8eaef
Border-radius: 1.25rem (20px)
Padding: 2.5rem
Hover: box-shadow 0 12px 40px rgba(0,70,200,0.06), border-color rgba(0,70,200,0.12), translateY(-4px)
```

### Icon Container (pain-icon)
```
Width/Height: 56px
Border-radius: 14px
Background: rgba(0,70,200,0.05)
Icon: Material Symbols Outlined, 26px, color #0046C8
```

---

## Icons
- **Library**: Google Material Symbols Outlined
- **Weight**: 300
- **Fill**: 0
- **Size**: 20px (default), 26px (cards), 18px (inline)
- **Color**: `#0046C8` (primary), or contextual (green for success, orange for warning, red for error)

---

## Layout

### Section Structure
- Hero sections: max-width 800px, centered text
- Body sections: max-width 1000px, left-aligned
- Landing page hero: max-width 1200px (has 2-column grid)
- Section padding: 5rem vertical, 2rem horizontal

### Backgrounds (alternating)
- White: `#ffffff`
- Surface: `#f7f9ff`
- Dark (CTA only): `#0f1114`

---

## Spacing
| Token | Value | Usage |
|-------|-------|-------|
| Section padding | 5rem 2rem | Between sections |
| Card padding | 2.5rem | Inside cards |
| Card gap | 1.5rem | Between cards in grid |
| Element gap | 0.75-1rem | Between icon and text |
| Text gap | 1-1.5rem | Between heading and paragraph |

---

## Animations
- Card hover: translateY(-4px), 0.3s ease
- Button hover: translateY(-2px), 0.3s ease
- Section reveal: opacity 0→1, 0.6s ease-out
- Phone float: translateY(0→-8px→0), 5s ease-in-out infinite
- Marquee: translateX(0→-50%), 50s linear infinite

---

## Photography Style
- Clean, bright, professional
- Soft focus backgrounds
- Used for case studies only (scooters, dental clinic)
- Stored locally at /images/

---

## Social Media
- Instagram: @mantl.ro (TBD)
- Format: 1080x1080 square posts
- Use same color palette, DM Sans font
- Blue (#0046C8) as primary accent on white background
