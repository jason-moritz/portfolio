import { HashLink } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './About.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='about-content-container'>
        <div className='about-title'>About Me</div>
        <div className='about-content'>
          From a young age I've loved learning languages. Having lived abroad
          and learning Korean and Japanese, I've turned my passion for languages
          towards programming. I am a self-driven problem-solver who takes
          extreme ownership to accomplish tasks, with the focus always on team
          success.
        </div>
      </div>
      <div className='bottom-link'>
        <HashLink smooth to='#project1'>
          Projects
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </HashLink>
      </div>
    </section>
  )
}
