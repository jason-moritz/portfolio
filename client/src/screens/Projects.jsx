import './Projects.css'

export default function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='projects-container'>
        <div className='project-title'>Hubbub</div>
        <img src='' alt='project-preview' />
        <div className='project-stack'>
          <div className='tech-stack'>Tech Stack</div>
          <ul>
            <li>Ruby on Rails</li>
            <li>React JS</li>
            <li>Styling - MUI</li>
          </ul>
        </div>
        <div className='project-title'>Jay Walkin</div>
        <img src='' alt='project-preview' />
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
        <div className='project-title'>Pocket Caddie</div>
        <img src='' alt='project-preview' />
        <div className='project-stack'>
          <div className='tech-stack'>Tech Stack</div>
          <ul>
            <li>React JS</li>
            <li>Airtable</li>
            <li>Styling - Tailwind CSS</li>
          </ul>
        </div>
        <div className='project-title'>JWS</div>
        <img src='' alt='project-preview' />
        <div className='project-stack'>
          <div className='tech-stack'>Tech Stack</div>
          <ul>
            <li>JS</li>
            <li>Styling - Vanilla CSS</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
