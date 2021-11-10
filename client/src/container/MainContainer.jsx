import Home from '../screens/Home'
import About from '../screens/About'
import Projects from '../screens/Projects'
import Contact from '../screens/Contact'

export default function MainContainer() {
  return (
    <div className='main-container'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
