import React from 'react'
import { StyledLanding } from './StyledLanding'
import browser from '../../images/browser.png'
import Carousel from '../Carousel'
import { CSSTransition } from 'react-transition-group'

export default function index() {
  return (
    <StyledLanding>
      <div className="container">
        <div className="carousel-wrapper">
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <img src={browser} alt="Carousel frame" />
          </CSSTransition>
          <Carousel />
        </div>
        <div className="landing-info">
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
