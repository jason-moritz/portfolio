import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hubbub from '../../assets/hubbub-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './Project1.css'

export default function Project1() {
  return (
    <section id='project1' className='project1'>
      <div className='project1-container'>
        <div className='project-half-a'>
          <div className='project-title'>Hubbub</div>
          <div className='project-img-container'>
            <img className='project-img' src={Hubbub} alt='project-preview' />
            <div className='project-links'>
              <a
                className='project-link'
                href='https://github.com/jason-moritz/hubbub'
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
                href='https://hubbub.netlify.app/'
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
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <div className='project-description-title'>Description</div>
            <div className='project-description'>
              Reddit-style forum website where users can post their thoughts,
              upload pictures, and comment on other users' posts. This was a
              solo project that features full user authentication with CRUD
              privileges utilizing Bcrypt and JSON web tokens.
            </div>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <div className='list-item'>Ruby on Rails</div>
              <div className='list-item'>React JS</div>
              <div className='list-item'>PostgreSQL</div>
              <div className='list-item'>Bcrypt</div>
              <div className='list-item'>JWT</div>
              <div className='list-item'>Material UI</div>
              <div className='list-item'>Heroku</div>
              <div className='list-item'>Netlify</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#project2'>
          More projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
