import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import { StyledMobileNavbar } from './StyledMobileNavbar'
import gatsbyConfig from '../../../gatsby-config'

export default function MobileNavbar({ menuOpen, toggle }) {
  const hideOverflow = () => {
    document.querySelector('#mobile-navbar').style.overflowY = 'auto'
    document.querySelector('body').style.overflowY = 'hidden'
  }
  const showOverflow = () => {
    document.querySelector('#mobile-navbar').style.overflowY = 'hidden'
    document.querySelector('body').style.overflowY = 'auto'
  }

  return (
    <CSSTransition
      in={menuOpen}
      classNames="modal"
      unmountOnExit
      timeout={300}
      onEntered={hideOverflow}
      onExiting={showOverflow}
    >
      <StyledMobileNavbar onClick={toggle} id="mobile-navbar">
        <ul>
          <li onClick={toggle}>
            <Link
              onClick={toggle}
              to="about"
              smooth
              duration={500}
              offset={-110}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle}
              to="contact"
              smooth
              duration={500}
              offset={-110}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle}
              to="my-work"
              smooth
              duration={500}
              offset={-110}
            >
              My Work
            </Link>
          </li>
          <li>
            <a href={`https://github.com/${gatsbyConfig.siteMetadata.github}`} target="_blank">
              GitHub
            </a>
          </li>
        </ul>
        <span onClick={toggle}>&times;</span>
      </StyledMobileNavbar>
    </CSSTransition>
  )
}
