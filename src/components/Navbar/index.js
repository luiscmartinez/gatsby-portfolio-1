import React from 'react'
import { StyledNavbar } from './StyledNavbar'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li className="site-title">
          <Link to="#">Riley Brown</Link>
        </li>
        <div>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#my-work">My Work</Link>
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
