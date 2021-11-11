import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import JWS from '../../assets/jws-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Project4.css'

export default function Project4() {
  return (
    <section id='project4' className='project4'>
      <div className='project4-container'>
        <div className='project-half-a'>
          <div className='project-title'>JWS</div>
          <div className='project-img-container'>
            <img className='project-img' src={JWS} alt='project-preview' />
          </div>
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <div className='project-description'>
              Formula 1 historic podium record app. Using a 3rd party api, users
              are able to search for all race results, as well as a list of
              drivers throughout history.
            </div>
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/JWS'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='project-link'
              href='https://jason-moritz.github.io/JWS/'
              target='_blank'
              rel='noreferrer'
            >
              Deployed site
            </a>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <ul>
                <li className='list-item'>
                  <span>Vanilla JS</span>
                </li>
                <li className='list-item'>
                  <span>Vanilla CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#contact'>
          Contact
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
