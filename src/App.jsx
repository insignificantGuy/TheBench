import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Events from './components/Events'
import OrderOnline from './components/OrderOnline'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('bench-theme')
    if (saved === 'dark') setDark(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('bench-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Gallery />
      <Events />
      <OrderOnline />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
