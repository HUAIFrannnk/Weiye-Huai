import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "联系",
  description: "就研究、项目与职业机会联系怀伟烨（Franklin）。",
  alternates: { canonical: "/zh/contact", languages: { en: "/contact", "zh-CN": "/zh/contact" } },
};

export default function ChineseContactPage() {
  return <>
    <PageIntro eyebrow="保持联系" title="联系"><p>欢迎就研究、国际商务、数字营销以及实习与职业发展机会与我交流。</p></PageIntro>
    <section className="page-shell contact-layout">
      <div className="contact-note"><p className="label">留言</p><p>无论你有问题、想法，或希望探讨一个项目，都欢迎通过邮件联系我。</p><span>通常会在几天内回复。</span></div>
      <div className="contact-links"><a href="mailto:2994464640@qq.com"><span>邮箱</span><strong>2994464640@qq.com</strong><b aria-hidden="true">↗</b></a></div>
    </section>
  </>;
}
