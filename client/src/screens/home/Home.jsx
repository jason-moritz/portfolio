import './Home.css'
import { HashLink } from 'react-router-hash-link'
import EmailIcon from '@mui/icons-material/Email'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function Home() {
  return (
    <section id='home' className='home'>
      <div className='welcome-text'>
        <h1>
          Hi, I'm <span className='welcome-name --accent'>Jason.</span>
        </h1>
        <div className='welcome-text-secondary'>
          <h3>I'm a full-stack web developer.</h3>
          <HashLink
            className='link'
            smooth
            to='#contact'
            aria-label='contact section'
          >
            <p>Let's talk &#8702;</p>
          </HashLink>
        </div>
      </div>
      <div className='home-links-container'>
        <div title='moritz.jason@gmail.com' className='home-link-box'>
          <a
            href='mailto:moritz.jason@gmail.com'
            aria-label='email'
            target='_blank'
            rel='noreferrer'
          >
            <EmailIcon sx={{ fontSize: { xs: 50, md: 90 } }} />
            <h3>Email</h3>
          </a>
        </div>
        <div className='home-link-box'>
          <a
            href='https://drive.google.com/file/d/1ptmN3dn_x4QIFODZ430lBElB0xHAc-MJ/view?usp=sharing'
            aria-label='resume'
            download
            target='_blank'
            rel='noreferrer'
          >
            <PictureAsPdfIcon sx={{ fontSize: { xs: 50, md: 90 } }} />
            <h3>Resume</h3>
          </a>
        </div>
      </div>
      <div className='bottom-link link'>
        <HashLink
          className='link'
          smooth
          to='#about'
          aria-label='about-me-section'
        >
          About me
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
