import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-40 rounded-full transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          width: 16,
          height: 16,
          background: 'var(--accent1)',
          opacity: 0.5,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-40 rounded-full border-2 transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderColor: 'var(--accent1)',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  )
}

export default CustomCursor
