import { useState, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import HideOnScroll from './HideOnScroll'
import './Header.css'

export default function Header() {
  // const [width, setWidth] = useState(window.innerWidth)
  const [open, setOpen] = useState(false)
  const breakpoint = 1024

  useEffect(() => {
    window.addEventListener('resize', () => {
      return window.innerWidth >= breakpoint && open ? setOpen(false) : null
    })

    window.addEventListener('scroll', () => {
      return setOpen(false)
    })
  }, [open])

  const handleClick = () => {
    setOpen(prevState => (prevState = !prevState))
  }

  const home = (
    <li>
      <NavHashLink smooth to='#home'>
        Home
      </NavHashLink>
    </li>
  )

  const about = (
    <li>
      <NavHashLink smooth to='#about'>
        About
      </NavHashLink>
    </li>
  )

  const projects = (
    <li>
      <NavHashLink smooth to='#project1'>
        Projects
      </NavHashLink>
    </li>
  )

  const contact = (
    <li>
      <NavHashLink smooth to='#contact'>
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
            <h3 className='logo'>Jason Moritz</h3>
          </NavHashLink>
          <input
            type='checkbox'
            id='nav-toggle'
            onChange={handleClick}
            checked={open}
            className='nav-toggle'
          />
          <label htmlFor='nav-toggle' className='nav-toggle-label'>
            <span />
          </label>
          <nav>
            <ul className='nav-links' onClick={handleClick}>
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
