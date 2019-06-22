import React, { useState } from 'react'
import bayshells from '../../images/bayshells-landing.png'
import danielLanding from '../../images/daniel-landing-page.jpg'
import instaClone from '../../images/insta-clone.png'
import learnLocker from '../../images/learn-locker.png'
import caseStudy from '../../images/upwork-10-case-study.png'
import wbFlashback from '../../images/wb-flashback.jpg'
import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'

export default function MyWork() {
  const [imgs] = useState([
    learnLocker,
    caseStudy,
    instaClone,
    danielLanding,
    wbFlashback,
    bayshells,
  ])

  return (
    <StyledMyWork>
      {imgs.map(img => (
        <Card img={img} alt="My Work" />
      ))}
      <Modal />
    </StyledMyWork>
  )
}
