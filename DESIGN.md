---
name: Datacenter Minimalism (Dark Mode)
colors:
  surface: '#22052f'
  surface-dim: '#22052f'
  surface-bright: '#4c2d58'
  surface-container-lowest: '#1d012a'
  surface-container-low: '#2c0e38'
  surface-container: '#30133c'
  surface-container-high: '#3b1d48'
  surface-container-highest: '#472853'
  on-surface: '#f8d8ff'
  on-surface-variant: '#d1c1d8'
  inverse-surface: '#f8d8ff'
  inverse-on-surface: '#42244e'
  outline: '#9a8ca2'
  outline-variant: '#4e4256'
  surface-tint: '#e1b6ff'
  primary: '#e1b6ff'
  on-primary: '#4c007c'
  primary-container: '#a100ff'
  on-primary-container: '#f9e8ff'
  inverse-primary: '#8e00e2'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#6a6c6c'
  on-tertiary-container: '#eeeeee'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f2daff'
  primary-fixed-dim: '#e1b6ff'
  on-primary-fixed: '#2e004e'
  on-primary-fixed-variant: '#6c00ae'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#22052f'
  on-background: '#f8d8ff'
  surface-variant: '#472853'
typography:
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1rem
  tile-padding: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

# Design System: Datacenter Minimalism (v2.2 - Dark Mode)

## 1. Core Philosophy
This portfolio represents an enterprise-grade Infrastructure and Systems Engineer. The aesthetic is "Datacenter Minimalism," shifted to a high-contrast dark-mode environment. It must look like a high-fidelity technical manual, a professional monitoring console, or a premium internal engineering documentation portal.

**Core Tenets:**
- **Precision over Flash:** Information density and readability are the highest priorities.
- **Zero Layout Shift:** Elements do not bounce, scale, or float. The grid is bolted to the DOM.
- **Binary Interactions:** State changes are immediate. No easing, no spring physics.
- **Systemic Terminology:** We engineer, architect, and optimize. We do not "craft," "create," or "imagine."

---

## 2. Color Palette (High-Contrast Technical)
We rely on stark contrast to communicate clarity. This dark-mode variant utilizes a deep black surface with crisp white text and technical purple accents.

| Element | Hex Code | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Background (Base)** | `#000000` | `bg-black` | The absolute background of the app and all tiles. |
| **Borders (Grid)** | `#9672A2` | `border-[#9672A2]` | The 1px solid border applied to every Bento tile. |
| **Text (Primary)** | `#FFFFFF` | `text-white` | Headings, project titles, and primary data points. |
| **Text (Secondary)**| `#9672A2` | `text-[#9672A2]` | Body copy, summaries, and descriptions. |
| **Accent (Active)** | `#A100FF` | `text-[#A100FF]` | "Accenture Purple". Reserved for hover states, active links, and terminal prompts. |

---

## 3. Typography
Typography creates the structural hierarchy. We combine a bold, condensed headline font for impact with a clean geometric sans-serif for readability and a strict monospace font for technical data.

*   **Headline Typeface:** `Anton`.
    *   *Usage:* Large titles and section headers. Bold and condensed.
*   **Body Typeface:** `Inter`.
    *   *Weights:* `font-normal` for body text.
*   **Secondary Typeface (Technical Data):** `JetBrains Mono`.
    *   *Usage:* Exclusively used for technology stacks, deployment dates, and environment constraints. 
    *   *Style:* Rendered in technical mono to mimic system output.

---

## 4. The Master Layout (Flat Bento Grid)
The entire application is a single CSS Grid. There are no horizontal "bands" or fullscreen sections. 

**Grid Rules:**
*   **Container:** Max-width constrained (`max-w-7xl mx-auto`), with uniform padding (`p-4 md:p-8`).
*   **The Tiles:** Every piece of content lives inside a Tile.
*   **Tile Constraints:**
    *   Background: `bg-black`
    *   Border: `border border-[#9672A2]`
    *   Corners: Subtle rounding (`rounded-sm`).
    *   Padding: Internal padding must be uniform across all tiles (`p-6`).
    *   Shadows: **None.** Depth is established purely by borders.

---

## 5. Interactive States & Motifs
Interaction must feel like a lightweight hardware toggle. 

*   **The Hover State:** When a cursor enters an interactive tile, the border snaps to the accent color instantly: `hover:border-[#A100FF]`.
*   **The Motif (`>`):** Representing forward momentum and command-line execution. 
    *   Use `>` as the bullet point for all lists. 
    *   On interactive project cards, place a subdued `>` in the bottom right corner. On hover, this turns Accent Purple.

---

## 6. Component Blueprints

### A. The Identity Tile (Hero)
*   **Position:** Top-left, spanning maximum width on mobile, 2 columns on desktop.
*   **Content:** Name (Anton, H1), Role (Incoming System and Application Services Associate), and a mission statement focusing on resilient IT infrastructure and automation.

### B. The Infrastructure Matrix (Skills)
*   **Format:** Structured, tabular layout.
*   **Styling:** Category headers in Primary Sans-Serif. List items in Secondary Monospace prefixed with `>`.

### C. System Logs (Project Cards)
*   **Format:** Standard 1x1 or 1x2 Bento Tiles.
*   **Header:** Project Name (White, Anton).
*   **Body:** 1-2 sentences on architectural problem solving (Purple-Grey, Inter).
*   **Footer:** Tech stack separated by pipes in Monospace.