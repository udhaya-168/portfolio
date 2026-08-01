import React, { useState, useEffect } from 'react'
import ScrollAnimation from './ScrollAnimation'

const Skills = () => {
  const [animated, setAnimated] = useState(false)

  const skills = [
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'JavaScript', icon: '🟨', level: 75 },
    { name: 'SQL', icon: '🗄️', level: 80 },
    { name: 'Linux', icon: '🐧', level: 70 },
    { name: 'Docker', icon: '🐳', level: 65 },
    { name: 'HTML', icon: '🟧', level: 90 },
    { name: 'CSS', icon: '🔷', level: 85 },
    { name: 'Front-end Dev', icon: '</>', level: 75 },
    { name: 'UI/UX Design', icon: '🎨', level: 70 },
    { name: 'Hardware Support', icon: '🛠️', level: 90 },
    { name: 'Network Diagnostics', icon: '🌐', level: 85 },
    { name: 'SLA Management', icon: '✅', level: 80 },
    { name: 'VC Support', icon: '📹', level: 85 },
    { name: 'Database Mgmt', icon: '🗃️', level: 75 }
  ]

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <section id="skills" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <div className="flex items-center justify-center sm:justify-start gap-3 text-xl sm:text-2xl font-bold mb-8 sm:mb-11">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent-grad)' }}>
            💻
          </div>
          Skills & <span style={{ color: '#a78bfa' }}>Ability</span>
        </div>
      </ScrollAnimation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <ScrollAnimation key={index} animationDelay={(index % 6) * 0.1}>
            <div className="rounded-xl p-5 sm:p-6 transition-all hover:-translate-y-1.5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

export default Skills
