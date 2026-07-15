import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "项目",
  description: "怀伟烨在品牌策略、用户增长与数字营销方面的代表项目。",
  alternates: { canonical: "/zh/projects", languages: { en: "/projects", "zh-CN": "/zh/projects" } },
};

const projects = [
  { number: "01", category: "研究负责人 · 2025年10月—2026年6月", title: "泡泡玛特跨文化社交媒体营销", description: "研究泡泡玛特如何通过文化元素、达人合作与品牌叙事，在Instagram和TikTok面向海外受众开展本地化运营。", skills: ["跨文化研究", "社交媒体策略", "活动分析"], outcome: "基于KOL、品牌活动和受众反馈数据构建社交营销评估模型，并提出本地化达人触达与差异化内容建议。" },
  { number: "02", category: "核心成员 · 2026年3月—6月", title: "全国大学生电子商务创新挑战赛", description: "融合北美文化趋势追踪、本地化社交内容、产品研究与商业规划的竞赛项目。", skills: ["内容运营", "市场研究", "定价分析"], outcome: "参与本地化文案、受众研究、商业预测、分层定价和营销预算配置，项目获得校级银奖。" },
  { number: "03", category: "实习 · 2025年12月—2026年3月", title: "快手音乐平台运营", description: "覆盖达人激活、社群分发、活动执行、用户增长与商业交付的音乐推广平台运营实习。", skills: ["用户运营", "达人营销", "增长策略"], outcome: "协助达人激活活动实现90.9%的激活率，统筹11个核心社群分发，并支持累计创造319万元达人成交收入的营销项目。" },
  { number: "04", category: "研究 · 2024年10月—2025年6月", title: "网络游戏营销传播：DNF案例", description: "对《地下城与勇士》在中国及海外社交平台上的玩家讨论与营销传播进行跨平台分析。", skills: ["数据采集", "内容编码", "传播研究"], outcome: "利用哔哩哔哩、微博、YouTube与Reddit的用户反馈，梳理叙事节奏与跨平台传播路径。" },
];

export default function ChineseProjectsPage() {
  return <>
    <PageIntro eyebrow="实践项目" title="项目"><p>将结构化分析转化为面向品牌、受众与市场的清晰建议。</p></PageIntro>
    <section className="page-shell projects-list">{projects.map(project => <article className="project-card" key={project.title}>
      <div className="project-number">{project.number}</div><div className="project-main"><p className="eyebrow">{project.category}</p><h2>{project.title}</h2><p className="body-large">{project.description}</p>
        <div className="project-bottom"><div><p className="label">使用技能</p><ul className="tag-list">{project.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div><div><p className="label">主要成果</p><p>{project.outcome}</p></div></div>
      </div></article>)}</section>
    <section className="page-shell project-cta"><p className="eyebrow">下一阶段</p><h2>更多工作正在展开。</h2><p>随着新的研究、案例分析和协作项目推进，这份作品集也将持续更新。</p></section>
  </>;
}
