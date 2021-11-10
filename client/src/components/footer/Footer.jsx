import './Footer.css'

export default function Footer() {
  return (
    <footer>
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
    </footer>
  )
}
