# Dhave Portfolio

This is the repository for my personal portfolio website, showcasing my work, skills, and experience as a Frontend Engineer. Built with modern web technologies, the site is designed to be fast, responsive, and user-friendly.

## Features

- **Dynamic Routing**: Case studies and pages are dynamically generated.
- **SEO Optimized**: Includes sitemap.xml and robots.txt for better search engine visibility.
- **Password-Protected Content**: Certain case studies are protected with a password.
- **Global Skeleton Loader**: Provides a consistent loading experience.
- **Responsive Design**: Fully optimized for mobile and desktop devices.

## Folder Structure

```plaintext
src/
├── app/
│   ├── layout.tsx               ← root layout, fonts, global metadata
│   ├── page.tsx                 ← home page (all sections)
│   ├── loading.tsx              ← global skeleton loader
│   ├── not-found.tsx            ← 404
│   ├── sitemap.ts               ← auto-generated sitemap.xml
│   ├── robots.ts                ← auto-generated robots.txt
│   ├── about/
│   │   ├── page.tsx             ← /about (experience, education, tech)
│   │   └── loading.tsx
│   └── case-study/[slug]/
│       ├── page.tsx             ← /case-study/:slug (dynamic)
│       └── loading.tsx
│
├── components/
│   ├── ui/                      ← shadcn auto-generated
│   ├── layout/                  ← Header, Footer, BottomNavigation
│   ├── sections/                ← Hero, WorkSection, ProcessSection, etc.
│   ├── casestudies/             ← AgriLink, VaxNow, Spotd wrappers
│   ├── container/               ← Full case study body components
│   └── reused/                  ← case-study-comp.tsx, ImgUsed.tsx
│
├── config/
│   └── site.config.ts           ← SEO constants + metaObject() helper
│
├── data/
│   ├── work-data.ts
│   ├── case-study.ts
│   └── about-data.ts
│
├── hooks/
│   └── useMobile.ts
│
└── lib/
└── utils.ts
```

## Tech Stack

| Layer               | Technology                   |
| ------------------- | ---------------------------- |
| **Framework**       | Next.js 15 (App Router)      |
| **Language**        | TypeScript                   |
| **Styling**         | Tailwind CSS v4              |
| **UI Components**   | shadcn/ui (Radix primitives) |
| **Animations**      | Framer Motion 12             |
| **Package Manager** | Bun                          |
| **Deployment**      | Vercel                       |

---

## Live Link

[Live Link](https://kaludavid.vercel.app/)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [David Kalu](https://github.com/KaluDavid).
