import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero Component', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByText('Udhayakumar A')).toBeInTheDocument()
  })

  it('displays the profile image', () => {
    render(<Hero />)
    const profileImage = screen.getByAltText('Udhayakumar A')
    expect(profileImage).toBeInTheDocument()
  })

  it('shows social media links', () => {
    render(<Hero />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })
})
