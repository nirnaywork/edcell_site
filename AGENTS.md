# ED-Cell MECS Website Context

## Project Purpose

This website is for the Entrepreneurship Development Cell (ED-Cell) at MECS, with the Home page focused on the upcoming flagship event, E-Summit 2026.

## Stack

- Frontend: Next.js App Router + React + Tailwind CSS
- Backend: Node.js + Express.js in `/server`
- Database/storage/auth: Supabase client helper in `/client/lib/supabase.js`
- Language: JavaScript

## Folder Structure

- `/client`: Next.js app
  - `/app`: routes, root layout, global styles
  - `/components`: reusable UI and layout components
  - `/data`: editable site content and event data
  - `/lib`: shared helpers, including Supabase
  - `/public`: static assets
- `/server`: Express skeleton with `/health`
- `AGENTS.md`: project context and conventions

## Color Tokens

All colors are defined as CSS variables in `/client/app/globals.css` and mapped in `/client/tailwind.config.js`.

- `primary`: `#731919`
- `primary-dark`: `#4A0F0F`
- `primary-light`: `#9A2A2A`
- `accent`: `#D4A24C`
- `accent-light`: `#F3E3BF`
- `bg`: `#FFF9F5`
- `surface`: `#FFFFFF`
- `tint`: `#F7E8E6`
- `dark`: `#2A0A0A`
- `text`: `#1F1212`
- `text-muted`: `#6B5B5B`
- `border`: `#E8D5D2`
- `success`: `#2E7D4F`
- `warning`: `#C98A1B`
- `error`: `#D13B3B`

Use the 60-30-10 balance: mostly light backgrounds, strong maroon/wine structure, and gold only for highlights, badges, and primary actions. Never use gold text on white.

## Typography

- Headings: Playfair Display via `next/font`
- Body: Inter via `next/font`
- Tone: premium, bold, entrepreneurial, modern, spacious, and uncluttered

## Component Conventions

- Use reusable components from `/client/components`: `Button`, `SectionHeading`, `Card`, `Container`, and `Badge`.
- Shared layout is handled by `Navbar` and `Footer`, included in `/client/app/layout.js`.
- Keep routes thin and compose from components/data.
- Use lucide-react icons for UI icons.
- Components must use Tailwind color tokens, not raw hex values.

## Hard Rules

- No hardcoded hex values inside components.
- Editable text and event content live in `/client/data`.
- Respect responsive, accessible, keyboard-friendly UI patterns.
- Use semantic HTML and visible focus states.

## Pages Status

- [x] Home: done
- [ ] E-Summit: pending placeholder
- [ ] Past Events: pending placeholder
- [ ] Gallery: pending placeholder
- [ ] Core Team: pending placeholder
- [ ] Contact: pending placeholder

## Layout system

- **Layout**: Use ONE Container component with max-width max-w-[92rem] and consistent horizontal padding: px-6 md:px-12 xl:px-24. Use a standard 12-column grid (grid-cols-1 md:grid-cols-12) where appropriate for complex sections.
- **Spacing**: Follow a 4/8px rhythm. Standard section padding is py-20 md:py-32 (or py-16 md:py-24). Remove arbitrary mt-14 or py-28.
- **Fluid Type Scale**: 
  - Display: 	ext-[clamp(3rem,8vw,8rem)]`n  - H1: 	ext-[clamp(2.5rem,6vw,5.5rem)]`n  - H2: 	ext-[clamp(2rem,5vw,4.5rem)]`n  - H3: 	ext-[clamp(1.5rem,3vw,3rem)]`n  - Body: base 	ext-base or 	ext-lg`n- **Scroll & Viewport**: Add scroll-mt-24 to all anchor targets. Use min-h-[100svh] or min-h-svh instead of 100vh.
- **Overflow**: Use overflow-x: clip only as a last resort on the ody or wrapping main.
