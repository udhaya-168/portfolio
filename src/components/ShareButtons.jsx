import React from 'react'
import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react'

const ShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://udhayakumara.github.io/dashboard/'
  const shareTitle = 'Udhayakumar A - IT Support Engineer & Web Developer'
  const shareDescription = 'IT Support Engineer & Aspiring Web Developer with expertise in Python, JavaScript, Cloud, and DevOps technologies.'

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: '#1877F2'
    },
    {
      name: 'Copy Link',
      icon: LinkIcon,
      action: () => {
        navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
      },
      color: '#6B7280'
    }
  ]

  const handleShare = (link) => {
    if (link.action) {
      link.action()
    } else {
      window.open(link.url, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col gap-3">
      <button
        onClick={() => {
          const menu = document.getElementById('share-menu')
          menu?.classList.toggle('hidden')
        }}
        className="p-3 rounded-full transition-all hover:scale-110"
        style={{ background: 'var(--accent-grad)', color: '#fff', boxShadow: '0 4px 20px rgba(124, 92, 255, 0.4)' }}
        aria-label="Share"
      >
        <Share2 size={20} />
      </button>
      <div id="share-menu" className="hidden flex flex-col gap-2">
        {shareLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => handleShare(link)}
            className="p-3 rounded-full transition-all hover:scale-110"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: link.color }}
            aria-label={link.name}
          >
            <link.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShareButtons
