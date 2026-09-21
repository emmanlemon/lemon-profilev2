import type { IconType } from 'react-icons'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { LuServer, LuLayoutTemplate, LuDatabase } from 'react-icons/lu'

/**
 * Everything about *you* lives here. Edit this file to update the hero,
 * about section, contact section and metadata in one place.
 */
export const profile = {
  firstName: 'Emmanuel Joshua',
  lastName: 'Lemon',
  nickname: 'Lemon',
  title: 'Full Stack Developer',
  currentRole: 'Senior Full Stack Supervisor',
  currentCompany: 'South AsiaLink Finance Corporation',
  currentCompanyShort: 'SAFC',
  location: 'Philippines',
  email: 'emmanuellemon111200@gmail.com',
  resumeUrl: '/Lemon_Resume.pdf',
  photo: '/lemon_profile1.jpg',
  logo: '/logo_light.png',
  siteUrl: 'https://lemon-profilev2.vercel.app',
  /** Rotating job titles shown in the hero. */
  roles: [
    'Full Stack Developer',
    'Backend Engineer',
    'React Developer',
    'Laravel Developer',
  ],
  /** One-liner under the hero name. */
  tagline:
    'I design and build dependable web applications, from REST APIs and databases to polished React interfaces.',
  /** Longer paragraphs used in the About section. */
  bio: [
    'I am a full stack developer based in the Philippines, currently the Senior Full Stack Supervisor at South AsiaLink Finance Corporation where I lead the team behind the Loan Origination System, underwriting, partner onboarding, vehicle auctions, ticketing, lead management and HR platforms.',
    'I started my career in 2023 and have since shipped products with Laravel, Node.js, React, Svelte and Vue. I care about clean APIs, solid data models and interfaces that people actually enjoy using.',
    'Outside of work I like exploring new frameworks, refining my tooling and the occasional movie night. Coffee, not tea.',
  ],
  /** First year of professional experience, used for the "years" stat. */
  startYear: 2023,
}

export const fullName = `${profile.firstName} ${profile.lastName}`

export type Social = {
  label: string
  href: string
  icon: IconType
}

/** Add more networks here (e.g. LinkedIn) and they show up in the hero and footer. */
export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/emmanlemon', icon: FaGithub },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export type Stat = {
  label: string
  value: number
  suffix?: string
}

const yearsOfExperience = Math.max(
  1,
  new Date().getFullYear() - profile.startYear
)

export const stats: Stat[] = [
  { label: 'Years of experience', value: yearsOfExperience, suffix: '+' },
  { label: 'Companies worked with', value: 4 },
  { label: 'Projects delivered', value: 11, suffix: '+' },
  { label: 'Awards & certificates', value: 4 },
]

export type Highlight = {
  title: string
  description: string
  icon: IconType
}

/** The three "what I do" cards in the About section. */
export const highlights: Highlight[] = [
  {
    title: 'Backend & APIs',
    description:
      'RESTful services with Express, Laravel and Prisma. Authentication, validation, testing and query optimisation.',
    icon: LuServer,
  },
  {
    title: 'Frontend integration',
    description:
      'Responsive, accessible interfaces in React, Next.js, Svelte and Vue that talk cleanly to the backend.',
    icon: LuLayoutTemplate,
  },
  {
    title: 'Data & delivery',
    description:
      'PostgreSQL, MySQL and MongoDB schemas, Docker-based environments and CI/CD pipelines that ship safely.',
    icon: LuDatabase,
  },
]
