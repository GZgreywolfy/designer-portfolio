import Reveal from './Reveal.jsx'
import { advantages } from '../data/content.js'

export default function Advantages() {
  return (
    <section className="advantages" id="strength">
      <div className="container">
        <Reveal className="advantages__head">
          <h2 className="advantages__title">我能为你做什么</h2>
          <p className="advantages__lead">
            从策略到落地，覆盖品牌视觉的完整链路。
          </p>
        </Reveal>

        <div className="advantages__grid">
          {advantages.map((a, i) => (
            <Reveal
              className={`adv ${a.image ? 'adv--img' : ''} ${a.wide ? 'adv--wide' : ''}`}
              key={a.title}
              delay={(i % 3) * 0.05}
            >
              {a.image && <img className="adv__img" src={a.image} alt="" aria-hidden="true" />}
              <div className="adv__content">
                <h3 className="adv__title">{a.title}</h3>
                <p className="adv__desc">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
