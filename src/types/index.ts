export interface PersonalInfo {
  name: string
  title: string
  location: string
  headline: string
  heroBadge: string
  heroStatement: string
  heroSubtext: string
  resumeUrl: string
  email: string
  phone: string
  linkedin: string
}

export interface HeroLink {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: string
  detail: string
}

export interface Experience {
  company: string
  role: string
  period: string
  stack: string[]
  highlights: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Education {
  title: string
  period: string
  location: string
}

export interface ContactCard {
  label: string
  value: string
  href: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  status: string
}

export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}
