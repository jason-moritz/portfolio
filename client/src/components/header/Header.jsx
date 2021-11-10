import { NavHashLink } from 'react-router-hash-link'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>Jason Moritz</div>
      <div className='nav-link-container'>
        <NavHashLink className='nav-page-link' smooth to='#home'>
          Home
        </NavHashLink>
        <NavHashLink className='nav-page-link' smooth to='#about'>
          About
        </NavHashLink>
        <NavHashLink className='nav-page-link' smooth to='#projects'>
          Projects
        </NavHashLink>
        <NavHashLink className='nav-page-link' smooth to='#contact'>
          Contact
        </NavHashLink>
      </div>
    </header>
  )
}
