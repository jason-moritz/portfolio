import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PocketCaddie from '../../assets/pocket-caddie-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Project3.css'

export default function Project3() {
  return (
    <section id='project3' className='project3'>
      <div className='project3-container'>
        <div className='project-half-a'>
          <div className='project-title'>Pocket Caddie</div>
          <div className='project-img-container'>
            <img
              className='project-img'
              src={PocketCaddie}
              alt='project-preview'
            />
          </div>
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <h3 className='project-description'>
              On-course golf scorecard and club suggestor (caddie). Users are
              able to add friends and courses, view previous rounds, as well as
              input their yardages and have Pocket Caddie recommend clubs.
              Server built on Airtable.
            </h3>
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/pocket-caddie'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='project-link'
              href='https://pocket-caddie.netlify.app/'
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
                  <span>React JS</span>
                </li>
                <li className='list-item'>
                  <span>Airtable</span>
                </li>
              </ul>
              <ul>
                <li className='list-item'>
                  <span>Tailwind CSS</span>
                </li>
                <li className='list-item'>
                  <span>Netlify</span>
                </li>
              </ul>
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
