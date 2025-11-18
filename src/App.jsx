import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Process />
        <Contact />
        <footer className="py-8 bg-slate-100 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Med Revive • Abroad Education Consultancy</p>
          <p className="mt-1">YouTube: med-revive • Instagram: med-revive</p>
        </footer>
      </main>
    </div>
  )
}

export default App
