# Apple iPhone 15 Pro - 3D Showcase

A modern, high-performance web experience showcasing the Apple iPhone 15 Pro using cutting-edge 3D web technologies. This project is a clone/tribute designed to demonstrate advanced animations and 3D model integration in a web environment.

## [Live Preview](https://3d-phone.pages.dev/)

## 🚀 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Chosen for its excellent developer experience, modular architecture, and optimization capabilities.
- **3D Engine**: [Three.js](https://threejs.org/) - The industry standard for rendering 3D content on the web via WebGL.
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - Used for buttery-smooth scroll-triggered animations and complex timelines.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Sass](https://sass-lang.com/) - Combining the utility-first speed of Tailwind with the structural power of SCSS.
- **UI Components**: [Headless UI](https://headlessui.com/) - For accessible, unstyled UI components.
- **Icons**: [Nuxt Icons](https://nuxt.com/modules/icons) - Modular SVG icon integration.

## 🏗️ Architecture & Style Decisions

### Why Nuxt 3?

While this is a client-side heavy application, Nuxt 3 was selected for:

- **File-based Routing**: Simplifies the organization of pages and layouts.
- **Auto-imports**: Streamlines development by automatically importing components and composables.
- **Performance**: Built-in optimizations for images and scripts.
- **SSR: false**: Optimized as a Single Page Application (SPA) since the focus is on interactive 3D content which requires client-side execution.

### Styles Architecture

We use a hybrid approach to styling:

- **Tailwind CSS**: Handles 90% of the layout and responsive design directly in the templates, ensuring a consistent design system.
- **SCSS (Sass)**: Organized in `assets/scss/`, used for complex custom animations, global resets, and variables that are shared across the project. This allows for cleaner templates when dealing with highly specific 3D-related styling.

### Project Structure

- `components/`: Modular Vue components representing different sections of the page (Hero, Model, Highlights, etc.).
- `public/`: Stores heavy assets like 3D models and high-resolution videos.
- `assets/`: Contains global styles and icons.
- `pages/index.vue`: The main entry point where all sections are assembled.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm (Recommended) or npm/yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Build for production:
   ```bash
   pnpm generate
   ```

## 🎥 Features

- **3D Model Interaction**: Rotate and view the iPhone 15 Pro in different colors.
- **Scroll Animations**: Dynamic transitions as you navigate through the features.
- **Video Carousel**: Integrated video presentation of the device capabilities.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
