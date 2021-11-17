import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PocketCaddie from '../../assets/pocket-caddie-thumbnail-test.WebP'
import { HashLink } from 'react-router-hash-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './Project3.css'

export default function Project3() {
  return (
    <section id='project3' className='project3'>
      <div className='project3-container'>
        <div className='project-half-a'>
          <div className='project-title'>Pocket Caddie</div>
          <div className='project-img-container'>
            <img
              className='project-img-a'
              src={PocketCaddie}
              alt='project-preview'
            />
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/pocket-caddie'
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
              href='https://pocket-caddie.netlify.app/'
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
              On-course golf scorecard and club suggestor (caddie). Users are
              able to add friends and courses, view previous rounds, as well as
              input their yardages and get club recommendations.
            </div>
          </div>
          <div className='project-tech-stack'>
            <div className='tech-stack-title'>Made With: </div>
            <div className='tech-stack-container'>
              <div className='list-item-a'>React JS</div>
              <div className='list-item-a'>Airtable</div>
              <div className='list-item-a'>Tailwind CSS</div>
              <div className='list-item-a'>Netlify</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#project4'>
          More projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
