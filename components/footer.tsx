import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>© {new Date().getFullYear()} Weiye Huai · Franklin</p>
        <div><Link href="/research">Research</Link><Link href="/cv">CV</Link><Link href="/contact">Contact</Link></div>
      </div>
    </footer>
  );
}
