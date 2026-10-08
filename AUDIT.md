# Layout & Alignment Audit

| ID | Page/Section | Viewport(s) | What is wrong | Severity | Planned fix |
|---|---|---|---|---|---|
| 01 | Global Navbar | All | Logo box ("ED") and text ("ED-CELL MECS") are not aligned to the same baseline/center. | Fixed | Fixed flex alignment and line-heights in the Navbar logo link. Ensure identical baselines. |
| 02 | Home Hero | All | "E-SUMMIT 2026" text wraps awkwardly or overflows. Font sizes use magic clamp values without a consistent fluid type scale. | Fixed | Implemented fluid type scale token system. Apply `text-balance` to headings. Ensure max-width on text container prevents awkward wrapping. |
| 03 | Home Hero | Desktop | The Countdown boxes have a misaligned top-right border / clipped overflow. | Fixed | Removed overflow-hidden if clipping, or fix grid borders so 1px gaps render properly for the 4 boxes. |
| 04 | Home Hero | Mobile | Hero height `100vh` causes issues with mobile browser chrome. | Won't fix | Already uses svh calc or `min-h-svh` instead of arbitrary height calculations. |
| 05 | Home / What to Expect | All | "02 WHAT TO EXPECT A FOCUSED MIX OF IDEAS..." left side has weird line-heights and sizing compared to the rest of the site. | Fixed | Applied 12-col layout components or fluid typography scale instead of one-off sizes. |
| 06 | Home / What to Expect | Desktop | Right-side grid has uneven height cards; items overlap or have broken alignment ("Ideathon & Pitching" card is misaligned downwards). | Fixed | Refactored to 12-col 12-column layout. Use `grid-rows-subgrid` or flex column with `h-full` to equalize card heights. Remove uneven magic layout grids. |
| 07 | Home / Stats | Desktop | "RS. 20,000" stat is center-aligned while others are left-aligned, breaking the grid rhythm. | Fixed | Applied text-left to all stat blocks. Ensure the grid uses standard gaps and columns. |
| 08 | Event Flow | <768px | Time column wraps to 2 lines and pushes titles out of line with the vertical connector. | Fixed | Set fixed width grid column (e.g., `w-24 shrink-0`) so it doesn't wrap and remains aligned. |
| 09 | Event Flow | All | Switching tabs causes layout jumps because the content height changes. | Fixed | Added min-h panel container or use Framer Motion to smoothly animate height. |
| 10 | Global | All | Spacing/padding between sections is inconsistent (arbitrary `py-12`, `py-20`, `mt-14`). | Fixed | Standardized py-20 md:py-32 padding system (e.g., `py-16 md:py-24`) and apply it globally. |
| 11 | Global | All | Missing `scroll-margin-top` for anchor links, causing the sticky navbar to cover section tops. | Fixed | Added scroll-mt-24 (or equivalent navbar height) to all sections with IDs. |
| 12 | Gallery Placeholder | All | The text "EVENT PHOTOS COMING SOON" is awkwardly placed. The image slot itself has arbitrary aspect ratio. | Fixed | Fixed PhotoSlot layout to use consistent tokens. |
| 13 | Global Layout | All | `Container` uses `px-5 sm:px-8 lg:px-10` while other things might break out. Need 1 unified layout container. | Fixed | Standardized Container to `px-6 md:px-12 xl:px-24` or similar, apply consistently. |
