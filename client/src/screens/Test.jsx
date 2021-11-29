import { projectsArray } from '../utils/projects'

export default function Test() {
  return (
    <div>
      {projectsArray.map((project, index) => {
        return <div key={index}>{project.description}</div>
      })}
    </div>
  )
}
