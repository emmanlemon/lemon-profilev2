export type NavItem = {
  id: string
  label: string
}

/** Order here is the order of the sections on the page and in the navbar. */
export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]
