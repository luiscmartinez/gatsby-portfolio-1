import React from 'react'
import { StyledLanding } from './StyledLanding'
import browser from '../../images/browser.png'
import Carousel from '../Carousel'
import { CSSTransition } from 'react-transition-group'
import Fade from 'react-reveal/Fade'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Landing() {
  return (
    <StyledLanding>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="container">
          <div className="carousel-wrapper">
            <img src={browser} alt="Carousel frame" />
            <Carousel />
          </div>
          <div className="landing-info">
            <h1>Welcome to my Portfolio</h1>
            <p>
              I am a Full-Stack Web Developer with a passion for learning new
              technologies. I am experienced with modern tech such as React and
              Nodejs.
            </p>
            <Link to="test" smooth={true} duration={500} offset={-50}>
              <button>See More</button>
            </Link>
          </div>
        </div>
      </CSSTransition>
    </StyledLanding>
  )
}
