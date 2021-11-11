import { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { Button, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './MobileNav.css'

export default function MobileNav({ home, about, projects, contact }) {
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
    </>
  )
}
