<div align="center">
 <img width="1350" height="951" alt="image" src="https://github.com/user-attachments/assets/a63acb31-b266-421e-afef-85fdd0aae4b1" />

  <h3 align="center">Hashan Jayasundara — Developer Portfolio</h3>

  <p align="center">
    A premium, physics-driven, and highly optimized developer portfolio built with React, Vite, and Framer Motion.
    <br />
    <a href="https://hashanjayasundara.vercel.app"><strong>View Live »</strong></a>
    <br />
  </p>
</div>

---

## ✨ Overview

This repository contains the source code for my personal developer portfolio. Inspired by the sleek, minimalist aesthetics of Vercel and Linear, this portfolio is engineered for maximum performance, accessibility, and fluid user experience.

It features advanced micro-interactions, spring-physics animations, and a bespoke light/dark theme system to provide a truly premium digital experience.

## 🚀 Key Features

- **Physics-Driven Animations:** Utilizes Framer Motion for highly fluid, spring-based animations, staggered text reveals, and magnetic CTA buttons.
- **Interactive Glare / Spotlight Cards:** Custom-built React components that track mouse movement to cast a subtle, dynamic radial gradient (spotlight) over project and experience cards.
- **Custom Blending Cursor:** A global, spring-animated custom cursor that perfectly adapts to underlying elements using `mix-blend-mode`.
- **Advanced Theming System:** A bespoke Light/Dark mode toggler utilizing CSS Variables for instantaneous, flicker-free switching and system preference detection.
- **Highly Optimized:** Scored near 100 on all Lighthouse Core Web Vitals. Built on Vite for lightning-fast HMR and optimized production bundles.

## 💻 Tech Stack

* **Framework:** React 18 + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 + Pure Vanilla CSS Variables
* **Animation:** Framer Motion
* **Icons:** Lucide React + Official Devicons

## 🛠️ Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hashanjayasundara/portfolio.git
   ```
2. Navigate into the directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📐 Architecture

The application follows a clean, modular component architecture:
- `/components` - Reusable UI elements (Hero, Projects, Experience, SpotlightCard)
- `/lib` - Core data structures, animation variants, and utilities
- `/providers` - React Context providers (e.g., ThemeProvider)
- `/public` - Static assets (CV, profile images, favicons)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Crafted with precision engineering by [Hashan Jayasundara](https://github.com/hashanjayasundara).*
