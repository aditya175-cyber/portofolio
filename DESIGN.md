---
name: Cupertino Minimalist Portfolio
colors:
  surface: '#faf8fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#414753'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#717785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005cbb'
  primary: '#0059b5'
  on-primary: '#ffffff'
  primary-container: '#0071e3'
  on-primary-container: '#fcfbff'
  inverse-primary: '#abc7ff'
  secondary: '#5f5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe1'
  on-secondary-container: '#636264'
  tertiary: '#9b3f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c25100'
  on-tertiary-container: '#fffaf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#341000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#faf8fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.012em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.008em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
---

## Brand & Style

This design system channels the refined, product-first restraint of modern Cupertino design guidelines. It positions the portfolio not merely as a showcase of work, but as a premium editorial hardware reveal. Every artifact, project case study, and metric is treated like precision-milled hardware presented on an immaculate stage.

### Aesthetic Persona & Tone
- **Atmosphere:** Pure, luminous, hyper-focused, quiet luxury.
- **Target Audience:** Design leaders, executive recruiters, luxury brand partners, and discerning technologists seeking peerless craft and meticulous attention to detail.
- **Emotional Resonance:** Quiet confidence, absolute clarity, tactile satisfaction, and effortless sophistication.

### Core Stylistic Pillars
- **Radical Reduction:** Eliminate non-essential ornamentation. Structure and visual pacing take precedence over decorative clutter.
- **Atmospheric Translucency:** Frosted glass materials (`backdrop-filter`) connect layers seamlessly without heavy drop shadows.
- **Precision Alignment:** Continuous optical balance using proportional spacing scales and generous breathing room.

## Colors

The color architecture is built on absolute optical purity, leveraging monochromatic tonal hierarchy with a singular, restrained interactive blue accent.

### Surface Architecture
- **Canvas (`#FFFFFF`):** Base canvas background for total luminous clarity.
- **Primary Container (`#F5F5F7`):** Soft satin gray for large grouping modules, media bays, and primary card backgrounds.
- **Secondary Container (`#FAFAFA`):** Barely-there off-white for nested content, secondary cards, and inline inputs.
- **Frosted Veil (`rgba(255, 255, 255, 0.8)`): Dynamic translucent layer with Gaussian blur for sticky navigations, floating toolbars, and contextual sheets.

### Ink & Contrast Tiers
- **Ink Primary (`#1D1D1F`):** Deep charcoal-black for headlines, critical labels, and high-emphasis body text. Avoids pure digital `#000000` to prevent harsh optical vibration.
- **Ink Secondary (`#86868B`):** Neutral gray calibrated for secondary metadata, subtitles, dates, and caption details.
- **Ink Tertiary (`#A1A1A6`):** Low-contrast tertiary gray for disabled states, placeholder text, and subtle icon strokes.

### Accent & Micro-borders
- **Interactive Blue (`#0071E3`):** Apple system blue reserved strictly for links, primary calls to action, and active state indicators.
- **Hairline Border (`#E5E5EA`):** Crisp micro-border for card perimeters, table dividers, and subtle component boundaries.
- **Hairline Border Subdued (`#F2F2F7`):** Ultra-faint internal divider line.

## Typography

The typographic hierarchy utilizes **Inter** configured with optical metric tuning to achieve the crisp, engineered rhythm characteristic of Apple’s San Francisco typeface. Negative tracking is applied progressively as glyph sizes scale upward to eliminate loose optical gaps in display roles.

### Typographic Principles
- **Tracking Tightness:** Larger headings receive negative letter-spacing (`-0.015em` to `-0.03em`), creating the taut, cohesive lockup signature of high-end hardware introductions.
- **Body Rhythm:** `body-lg` at 19px mirrors the editorial cadence of Apple’s long-form product narratives, preserving comfortable reading distance across desktop viewing viewports.
- **Purity of Weights:** Limit usage strictly to `Regular (400)`, `Medium (500)`, and `SemiBold (600)`. Heavy bold and black weights are strictly avoided to sustain lightness and elegance.

## Layout & Spacing

The layout is anchored in a responsive 12-column layout that balances expansive white space with concentrated content islands.

### Canvas & Grid Structure
- **Desktop (≥ 1024px):** Max container width capped at `1280px` centered with variable margins. 12-column grid with `2rem` (32px) gutters. Section padding leverages generous `space-4xl` (96px) vertically to give project showcases editorial prominence.
- **Tablet (768px - 1023px):** 8-column grid with `1.5rem` (24px) gutters and `2.5rem` (40px) outer margin bounds.
- **Mobile (< 768px):** 4-column fluid grid with `1rem` (16px) gutters and `1.25rem` (20px) outer edge padding.

