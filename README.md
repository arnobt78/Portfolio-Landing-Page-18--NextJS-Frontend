# Portfolio Landing Page 18 - Next.js, TypeScript, TailwindCSS, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

A modern, single-page portfolio template built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases a developer profile with hero, experience timeline, tech stack, featured projects, and a contact form—ideal for learning App Router, client components, SEO metadata, and reusable UI patterns. Use it as a starter for your own portfolio or as reference material for teaching & instruction.

- **Live Demo:** [https://portfolio-ui-18.vercel.app/](https://portfolio-ui-18.vercel.app/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features & Functionality](#features--functionality)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Routes & API](#routes--api)
- [Components Walkthrough](#components-walkthrough)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Data Layer & Customization](#data-layer--customization)
- [SEO & Metadata](#seo--metadata)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

Portfolio UI 18 is a **static-first** Next.js App Router application. It has one main page (`/`) composed of several sections: a hero with profile and CTA, experience timeline, tech stack grid, project cards, and a contact form that submits to **Web3Forms** (no custom backend). The app uses **Framer Motion** for animations, **react-icons** (Tabler) for icons, **Geist** fonts, and **Tailwind CSS 4** for styling. All content is driven by a single data file (`src/data/portfolio.ts`), making it easy to customize for your own profile while keeping the codebase minimal and educational.

---

## Features & Functionality

| Feature        | Description                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Hero**       | Name, role, short bio, profile image, social links, “Projects” and “Resume” CTAs with smooth scroll.                     |
| **Experience** | Vertical timeline with company, role, period, and bullet points (data-driven).                                           |
| **Tech Stack** | Categorized skills (Mobile, Libraries, Web, Tools) in card layout with hover states.                                     |
| **Projects**   | Grid of project cards (thumbnail, title, description, tech tags, GitHub / live links).                                   |
| **Contact**    | Form (name, email, message) posting to Web3Forms API; success/error feedback.                                            |
| **Navbar**     | Fixed top bar, scroll-based background, active section highlight, mobile hamburger menu.                                 |
| **Footer**     | Copyright, optional tagline, social links.                                                                               |
| **SEO**        | Metadata (title, description, Open Graph, Twitter), JSON-LD (Person, WebSite, ProfilePage), `robots.txt`, `sitemap.xml`. |
| **Analytics**  | Optional Google Analytics via `@next/third-parties` (env-driven).                                                        |

---

## Technology Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS 4, CSS variables (primary/secondary/accent)
- **Fonts:** Geist Sans & Geist Mono (next/font/google)
- **Animation:** Framer Motion
- **Icons:** react-icons (Tabler: `Tb*`)
- **Utilities:** clsx, tailwind-merge (`cn()`)
- **Third-party:** @next/third-parties (Google Analytics), Web3Forms (contact form)
- **Tooling:** ESLint (eslint-config-next), TypeScript strict mode

---

## Project Structure

```bash
portfolio-ui-18/
├── public/
│   └── icons/
│       └── icon.svg                 # Favicon / app icon
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, metadata, fonts, Navbar/Footer
│   │   ├── page.tsx                 # Home page composing all sections
│   │   ├── globals.css              # Tailwind + CSS variables + scrollbar
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   └── sitemap.ts               # Dynamic sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Fixed nav, scroll state, mobile menu
│   │   │   └── Footer.tsx           # Copyright + social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero with profile and CTAs
│   │   │   ├── Experience.tsx       # Timeline of jobs
│   │   │   ├── TechStack.tsx        # Skill categories grid
│   │   │   ├── Projects.tsx         # Projects grid + SectionHeading
│   │   │   └── Contact.tsx           # Contact form (Web3Forms)
│   │   ├── ui/
│   │   │   ├── SectionHeading.tsx   # Reusable section title + subtitle
│   │   │   ├── ProjectCard.tsx      # Single project card
│   │   │   └── SocialIcons.tsx      # Social link icons (hero/footer)
│   │   └── seo/
│   │       └── StructuredData.tsx   # JSON-LD Person, WebSite, ProfilePage
│   ├── data/
│   │   └── portfolio.ts             # Single source of truth (profile, experience, projects, skills, social)
│   └── lib/
│       └── utils.ts                 # cn() for class names
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: LTS)
- **npm** (or yarn/pnpm)

### Install & Run

```bash
# Clone the repository (or use your fork)
git clone <your-repo-url>
cd portfolio-ui-18

# Install dependencies
npm install

# Development (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

- **Dev:** [http://localhost:3000](http://localhost:3000)
- **Lint:** `npm run lint`

### Optional: Webpack dev server

```bash
npm run dev:webpack
```

---

## Environment Variables

The app works **without** any env vars (suitable for a static demo). For full functionality (analytics, contact form), add the following.

### Required for contact form (Web3Forms)

1. Go to [Web3Forms](https://web3forms.com/).
2. Enter your email and get an **Access Key**.
3. Create a file in the project root:

**.env.local** (never commit this file; it’s in `.gitignore`):

```env
# Web3Forms: get your key at https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Without this key, the form still renders but submissions will fail (the code falls back to `"ACCESS_KEY_HERE"`, which is invalid).

### Optional: Google Analytics

1. Create a GA4 property and get your **Measurement ID** (e.g. `G-XXXXXXXXXX`).
2. Add to `.env.local`:

```env
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

If unset, the GA script is not loaded (no errors; analytics simply disabled).

### Summary

| Variable                       | Required         | How to get it                                       |
| ------------------------------ | ---------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_KEY`    | For contact form | [web3forms.com](https://web3forms.com) → Access Key |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | No               | GA4 Measurement ID (e.g. `G-XXXXXXXXXX`)            |

Use **.env.example** in the repo (without real values) so others know what to set:

```env
# .env.example
NEXT_PUBLIC_WEB3FORMS_KEY=
NEXT_PUBLIC_GOOGLE_ANALYTICS=
```

---

## Routes & API

### App routes (Next.js)

| Route          | Type   | Description                                                            |
| -------------- | ------ | ---------------------------------------------------------------------- |
| `/`            | Page   | Single home page (Hero + Experience + Tech Stack + Projects + Contact) |
| `/_not-found`  | System | Next.js 404 page                                                       |
| `/robots.txt`  | Route  | Generated by `src/app/robots.ts`                                       |
| `/sitemap.xml` | Route  | Generated by `src/app/sitemap.ts`                                      |

There are **no custom API routes** in this project. All data is static (from `portfolio.ts`).

### External API: Web3Forms (contact form)

The contact form is a **client-side** `fetch` to Web3Forms:

- **Endpoint:** `https://api.web3forms.com/submit`
- **Method:** `POST`
- **Body:** JSON with `access_key`, `name`, `email`, `message`, `subject`

Example (conceptually what the app sends):

```ts
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ACCESS_KEY_HERE",
    name: formData.name,
    email: formData.email,
    message: formData.message,
    subject: `New Contact Form Submission from ${formData.name}`,
  }),
});
const data = await response.json();
// data.success === true means delivery succeeded
```

---

## Components Walkthrough

### Layout components

- **Navbar** (`components/layout/Navbar.tsx`): Fixed header, in-page links (#about, #experience, #projects, #contact), scroll-based background, active section via `IntersectionObserver`, mobile menu with Framer Motion.
- **Footer** (`components/layout/Footer.tsx`): Copyright year, optional tagline, `SocialIcons` (same data as hero).

### Section components

- **HeroSection**: Intro line, name, role, about text, profile image (Next `Image`), `SocialIcons`, “Projects” (smooth scroll) and “Resume” (link) buttons.
- **ExperienceSection**: Reads `portfolioData.experience`, renders a timeline with role, company, period, description list.
- **TechStack**: Reads `portfolioData.skills` (mobile, libraries, web, tools), renders `SkillCategory` cards.
- **ProjectsSection**: Reads `portfolioData.projects`, renders a grid of `ProjectCard`.
- **ContactSection**: Contact info (email, location from data) + form; on submit calls Web3Forms, then shows success/error state.

### UI components

- **SectionHeading**: Title (gradient) + optional subtitle + underline. Props: `title`, `subtitle?`, `className?`, `center?`.
- **ProjectCard**: Thumbnail, title, description, tech tags, GitHub/live links. Props: `project`, `index` (for animation).
- **SocialIcons**: Renders social links from `portfolioData.social`; `variant`: `"default"` (hero circles) or `"footer"` (compact).

### SEO component

- **StructuredData**: Injects JSON-LD for Person, WebSite, and ProfilePage (used in `layout.tsx` inside `<head>`).

---

## Reusing Components in Other Projects

### 1. Copy the component and its dependencies

- Copy the component file (e.g. `SectionHeading.tsx`).
- Copy `src/lib/utils.ts` (for `cn`) and ensure `clsx` + `tailwind-merge` are installed.
- If the component uses `portfolioData`, either copy `src/data/portfolio.ts` or replace with your own data/context.

### 2. Example: Reusing `SectionHeading`

```tsx
// In your project
import { SectionHeading } from "@/components/ui/SectionHeading";

<SectionHeading
  title="My Section"
  subtitle="Optional subtitle"
  center={true}
  className="mb-8"
/>;
```

Requires Tailwind and the same CSS variables (e.g. `primary`, `secondary`) or adjust classes.

### 3. Example: Reusing `ProjectCard`

```tsx
import { ProjectCard } from "@/components/ui/ProjectCard";

const project = {
  title: "My App",
  description: "Description here.",
  techStack: ["React", "Node"],
  link: "https://example.com",
  github: "https://github.com/...",
  thumbnail: "/images/project.webp",
};

<ProjectCard project={project} index={0} />;
```

### 4. Example: Reusing the contact form logic

Copy `Contact.tsx` and the Web3Forms `fetch` block; set `NEXT_PUBLIC_WEB3FORMS_KEY` in the new project. You can swap out the layout/styling while keeping the same submit handler.

### 5. Data-driven sections

For Experience, Tech Stack, or Projects, copy the section component and the relevant part of `portfolio.ts` (or your own type and data). Change imports to your data source (file, CMS, or API).

### Code snippet: How the home page composes sections

The main page composes section components; the `id` values match navbar hash links for smooth scrolling and active-section highlighting:

```tsx
// src/app/page.tsx (simplified)
export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div id="experience" className="flex-1">
              <ExperienceSection />
            </div>
            <div id="skills" className="flex-1">
              <TechStack />
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
```

### Code snippet: Adding a new project in portfolio data

Edit `src/data/portfolio.ts` and add an object that matches the `Project` type:

```ts
projects: [
  // ... existing projects
  {
    title: "My New App",
    description: "A short description of the project.",
    techStack: ["Next.js", "TypeScript"],
    link: "https://myapp.com",
    github: "https://github.com/username/repo",
    thumbnail: "/images/projects/myapp.webp",
  },
],
```

Place the image in `public/images/projects/` and reference it with a path starting with `/`.

---

## Data Layer & Customization

All visible content comes from **`src/data/portfolio.ts`**.

- **Profile:** `name`, `role`, `about`, `profileImage`, `blogUrl`
- **Social:** `social[]` with `platform`, `url`, `icon` (e.g. `"Github"`, `"Linkedin"`)
- **Skills:** `skills.mobile`, `skills.libraries`, `skills.web`, `skills.tools` (string arrays)
- **Experience:** `experience[]` with `company`, `role`, `period`, `description[]`
- **Projects:** `projects[]` with `title`, `description`, `techStack[]`, `link?`, `github?`, `thumbnail`

To customize the portfolio: edit `portfolioData` and (if needed) add images under `public/` (e.g. `public/images/profile.webp`, `public/images/projects/...`). No backend or database is required.

---

## SEO & Metadata

- **metadataBase, title, description:** Set in `src/app/layout.tsx` (including template and default title).
- **Open Graph / Twitter:** Same title, description, and image (profile) for sharing.
- **Structured data:** Person, WebSite, ProfilePage in `StructuredData.tsx` (injected in layout `<head>`).
- **robots.txt:** Generated from `src/app/robots.ts` (allow `/`, disallow `/api/`, `/_next/`).
- **sitemap.xml:** Generated from `src/app/sitemap.ts` (homepage, changeFrequency, priority).

For production, set `metadataBase` and any hardcoded URLs in layout, `robots.ts`, and `sitemap.ts` to your real domain.

---

## Keywords

Portfolio, Next.js, React, TypeScript, Tailwind CSS, App Router, single-page, developer portfolio, Web3Forms, contact form, JSON-LD, SEO, Framer Motion, Geist font, Vercel, static site, open source, educational, template, starter.

---

## Conclusion

Portfolio UI 18 is a small, self-contained Next.js portfolio template with a clear structure, one data file, and optional env-based features (contact form, analytics). You can run it as a demo with zero configuration, or add Web3Forms and GA for a production-ready personal site. The component set and data shape make it easy to reuse sections or adapt the project for teaching and learning.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
