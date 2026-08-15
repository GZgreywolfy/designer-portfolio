import Reveal from './Reveal.jsx'
import { profile, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__inner container">
        <Reveal className="contact__main">
          <h2 className="contact__title">一起，把想法做成作品</h2>
          <p className="contact__lead">{profile.contactLead}</p>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact__socials">
            {socials.map((s) => (
              <a
                className="social"
                key={s.label}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="contact__foot">
          <span className="contact__brand">{profile.name}</span>
          <span className="contact__copy">© {new Date().getFullYear()} · 保留所有权利</span>
        </div>
      </div>
    </footer>
  )
}
