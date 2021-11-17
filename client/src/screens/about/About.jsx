import { HashLink } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './About.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='about-content-container'>
        <div className='about-title'>About Me</div>
        <div className='about-content'>
          I love <span className='about-span'>learning languages</span>. I have
          lived abroad, learning Korean and Japanese, and now I've turned my
          passion for languages towards programming. I am a{' '}
          <span className='about-span'>self-driven problem-solver</span> who
          takes extreme ownership to accomplish tasks, with the focus always on{' '}
          <span className='about-span'>team success</span>.
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
