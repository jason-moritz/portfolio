import { HashLink } from 'react-router-hash-link'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EmailIcon from '@mui/icons-material/Email'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Contact.css'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <div className='contact-content-container'>
        <div className='contact-title'>Contact Me</div>
        <div className='contact-info'>
          <div className='contact-name'>Jason Moritz</div>
          <div className='contact-email'>moritz.jason@gmail.com</div>
        </div>
        <div className='contact-links-container'>
          <div title='moritz.jason@gmail.com' className='contact-link-box'>
            <a
              className='contact-link'
              href='mailto:moritz.jason@gmail.com'
              aria-label='email'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon sx={{ fontSize: { xs: 40, sm: 60, md: 100 } }} />
              <div className='contact-link-title'>Email</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://drive.google.com/file/d/1ptmN3dn_x4QIFODZ430lBElB0xHAc-MJ/view?usp=sharing'
              aria-label='resume'
              download
              target='_blank'
              rel='noreferrer'
            >
              <PictureAsPdfIcon
                sx={{ fontSize: { xs: 40, sm: 60, md: 100 } }}
              />
              <div className='contact-link-title'>Resume</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://www.linkedin.com/in/jason-moritz'
              aria-label='linkedin'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon sx={{ fontSize: { xs: 40, sm: 60, md: 100 } }} />
              <div className='contact-link-title'>LinkedIn</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://www.github.com/jason-moritz'
              aria-label='github'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon sx={{ fontSize: { xs: 40, sm: 60, md: 100 } }} />
              <div className='contact-link-title'>Github</div>
            </a>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-copyright'>
          Jason Moritz ©2021. All rights reserved.
          <br />
          <span className='footer-span'>May the force be with you.</span>
        </div>
      </footer>
      <div className='bottom-link'>
        <HashLink smooth to='#top' aria-label='back-to-top'>
          Back to top
          <div>
            <KeyboardArrowUpIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
