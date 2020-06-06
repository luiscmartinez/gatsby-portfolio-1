import React, { useState, useEffect } from 'react'
import { StyledLanding } from './StyledLanding'
import browser from '../../images/browser.png'
import Carousel from '../Carousel'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import Spinner from './Spinner'

export default function Landing() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {loaded == false && <Spinner />}

      <StyledLanding>
        {loaded && (
          <CSSTransition
            in={loaded}
            appear={loaded}
            timeout={1000}
            classNames="fade"
          >
            <div className="container">
              <div className="carousel-wrapper">
                <img src={browser} alt="Carousel frame" />
                <Carousel />
              </div>
              <div className="landing-info">
                <h1>Welcome to my Portfolio</h1>
                <p>
                  I am a Full-Stack Web Developer with a passion for learning
                  new technologies.
                </p>
                <Link to="my-work" smooth={true} duration={500} offset={-100}>
                  <button>My Work</button>
                </Link>
              </div>
            </div>
          </CSSTransition>
        )}
      </StyledLanding>
    </>
  )
}
