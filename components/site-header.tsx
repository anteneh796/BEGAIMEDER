import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/school-life", label: "School Life" },
  { href: "/stories", label: "Stories" },
  { href: "/media", label: "Media" },
  { href: "/admissions", label: "Admissions" },
];

export function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand-mark" aria-label="BEGAIMEDER ACADEMY home"><span className="brand-symbol">B</span><span><strong>BEGAIMEDER</strong><small>ACADEMY</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}<Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={15}/></Link></nav>
    <button className="mobile-menu" aria-label="Open navigation"><Menu size={22}/></button>
  </header>;
}