### Spacing Philosophy
- Layouts alternate between edge-to-edge subtle grey cards (`#F5F5F7`) and pure white framing (`#FFFFFF`).
- Grouped elements (e.g., project tags, metadata lists) use tight spacing (`space-xs` to `space-sm`), juxtaposed against macro spacing between sections (`space-3xl` to `space-4xl`).

## Elevation & Depth

Visual hierarchy rejects heavy, dirty drop shadows. Depth is achieved via real-time optical layering: translucent glass surfaces, subtle micro-borders, and barely perceptible ambient glows.

### Elevation Tiers
- **Tier 0 (Base):** Solid `#FFFFFF` canvas. Flat, pure foundation.
- **Tier 1 (Surface Cards):** Background `#F5F5F7` with a hair-thin perimeter `1px solid #E5E5EA`. No shadow required; edge separation is achieved entirely via contrast differential.
- **Tier 2 (Floating Controls & Navigation):** `rgba(255, 255, 255, 0.8)` with backdrop filter `blur(20px) saturate(180%)`. Border is `1px solid rgba(255, 255, 255, 0.65)` layered over an ambient shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.04)`.
- **Tier 3 (Modals & Overlays):** Solid `#FFFFFF` or elevated acrylic frosted background, framed by `1px solid rgba(0, 0, 0, 0.08)` with dual ambient diffusion:
  - `0 12px 32px -4px rgba(0, 0, 0, 0.06)`
  - `0 4px 12px -2px rgba(0, 0, 0, 0.03)`

## Shapes

The design language embodies modern Apple hardware squircle geometry, combining smooth continuous curves with pill-shaped control elements.

### Curvature Taxonomy
- **Standard Cards & Presentation Modules:** `rounded-2xl` (16px) to `rounded-3xl` (24px) to simulate polished aluminum and glass unibody chassis.
- **Interactive Buttons & Badges:** `rounded-full` (9999px pill) for touchable clarity and friendly invitation.
- **Nested Inner Items:** Inner media containers inside cards use `rounded-xl` (12px) to ensure concentric alignment with outer card borders (`outer radius = inner radius + padding`).

## Components

### Buttons
- **Primary Button:** Pill-shaped (`rounded-full`), `#0071E3` solid background, `#FFFFFF` label (`label-md`), padding `10px 22px`. Hover shifts to `#0077ED` with scale transform `scale(1.01)`. Active transition dips to `scale(0.98)`.
- **Secondary (Neutral Pill):** Background `#F5F5F7`, border `1px solid #E5E5EA`, text `#1D1D1F`. Hover transition sets background to `#E8E8ED`.
- **Ghost Action:** Pure transparent background with `#0071E3` text and subtle chevron disclosure icon. Underline only on focus.

### Chips & Tags
- **Metadata Tag:** Pill shape (`rounded-full`), height `28px`, padding `4px 12px`, background `#FFFFFF` or `#F5F5F7`, micro-border `1px solid #E5E5EA`, text `#86868B` in `label-sm`.
- **Active State / Role Tag:** Background `rgba(0, 113, 227, 0.08)`, border `1px solid rgba(0, 113, 227, 0.2)`, text `#0071E3`.

### Cards & Case Study Bays
- **Project Showcase Card:** High-radii chassis (`rounded-3xl`), background `#F5F5F7`, border `1px solid #E5E5EA`, padding `2.5rem` (40px). Internal imagery or prototype frames sit inside `rounded-2xl` containers with subtle inset border `1px solid rgba(0, 0, 0, 0.04)`.
- **Interactive Hover:** Card border lightens or transitions to `1px solid #D2D2D7` alongside subtle image scale transition (`scale(1.02)` over 400ms ease-out).

### Lists & Key-Value Metrics
- **Data Rows:** Divided by hairline rule (`1px solid #F2F2F7`). Labels in `#86868B` (`body-sm`), values in `#1D1D1F` (`label-md` or `headline-sm`).
- **Feature Check Items:** Small muted circular icon with hairline blue checkmark, separated by `space-sm` gap.

### Form Inputs & Filters
- **Text Inputs:** Height 44px, `rounded-xl`, background `#FAFAFA`, border `1px solid #E5E5EA`, text `#1D1D1F`, placeholder `#A1A1A6`. Focus states shift border to `#0071E3` with an outer halo of `0 0 0 3px rgba(0, 113, 227, 0.15)`.

### Navigation Dock & Header
- **Floating Island Navigation:** Fixed top or bottom-floating pill dock. Background `rgba(255, 255, 255, 0.8)` with `backdrop-filter: blur(20px)`, border `1px solid rgba(255, 255, 255, 0.7)`, elevated by ambient micro-shadow. Nav links use `label-md` in `#1D1D1F` with active items denoted by smooth pill backing `#F5F5F7`.
