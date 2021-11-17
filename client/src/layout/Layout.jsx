import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Header />
      <div className='children'>{children}</div>
      <Footer />
    </div>
  )
}
