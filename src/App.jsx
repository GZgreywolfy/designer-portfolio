import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Advantages from './components/Advantages.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="top-sentinel" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Advantages />
      </main>
      <Footer />
    </>
  )
}
