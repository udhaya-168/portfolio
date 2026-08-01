import React, { useState } from 'react'
import { Menu, X, Moon, Sun, Linkedin, Github, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300" style={{ background: 'var(--bg-panel)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto" style={{ padding: 'clamp(14px, 2vw, 18px) clamp(20px, 4vw, 48px)' }}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold" style={{ color: '#a78bfa', letterSpacing: '0.5px' }}>UA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium transition-colors relative"
                style={{ color: 'var(--text-dim)', padding: '4px 0' }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-3 sm:space-x-4 ml-4">
              <button
                onClick={toggleTheme}
                className="transition-colors"
                style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <a
                href="/Udhayakumar_Resume.pdf"
                download
                className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--accent-grad)', padding: '8px 16px', borderRadius: '10px', boxShadow: '0 8px 24px -8px rgba(124, 92, 255, 0.6)' }}
              >
                <Download size={14} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleTheme}
              className="transition-colors"
              style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors"
              style={{ color: 'var(--text)', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md transition-colors" style={{ background: 'var(--bg-panel)', borderTop: '1px solid var(--border)' }}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-md transition-colors text-center"
                style={{ color: 'var(--text-dim)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-4 px-4 py-4">
              <a
                href="/Udhayakumar_Resume.pdf"
                download
                className="flex items-center gap-2 text-white font-semibold text-sm"
                style={{ background: 'var(--accent-grad)', padding: '10px 20px', borderRadius: '10px' }}
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
