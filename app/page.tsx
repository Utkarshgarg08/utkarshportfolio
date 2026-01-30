'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { projects, experiences } from '@/data/mock'
import Script from 'next/script'
import { generateStructuredData } from '@/lib/metadata'

export default function Home() {
  // Enhanced structured data with more comprehensive information
  const personSchema = generateStructuredData()
  
  // Add projects structured data
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        url: project.liveUrl,
        programmingLanguage: project.tech || [],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    })),
  }

  // Add work experience structured data
  const workExperienceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: experiences.map((exp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'OrganizationRole',
        roleName: exp.role,
        startDate: exp.period.split('–')[0].trim(),
        endDate: exp.period.includes('Present') ? undefined : exp.period.split('–')[1]?.trim(),
        worksFor: {
          '@type': 'Organization',
          name: exp.company,
        },
        skills: exp.stack,
      },
    })),
  }

  // Add breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'}#experience`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'}#skills`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Education',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'}#education`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://itsmeutkarsh.com'}#contact`,
      },
    ],
  }

  return (
    <>
      {/* Person/Profile Structured Data */}
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Projects Structured Data */}
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      
      {/* Work Experience Structured Data */}
      <Script
        id="experience-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExperienceSchema) }}
      />
      
      {/* Breadcrumb Structured Data */}
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
