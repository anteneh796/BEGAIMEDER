import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <div className="footer-brand">BEGAIMEDER <span>ACADEMY</span></div>
          <p>A place to grow, discover, belong and become.<br />KG through Grade 8.</p>
        </div>
        <div><h3>Explore</h3><Link href="/about">About</Link><Link href="/academics">Academics</Link><Link href="/school-life">School Life</Link><Link href="/stories">Stories</Link></div>
        <div><h3>Connect</h3><Link href="/admissions">Admissions</Link><Link href="/contact">Contact</Link><Link href="/admin">Staff portal</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} BEGAIMEDER ACADEMY</span><span>KG · Grade 8</span></div>
    </footer>
  );
}
