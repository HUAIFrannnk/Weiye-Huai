import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "关于",
  description: "怀伟烨的教育背景、专业兴趣、技能与个人兴趣。",
  alternates: { canonical: "/zh/about", languages: { en: "/about", "zh-CN": "/zh/about" } },
};

const courses = ["微观经济学", "宏观经济学", "计量经济学", "国际贸易", "金融学", "商业数据分析"];
const skills = ["数字平台运营", "市场与用户研究", "数据分析", "内容策略", "跨文化营销", "Python · SQL · Stata"];

export default function ChineseAboutPage() {
  return <>
    <PageIntro eyebrow="个人简介" title="关于">
      <p>我将营销视为一门商业学科，也将其视为理解人的方式：人们重视什么、如何做出决策，以及一个创意为何能够跨越文化边界。</p>
    </PageIntro>
    <section className="page-shell content-section two-col-section">
      <SectionHeading index="01" title="教育背景" />
      <div className="prose-block">
        <p className="label">2023—2027 · 中国北京</p><h2>对外经济贸易大学</h2>
        <p>我目前是商务英语专业大四学生，辅修金融学（国际市场方向）。我的学习融合语言与沟通、管理、定量分析和国际商务。</p>
        <h3>相关课程</h3>
        <ul className="tag-list">{courses.map(course => <li key={course}>{course}</li>)}</ul>
      </div>
    </section>
    <section className="band content-section"><div className="page-shell two-col-section">
      <SectionHeading index="02" title="专业兴趣" />
      <div className="interest-cards">
        <article><span>01</span><h3>市场与消费者</h3><p>消费者决策、品牌关系与数字环境中的行为模式。</p></article>
        <article><span>02</span><h3>品牌国际化</h3><p>品牌进入不同文化语境后，其意义、身份和策略如何发生变化。</p></article>
        <article><span>03</span><h3>传播与增长</h3><p>将研究洞察转化为更有效的信息、体验和用户增长策略。</p></article>
      </div>
    </div></section>
    <section className="page-shell content-section split-content">
      <div><SectionHeading index="03" title="技能" /><ul className="lined-list">{skills.map(skill => <li key={skill}>{skill}<span>↗</span></li>)}</ul></div>
      <div>
        <SectionHeading index="04" title="工作之外" />
        <p className="body-large">在研究与策略工作之外，我喜欢书法、街舞、健身和网球。这些兴趣让我持续关注技艺、节奏、纪律与团队协作。</p>
        <figure className="personal-figure">
          <Image className="personal-photo" src="/weiye-huai-personal-fixed.jpg" alt="生活中的怀伟烨" width={1350} height={1800} sizes="(max-width: 760px) calc(100vw - 36px), 395px" />
          <figcaption>课堂之外</figcaption>
        </figure>
      </div>
    </section>
  </>;
}
