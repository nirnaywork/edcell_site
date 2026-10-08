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
