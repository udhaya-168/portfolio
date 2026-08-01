import React from 'react'
import { Heart, BookOpen, Music, Laptop } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Coding',
      icon: <Laptop size={24} />,
      description: 'Exploring new technologies and building personal projects'
    },
    {
      name: 'Reading',
      icon: <BookOpen size={24} />,
      description: 'Tech blogs, programming books, and sci-fi novels'
    },
    {
      name: 'Music',
      icon: <Music size={24} />,
      description: 'Listening to various genres and playing guitar'
    },
    {
      name: 'Gaming',
      icon: <Heart size={24} />,
      description: 'Strategy games and problem-solving puzzles'
    }
  ]

  return (
    <section id="hobbies" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Hobbies & Interests</h2>
        </ScrollAnimation>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <ScrollAnimation key={index} animationDelay={index * 0.1}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
                <div className="bg-purple-600 dark:bg-purple-400 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="text-white">
                    {hobby.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{hobby.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{hobby.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
