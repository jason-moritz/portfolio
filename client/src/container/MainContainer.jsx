import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Project from '../screens/project/Project'
import Contact from '../screens/contact/Contact'
import { projectsArray } from '../utils/projects'

export default function MainContainer() {
  return (
    <div id='top' className='main-container'>
      <Home />
      <About />
      {projectsArray.map((project, index) => {
        return (
          <Project
            key={index}
            id={project.id}
            title={project.title}
            preview={project.preview}
            github={project.github}
            deployed={project.deployed}
            group={project.group}
            description={project.description}
            stack={project.stack}
            link={project.localLink}
            next={project.next}
          />
        )
      })}
      <Contact />
    </div>
  )
}
