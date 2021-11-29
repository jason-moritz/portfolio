import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import JayWalkin from '../../assets/jaywalkin-thumbnail-test.WebP'
import { HashLink } from 'react-router-hash-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './Project2.css'

export default function Project2() {
  return (
    <section id='project2' className='project2'>
      <div className='project2-container'>
        <div className='project-half-a'>
          <div className='project-title'>JayWalkin</div>
          <div className='project-img-container'>
            <img
              className='project-img-b'
              src={JayWalkin}
              alt='project-preview'
            />
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/jay-walkin'
              aria-label='github'
              target='_blank'
              rel='noreferrer'
            >
              <div title='github link'>
                <GitHubIcon
                  title='github link'
                  aria-label='github link'
                  sx={{ fontSize: { xs: 25, sm: 30, md: 40 } }}
                />
              </div>
            </a>
            <a
              className='project-link'
              href='https://jaywalkin.netlify.app/'
              aria-label='deployed site'
              target='_blank'
              rel='noreferrer'
            >
              <div title='Deployed site'>
                <ExitToAppIcon
                  title='deployed site'
                  label='deployed site'
                  sx={{ fontSize: { xs: 25, sm: 30, md: 40 } }}
                />
              </div>
            </a>
          </div>
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <div className='project-description-title'>Description</div>
            <div className='project-description'>
              E-commerce shoe store where users can upload, sort, search, and
              filter through diferent products.
            </div>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <div className='list-item-b'>React JS</div>
              <div className='list-item-b'>Express</div>
              <div className='list-item-b'>MongoDB</div>
              <div className='list-item-b'>Mongoose</div>
              <div className='list-item-b'>Node.js</div>
              <div className='list-item-b'>JWT</div>
              <div className='list-item-b'>Bcrypt</div>
              <div className='list-item-b'>Material UI</div>
              <div className='list-item-b'>Heroku</div>
              <div className='list-item-b'>Netlify</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link link'>
        <HashLink smooth to='#project3' aria-label='project 3'>
          More projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
