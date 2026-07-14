import Image from "next/image";
import Link from "next/link";

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
        Business English and minoring in Finance with a focus on international markets.
      </p>
      <p>
        My academic and professional interests sit at the intersection of
        international business, digital marketing, consumer behavior, and
        cross-cultural communication. I am particularly interested in how
        brands and digital platforms adapt their messages, communities, and
        growth strategies for audiences across cultural contexts.
      </p>
      <p>
        I completed a music platform operations internship at Kuaishou, supported
        a major banking audit at KPMG, and participated in research on
        cross-cultural social media marketing, online game communication, and
        multimodal interaction.
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
