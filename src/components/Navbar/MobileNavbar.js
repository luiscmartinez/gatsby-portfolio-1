import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import { StyledMobileNavbar } from './StyledMobileNavbar'

export default function MobileNavbar({ menuOpen, toggle }) {
  const hideOverflow = () => {
    document.querySelector('#mobile-navbar').style.overflow = 'auto'
    document.querySelector('body').style.overflow = 'hidden'
  }
  const showOverflow = () => {
    document.querySelector('#mobile-navbar').style.overflow = 'hidden'
    document.querySelector('body').style.overflow = 'auto'
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
            <a href="https://github.com/Riley-Brown" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://blog.riley.gg/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
        <span onClick={toggle}>&times;</span>
      </StyledMobileNavbar>
    </CSSTransition>
  )
}
