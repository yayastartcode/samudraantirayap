import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { About } from '@/components/About'
import { Techniques } from '@/components/Techniques'
import { Contact } from '@/components/Contact'
import { FAQ } from '@/components/FAQ'
import { Map } from '@/components/Map'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />
      <Hero />
      <Features />
      <About />
      <Techniques />
      <Contact />
      <FAQ />
      <Map />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
