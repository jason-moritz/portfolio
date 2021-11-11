import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import JayWalkin from '../../assets/jaywalkin-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Project2.css'

export default function Project2() {
  return (
    <section id='project2' className='project2'>
      <div className='project2-container'>
        <div className='project-half-a'>
          <div className='project-title'>JayWalkin</div>
          <div className='project-img-container'>
            <img
              className='project-img'
              src={JayWalkin}
              alt='project-preview'
            />
          </div>
        </div>
        <div className='project-half-b'>
          <div className='project-info'>
            <div className='project-description'>
              E-commerce shoe store where users have full CRUD and search
              functionality over inventory. This was a group project that
              features full user authentication with CRUD privileges utilizing
              Bcrypt and JSON web tokens with the MERN stack.
            </div>
          </div>
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/jay-walkin'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='project-link'
              href='https://jaywalkin.netlify.app/'
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
                  <span>Express</span>
                </li>
                <li className='list-item'>
                  <span>MongoDB</span>
                </li>
                <li className='list-item'>
                  <span>Mongoose</span>
                </li>
                <li className='list-item'>
                  <span>Node.js</span>
                </li>
              </ul>
              <ul>
                <li className='list-item'>
                  <span>JWT</span>
                </li>
                <li className='list-item'>
                  <span>Bcrypt</span>
                </li>
                <li className='list-item'>
                  <span>Material UI</span>
                </li>
                <li className='list-item'>
                  <span>Heroku</span>
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
        <HashLink smooth to='#project3'>
          More projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
