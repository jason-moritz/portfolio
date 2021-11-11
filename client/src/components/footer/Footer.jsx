import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          Email: test
          <a
            className='contact-link'
            href='mailto:moritz.jason@gmail.com'
            target='_blank'
            rel='noreferrer'
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
            rel='noreferrer'
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
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}
