import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "怀伟烨（Franklin）" },
  description: "怀伟烨（Franklin）是一名关注数字营销、消费者行为、国际商务与跨文化传播的商科学生。",
  alternates: { canonical: "/zh", languages: { en: "/", "zh-CN": "/zh" } },
};

export default function ChineseHomePage() {
  return (
    <article className="page-shell article-page home-page">
      <h1>关于我</h1>

      <figure className="profile-figure">
        <Image
          className="profile-photo"
          src="/weiye-huai-portrait.jpg"
          alt="怀伟烨的职业形象照"
          width={933}
          height={1400}
          priority
          sizes="(max-width: 760px) 170px, 220px"
        />
      </figure>

      <p>
        你好，我是<strong>怀伟烨（Weiye Huai）</strong>，英文名为
        <strong> Franklin</strong>。我目前就读于对外经济贸易大学，是商务英语专业大四学生，辅修金融学（国际市场方向）。
      </p>
      <p>
        我拥有数字平台运营、审计与跨文化研究的实践经历。商务沟通、金融、市场分析和定量方法方面的学习，使我能够兼顾分析的严谨性与国际化视角，理解并解决真实的商业问题。
      </p>
      <p>
        通过在快手与毕马威的实习，以及社交媒体营销和消费者传播相关研究，我积累了用户与市场研究、数据分析、项目协作和策略制定等能力。我尤其关注消费者洞察如何转化为数字增长、品牌策略和国际业务中的实际价值。
      </p>

      <h2>经历</h2>
      <ul className="experience-list">
        <li><strong>音乐推广运营实习生</strong>，快手</li>
        <li><strong>审计实习生</strong>，毕马威</li>
        <li><strong>研究负责人</strong>，泡泡玛特跨文化社交媒体营销研究</li>
        <li><strong>研究助理</strong>，伴随手势与认知研究项目</li>
      </ul>

      <h2>教育背景</h2>
      <p>
        <strong>对外经济贸易大学</strong>，中国北京<br />
        商务英语文学学士；辅修金融学（国际市场方向），2023—2027（预计）
      </p>
      <p>相关课程包括微观经济学、宏观经济学、计量经济学、国际贸易、金融学与商业数据分析。</p>

      <h2>精选内容</h2>
      <ul className="link-list">
        <li><Link href="/zh/research">泡泡玛特跨文化社交媒体营销研究</Link></li>
        <li><Link href="/zh/research">网络游戏营销传播：DNF案例研究</Link></li>
        <li><Link href="/zh/projects">快手音乐平台运营实习</Link></li>
      </ul>

      <p className="home-links">
        <Link href="/zh/cv">个人简历</Link>
        <Link href="/zh/research">研究经历</Link>
        <Link href="/zh/contact">联系方式</Link>
      </p>
    </article>
  );
}
