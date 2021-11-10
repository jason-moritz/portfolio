import JWS from '../assets/jws-thumbnail.png'
import PocketCaddie from '../assets/pocket-caddie-thumbnail.png'
import JayWalkin from '../assets/jaywalkin-thumbnail.png'
import Hubbub from '../assets/hubbub-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Projects.css'

export default function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='projects-container'>
        <div className='hubbub'>
          <div className='project-title'>Hubbub</div>
          <img src={Hubbub} alt='project-preview' />
          <div className='project-stack'>
            <div className='tech-stack'>Tech Stack</div>
            <ul>
              <li>Ruby on Rails</li>
              <li>React JS</li>
              <li>Styling - MUI</li>
            </ul>
          </div>
        </div>
        <div className='jay-walkin'>
          <div className='project-title'>Jay Walkin</div>
          <img src={JayWalkin} alt='project-preview' />
          <div className='project-stack'>
            <div className='tech-stack'>Tech Stack</div>
            <ul>
              <li>React JS</li>
              <li>Express</li>
              <li>Mongo DB</li>
              <li>Node.js</li>
              <li>Styling - MUI</li>
            </ul>
          </div>
        </div>
        <div className='pocket-caddie'>
          <div className='project-title'>Pocket Caddie</div>
          <img src={PocketCaddie} alt='project-preview' />
          <div className='project-stack'>
            <div className='tech-stack'>Tech Stack</div>
            <ul>
              <li>React JS</li>
              <li>Airtable</li>
              <li>Styling - Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className='jws'>
          <div className='project-title'>JWS</div>
          <img src={JWS} alt='project-preview' />
          <div className='project-description'>description here</div>
          <div className='project-stack'>
            <div className='tech-stack'>Tech Stack</div>
            <ul>
              <li>JS</li>
              <li>Styling - Vanilla CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <HashLink smooth to='#contact'>
        Contact me!
      </HashLink>
    </section>
  )
}
