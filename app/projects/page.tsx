import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Projects", description: "Selected brand strategy, user growth, and digital marketing projects by Weiye Huai (Franklin)." };
const projects = [
  { number: "01", category: "Research lead · Oct 2025 — Jun 2026", title: "POP MART Cross-cultural Social Media Marketing", description: "A research project examining how POP MART localizes its Instagram and TikTok operations for overseas audiences through culture, creators, and brand storytelling.", skills: ["Cross-cultural research", "Social media strategy", "Campaign analysis"], outcome: "Developed a social marketing evaluation model using KOL, brand-campaign, and audience-feedback data, producing recommendations on localized creator outreach and differentiated content." },
  { number: "02", category: "Core team · Mar 2026 — Jun 2026", title: "National E-commerce Innovation Challenge", description: "A competition project combining North American cultural trend monitoring, localized social content, product research, and commercial planning.", skills: ["Content operations", "Market research", "Pricing analysis"], outcome: "Contributed to a university silver award by supporting localized copy, audience research, commercial forecasting, tiered pricing, and marketing budget allocation." },
  { number: "03", category: "Internship · Dec 2025 — Mar 2026", title: "Music Platform Operations at Kuaishou", description: "An operations internship spanning creator activation, community distribution, campaign execution, user growth, and commercial delivery for a music promotion platform.", skills: ["User operations", "Creator marketing", "Growth strategy"], outcome: "Helped achieve a 90.9% activation rate in a creator campaign, coordinated distribution across 11 core communities, and supported campaigns generating RMB 3.19 million in creator revenue." },
  { number: "04", category: "Research · Oct 2024 — Jun 2025", title: "Online Game Marketing Communication: A DNF Case Study", description: "A cross-platform analysis of player discussion and marketing communication surrounding Dungeon & Fighter across Chinese and international social platforms.", skills: ["Data collection", "Content coding", "Communication research"], outcome: "Mapped narrative rhythms and communication pathways using responses from Bilibili, Weibo, YouTube, and Reddit." },
];

export default function ProjectsPage() {
  return <>
    <PageIntro eyebrow="Applied work" title="Projects"><p>Projects that connect structured analysis with clear recommendations for brands, audiences, and markets.</p></PageIntro>
    <section className="page-shell projects-list">{projects.map(p => <article className="project-card" key={p.title}>
      <div className="project-number">{p.number}</div><div className="project-main"><p className="eyebrow">{p.category}</p><h2>{p.title}</h2><p className="body-large">{p.description}</p>
        <div className="project-bottom"><div><p className="label">Skills used</p><ul className="tag-list">{p.skills.map(s => <li key={s}>{s}</li>)}</ul></div><div><p className="label">Key outcome</p><p>{p.outcome}</p></div></div>
      </div></article>)}</section>
    <section className="page-shell project-cta"><p className="eyebrow">Next chapter</p><h2>More work is taking shape.</h2><p>This portfolio will grow as new research, case studies, and collaborative projects develop.</p></section>
  </>;
}
