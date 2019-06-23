import React from 'react'
import { StyledNavbar } from './StyledNavbar'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li className="site-title">
          <h1 onClick={() => scroll.scrollToTop({ duration: 500 })}>
            Riley Brown
          </h1>
        </li>
        <div>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="my-work" smooth={true} duration={500} offset={-120}>
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
        </div>
      </ul>
    </StyledNavbar>
  )
}
