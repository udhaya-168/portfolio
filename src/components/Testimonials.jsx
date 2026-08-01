import React from 'react'
import { Quote, Star } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Team Lead, Data Patterns',
      content: 'Udhayakumar consistently demonstrates excellent problem-solving skills and a strong work ethic. His ability to quickly diagnose and resolve technical issues has been invaluable to our team.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Project Manager, SRM University',
      content: 'During his final year project, Udhayakumar showed remarkable leadership and collaboration skills. His contribution to the restaurant booking system was exceptional.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Recommendations</h2>
        </ScrollAnimation>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} animationDelay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 right-4 text-blue-600 dark:text-blue-400">
                  <Quote size={24} />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
