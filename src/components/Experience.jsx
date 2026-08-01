import React from 'react'
import { Calendar, MapPin } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Experience = () => {
  return (
    <section id="experience" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center sm:text-left">Experience</h2>
      </ScrollAnimation>
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation animationDelay={0.1}>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-9 rounded-2xl items-start sm:items-center">
            <div className="min-w-12 h-12 sm:min-w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl mx-auto sm:mx-0" style={{ background: 'var(--accent-grad)' }}>
              💼
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1">IT Support Engineer</h3>
              <div className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#a78bfa' }}>Data Patterns (India) Ltd</div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5 text-xs mb-5" style={{ color: 'var(--text-faint)' }}>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>June 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Chennai, India</span>
                </div>
              </div>
              <ul className="list-none">
                <li className="flex gap-3 mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent1)', fontWeight: 700 }}>✓</span>
                  <span>Provided Video Conferencing (VC) support, ensuring smooth setup and operation of VC systems for meetings and organizational communication.</span>
                </li>
                <li className="flex gap-3 mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent1)', fontWeight: 700 }}>✓</span>
                  <span>Diagnosed and resolved hardware, software, and network issues across the organization, ensuring minimal downtime and consistent IT service delivery.</span>
                </li>
                <li className="flex gap-3 mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent1)', fontWeight: 700 }}>✓</span>
                  <span>Troubleshot OS installation and configuration issues, installing, configuring, and maintaining operating systems, applications, and user accounts on Linux and Windows environments.</span>
                </li>
                <li className="flex gap-3 mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent1)', fontWeight: 700 }}>✓</span>
                  <span>Consistently met SLA targets by prioritizing and resolving technical service requests, coordinating with cross-functional teams to close complex issues efficiently.</span>
                </li>
                <li className="flex gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent1)', fontWeight: 700 }}>✓</span>
                  <span>Leveraged Docker for containerized application support and deployed test environments on AWS and Azure to strengthen cloud infrastructure skills.</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Experience
