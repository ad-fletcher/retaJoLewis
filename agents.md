# Frontend Structure

This project is built using **Next.js 16** with the **App Router** and **React 19**. It utilizes **Tailwind CSS v4** for styling, with a custom design system defined in CSS.

## 🏗 Component Architecture

Components are organized by feature in the `app/components/` directory:

- **Navigation & Layout**
  - `header/`: Main site navigation and branding.
  - `footer/`: Site footer with links and information.
- **Section-Specific**
  - `hero/`: Landing page hero section.
  - `about/`: Content for the about section/page.
  - `cta/`: Call-to-action components.
  - `globe/`: Interactive D3-powered globe.
  - `speak/`: Components for speaking engagements (includes animated variants).
  - `logos-carousel/`: Scrolling carousel for partner logos.
- **Common UI**
  - `ui/`: Reusable primitive components.
    - `button.tsx`
    - `arrowButton.tsx`

## 🎨 Styling & Design System

Styling is handled through a combination of Tailwind CSS v4 and standard CSS files.

### 📍 Key Styling Files
- `app/globals.css`: Root Tailwind imports and global base styles (backgrounds, foregrounds).
- `app/system.css`: **The Core Design System**. This file contains the `@theme` block for Tailwind v4, defining:
  - **Typography**: Geist (Sans), Playfair Display (Serif), DD, and JetBrains Mono.
  - **Colors**: Custom palette including `--color-red` (#9e1b32), `--color-orange` (#720e1e), and `--color-yellow` (#d4af37).
  - **Shadows & Effects**: A comprehensive set of shadows (small to fullscreen).
  - **Animations**: Custom keyframes like `blink` and `fade-in`.
- `app/logos-carousel/source.module.css`: Component-specific CSS modules for specialized styling.

### 📐 Configuration
- **Tailwind CSS v4**: Configured via `@tailwindcss/postcss` in `package.json` and CSS-based theme definitions in `app/system.css`.
- **PostCSS**: Handled via `postcss.config.mjs`.

## 📂 Page Structure

- `app/page.tsx`: Home Page
- `app/about/page.tsx`: About Page
- `app/Affiliations/page.tsx`: Affiliations Page
- `app/Contact/page.tsx`: Contact Page
- `app/Speaking/page.tsx`: Speaking Page
- `app/Vanderbilt/page.tsx`: Vanderbilt Project Page
- `app/privacy/page.tsx`: Privacy Policy

## 🛠 Utilities
- `lib/utils.ts`: Contains helper functions (e.g., `cn` for class merging).

