import './Home.css'
import { HashLink } from 'react-router-hash-link'
import EmailIcon from '@mui/icons-material/Email'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
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
      <div className='home-links-container'>
        <div title='moritz.jason@gmail.com' className='home-link-box'>
          <a
            className='contact-link'
            href='mailto:moritz.jason@gmail.com'
            aria-label='email'
            target='_blank'
            rel='noreferrer'
          >
            <EmailIcon sx={{ fontSize: { xs: 30, sm: 50, md: 75 } }} />
            <div className='contact-link-title'>Email</div>
          </a>
        </div>
        <div className='home-link-box'>
          <a
            className='contact-link'
            href='https://drive.google.com/file/d/1ptmN3dn_x4QIFODZ430lBElB0xHAc-MJ/view?usp=sharing'
            aria-label='resume'
            download
            target='_blank'
            rel='noreferrer'
          >
            <PictureAsPdfIcon sx={{ fontSize: { xs: 30, sm: 50, md: 75 } }} />
            <div className='contact-link-title'>Resume</div>
          </a>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#about' aria-label='about-me-section'>
          About me
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
