# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a romantic React anniversary webpage built with modern web technologies. The application features animated decorations, a real-time relationship counter, and interactive elements to celebrate a special anniversary.

## Development Commands

**Start development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

**Preview production build:**

```bash
npm run preview
```

**Run linting:**

```bash
npm run lint
```

**Format code with Prettier:**

```bash
npm run format
```

**Check code formatting:**

```bash
npm run format:check
```

## Architecture

### Tech Stack

- **React 19** with hooks (useState, useEffect, useRef)
- **Vite** for build tooling and development server
- **Tailwind CSS v4** for styling with custom theme configuration
- **PostCSS** with Tailwind integration

### Component Structure

The app follows a component-based architecture with clear separation of concerns:

- **App.jsx** - Root component managing modal state and scroll functionality
- **components/Header.jsx** - Main header with surprise button and scroll trigger
- **components/CounterSection.jsx** - Real-time anniversary counter with date/time display
- **components/Decorations.jsx** - Animated hearts and flowers background effects
- **components/Modal.jsx** - Surprise message modal with animations
- **components/Signature.jsx** - Final signature section
- **components/ScrollDown.jsx** - Smooth scroll navigation component

### Styling System

- **Custom Tailwind theme** defined in `src/styles/index.css` with custom CSS variables
- **Color palette**: Pink gradients, purple accents, lavender text, dark backgrounds
- **Custom animations**: Fall, float, fade-up/down, scale-in, pulse effects
- **Responsive design** using clamp() functions for fluid typography
- **Animation delays** implemented via inline styles for sequential effects

### Key Features

- **Real-time counter**: Updates every second showing relationship duration
- **Animated decorations**: Hearts and flowers with CSS keyframe animations
- **Modal system**: Surprise message with backdrop and animated entrance
- **Smooth scrolling**: Programmatic scroll behavior between sections
- **Mobile responsive**: Fluid design adapting to all screen sizes

### State Management

- Simple React hooks for modal visibility (`useState`)
- Real-time date updates with `setInterval` in `useEffect`
- Ref-based scroll targeting (`useRef`)

## Configuration Files

- **vite.config.js** - Vite configuration with React and Tailwind plugins
- **eslint.config.js** - ESLint setup with React hooks and refresh plugins
- **postcss.config.js** - PostCSS configuration for Tailwind processing
- **package.json** - Dependencies and scripts configuration

## Development Notes

- The counter logic in `CounterSection.jsx` calculates from one year ago from current date
- Custom CSS animations are defined in the Tailwind theme section
- Component styling uses Tailwind utility classes with some custom CSS for complex animations
- All text content is in Spanish for the romantic anniversary theme
