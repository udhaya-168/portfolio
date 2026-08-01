import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ReadingProgress from './components/ReadingProgress'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import Search from './components/Search'
import Analytics from './components/Analytics'
import { ThemeProvider } from './context/ThemeContext'

const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Achievements = lazy(() => import('./components/Achievements'))

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <ReadingProgress />
        <ParticleBackground />
        <div className="glow"></div>
        <Navbar />
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Education />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
        <footer className="text-center py-8 relative z-10" style={{ color: 'var(--text-faint)', fontSize: '0.85rem' }}>
          <p>&copy; 2026 Udhayakumar A. Built with care.</p>
        </footer>
        <ScrollToTop />
        <CustomCursor />
        <Search />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default App
