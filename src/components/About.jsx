import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  return (
    <section id="about" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">About <span style={{ color: '#a78bfa' }}>Me</span></h2>
      </ScrollAnimation>
      <ScrollAnimation animationDelay={0.1}>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 p-6 sm:p-10 rounded-2xl items-start sm:items-center">
          <div className="min-w-12 h-12 sm:min-w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl mx-auto sm:mx-0" style={{ background: 'var(--accent-grad)' }}>
            👤
          </div>
          <div className="text-center sm:text-left">
            <p className="mb-4 sm:mb-5 text-sm sm:text-base" style={{ color: 'var(--text-dim)' }}>
              IT Support Engineer with <strong style={{ color: 'var(--text)' }}>1 year 3 months</strong> of hands-on experience maintaining and troubleshooting enterprise hardware, software, and network environments within SLA-driven service standards.
            </p>
            <p className="mb-4 sm:mb-5 text-sm sm:text-base" style={{ color: 'var(--text-dim)' }}>
              Proficient in <strong style={{ color: 'var(--text)' }}>Python, JavaScript, and SQL</strong> with practical expertise in Linux administration, Docker containerization, and cloud platforms (AWS and Azure). Known for diagnosing complex technical issues quickly, minimizing downtime, and collaborating effectively across technical teams.
            </p>
            <p className="text-sm sm:text-base" style={{ color: 'var(--text-dim)' }}>
              Now targeting a <strong style={{ color: 'var(--text)' }}>Web Development, Cloud, or DevOps Support</strong> role to apply this infrastructure and programming background to building and maintaining scalable production-grade applications.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default About
