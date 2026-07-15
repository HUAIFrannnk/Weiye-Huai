"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const prefix = isZh ? "/zh" : "";

  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>© {new Date().getFullYear()} Weiye Huai · Franklin</p>
        <div>
          <Link href={`${prefix}/research`}>{isZh ? "研究" : "Research"}</Link>
          <Link href={`${prefix}/cv`}>{isZh ? "简历" : "CV"}</Link>
          <Link href={`${prefix}/contact`}>{isZh ? "联系" : "Contact"}</Link>
        </div>
      </div>
    </footer>
  );
}
