import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Timeline, type TimelineItem } from "@/components/timeline";

export const metadata: Metadata = {
  title: "个人简历",
  description: "怀伟烨的教育、实习、项目与专业技能。",
  alternates: { canonical: "/zh/cv", languages: { en: "/cv", "zh-CN": "/zh/cv" } },
};

const education: TimelineItem[] = [{ period: "2023年9月—2027年6月", title: "商务英语文学学士 · 辅修金融学（国际市场方向）", organization: "对外经济贸易大学 · 中国北京", description: "大四本科生。相关课程包括微观经济学、宏观经济学、计量经济学、国际贸易、金融学与商业数据分析。" }];
const experience: TimelineItem[] = [
  { period: "2025年12月—2026年3月", title: "音乐推广运营实习生", organization: "快手 · 中国北京", description: "参与音乐推广平台的产品运营、达人营销、用户增长与ToB商业化工作；搭建投诉风险控制机制，协助达人激活项目实现90.9%的激活率，统筹11个核心达人社群的分发，并支持累计创造319万元达人成交收入的整合营销项目。" },
  { period: "2025年1月—3月", title: "审计实习生", organization: "毕马威 · 中国北京", description: "参与某大型银行年度审计，包括审计底稿整理、基于Excel和SQL的数据核验、凭证抽查以及存货与资产盘点。" },
  { period: "2024年6月—8月", title: "研究助理", organization: "SSCI研究项目 · 中国北京", description: "协助伴随手势认知机制研究，运用言语行为理论对短视频互动数据进行编码，并分析非语言表达对语用意图与受众认知的影响。" },
];
const projects: TimelineItem[] = [
  { period: "2025年10月—2026年6月", title: "泡泡玛特跨文化社交媒体营销", organization: "研究负责人", description: "研究Instagram与TikTok本地化策略，构建社交营销评估模型，并提出KOL本地化与差异化内容建议。" },
  { period: "2026年3月—6月", title: "全国大学生电子商务创新挑战赛", organization: "核心成员 · 校级银奖", description: "追踪北美媒体与文化趋势，支持本地化内容运营，并参与数据驱动的定价与营销预算建议。" },
  { period: "2024年10月—2025年6月", title: "网络游戏营销传播研究", organization: "核心成员 · DNF案例", description: "收集并编码哔哩哔哩、微博、YouTube与Reddit的用户反馈，梳理跨平台传播模式与叙事路径。" },
];

export default function ChineseCvPage() {
  return <>
    <PageIntro eyebrow="专业履历" title="个人简历">
      <p>简要呈现我的教育背景、实习经历、代表项目与持续发展的专业能力。</p>
      <a className="button button-secondary" href="/Weiye-Huai-CV.pdf" download>
        下载简历（PDF） <span aria-hidden="true">↓</span>
      </a>
    </PageIntro>
    <div className="page-shell cv-layout">
      <aside className="cv-aside"><p className="label">基本信息</p><dl><dt>所在地</dt><dd>中国北京</dd><dt>方向</dt><dd>数字营销与策略</dd><dt>语言</dt><dd>中文 · 英文</dd><dt>雅思</dt><dd>7.0</dd></dl></aside>
      <div className="cv-main"><Timeline index="01" heading="教育背景" items={education} /><Timeline index="02" heading="实习经历" items={experience} /><Timeline index="03" heading="项目经历" items={projects} />
        <section className="timeline-section"><div className="timeline-title"><span>04</span><h2>技能与荣誉</h2></div><ul className="cv-skills"><li>数据工具：Python、SQL、Stata、Microsoft Excel</li><li>研究能力：文献综述、数据编码、跨文化分析</li><li>策略能力：平台运营、达人营销、用户增长</li><li>荣誉：校级二等奖学金；全国大学生电子商务创新挑战赛校级银奖</li><li>英语：雅思7.0；大学英语四级650分，口语等级优秀</li><li>领导力：学生事务部门负责人及校级委员会工作经历</li></ul></section>
      </div>
    </div>
  </>;
}
