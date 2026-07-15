import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "怀伟烨（Franklin）", template: "%s｜怀伟烨" },
  description: "怀伟烨（Franklin）的个人学术与职业网站，关注数字营销、消费者行为与国际商务。",
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="zh-content" lang="zh-CN">{children}</div>;
}
