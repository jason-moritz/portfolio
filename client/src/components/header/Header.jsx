import { useState, useEffect } from 'react'
import { NavHashLink, HashLink } from 'react-router-hash-link'
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
    <>
      <NavHashLink className='nav-link' smooth to='#home'>
        Home
      </NavHashLink>
    </>
  )

  const about = (
    <>
      <NavHashLink className='nav-link' smooth to='#about'>
        About
      </NavHashLink>
    </>
  )

  const projects = (
    <>
      <NavHashLink className='nav-link' smooth to='#project1'>
        Projects
      </NavHashLink>
    </>
  )

  const contact = (
    <>
      <NavHashLink className='nav-link' smooth to='#contact'>
        Contact
      </NavHashLink>
    </>
  )
  return (
    <>
      <HideOnScroll>
        <nav className='header'>
          {width < breakpoint ? (
            <MobileNav
              home={home}
              about={about}
              projects={projects}
              contact={contact}
            />
          ) : (
            <>
              <div className='logo'>Jason Moritz</div>
              <div className='nav-link-container'>
                {home}
                {about}
                {projects}
                {contact}
              </div>
            </>
          )}
        </nav>
      </HideOnScroll>
    </>
  )
}
