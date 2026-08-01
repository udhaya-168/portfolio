import React from 'react'
import { Award, Calendar } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CP-123456'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'AZ-900'
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'PDS-789012'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Certifications</h2>
        </ScrollAnimation>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} animationDelay={index * 0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-blue-100 dark:border-gray-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600 dark:bg-blue-400 p-3 rounded-full">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  ID: {cert.credentialId}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
