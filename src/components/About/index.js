import React from 'react'
import { StyledAbout } from './StyledAbout'
import AboutMeSummary from './sections/aboutMe'
import ContactForm from './sections/contactForm.js'

export default function About() {
  return (
    <StyledAbout>
      <div className="container">
        <AboutMeSummary />
        <ContactForm />
      </div>
    </StyledAbout>
  )
}
