import heroPoster from '../assets/images/hero-poster.png'
import avatar from '../assets/images/avatar.png'
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'

// 以下为占位内容，请替换为你的真实信息（改这一个文件即可）
export const profile = {
  name: 'Greywolfy',
  roles: ['视觉设计师', 'AI 设计师', '品牌设计师'],
  tagline: '为品牌打造清晰、克制且可延展的视觉系统，让设计在每一次接触中都成立。',
  intro:
    '我是一名视觉、AI 与品牌设计师，习惯用系统化的方式把复杂的品牌语言收拢成清晰、可延展的视觉表达。这里收录了我近年的部分作品，以及一些实践中的思考。',
  email: 'hello@greywolfy.design',
  location: '中国 · 远程接单',
  contactLead: '无论是品牌升级、AI 视觉探索，还是一次完整的视觉系统搭建，欢迎来信聊聊。',
  heroPoster,
  avatar,
}

export const stats = [
  { value: '120+', label: '完成项目' },
  { value: '40+', label: '合作品牌' },
  { value: '6', label: '从业年限' },
  { value: '12', label: '设计奖项' },
]

export const projects = [
  {
    title: 'NOVA 品牌视觉系统',
    year: '2025',
    category: ['品牌设计', '视觉系统'],
    cover: p1,
    desc: '为一支新能源团队从标志、色彩到动态规范，搭建一套可延展的视觉系统，让品牌在线上线下都保持一致的语气。',
    url: '#',
  },
  {
    title: '生成式视觉探索',
    year: '2025',
    category: ['AI 设计', '实验'],
    cover: p2,
    desc: '用多模型工作流探索可控的 AI 生成视觉，把随机性收拢成可复用的风格语言。',
    url: '#',
  },
  {
    title: '臻选电商视觉',
    year: '2024',
    category: ['电商', '排版'],
    cover: p3,
    desc: '围绕一套高级感的版式与光影，重塑电商主视觉与详情页的观看节奏。',
    url: '#',
  },
  {
    title: '空间与展陈设计',
    year: '2024',
    category: ['空间', '3D'],
    cover: p4,
    desc: '把平面语言延伸到三维空间，用线框与体块讲述品牌在真实场景里的样子。',
    url: '#',
  },
]

export const advantages = [
  { title: '品牌视觉系统', desc: '从标志、色彩到应用规范，建立一套能长期生长的视觉资产。', wide: true },
  { title: 'AI 创意工作流', desc: '把生成式工具变成可控的生产力，而非随机的玩具。', image: p2 },
  { title: '动态与动效', desc: '用克制的运动让界面与品牌更有呼吸感。' },
  { title: '版式与字体', desc: '让信息以最舒服的节奏被人阅读。' },
  { title: '3D 与空间', desc: '把二维语言延展到三维与真实场景。' },
  { title: '艺术指导', desc: '统筹影像、排版与调性，让每一次产出都像同一个品牌。' },
]

export const socials = [
  { label: 'Behance', url: '#' },
  { label: '站酷', url: '#' },
  { label: 'Instagram', url: '#' },
  { label: '微信', url: '#' },
]
