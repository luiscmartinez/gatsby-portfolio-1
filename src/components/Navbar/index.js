import React, { useEffect, useState } from 'react'
import { StyledNavbar } from './StyledNavbar'
import { Link, animateScroll as scroll } from 'react-scroll'
import menuIcon from '../../images/menu.svg'
import MobileNavbar from './MobileNavbar'
import gatsbyConfig from '../../../gatsby-config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <StyledNavbar>
      <ul className="navbar-content">
        <li className="site-title">
          <h1 onClick={() => scroll.scrollToTop({ duration: 500 })}>
            {gatsbyConfig.siteMetadata.author}
          </h1>
        </li>
        <div>
          <li>
            <Link to="about" smooth duration={500} offset={-80}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} offset={-100}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="my-work" smooth duration={500} offset={-120}>
              My Work
            </Link>
          </li>
          <li>
            <a href={`https://github.com/${gatsbyConfig.siteMetadata.github}`} target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://blog.luismartinez.dev" target="_blank">Blog</a>
          </li>
        </div>
        <img
          src={menuIcon}
          alt=""
          onClick={toggle}
          className="mobile-menu-icon"
        />
      </ul>
      <MobileNavbar menuOpen={menuOpen} toggle={toggle} />
    </StyledNavbar>
  )
}
