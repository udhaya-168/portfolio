import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Dine With Us – Reserve Your Seat',
      type: 'Final Semester Capstone Project',
      url: 'https://dinewith.netlify.app/',
      description: 'Full-stack restaurant table booking application with user authentication, real-time table management, and admin approval workflow.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack'
    },
    {
      title: 'Portfolio Website',
      type: 'Personal Project',
      url: '#',
      description: 'Modern responsive portfolio website with dark/light theme, smooth animations, and interactive components.',
      technologies: ['React', 'Vite', 'TailwindCSS'],
      category: 'frontend'
    }
  ]

  const categories = ['all', 'fullstack', 'frontend']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <div className="flex items-center justify-center sm:justify-start gap-3 text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent-grad)' }}>
            📁
          </div>
          Project <span style={{ color: '#a78bfa' }}>Portfolio</span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animationDelay={0.1}>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 justify-center sm:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all capitalize"
              style={{
                background: filter === category ? 'var(--accent-grad)' : 'var(--card)',
                color: filter === category ? '#fff' : 'var(--text)',
                border: '1px solid var(--border)',
                boxShadow: filter === category ? '0 4px 15px rgba(124, 92, 255, 0.4)' : 'none'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <ScrollAnimation key={index} animationDelay={index * 0.1}>
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="h-40 sm:h-50 w-full flex items-center justify-center" style={{ height: 'clamp(160px, 20vw, 200px)', background: 'linear-gradient(135deg, #2a1a3d, #160c22)' }}>
                <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2a1a3d"/>
                      <stop offset="100%" stopColor="#160c22"/>
                    </linearGradient>
                  </defs>
                  <rect width="500" height="220" fill="url(#pg)"/>
                  <circle cx="90" cy="120" r="3" fill="#ffd88a"/>
                  <circle cx="410" cy="110" r="3" fill="#ffd88a"/>
                  <rect x="60" y="150" width="380" height="8" rx="4" fill="#3a2a1a"/>
                  <text x="250" y="100" fill="#e8eaf6" fontSize="20" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" fontWeight="700">{project.title.substring(0, 20)}</text>
                  <rect x="200" y="130" width="100" height="30" rx="8" fill="#7c5cff"/>
                  <text x="250" y="150" fill="#fff" fontSize="13" textAnchor="middle" fontFamily="Inter">View</text>
                </svg>
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">{project.title}</h3>
                <div className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-center sm:text-left" style={{ color: '#a78bfa' }}>{project.type}</div>
                <p className="text-xs sm:text-sm mb-4 sm:mb-5 text-center sm:text-left" style={{ color: 'var(--text-dim)' }}>{project.description}</p>
                <div className="flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start mb-5 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs"
                      style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border)', padding: '6px 12px', borderRadius: '8px', color: 'var(--text-dim)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm w-full sm:w-auto justify-center transition-transform hover:scale-105"
                    style={{ background: 'var(--accent-grad)', color: '#fff', padding: '13px 20px', borderRadius: '11px', boxShadow: '0 10px 30px -10px rgba(124, 92, 255, 0.7)' }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

export default Projects
