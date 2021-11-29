import LocalScroll from '../../components/scroll/LocalScroll'
import './About.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='about-container'>
        <h2 className='about-title'>About Me</h2>
        <div className='about-content'>
          <h3 className='about-subtitle --accent'>passion for language </h3>
          <p>
            developed while living abroad where I learned both Korean and
            Japanese. I now channel that focus towards programming, mainly with
            React JS, JavaScript, and Ruby on Rails.
          </p>
          <h3 className='about-subtitle --accent'>problem-solver</h3>
          <p>
            I absolutely love algos and coding puzzles. Whatever the challenge,
            I take extreme ownership to accomplish tasks.
          </p>
          <h3 className='about-subtitle --accent'>team success</h3>
          <p>
            Teamwork makes the dream work! Experienced with Gitflow, slack and
            other workflow tools.
          </p>
        </div>
      </div>
      <LocalScroll link={'project1'} next={'projects'} />
    </section>
  )
}
