'use client'

import LoadingOverlay from './LoadingOverlay'
import Navbar from './NavBarMain'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectSection from './sections/ProjectSection'
import ExperiSection from './sections/ExperiSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './FooterSection'

import { useLoading } from '../hooks/useLoading'
import FloatingSymbols from './sections/FloatingSymbols'


function HomePage() {
  const loading = useLoading(600)

  

  return (
    <>
      {loading && <LoadingOverlay />}

      <main data-theme="light">
        <Navbar />
        <HeroSection />

        <div style={{ position: 'relative' }}>
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ExperiSection />
          <ContactSection />

          <FloatingSymbols />
        </div>

        <FooterSection />
      </main>
    </>
  )
}

export default HomePage
