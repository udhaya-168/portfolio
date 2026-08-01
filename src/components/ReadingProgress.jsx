import React, { useState, useEffect } from 'react'

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 transition-all duration-150 ease-out"
      style={{
        background: 'var(--accent-grad)',
        width: `${progress}%`
      }}
    />
  )
}

export default ReadingProgress
