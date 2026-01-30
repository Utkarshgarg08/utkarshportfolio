import { Metadata } from 'next'
import { personalInfo, experiences, projects, skillGroups, education } from '@/data/mock'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'
const siteName = 'Utkarsh Garg'
const siteDescription = 'Full Stack Developer specializing in Next.js, Angular, AI agent orchestration, and real-time applications. 8+ years of experience building scalable micro-frontends and AI-native UX.'

// Generate comprehensive keywords from data
const generateKeywords = () => {
  const baseKeywords = [
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Angular Developer',
    'AI Agent Orchestration',
    'Micro-frontends',
    'TypeScript',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Pune Developer',
    'India Developer',
    'Real-time Applications',
    'WebSockets',
    'Node.js',
    'Portfolio',
    'Software Engineer',
  ]

  // Add skills as keywords
  const skillKeywords = skillGroups.flatMap(group => group.items)
  
  // Add technologies from experiences
  const techKeywords = experiences.flatMap(exp => exp.stack)
  
  // Add project technologies
  const projectKeywords = projects.flatMap(project => project.tech || [])

  return [...new Set([...baseKeywords, ...skillKeywords, ...techKeywords, ...projectKeywords])]
}

// Generate structured data for better SEO
export const generateStructuredData = () => {
  const skillsList = skillGroups.flatMap(group => group.items)

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: siteUrl,
    sameAs: [
      personalInfo.linkedin,
    ],
    knowsAbout: skillsList,
    alumniOf: education.map(edu => {
      // Extract institution name from title (e.g., "MCA · SASTRA University" -> "SASTRA University")
      const institutionName = edu.title.split('·').pop()?.trim() || edu.title
      return {
        '@type': 'CollegeOrUniversity',
        name: institutionName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: edu.location,
          addressCountry: 'IN',
        },
      }
    }),
    hasOccupation: {
      '@type': 'Occupation',
      name: personalInfo.title,
      occupationLocation: {
        '@type': 'City',
        name: 'Pune',
      },
      skills: skillsList,
    },
    worksFor: experiences.map(exp => ({
      '@type': 'Organization',
      name: exp.company,
    })),
    hasCredential: education.map(edu => {
      // Extract degree and institution from title (e.g., "MCA · SASTRA University")
      const parts = edu.title.split('·')
      const degree = parts[0]?.trim() || edu.title
      const institutionName = parts[1]?.trim() || edu.title
      return {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: degree,
        recognizedBy: {
          '@type': 'Organization',
          name: institutionName,
        },
      }
    }),
  }
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteDescription,
  keywords: generateKeywords(),
  authors: [
    {
      name: personalInfo.name,
      url: personalInfo.linkedin,
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  applicationName: siteName,
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
        type: 'image/png',
      },
      {
        url: `${siteUrl}/og-image-square.png`,
        width: 1200,
        height: 1200,
        alt: `${personalInfo.name}`,
        type: 'image/png',
      },
    ],
    firstName: personalInfo.name.split(' ')[0],
    lastName: personalInfo.name.split(' ').slice(1).join(' ') || '',
    username: personalInfo.linkedin.split('/').pop() || '',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteDescription,
    creator: '@utkarshgarg',
    site: '@utkarshgarg',
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: `${personalInfo.name} - ${personalInfo.title}`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteName,
    startupImage: [
      {
        url: '/apple-splash-2048-2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/apple-splash-1668-2388.png',
        media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/apple-splash-1536-2048.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#0a0f1c',
    'msapplication-config': '/browserconfig.xml',
  },
}

// Helper function to generate page-specific metadata
export function generatePageMetadata(
  pageTitle: string,
  pageDescription: string,
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${pageTitle} | ${personalInfo.name}`
  const fullUrl = `${siteUrl}${path}`

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: fullUrl,
      siteName: siteName,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: pageTitle,
            },
          ]
        : siteMetadata.openGraph?.images,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: image ? [image] : siteMetadata.twitter?.images,
    },
  }
}

// Generate metadata for different sections
export const sectionMetadata = {
  projects: generatePageMetadata(
    'Projects',
    `Explore ${projects.length}+ innovative projects built with modern technologies including Next.js, React, Angular, and AI agent orchestration.`,
    '/#projects',
    `${siteUrl}/og-projects.png`
  ),
  experience: generatePageMetadata(
    'Experience',
    `8+ years of professional experience across Attentions AI, Coditas, and TCS. Specializing in micro-frontends, AI-native UX, and real-time applications.`,
    '/#experience',
    `${siteUrl}/og-experience.png`
  ),
  skills: generatePageMetadata(
    'Skills',
    `Expertise in Full Stack Development, Next.js, React, Angular, TypeScript, AI Agent Orchestration, Micro-frontends, and modern web technologies.`,
    '/#skills',
    `${siteUrl}/og-skills.png`
  ),
  education: generatePageMetadata(
    'Education',
    `Educational background including ${education.map(e => e.title.split('·')[0]?.trim() || e.title).join(', ')} from ${education.map(e => e.title.split('·')[1]?.trim() || e.title).join(' and ')}.`,
    '/#education',
    `${siteUrl}/og-education.png`
  ),
  contact: generatePageMetadata(
    'Contact',
    `Get in touch with ${personalInfo.name} - ${personalInfo.title} based in ${personalInfo.location}. Available for freelance projects and opportunities.`,
    '/#contact',
    `${siteUrl}/og-contact.png`
  ),
}
