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
        <div className='contact-links-container'>
          <div title='moritz.jason@gmail.com' className='contact-link-box'>
            <a
              className='contact-link'
              href='mailto:moritz.jason@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon sx={{ fontSize: { xs: 50, sm: 75, md: 100 } }} />
              <div className='contact-link-title'>Email</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://drive.google.com/file/d/1ptmN3dn_x4QIFODZ430lBElB0xHAc-MJ/view?usp=sharing'
              download
              target='_blank'
              rel='noreferrer'
            >
              <PictureAsPdfIcon
                sx={{ fontSize: { xs: 50, sm: 75, md: 100 } }}
              />
              <div className='contact-link-title'>Resume</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://www.linkedin.com/in/jason-moritz'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon sx={{ fontSize: { xs: 50, sm: 75, md: 100 } }} />
              <div className='contact-link-title'>LinkedIn</div>
            </a>
          </div>
          <div className='contact-link-box'>
            <a
              className='contact-link'
              href='https://www.github.com/jason-moritz'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon sx={{ fontSize: { xs: 50, sm: 75, md: 100 } }} />
              <div className='contact-link-title'>Github</div>
            </a>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#top'>
          Back to top
          <div>
            <KeyboardArrowUpIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
