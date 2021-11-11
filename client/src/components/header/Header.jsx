import { useState } from 'react'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import HideOnScroll from '../HideOnScroll'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Menu, MenuItem } from '@mui/material'
import './Header.css'

export default function Header() {
  const [toggle, setToggle] = useState(null)
  const open = Boolean(toggle)
  const handleClick = e => {
    setToggle(e.currentTarget)
  }

  const handleClose = () => {
    setToggle(null)
  }

  const home = (
    <>
      <NavHashLink className='nav-link' smooth to='#home'>
        Home
      </NavHashLink>
    </>
  )

  const about = (
    <>
      <NavHashLink className='mobile-nav-link' smooth to='#about'>
        About
      </NavHashLink>
    </>
  )

  const projects = (
    <>
      <NavHashLink className='mobile-nav-link' smooth to='#project1'>
        Projects
      </NavHashLink>
    </>
  )

  const contact = (
    <>
      <NavHashLink className='mobile-nav-link' smooth to='#contact'>
        Contact
      </NavHashLink>
    </>
  )
  return (
    <>
      <HideOnScroll>
        <nav className='mobile-header'>
          <Button
            id='hamburger-button'
            aria-controls='mobile-nav-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            sx={{ p: 0, color: '#f9f8f8' }}
            onClick={handleClick}
          >
            {toggle === null ? (
              <MenuIcon sx={{ fontSize: 40, p: 0 }} />
            ) : (
              <CloseIcon sx={{ fontSize: 40, p: 0 }} />
            )}
          </Button>
          <Menu
            id='mobile-nav-menu'
            anchorEl={toggle}
            open={open}
            onClose={handleClose}
            transitionDuration={600}
            PaperProps={{
              style: {
                minWidth: '350px',
              },
            }}
          >
            <NavHashLink className='mobile-nav-link' smooth to='#home'>
              <MenuItem key='nav-link-home' onClick={handleClose}>
                Home
              </MenuItem>
            </NavHashLink>
            <NavHashLink className='mobile-nav-link' smooth to='#about'>
              <MenuItem key='nav-link-about' onClick={handleClose}>
                About
              </MenuItem>
            </NavHashLink>
            <NavHashLink className='mobile-nav-link' smooth to='#project1'>
              <MenuItem key='nav-link-project' onClick={handleClose}>
                Projects
              </MenuItem>
            </NavHashLink>
            <NavHashLink className='mobile-nav-link' smooth to='#contact'>
              <MenuItem key='nav-link-contact' onClick={handleClose}>
                Contact
              </MenuItem>
            </NavHashLink>
          </Menu>
          <div className='mobile-logo'>Jason Moritz</div>
        </nav>
      </HideOnScroll>

      <HideOnScroll>
        <nav className='header'>
          <div className='logo'>Jason Moritz</div>
          <div className='nav-link-container'>
            <NavHashLink className='nav-link' smooth to='#home'>
              Home
            </NavHashLink>
            <NavHashLink className='nav-link' smooth to='#about'>
              About
            </NavHashLink>
            <NavHashLink className='nav-link' smooth to='#project1'>
              Projects
            </NavHashLink>
            <NavHashLink className='nav-link' smooth to='#contact'>
              Contact
            </NavHashLink>
          </div>
        </nav>
      </HideOnScroll>
    </>
  )
}
