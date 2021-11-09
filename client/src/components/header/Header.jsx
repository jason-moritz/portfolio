import { NavHashLink } from 'react-router-hash-link'

export default function Header() {
  return (
    <div className='header'>
      <NavHashLink className='page-link' smooth to='#home'>
        Home
      </NavHashLink>
      <NavHashLink className='page-link' smooth to='#about'>
        About
      </NavHashLink>
      <NavHashLink className='page-link' smooth to='#projects'>
        Projects
      </NavHashLink>
      <NavHashLink className='page-link' smooth to='#contact'>
        Contact
      </NavHashLink>
    </div>
  )
}
