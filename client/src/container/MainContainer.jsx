import Home from '../screens/Home'
import About from '../screens/About'
import Projects from '../screens/Projects'
import Contact from '../screens/Contact'
import { Routes, Route } from 'react-router-dom'

export default function MainContainer() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Routes />
    </div>
  )
}
