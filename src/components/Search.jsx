import React, { useState, useEffect } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const sections = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'About', icon: '👤' },
    { id: 'skills', name: 'Skills', icon: '💻' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'projects', name: 'Projects', icon: '📁' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' },
    { id: 'contact', name: 'Contact', icon: '✈️' }
  ]

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(query.toLowerCase())
  )

  const navigateToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setQuery('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-32 px-4" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="w-full max-w-2xl rounded-2xl p-6" style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
        <div className="flex items-center gap-4 mb-6">
          <SearchIcon size={24} style={{ color: 'var(--text-dim)' }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections... (Ctrl+K)"
            className="flex-1 bg-transparent text-lg outline-none"
            style={{ color: 'var(--text)' }}
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <X size={20} style={{ color: 'var(--text-dim)' }} />
          </button>
        </div>

        <div className="space-y-2">
          {filteredSections.length === 0 ? (
            <p className="text-center py-8" style={{ color: 'var(--text-dim)' }}>
              No sections found
            </p>
          ) : (
            filteredSections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(section.id)}
                className="w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] text-left"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <span className="text-2xl">{section.icon}</span>
                <span className="font-medium" style={{ color: 'var(--text)' }}>{section.name}</span>
              </button>
            ))
          )}
        </div>

        <div className="mt-6 pt-4 border-t text-center text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}>
          Press <kbd className="px-2 py-1 rounded mx-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>Esc</kbd> to close
        </div>
      </div>
    </div>
  )
}

export default Search
