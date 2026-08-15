import Reveal from './Reveal.jsx'
import { profile, stats } from '../data/content.js'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner container">
        <Reveal className="about__media">
          <div className="about__avatar">
            <img src={profile.avatar} alt={`${profile.name} 的人物形象`} />
            <span className="about__avatar-ring" aria-hidden="true" />
          </div>
          <div className="about__contact">
            <span className="about__contact-label">联系方式</span>
            <a className="about__contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <span className="about__contact-sub">{profile.location}</span>
          </div>
        </Reveal>

        <Reveal className="about__body" delay={0.08}>
          <h2 className="about__name">{profile.name}</h2>
          <p className="about__roles">{profile.roles.join(' / ')}</p>
          <p className="about__intro">{profile.intro}</p>

          <div className="about__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
