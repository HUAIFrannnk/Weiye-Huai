import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Contact", description: "Contact Weiye Huai (Franklin) for research, project, and professional opportunities." };
const links = [
  { label: "Email", value: "2994464640@qq.com", href: "mailto:2994464640@qq.com" },
];
export default function ContactPage() {
  return <>
    <PageIntro eyebrow="Get in touch" title="Contact"><p>I welcome conversations about research, international business, digital marketing, and early-career opportunities.</p></PageIntro>
    <section className="page-shell contact-layout"><div className="contact-note"><p className="label">A note</p><p>Whether you have a question, an idea, or a project worth exploring, feel free to reach out. Email is the best way to begin.</p><span>Usually responds within a few days.</span></div>
      <div className="contact-links">{links.map(link => <a href={link.href} key={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span>{link.label}</span><strong>{link.value}</strong><b aria-hidden="true">↗</b></a>)}</div>
    </section>
  </>;
}
