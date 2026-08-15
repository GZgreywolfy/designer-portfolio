import Reveal from './Reveal.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  const [feature, ...rest] = projects

  return (
    <section className="projects" id="work">
      <div className="container">
        <Reveal className="projects__head">
          <p className="eyebrow">精选作品</p>
          <h2 className="projects__title">近期项目</h2>
        </Reveal>

        <Reveal className="project project--feature" threshold={0.1}>
          <a className="project__media" href={feature.url || '#'} aria-label={feature.title}>
            <img src={feature.cover} alt={feature.title} loading="lazy" />
            <span className="project__index" aria-hidden="true">01</span>
          </a>
          <div className="project__body">
            <div className="project__meta">
              <span>{feature.year}</span>
              <span>{feature.category.join(' · ')}</span>
            </div>
            <h3 className="project__title">{feature.title}</h3>
            <p className="project__desc">{feature.desc}</p>
            <div className="project__tags">
              {feature.category.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="projects__grid">
          {rest.map((p, i) => (
            <Reveal className="project" key={p.title} delay={i * 0.06}>
              <a className="project__media" href={p.url || '#'} aria-label={p.title}>
                <img src={p.cover} alt={p.title} loading="lazy" />
                <span className="project__index" aria-hidden="true">
                  {String(i + 2).padStart(2, '0')}
                </span>
              </a>
              <div className="project__body">
                <div className="project__meta">
                  <span>{p.year}</span>
                  <span>{p.category.join(' · ')}</span>
                </div>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
