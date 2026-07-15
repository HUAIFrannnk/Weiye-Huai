"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { en: "About", zh: "关于", href: "/about" },
  { en: "CV", zh: "简历", href: "/cv" },
  { en: "Research", zh: "研究", href: "/research" },
  { en: "Projects", zh: "项目", href: "/projects" },
  { en: "Contact", zh: "联系", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const homeHref = isZh ? "/zh" : "/";
  const englishHref = isZh ? pathname.slice(3) || "/" : pathname;
  const chineseHref = isZh ? pathname : pathname === "/" ? "/zh" : `/zh${pathname}`;
  const navItems = nav.map((item) => ({
    label: isZh ? item.zh : item.en,
    href: `${isZh ? "/zh" : ""}${item.href}`,
  }));

  return (
    <header className="site-header">
      <div className="site-branding">
        <Link className="wordmark" href={homeHref} aria-label={isZh ? "怀伟烨，Franklin，主页" : "Weiye Huai, Franklin, home"}>
          <span className="wordmark-primary">Weiye Huai</span>
          <span className="wordmark-secondary">怀伟烨 · Franklin</span>
        </Link>
        <p>{isZh ? "商科学生 | 数字营销 | 消费者行为" : "Business Student | Digital Marketing | Consumer Behavior"}</p>
      </div>
      <div className="nav-bar">
        <nav className="desktop-nav page-shell" aria-label={isZh ? "主导航" : "Main navigation"}>
          <Link href={homeHref}>{isZh ? "主页" : "Home"}</Link>
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <span className="language-switcher" aria-label={isZh ? "语言切换" : "Language switcher"}>
            <Link href={englishHref} aria-current={!isZh ? "page" : undefined}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href={chineseHref} aria-current={isZh ? "page" : undefined}>中文</Link>
          </span>
        </nav>
        <details className="mobile-menu page-shell">
          <summary>{isZh ? "菜单" : "Menu"}</summary>
          <nav aria-label={isZh ? "移动端导航" : "Mobile navigation"}>
            <Link href={homeHref}>{isZh ? "主页" : "Home"}</Link>
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <div className="mobile-language-switcher">
              <Link href={englishHref} aria-current={!isZh ? "page" : undefined}>EN</Link>
              <span aria-hidden="true">/</span>
              <Link href={chineseHref} aria-current={isZh ? "page" : undefined}>中文</Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
