# Emmanuel Joshua Lemon - Portfolio

Personal portfolio for Emman "Lemon", Full Stack Development Supervisor at South AsiaLink Finance Corporation.

Built with [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) and animated components from [React Bits](https://reactbits.dev/).

## Getting started

Requires Node 18.18 or newer (Node 22 recommended, see `.nvmrc`).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

| Script              | What it does                        |
| ------------------- | ----------------------------------- |
| `npm run build`     | Production build                    |
| `npm run start`     | Serve the production build          |
| `npm run lint`      | ESLint (Next.js + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit`                      |
| `npm run format`    | Prettier                            |

## Editing content

All copy lives in plain TypeScript files under `data/`, so you never need to touch a component to update the site:

| File                   | Controls                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| `data/profile.ts`      | Name, title, bio, roles, email, resume, socials, stats, highlights |
| `data/skills.ts`       | Skill groups and the tech marquee under the hero                   |
| `data/experience.ts`   | Work history timeline                                             |
| `data/projects.ts`     | Project cards and the detail dialog                               |
| `data/certificates.ts` | Awards & certificates                                             |
| `data/nav.ts`          | Navbar links and section order                                    |

Images go in `public/` and are referenced by path (for example `/works/lead_work.png`).

## Project structure

```
app/                  App Router entry: layout (fonts, theme, metadata), page, global CSS
components/
  reactbits/          Vendored React Bits components (Aurora, SplitText, SpotlightCard, ...)
  layout/             Navbar, footer, theme provider/toggle, section heading
  sections/           Hero, About, Skills, Experience, Projects, Awards, Contact
  ui/                 Shared bits (social links, project modal)
data/                 Site content (see above)
lib/                  Small hooks and helpers
public/               Static assets (photos, logos, resume)
```

### React Bits components used

- Backgrounds: `Aurora`
- Text: `SplitText`, `BlurText`, `RotatingText`, `GradientText`, `CountUp` (`ShinyText` is vendored and ready to use)
- Components: `SpotlightCard`, `TiltedCard`, `LogoLoop`
- Animations: `AnimatedContent`, `FadeContent`, `StarBorder`, `Magnet`, `GlareHover`, `ClickSpark`

They are copied into `components/reactbits/` (the TS + Tailwind variants) with small tweaks noted at the top of each file, so they can be customised freely.

## Theme

Dark mode is the default with a light mode toggle in the navbar (`next-themes`). Colours are CSS variables in `app/globals.css` and exposed to Tailwind as `bg`, `fg`, `muted`, `card`, `border`, `accent` and `accent2`.

## Analytics (optional)

Copy `.env.sample` to `.env.local` and set `NEXT_PUBLIC_ANALYTICS_ID` to a GA4 measurement id. Leave it empty to disable analytics.

## Deployment

Deployed on Vercel. Push to `master` and Vercel builds it automatically.
