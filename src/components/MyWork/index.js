import React from 'react'
import bayshells from '../../images/bayshells-landing.png'
import danielLanding from '../../images/daniel-landing-page.jpg'
import instaClone from '../../images/insta-clone.png'
import learnLocker from '../../images/learn-locker.png'
import caseStudy from '../../images/upwork-10-case-study.png'
import wbFlashback from '../../images/wb-flashback.jpg'
import { StyledMyWork } from './StyledMyWork'

export default function MyWork() {
  return (
    <StyledMyWork>
      <div className="card">
        <img src={learnLocker} alt="" />
      </div>
      <div className="card">
        <img src={caseStudy} alt="" />
      </div>
      <div className="card">
        <img src={instaClone} alt="" />
      </div>
      <div className="card">
        <img src={danielLanding} alt="" />
      </div>
      <div className="card">
        <img src={wbFlashback} alt="" />
      </div>
      <div className="card">
        <img src={bayshells} alt="" />
      </div>
    </StyledMyWork>
  )
}
