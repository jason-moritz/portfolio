import './Home.css'
import { HashLink } from 'react-router-hash-link'

export default function Home() {
  return (
    <section id='home' className='home'>
      Hello, I'm Jason Moritz. I'm a full-stack web developer and full-time
      cat-dad.
      <HashLink smooth to='#about'>
        About me
      </HashLink>
    </section>
  )
}
