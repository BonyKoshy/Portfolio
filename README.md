<div align="center">
  <h1 align="center">Engineering the Future: 2026 Gold Standard Portfolio</h1>
  <p align="center">
    A masterclass in modern web architecture. Built with React 19, Vite 7, and Feature-Sliced Design (FSD).
    <br />
    <a href="https://github.com/BonyKoshy/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/BonyKoshy/Portfolio/issues">Request Feature</a>
  </p>
</div>

<div align="center">

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FSD](https://img.shields.io/badge/Architecture-FSD-orange?style=for-the-badge)](https://feature-sliced.design/)

</div>

---

## About The Project

This project represents a shift from "building components" to **"architecting systems."** It serves as a living proof-of-concept for high-performance web engineering, utilizing the latest bleeding-edge technologies to deliver an application that is performant, scalable, and resilient.

Unlike traditional portfolios, this application adopts **Feature-Sliced Design (FSD)** to decouple business logic from UI, ensuring that the codebase remains maintainable as it scales. It fully embraces the **React 19** ecosystem and leverages **Vite 7** for lightning-fast development and production builds.

### ✨ Key Features

- **🏗️ Feature-Sliced Architecture (FSD):** Organized into strict layers to enforce unidirectional data flow and prevent spaghetti dependencies:
  - `app`: Global settings, styles, and providers.
  - `pages`: Compositional layer for constructing full pages.
  - `widgets`: Self-contained UI blocks (e.g., Header, Footer).
  - `features`: User interactions (e.g., ThemeToggle, ContactForm).
  - `entities`: Business domain models (e.g., Project, Profile).
  - `shared`: Reusable infrastructure code (UI kit, libs).
- **⚡ Bleeding Edge Performance:** Powered by **Vite 7** using the Rust-based Rolldown bundler principles (future-ready) and **React 19** for concurrent rendering features.
- **🎨 Modern Styling & Motion:**
  - **Tailwind CSS 4:**  Zero-runtime, utility-first styling with the new engine.
  - **Framer Motion:**  Declarative, production-ready animations and micro-interactions.
  - **Lucide Icons:**  Clean, consistent, and lightweight iconography.
- **♿ Headless Accessibility:** Built on **Radix UI** primitives and **React Helmet Async** to ensure semantic structure, keyboard navigation, and SEO optimization.
- **🌗 Smart Theming:** A persistent, system-aware dark mode implementation avoiding FOUC (Flash of Unstyled Content).

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BonyKoshy/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run optimize-images`: Runs the custom script to optimize assets in `public/`.
