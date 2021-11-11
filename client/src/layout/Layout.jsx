import Header from '../components/header/Header'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Header />
      <div className='children'>{children}</div>
    </div>
  )
}
