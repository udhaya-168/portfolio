import React, { useState } from 'react'
import { Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, User, X } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="home" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', minHeight: '92vh', paddingTop: '70px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <ScrollAnimation>
            <div 
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 lg:mb-7 mx-auto lg:mx-0 shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer" 
              style={{ boxShadow: '0 0 40px rgba(124, 92, 255, 0.5)' }}
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/portfolio/profile.jpg" alt="Udhayakumar A" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationDelay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center lg:text-left" style={{ lineHeight: '1.1' }}>
              Udhayakumar A
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animationDelay={0.2}>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left" style={{ background: 'linear-gradient(135deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              IT Support Engineer &amp; Aspiring DevOps Engineer
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationDelay={0.3}>
            <p className="text-sm sm:text-base mb-8 lg:mb-9 max-w-lg mx-auto lg:mx-0 text-center lg:text-left" style={{ color: 'var(--text-dim)' }}>
              BCA graduate with hands-on experience in Python, JavaScript, and IT infrastructure. Passionate about transitioning into DevOps and cloud technologies to build scalable systems.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationDelay={0.4}>
            <div className="flex flex-wrap gap-3 mb-8 lg:mb-10 justify-center lg:justify-start">
              <a
                href="#projects"
                className="font-semibold text-sm transition-transform hover:-translate-y-0.5"
                style={{ padding: '13px 20px', borderRadius: '11px', border: '1px solid var(--border)', color: 'var(--text)', background: 'transparent', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <ExternalLink size={18} />
                View Projects
              </a>
              <a
                href="/portfolio/Udhayakumar_Resume.pdf"
                download
                className="font-semibold text-sm transition-transform hover:-translate-y-0.5"
                style={{ padding: '13px 20px', borderRadius: '11px', background: '#fff', color: '#0b0e1f', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationDelay={0.5}>
            <div className="flex flex-wrap gap-4 lg:gap-7 text-xs sm:text-sm justify-center lg:justify-start" style={{ color: 'var(--text-dim)' }}>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>udhayakumara737@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9345132721</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kanchipuram, Tamil Nadu</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="relative flex items-center justify-center hidden lg:flex" style={{ height: '440px' }}>
          <ScrollAnimation animationDelay={0.2}>
            <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124, 92, 255, 0.25), transparent 70%)' }}></div>
          </ScrollAnimation>
          
          <ScrollAnimation animationDelay={0.3}>
            <div className="relative" style={{ width: '280px', background: 'var(--bg-panel)', border: '1px solid var(--border)', borderRadius: '16px', padding: '18px', boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.6)' }}>
              <div className="flex gap-2 mb-3">
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--text-faint)' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--text-faint)' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--text-faint)' }}></span>
              </div>
              <div className="h-2.5 rounded mb-2" style={{ width: '90%', background: 'linear-gradient(90deg, #7c5cff, #3b82f6)' }}></div>
              <div className="h-2.5 rounded mb-2" style={{ width: '60%', background: 'linear-gradient(90deg, #ec4899, #7c5cff)' }}></div>
              <div className="h-2.5 rounded mb-2" style={{ width: '80%', background: 'linear-gradient(90deg, #3b82f6, #22d3ee)' }}></div>
              <div className="h-2.5 rounded mb-2" style={{ width: '45%', background: 'linear-gradient(90deg, #7c5cff, #3b82f6)' }}></div>
              <div className="h-2.5 rounded" style={{ width: '70%', background: 'linear-gradient(90deg, #ec4899, #7c5cff)' }}></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationDelay={0.4}>
            <div className="absolute w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl float" style={{ top: '-10px', right: '40px', background: 'var(--bg-panel)', border: '1px solid var(--border)', boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.5)' }}>
              🐍
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationDelay={0.5}>
            <div className="absolute w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl float" style={{ top: '40px', left: '-20px', background: 'var(--bg-panel)', border: '1px solid var(--border)', boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.5)', animationDelay: '1s' }}>
              &gt;_
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationDelay={0.5}>
            <div className="absolute w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl float" style={{ bottom: '20px', right: '-10px', background: 'var(--bg-panel)', border: '1px solid var(--border)', boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.5)', animationDelay: '2s' }}>
              🐳
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationDelay={0.5}>
            <div className="absolute w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl float" style={{ bottom: '-10px', left: '30px', background: 'var(--bg-panel)', border: '1px solid var(--border)', boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.5)', animationDelay: '1.5s' }}>
              ☁️
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Profile Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img 
              src="/portfolio/profile.jpg" 
              alt="Udhayakumar A" 
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
