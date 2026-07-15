import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "About", description: "Weiye Huai's education, professional experience, skills, and personal interests.", alternates: { canonical: "/about", languages: { en: "/about", "zh-CN": "/zh/about" } } };

const courses = ["Microeconomics", "Macroeconomics", "Econometrics", "International Trade", "Finance", "Business Data Analytics"];
const skills = ["Digital platform operations", "Market and user research", "Data analysis", "Content strategy", "Cross-cultural marketing", "Python · SQL · Stata"];

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="Profile" title="About">
      <p>I approach marketing as both a commercial discipline and a way to understand people: what they value, how they make decisions, and why an idea travels across borders.</p>
    </PageIntro>
    <section className="page-shell content-section two-col-section">
      <SectionHeading index="01" title="Education" />
      <div className="prose-block">
        <p className="label">2023 — 2027 · Beijing, China</p><h2>University of International Business and Economics</h2>
        <p>I am currently a senior majoring in Business English and minoring in Finance, with a focus on international markets. My studies combine language, management, quantitative analysis, and international business.</p>
        <h3>Relevant coursework</h3>
        <ul className="tag-list">{courses.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
    <section className="band content-section"><div className="page-shell two-col-section">
      <SectionHeading index="02" title="Academic interests" />
      <div className="interest-cards">
        <article><span>01</span><h3>Markets &amp; people</h3><p>Consumer decision-making, brand relationships, and digitally mediated behavior.</p></article>
        <article><span>02</span><h3>Brands across borders</h3><p>How meaning, identity, and strategy change when brands enter new cultural contexts.</p></article>
        <article><span>03</span><h3>Communication &amp; growth</h3><p>Turning research insight into relevant messaging, experiences, and user strategies.</p></article>
      </div>
    </div></section>
    <section className="page-shell content-section split-content">
      <div><SectionHeading index="03" title="Skills" /><ul className="lined-list">{skills.map(s => <li key={s}>{s}<span>↗</span></li>)}</ul></div>
      <div>
        <SectionHeading index="04" title="Beyond work" />
        <p className="body-large">Outside research and strategy work, I enjoy calligraphy, street dance, fitness, and tennis. These interests keep me attentive to craft, rhythm, discipline, and teamwork.</p>
        <figure className="personal-figure">
          <Image
            className="personal-photo"
            src="/weiye-huai-personal-fixed.jpg"
            alt="Weiye Huai during a casual day out"
            width={1350}
            height={1800}
            sizes="(max-width: 760px) calc(100vw - 36px), 395px"
          />
          <figcaption>Outside the classroom.</figcaption>
        </figure>
      </div>
    </section>
  </>;
}
