import { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
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
            <MenuItem key='link-home'>
              <NavHashLink className='mobile-nav-link' smooth to='#home'>
                Home
              </NavHashLink>
            </MenuItem>
            <MenuItem key='link-about'>
              <NavHashLink className='mobile-nav-link' smooth to='#about'>
                About
              </NavHashLink>
            </MenuItem>
            <MenuItem key='link-project'>
              <NavHashLink className='mobile-nav-link' smooth to='#project1'>
                Projects
              </NavHashLink>
            </MenuItem>
            <MenuItem key='link-contact'>
              <NavHashLink className='mobile-nav-link' smooth to='#contact'>
                Contact
              </NavHashLink>
            </MenuItem>
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
