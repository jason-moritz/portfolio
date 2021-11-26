import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import JWS from '../../assets/jws-thumbnail-test.WebP'
import { HashLink } from 'react-router-hash-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './Project4.css'

export default function Project4() {
  return (
    <section id='project4' className='project4'>
      <div className='project4-container'>
        <div className='project-half-a'>
          <div className='project-title'>JWS</div>
          <div className='project-img-container'>
            <img className='project-img-b' src={JWS} alt='project-preview' />
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/JWS'
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
              href='https://jason-moritz.github.io/JWS/'
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
              Formula 1 historic podium record app. Using a 3rd party API, users
              are able to search for all race results, as well as a list of
              drivers throughout history.
            </div>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <div className='list-item-b'>HTML</div>
              <div className='list-item-b'>JS</div>
              <div className='list-item-b'>CSS</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#contact' aria-label='contact info'>
          Contact
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
