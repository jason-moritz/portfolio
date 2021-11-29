import { HashLink } from 'react-router-hash-link'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EmailIcon from '@mui/icons-material/Email'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocalScroll from '../../components/scroll/LocalScroll'
import './Contact.css'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2 className='contact-title'>Contact</h2>
      <div className='contact-content-container'>
        <div className='contact-info'>
          <h3 className='contact-name --accent'>Jason Moritz</h3>
          <p className='contact-email'>moritz.jason@gmail.com</p>
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
        <p className='footer-copyright'>
          Jason Moritz ©2021. All rights reserved.
          <br />
          <br />
          <span className='footer-span --brand'>
            May the force be with you.
          </span>
        </p>
      </footer>
      <LocalScroll link={'top'} next={'back to top'} />
    </section>
  )
}
