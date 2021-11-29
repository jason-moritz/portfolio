import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hubbub from '../../assets/hubbub-thumbnail-test.WebP'
import { HashLink } from 'react-router-hash-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import './Project.css'

export default function Project(props) {
  const {
    id,
    title,
    preview,
    github,
    deployed,
    group,
    description,
    stack,
    link,
    next,
  } = props

  return (
    <section id={id} className='project'>
      <div className='project1-container'>
        <div className='project-half-a'>
          <h1 className='project-title'>{title}</h1>
          <div className='project-img-container'>
            <img
              className='project-img-a'
              src={preview}
              alt='project-preview'
            />
            <div className='project-links'>
              <a
                className='link'
                href={github}
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
                className='link'
                href={deployed}
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
            <h3 className='project-description-title'>Description</h3>
            <p className='project-description'>
              <span className='--accent'>{group}</span>
              <br />
              {description}
            </p>
          </div>
          <div className='project-tech-stack'>
            <h3 className='tech-stack-title'>Made With</h3>
            <div className='tech-stack-container'>
              {stack.map((tech, index) => {
                return (
                  <p key={index} className='list-item'>
                    {tech}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to={`#${link}`} aria-label={link}>
          {next}
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
