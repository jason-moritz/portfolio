import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hubbub from '../../assets/hubbub-thumbnail-test.WebP'
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
            <img className='project-img-a' src={Hubbub} alt='project-preview' />
            <div className='project-links'>
              <a
                className='project-link'
                href='https://github.com/jason-moritz/hubbub'
                aria-label='github'
                target='_blank'
                rel='noreferrer'
              >
                <div title='github link'>
                  <GitHubIcon
                    title='github link'
                    sx={{ fontSize: { xs: 25, sm: 30, md: 40 } }}
                  />
                </div>
              </a>
              <a
                className='project-link'
                href='https://hubbub.netlify.app/'
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
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <div className='project-description-title'>Description</div>
            <div className='project-description'>
              Reddit-style forum website with user authentication where users
              can post their thoughts, upload pictures, and comment on other
              users' posts.
            </div>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <div className='list-item-a'>Ruby on Rails</div>
              <div className='list-item-a'>React JS</div>
              <div className='list-item-a'>PostgreSQL</div>
              <div className='list-item-a'>Bcrypt</div>
              <div className='list-item-a'>JWT</div>
              <div className='list-item-a'>Material UI</div>
              <div className='list-item-a'>Heroku</div>
              <div className='list-item-a'>Netlify</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#project2' aria-label='project2'>
          More projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
