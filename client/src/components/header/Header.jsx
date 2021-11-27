import { useState, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import HideOnScroll from './HideOnScroll'
import MobileNav from './MobileNav'
import './Header.css'

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const home = (
    <li>
      <NavHashLink className='nav-link' smooth to='#home'>
        Home
      </NavHashLink>
    </li>
  )

  const about = (
    <li>
      <NavHashLink className='nav-link' smooth to='#about'>
        About
      </NavHashLink>
    </li>
  )

  const projects = (
    <li>
      <NavHashLink className='nav-link' smooth to='#project1'>
        Projects
      </NavHashLink>
    </li>
  )

  const contact = (
    <li>
      <NavHashLink className='nav-link' smooth to='#contact'>
        Contact
      </NavHashLink>
    </li>
  )
  return (
    <>
      <HideOnScroll>
        <header>
          <NavHashLink
            className='logo-link'
            smooth
            to='#top'
            aria-label='scroll back to top of page'
          >
            <h1 className='logo'>Jason Moritz</h1>
          </NavHashLink>
          <input type='checkbox' id='nav-toggle' className='nav-toggle' />
          <label for='nav-toggle' className='nav-toggle-label'>
            <span />
          </label>
          <nav>
            <ul className='nav-links'>
              {home}
              {about}
              {projects}
              {contact}
            </ul>
          </nav>
        </header>
      </HideOnScroll>
    </>
  )
}
