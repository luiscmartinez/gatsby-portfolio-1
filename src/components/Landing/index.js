import React from 'react'
import { StyledLanding } from './StyledLanding'
import browser from '../../images/browser.png'
import bayshells from '../../images/bayshells-landing.png'

export default function index() {
  return (
    <StyledLanding>
      <div className="container">
        <div className="carousel">
          <img src={browser} alt="Carousel frame" />
          <img src={bayshells} alt="" />
        </div>
        <div>
          <h1>Welcome to my Portfolio</h1>
          <p>
            I am a Full-Stack Web Developer with a passion for learning new
            technologies. I am experienced with modern tech such as React and
            Nodejs.
          </p>
          <button>See More</button>
        </div>
      </div>
    </StyledLanding>
  )
}
