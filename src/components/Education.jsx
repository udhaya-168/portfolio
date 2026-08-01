import React from 'react'
import { Calendar } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Education = () => {
  const education = [
    {
      degree: 'BCA',
      institution: 'SRM Institute of Science and Technology, Kattankulathur',
      year: '2022 – 2025',
      score: 'CGPA: 8.44',
      image: '/portfolio/srm_college.jpg'
    },
    {
      degree: 'HSC',
      institution: 'CMS Govt. Higher Secondary School, Kanchipuram',
      year: '2021 – 2022',
      score: 'Percentage: 74%',
      image: '/portfolio/cms_school.jpg'
    },
    {
      degree: 'SSLC',
      institution: 'Meenakshi Ammal Matric Hr. Sec. School, Uthiramerur',
      year: '2019 – 2020',
      score: 'Percentage: 75%',
      image: '/portfolio/meenakshi_school.jpg'
    }
  ]

  return (
    <section id="education" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <div className="flex items-center justify-center sm:justify-start gap-3 text-xl sm:text-2xl font-bold mb-8 sm:mb-11">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent-grad)' }}>
            🎓
          </div>
          Education
        </div>
      </ScrollAnimation>
      <div className="max-w-4xl mx-auto space-y-0">
        {education.map((edu, index) => (
          <ScrollAnimation key={index} animationDelay={index * 0.1}>
            <div className="flex gap-4 sm:gap-5 pb-6 sm:pb-8 relative" style={{ paddingBottom: '30px' }}>
              {index !== education.length - 1 && (
                <div className="absolute hidden sm:block" style={{ left: '24px', top: '50px', bottom: '-2px', width: '2px', background: 'var(--border)' }}></div>
              )}
              <div className="min-w-10 h-10 sm:min-w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl z-10 mx-auto sm:mx-0" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                🎓
              </div>
              <div className="flex-1 p-4 sm:p-5 rounded-xl text-center sm:text-left" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex flex-col sm:flex-row gap-4 mb-3">
                  <img 
                    src={edu.image} 
                    alt={edu.institution} 
                    className="w-full sm:w-32 h-20 sm:h-24 object-cover rounded-lg mx-auto sm:mx-0"
                    style={{ borderRadius: '8px' }}
                  />
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-bold mb-2">{edu.degree}</h4>
                    <p className="text-xs sm:text-sm mb-2" style={{ color: 'var(--text-dim)' }}>{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-xs" style={{ color: 'var(--text-faint)' }}>
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span>{edu.year}</span>
                  </div>
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

export default Education
