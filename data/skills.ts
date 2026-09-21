import type { IconType } from 'react-icons'
import {
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiVuedotjs,
  SiNuxt,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiGnubash,
  SiGooglecloud,
  SiCpanel,
  SiFlutter,
} from 'react-icons/si'
import {
  LuServer,
  LuLayoutTemplate,
  LuDatabase,
  LuWrench,
  LuSmartphone,
} from 'react-icons/lu'

export type Skill = {
  name: string
  icon: IconType
  /** Optional brand colour used on hover. */
  color?: string
}

export type SkillGroup = {
  title: string
  description: string
  icon: IconType
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'APIs, business logic and integrations',
    icon: LuServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces people enjoy using',
    icon: LuLayoutTemplate,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
      { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Nuxt', icon: SiNuxt, color: '#00DC82' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Databases',
    description: 'Schemas, queries and data integrity',
    icon: LuDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Shipping, monitoring and collaboration',
    icon: LuWrench,
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Bash', icon: SiGnubash },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'cPanel', icon: SiCpanel, color: '#FF6C2C' },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform apps',
    icon: LuSmartphone,
    skills: [{ name: 'Flutter', icon: SiFlutter, color: '#02569B' }],
  },
]

/** Compact list shown in the scrolling marquee under the hero. */
export const techStack: Skill[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PHP', icon: SiPhp },
  { name: 'Svelte', icon: SiSvelte },
  { name: 'Vue', icon: SiVuedotjs },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
]
