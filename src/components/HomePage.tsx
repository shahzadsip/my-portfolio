'use client'
import { useState } from 'react'
import LoadingOverlay from './LoadingOverlay';
import Navbar from './NavBarMain'; 
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectSection from './sections/ProjectSection';
import ExperiSection from './sections/ExperiSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './FooterSection';
import { useLoading } from '../hooks/useLoading';

const SYMBOLS = [
  "<", ">", "/", "{", "}", "(", ")", "[", "]",
  ";", "#", "%", "&", "=", "+", "-", "*", "!", "?"
];

const COLORS = [
  "#8b5cf6",
  "#22d3ee",
  "#38bdf8",
  "#34d399",
  "#facc15",
  "#f472b6",
  "#f97316"
];
function HomePage() {

const loading = useLoading(600);

const count = 120;
const [items] = useState(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 10 + 18,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: Math.random() * 5 + 6,
      delay: Math.random() * 10
    }))
  );


  return (
    <>
    {loading && <LoadingOverlay />}
    <body data-theme="light">
     <Navbar/> 
     <HeroSection/>
     <div className="" style={{position: 'relative'}}>
    <AboutSection/>
    <SkillsSection/>
    <ProjectSection/>
    <ExperiSection/>
    <ContactSection/>
 
<div className="floating-symbols-container">
      {items.map(item => (
        <span
          key={item.id}
          className="floating-symbol"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            color: item.color,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
     </div>

    <FooterSection/>
    </body>
    </>
  )
}

export default HomePage
