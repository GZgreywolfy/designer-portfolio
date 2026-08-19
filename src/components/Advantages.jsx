import Reveal from './Reveal.jsx'
import { advantages } from '../data/content.js'

// 编程语言 / 工具品牌色（用于 logo 芯片）
const LOGO_COLORS = {
  Python: '#3776AB',
  'C++': '#00599C',
  HTML: '#E34F26',
  MATLAB: '#F7941E',
  PSIM: '#0072BC',
}

export default function Advantages() {
  return (
    <section className="advantages" id="strength">
      <div className="container">
        <Reveal className="advantages__head">
          <h2 className="advantages__title">我能为你做什么</h2>
          <p className="advantages__lead">
            从算法到硬件，覆盖 AI 视觉与智能系统的完整能力。
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
                {a.logos && (
                  <div className="adv__logos">
                    {a.logos.map((l) => (
                      <span
                        key={l}
                        className="logo-chip"
                        style={{ '--logo': LOGO_COLORS[l] || '#ffb84d' }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                )}
                {a.code && (
                  <div className="adv__code">
                    <img className="adv__code-img" src={a.code} alt={`${a.title} 代码示例`} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
