import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hubbub from '../../assets/hubbub-thumbnail.png'
import { HashLink } from 'react-router-hash-link'
import './Project1.css'

export default function Projects() {
  return (
    <section id='project1' className='project1'>
      <h1 className='screen-title'>Projects</h1>
      <div className='project-container'>
        <div className='project-image-and-links'>
          <img className='project-img' src={Hubbub} alt='project-preview' />
          <div className='project-links'>
            <a
              className='project-link'
              href='https://github.com/jason-moritz/hubbub'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='project-link'
              href='https://hubbub.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              Deployed site
            </a>
          </div>
        </div>
        <div className='project-info'>
          <div className='project-title'>Hubbub</div>
          <h3 className='project-description'>
            Reddit-style forum website where users can post their thoughts,
            upload pictures, and comment on other users' posts. This was a solo
            project that features full user authentication with CRUD privileges
            utilizing Bcrypt and JSON web tokens.
          </h3>
          <h1 className='project-tech-stack'>Made With: </h1>
          <ul>
            <li className='list-item'>
              <span>Ruby on Rails</span>
            </li>
            <li className='list-item'>
              <span>React JS</span>
            </li>
            <li className='list-item'>
              <span>PostgreSQL</span>
            </li>
            <li className='list-item'>
              <span>Bcrypt</span>
            </li>
            <li className='list-item'>
              <span>JWT</span>
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
