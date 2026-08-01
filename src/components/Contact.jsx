import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Replace with your Formspree form ID
    const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID'
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12">
        <div className="text-center lg:text-left">
          <ScrollAnimation>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl font-bold mb-8 sm:mb-11">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent-grad)' }}>
                ✈
              </div>
              Contact <span style={{ color: '#a78bfa' }}>Me</span>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10">
            <div className="lg:col-span-2">
              <ScrollAnimation animationDelay={0.1}>
                <div className="flex gap-4 mb-6 items-start justify-center lg:justify-start">
                  <div className="min-w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--accent1)' }}>
                    <Mail size={18} />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-dim)' }}>udhayakumara737@gmail.com</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationDelay={0.2}>
                <div className="flex gap-4 mb-6 items-start justify-center lg:justify-start">
                  <div className="min-w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--accent1)' }}>
                    <Phone size={18} />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-dim)' }}>+91 9345132721</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationDelay={0.3}>
                <div className="flex gap-4 items-start justify-center lg:justify-start">
                  <div className="min-w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--accent1)' }}>
                    <MapPin size={18} />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-dim)' }}>26D/187A, CSM Thoppu Street, Pillayarpalayam, Kanchipuram 631501, Tamil Nadu, India</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div>
          <ScrollAnimation animationDelay={0.2}>
            {isSubmitted ? (
              <div className="rounded-xl p-8 text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#10b981' }} />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    style={{ width: '100%', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', color: 'var(--text)', fontSize: '0.92rem' }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    style={{ width: '100%', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', color: 'var(--text)', fontSize: '0.92rem' }}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  style={{ width: '100%', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', color: 'var(--text)', fontSize: '0.92rem' }}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Your Message"
                  style={{ width: '100%', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', color: 'var(--text)', fontSize: '0.92rem', minHeight: '120px', resize: 'vertical' }}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-semibold text-sm self-start mx-auto lg:mx-0 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'var(--accent-grad)', color: '#fff', padding: '13px 20px', borderRadius: '11px', boxShadow: '0 10px 30px -10px rgba(124, 92, 255, 0.7)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Contact
