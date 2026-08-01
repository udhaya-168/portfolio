import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const Achievements = () => {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Achieved CGPA of 8.44 in BCA, demonstrating consistent academic performance.',
      icon: '⭐'
    },
    {
      title: 'Project Leadership',
      description: 'Led a 4-member team in developing a full-stack restaurant booking application.',
      icon: '👥'
    }
  ]

  return (
    <section id="achievements" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
      <ScrollAnimation>
        <div className="flex items-center justify-center sm:justify-start gap-3 text-xl sm:text-2xl font-bold mb-8 sm:mb-11">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent-grad)' }}>
            🏆
          </div>
          Achievements
        </div>
      </ScrollAnimation>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => (
          <ScrollAnimation key={index} animationDelay={index * 0.1}>
            <div className="rounded-xl p-6 sm:p-8 text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-4 sm:mb-5 flex items-center justify-center text-xl sm:text-2xl" style={{ background: 'var(--accent-grad)' }}>
                {achievement.icon}
              </div>
              <h4 className="font-bold mb-3 text-base sm:text-lg">{achievement.title}</h4>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>{achievement.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

export default Achievements
