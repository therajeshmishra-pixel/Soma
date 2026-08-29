# Soma Wellness Platform - Design System & Branding Guidelines

This document outlines the core design language, typography, color palette, and component structure for the Soma Mukherjee Wellness Platform. It should be used as the definitive reference when creating new pages or components using Stitch.

## 1. Core Aesthetic: "Liquid Glass"
The platform embraces a "Liquid Glass" aesthetic—a blend of warm minimalism, refined transparency, and smooth, continuous narrative flow. It avoids sharp, clinical elements in favor of soft, empathetic, and organic structures.

### Key Principles:
*   **Warm Minimalism:** Generous white space, uncluttered layouts, and focus on essential content.
*   **Glassmorphism:** Use of blurred backgrounds and translucent surfaces to create depth without heaviness.
*   **Continuous Flow:** Avoiding disconnected components like tabs or accordions. Content should flow naturally as the user scrolls, creating a guided narrative experience.
*   **Empathetic Voice:** Design elements should support a nurturing, approachable, yet highly authoritative wellness environment.

## 2. Typography
We utilize a two-font system that balances classical authority with modern readability.

*   **Display / Headings:** `Italiana`
    *   **Usage:** Hero titles, section headers (`h1`, `h2`, `h3`), and high-impact quotes.
    *   **Styling:** Used primarily in regular weight, often with tighter letter spacing (`tracking-tight`).
*   **Body / Utility:** `Inter`
    *   **Usage:** All body text, navigation, buttons, labels, and forms.
    *   **Styling:** Primarily regular (`font-normal`) and medium (`font-medium`) weights. Use slate colors (`text-slate-600` or `text-slate-500`) for secondary text.

## 3. Color Palette
The palette is rooted in earth tones, sophisticated neutrals, and subtle wellness indicators.

*   **Backgrounds:**
    *   Primary: Off-white / warm pearl (e.g., `bg-background`, `bg-stone-50`).
    *   Secondary: Soft warm greys (`bg-stone-100`, `bg-[#f0ece1]`).
*   **Accents:**
    *   **Soma Gold:** `#b29267` (Used sparingly for primary actions, subtle borders, and key highlights).
*   **Text:**
    *   Primary text: Deep slate/charcoal (`text-slate-900` or `text-stone-800`).
    *   Secondary text: Medium slate (`text-slate-600`).

## 4. UI Components & Utilities

### Glass Panels
Use the following Tailwind class pattern for core cards and overlapping sections:
```css
backdrop-blur-md bg-white/70 border border-white/60 shadow-lg shadow-stone-200/20
```

### Buttons
Buttons should be softly rounded and avoid harsh drop shadows.
*   **Primary:** `bg-stone-900 text-white rounded-full px-8 py-3.5 hover:bg-stone-800 transition-colors`

### Cards
Cards must have substantial border radii (`rounded-[32px]` or `rounded-3xl`) and generous internal padding (`p-8` or `p-10`). Avoid 90-degree corners.

## 5. Layout & Vertical Rhythm
*   **Spacing:** Use consistent vertical rhythm (`py-12`, `py-16`) instead of excessive padding (`py-24`, `py-32`) to reduce scroll fatigue.
*   **Containers:** Use `max-w-7xl` or `max-w-6xl` for main content areas.

## 6. Iconography
*   **Library:** Material Symbols Outlined OR `lucide-react`.
*   **Styling:** Icons should typically be rendered in secondary colors (`text-slate-400` or `text-stone-500`).

## 7. Interactive Elements (Framer Motion)
*   **Scroll Reveal:** Elements should softly fade in and translate up on scroll (`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`).

## Directives for Stitch
1. Ensure layout scrolls continuously without hidden tabs.
2. Apply `backdrop-blur` and border utilities on overlapping elements.
3. Use `Italiana` font for section headers and `Inter` for body copy.
4. Default to soft, rounded corners (`rounded-3xl`) for all containers and imagery.
5. Limit color palette strictly to stone, slate, and gold/sage accent colors.
