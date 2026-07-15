import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Weiye Huai(Franklin)" },
  description:
    "Weiye Huai (Franklin) is a business student focused on digital marketing, consumer behavior, international business, and cross-cultural communication.",
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/zh" } },
};

export default function HomePage() {
  return (
    <article className="page-shell article-page home-page">
      <h1>About</h1>

      <figure className="profile-figure">
        <Image
          className="profile-photo"
          src="/weiye-huai-portrait.jpg"
          alt="Professional portrait of Weiye Huai"
          width={933}
          height={1400}
          priority
          sizes="(max-width: 760px) 170px, 220px"
        />
      </figure>

      <p>
        Hello, I am <strong>Weiye Huai (怀伟烨)</strong>, and I go by
        <strong> Franklin</strong> in English. I am a senior at the University of
        International Business and Economics (UIBE) in Beijing, majoring in
        Business English and minoring in Finance with a focus on international
        markets.
      </p>
      <p>
        I am a business student with practical experience in digital platform
        operations, audit, and cross-cultural research. My academic training
        combines business communication, finance, market analysis, and
        quantitative methods, enabling me to approach commercial questions
        with both analytical rigor and an international perspective.
      </p>
      <p>
        Through internships at Kuaishou and KPMG and research projects in social
        media marketing and consumer communication, I have developed skills in
        user and market research, data analysis, project coordination, and
        strategy development. I am particularly interested in opportunities
        that connect consumer insight with digital growth, brand strategy, and
        international business.
      </p>

      <h2>Experience</h2>
      <ul className="experience-list">
        <li><strong>Music Promotion Operations Intern</strong>, Kuaishou</li>
        <li><strong>Audit Intern</strong>, KPMG</li>
        <li><strong>Research Lead</strong>, POP MART cross-cultural social media marketing study</li>
        <li><strong>Research Assistant</strong>, co-speech gesture and cognition project</li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>University of International Business and Economics</strong>,
        Beijing, China<br />
        B.A. in Business English; Minor in Finance (International Markets),
        2023–2027 (expected)
      </p>
      <p>
        Relevant coursework includes Microeconomics, Macroeconomics,
        Econometrics, International Trade, Finance, and Business Data Analytics.
      </p>

      <h2>Selected work</h2>
      <ul className="link-list">
        <li><Link href="/research">POP MART cross-cultural social media marketing research</Link></li>
        <li><Link href="/research">Online game marketing communication: a DNF case study</Link></li>
        <li><Link href="/projects">Music platform operations internship at Kuaishou</Link></li>
      </ul>

      <p className="home-links">
        <Link href="/cv">Curriculum Vitae</Link>
        <Link href="/research">Research</Link>
        <Link href="/contact">Contact</Link>
      </p>
    </article>
  );
}
