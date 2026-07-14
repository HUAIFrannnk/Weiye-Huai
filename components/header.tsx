import Link from "next/link";

const nav = [
  ["About", "/about"],
  ["CV", "/cv"],
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-branding">
        <Link className="wordmark" href="/" aria-label="Weiye Huai, Franklin, home">
          <span className="wordmark-primary">Weiye Huai</span>
          <span className="wordmark-secondary">怀伟烨 · Franklin</span>
        </Link>
        <p>Business · Market · Management</p>
      </div>
      <div className="nav-bar">
        <nav className="desktop-nav page-shell" aria-label="Main navigation">
          <Link href="/">Home</Link>
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <details className="mobile-menu page-shell">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
