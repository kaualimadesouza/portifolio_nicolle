# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

This is a personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS 4.

### Routing

Uses react-router-dom v7 with four pages:
- `/` - Home
- `/about` - About
- `/work` - Work/Portfolio
- `/contact` - Contact

Routes are defined in `src/App.tsx`. Each page component lives in `src/pages/`.

### Components

UI components are in `src/components/ui/` and exported via barrel file (`index.ts`). The codebase uses a card-based design system with reusable components like:
- `Card` - Base card wrapper with rounded corners and shadow
- `Navigation` - Fixed centered pill-style navbar with active state highlighting
- Social media cards (Instagram, LinkedIn, Pinterest, Twitter)

### Styling

- Tailwind CSS 4 with PostCSS
- Global styles in `src/index.css`
- Components use Tailwind utility classes directly
