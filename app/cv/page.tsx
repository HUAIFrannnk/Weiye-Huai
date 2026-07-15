import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Timeline, type TimelineItem } from "@/components/timeline";

export const metadata: Metadata = { title: "Curriculum Vitae", description: "Education, professional experience, projects, and skills of Weiye Huai (Franklin).", alternates: { canonical: "/cv", languages: { en: "/cv", "zh-CN": "/zh/cv" } } };

const education: TimelineItem[] = [{ period: "Sep 2023 — Jun 2027", title: "B.A. in Business English · Minor in Finance (International Markets)", organization: "University of International Business and Economics · Beijing, China", description: "Senior undergraduate. Relevant coursework includes Microeconomics, Macroeconomics, Econometrics, International Trade, Finance, and Business Data Analytics." }];
const experience: TimelineItem[] = [
  { period: "Dec 2025 — Mar 2026", title: "Music Promotion Operations Intern", organization: "Kuaishou · Beijing, China", description: "Supported product operations, creator marketing, user growth, and ToB commercialization for a music promotion platform. Built a complaint risk-control mechanism, helped deliver a creator activation campaign with a 90.9% activation rate, managed KOL distribution across 11 creator communities, and contributed to integrated campaigns generating RMB 3.19 million in creator revenue." },
  { period: "Jan 2025 — Mar 2025", title: "Audit Intern", organization: "KPMG · Beijing, China", description: "Supported a major bank's annual audit through audit working-paper preparation, Excel and SQL-based data checks, voucher testing, and inventory and asset verification." },
  { period: "Jun 2024 — Aug 2024", title: "Research Assistant", organization: "SSCI research project · Beijing, China", description: "Assisted research on the cognitive mechanisms of co-speech gestures, coding short-video interaction data through Speech Act theory and analyzing how non-verbal language affects pragmatic intent and audience cognition." },
];
const projects: TimelineItem[] = [
  { period: "Oct 2025 — Jun 2026", title: "POP MART Cross-cultural Social Media Marketing", organization: "Research Lead", description: "Led a study of localized Instagram and TikTok strategies, developed a social marketing evaluation model, and delivered recommendations on KOL localization and differentiated content." },
  { period: "Mar 2026 — Jun 2026", title: "National E-commerce Innovation Challenge", organization: "Core Team Member · University Silver Award", description: "Tracked North American media and cultural trends, supported localized content operations, and contributed data-driven pricing and marketing budget recommendations." },
  { period: "Oct 2024 — Jun 2025", title: "Online Game Marketing Communication Study", organization: "Core Team Member · DNF case study", description: "Collected and coded user responses across Bilibili, Weibo, YouTube, and Reddit to map cross-platform communication patterns and narrative pathways." },
];

export default function CvPage() {
  return <>
    <PageIntro eyebrow="Professional record" title="Curriculum Vitae">
      <p>A concise record of my academic background, experience, selected projects, and developing capabilities.</p>
      <a className="button button-secondary" href="/Weiye-Huai-CV.pdf" download>
        Download CV (PDF) <span aria-hidden="true">↓</span>
      </a>
    </PageIntro>
    <div className="page-shell cv-layout">
      <aside className="cv-aside"><p className="label">Details</p><dl><dt>Location</dt><dd>Beijing, China</dd><dt>Focus</dt><dd>Digital marketing &amp; strategy</dd><dt>Languages</dt><dd>Chinese · English</dd><dt>IELTS</dt><dd>7.0</dd></dl></aside>
      <div className="cv-main"><Timeline index="01" heading="Education" items={education} /><Timeline index="02" heading="Experience" items={experience} /><Timeline index="03" heading="Projects" items={projects} />
        <section className="timeline-section"><div className="timeline-title"><span>04</span><h2>Skills &amp; Honors</h2></div><ul className="cv-skills"><li>Data: Python, SQL, Stata, Microsoft Excel</li><li>Research: literature reviews, data coding, cross-cultural analysis</li><li>Strategy: platform operations, creator marketing, user growth</li><li>Honors: University Second-class Scholarship; university silver award in the National E-commerce Innovation Challenge</li><li>English: IELTS 7.0; CET-4 650 with Excellent spoken English rating</li><li>Leadership: Student affairs department lead and campus committee roles</li></ul></section>
      </div>
    </div>
  </>;
}
