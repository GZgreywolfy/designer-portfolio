import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const el = document.querySelector('.top-sentinel')
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top">
          {profile.name}
          <span className="nav__brand-dot" aria-hidden="true" />
        </a>
        <nav className="nav__links" aria-label="主导航">
          <a className="nav__link" href="#about">关于</a>
          <a className="nav__link" href="#work">作品</a>
          <a className="nav__link" href="#strength">优势</a>
        </nav>
        <a className="btn btn--primary nav__cta" href="#contact">联系</a>
      </div>
    </header>
  )
}
