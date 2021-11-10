import './Contact.css'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <div>Contact Info</div>
      <div>
        <div>
          Email:
          <a
            className='contact-link'
            href='mailto:moritz.jason@gmail.com'
            target='_blank'
          >
            Email
          </a>
        </div>
        <div>
          LinkedIn:
          <a
            className='contact-link'
            href='https://www.linkedin.com/in/jason-moritz'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
        <div>
          Github:
          <a
            className='contact-link'
            href='https://www.github.com/jason-moritz'
            target='_blank'
          >
            Github
          </a>
        </div>
      </div>
    </section>
  )
}
