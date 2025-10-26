# Kapwa Design System

_A design system for bettergov.ph_

## Installation

1. [Install Tailwind](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

1. Install Kapwa

   ```
   npm install @bettergov/kapwa
   ```

1. Install tw-animate-css for animation (Optional)

   ```
   npm install -D tw-animate-css
   ```

1. Add Kapwa in your CSS entrypoint

   ```diff
   // index.css

   @import 'tailwindcss';
   @import 'tw-animate-css';

   + @source './node_modules/@bettergov/kapwa';
   + @import '@bettergov/kapwa/kapwa.css';
   ```

   > _Without the @source you can't use @bettergov/kapwa's tailwind classes (i.e. kapwa colors, spacing, and others)_

#### Loading Kapwa's fonts

It's better to have consumers load Kapwa's fonts themselves because:

- Frameworks like Next.js, Nuxt, Remix, and SvelteKit already expose optimized font-loading primitives (streaming, preloading, inlining) that outperform any generic bundler configuration we could ship.
- Hosting the font files within your project keeps them versioned alongside your design tokens so you can subset, swap formats, or fall back safely without waiting for a design-system release.
- Self-hosting lets you control caching headers and domains, reducing layout shifts caused by cross-origin font requests and keeping Core Web Vitals happy.
- You can omit fonts you do not use (e.g., only regular weights) which shrinks page weight for users on low-bandwidth connections.

**Example setups:**

1. **Next.js (App Router)**

   ```ts
   // app/fonts.ts
   import { Inter, Roboto_Mono } from 'next/font/google';

   export const kapwaSans = Inter({
     subsets: ['latin'],
     weight: ['400', '500', '600', '700'],
     variable: '--font-kapw-sans',
     display: 'swap',
   });

   export const kapwaMono = Roboto_Mono({
     subsets: ['latin'],
     weight: ['400', '500', '600'],
     variable: '--font-kapwa-mono',
     display: 'swap',
   });
   ```

   ```ts
   // app/layout.tsx
   import { kapwaSans, kapwaMono } from './fonts';

   export default function RootLayout({ children }) {
     return (
       <html lang="en" className={`${kapwaSans.variable} ${kapwaMono.variable} antialiased`}>
         <body>{children}</body>
       </html>
     );
   }
   ```

   ```ts
    // Finally, add the CSS variable to your Tailwind CSS file
    @import 'tailwindcss';
    @import 'tw-animate-css';

    @source './node_modules/@bettergov/kapwa';
    @import '@bettergov/kapwa/kapwa.css';


    @theme inline {
      --font-sans: var(--font-kapwa-sans);
      --font-mono: var(--font-kapwa-mono);
    }
   ```

   **Vite / CRA / plain React**

   ```css
   /* src/fonts.css */
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap');

   :root {
     --font-kapwa-sans:
       'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
       sans-serif;
     --font-kapwa-mono:
       'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
   }

   body {
     font-family: var(--font-kapwa-sans);
   }

   code,
   pre {
     font-family: var(--font-kapwa-mono);
   }
   ```

   ```ts
   // src/main.tsx
   import './fonts.css';
   import '@bettergov/kapwa/kapwa.css';
   ```

   > Bind `--font-kapwa-sans` and `--font-kapwa-mono` in your Tailwind config (e.g., `fontFamily: { sans: ['var(--font-kapwa-sans)'], mono: ['var(--font-kapwa-mono)'] }`) so Kapwa utilities pick up the same typography tokens.

**_That's it! You've sucessfully setup Kapwa! 🥳_**

---

## Why We're Building This Project

## Our Mission

## Features

## Join Us as a Volunteer

We're always looking for passionate individuals to help improve BetterGov.ph. We need volunteers with various skills:

- Frontend and backend developers
- UX/UI designers
- Content writers and editors
- Translators (for Filipino and other local languages)
- Accessibility experts
- Project managers
- QA testers

If you're interested in contributing, please reach out to us at [volunteers@bettergov.ph](mailto:volunteers@bettergov.ph) or open an issue in this repository.

## Code of Conduct

We are committed to fostering a welcoming and respectful community.
Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

## Contributing

We welcome contributions from everyone!
Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Development setup
- Reporting bugs
- Opening issues and pull requests

## Contributing

Thanks to all the people who already contributed!

<a href="https://github.com/bettergovph/kapwa/graphs/contributors">
    <img src="https://contributors-img.web.app/image?repo=bettergovph/kapwa&max=750&columns=20" />
</a>

## License

This project is released under the [Creative Commons CC0](https://creativecommons.org/publicdomain/zero/1.0/) dedication. This means the work is dedicated to the public domain and can be freely used by anyone for any purpose without restriction under copyright law.

---
