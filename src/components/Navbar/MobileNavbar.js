import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link, animateScroll as scroll } from 'react-scroll'
import { StyledMobileNavbar } from './StyledMobileNavbar'

export default function MobileNavbar({ menuOpen, toggle }) {
  return (
    <CSSTransition in={menuOpen} classNames="modal" unmountOnExit timeout={300}>
      <StyledMobileNavbar onClick={toggle}>
        <ul>
          <li onClick={toggle}>
            <Link
              onClick={toggle}
              to="about"
              smooth
              duration={500}
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
