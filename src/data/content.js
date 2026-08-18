import heroPoster from '../assets/images/hero-poster.png'
import avatar from '../assets/images/avatar.webp'
import agriculture from '../assets/images/agriculture.webp'
import beachRobot from '../assets/images/beach-robot.webp'
import trashSorter from '../assets/images/trash-sorter.webp'
import p3 from '../assets/images/p3.png'
import hydro from '../assets/images/hydro.png'
import patentA from '../assets/images/patent-a.png'
import k230 from '../assets/images/k230.png'
import stm32 from '../assets/images/stm32.png'
import microgrid from '../assets/images/microgrid.png'
import award from '../assets/images/award.png'

// 内容取自简历；姓名以品牌 Greywolfy 呈现，不暴露真实姓名
export const profile = {
  name: 'Greywolfy',
  roles: ['AI 设计师', '机器视觉', '智能硬件'],
  tagline: '用深度学习、机器视觉与硬件设计，把复杂的工程问题收拢成清晰、可落地的智能系统。',
  intro:
    '我是 Greywolfy，广州大学电气工程及其自动化专业应届生。专注 AI 视觉、机器人与智能硬件，参与过国家级立项与多项省校级竞赛，也动手做过 PCB、嵌入式与机械结构设计。这里收录了我的部分项目与实践。',
  email: 'asdjkhkx5435@outlook.com',
  heroPoster,
  avatar,
}

export const stats = [
  { value: '3', label: '科创项目' },
  { value: '4', label: '省级奖项' },
  { value: '2', label: '专利（受理/实审）' },
  { value: '1', label: '国家级立项' },
]

export const projects = [
  {
    title: '智能农耕 · 播种采摘一体化农机',
    year: '2024',
    category: ['智能硬件', '低碳农业', '机械创新'],
    cover: agriculture, // 真实项目图：SolidWorks 整机线框 + 半透外壳渲染
    desc: '主导研发莴笋播种采摘一体化农机，设计减震弹簧缓冲底盘与主控电路板，聚焦低碳与高效农业需求，获多项省校级奖项。',
    url: '#',
  },
  {
    title: '沙滩守护者 · 仿生环保机器人',
    year: '2023',
    category: ['深度学习', '仿生设计', '机器人'],
    cover: beachRobot, // 真实项目图：SolidWorks 线框渲染
    desc: '结合深度学习与仿鲍鱼吸盘/章鱼手臂的仿生设计，研发智能沙滩垃圾收集机器人，实现垃圾抓取分类与生物避障，减少海滩生态影响。',
    url: '#',
  },
  {
    title: '机器视觉智能垃圾分类系统',
    year: '2023–2025',
    category: ['机器视觉', 'YOLO', '嵌入式'],
    cover: trashSorter, // 真实项目图：SolidWorks 线框渲染
    desc: '基于 K230 芯片适配轻量化，应用 YOLOv5 目标检测，搭建垃圾图像采集与识别链路，实现自动识别与投放引导。',
    url: '#',
  },
  {
    title: '毕业实习 · 电力系统与嵌入式',
    year: '2025',
    category: ['电力系统', '嵌入式', 'STM32'],
    cover: hydro, // 三峡集团水电站相关照片（AI 暂代，待真实素材替换）
    desc: '于粤嵌/三峡集团实习：学习变压器、无功补偿与变电站设计；主导 STM32 平衡车项目，调试 HC-05 蓝牙、超声波与 MPU6050，实现蓝牙遥控、自动避障与温湿度采集。',
    url: '#',
  },
  {
    title: '专利成果 · 受理与实质审查',
    year: '2024',
    category: ['实用新型', '发明专利', '核心成果'],
    cover: patentA, // 实审版配图（AI 生成，多版待选）；受理版保留见 patent-b/c
    desc: '实用新型专利《莴笋播种采收一体化农机》已受理，为智能农耕项目核心成果；发明专利《三级差速垃圾分类处理系统》进入实质审查，基于智能垃圾分类项目延伸研发。',
    url: '#',
  },
]

export const advantages = [
  {
    title: 'AI 视觉与深度学习',
    desc: 'YOLOv5 目标检测、深度学习应用与数字孪生技术，把算法落到真实场景。',
    wide: true,
    image: k230, // K230 硬件 + 人脸检测实拍风
  },
  {
    title: '硬件与嵌入式',
    desc: 'STM32、嘉立创 EDA PCB 设计、Proteus、电路与嵌入式系统开发。',
    image: stm32, // STM32 开发板实拍风
  },
  {
    title: '工程建模与设计',
    desc: 'SolidWorks 机械建模、减震结构与主控电路板设计，软硬结合。',
    // 待用户发模型图后替换（currently 无图）
  },
  {
    title: '编程能力',
    desc: '熟悉 Python、C/C++、HTML，MATLAB / PSIM / LabVIEW 仿真。',
    logos: ['Python', 'C++', 'HTML', 'MATLAB', 'PSIM'],
  },
  {
    title: '电力系统与自动化',
    desc: '电路、电机学、电力系统分析、继电保护与微电网调度基础。',
    image: microgrid, // 微电网实拍风
  },
  {
    title: '竞赛与科研',
    desc: '国家级大创立项、实用新型/发明专利、自动化学会预备会员、产业学院助教。',
    image: award, // 竞赛/科研配图
  },
]

export const socials = [
  { label: '邮箱', url: 'mailto:asdjkhkx5435@outlook.com' },
]
