import './Home.css'
import { HashLink } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function Home() {
  return (
    <section id='home' className='home'>
      <div className='welcome-text'>
        Hello, I'm <span className='welcome-name'>Jason.</span>
        <br />
        <div className='welcome-text-secondary'>
          I'm a full-stack web developer.
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#about'>
          About me
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
