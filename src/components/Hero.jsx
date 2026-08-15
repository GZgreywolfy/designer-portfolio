import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={profile.heroPoster}
        >
          {/* 把你的循环背景视频放到 public/hero.mp4，构建即会自动启用 */}
          <source src="hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner container">
        <p className="eyebrow hero__eyebrow">AI 视觉 · 机器视觉 · 智能硬件</p>
        <h1 className="hero__title">
          用 AI 与工程，<br />把复杂问题做成可靠系统
        </h1>
        <p className="hero__sub">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">联系</a>
          <a className="btn btn--ghost" href="#work">查看作品</a>
        </div>
      </div>

      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />
    </section>
  )
}
