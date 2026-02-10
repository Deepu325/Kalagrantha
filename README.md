# Imago Arts & Movement Ecosystem

A premium, scalable, multi-vertical website for a culturally rooted yet globally positioned arts, movement, and education ecosystem.

## Architecture
- **Parent Brand**: Main landing page at `/`
- **Verticals**:
  - Art Hub: `/art-hub`
  - Movement & Epics: `/movement-epics`
  - Yoga TTC: `/yoga-ttc`
  - Creative Hub: `/creative-hub`
  - Events: `/events-entertainment`

## Tech Stack
- **Frontend**: React, React Router, GSAP, Lenis, SCSS
- **Backend**: Node.js, Express, MongoDB (MERN Stack)
- **Styling**: Custom SCSS with multi-theming

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed (optional, server will run without it but data persistence will fail)

### Installation
1. Install frontend dependencies:
   ```bash
   npm install
   ```
2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

### Running the App
1. Start the backend:
   ```bash
   cd server
   npm run start
   ```
2. Start the frontend:
   ```bash
   npm run dev
   ```

## Features
- **Dynamic Navigation**: Global Navbar switches to Vertical-specific sub-nav when entering a vertical route.
- **Theming**: Each vertical has a distinct visual identity managed through CSS variables.
- **Smooth Scroll**: Integrated with Lenis for a premium feel.
- **Responsive**: Fully optimized for international institutional standards.
