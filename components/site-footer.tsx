import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link href="/" className="footer-brand" aria-label="BEGAIMEDER ACADEMY home">BEGAIMEDER <span>ACADEMY</span></Link>
          <p>A thoughtful learning community for children from KG through Grade 8.</p>
          <Link className="footer-cta" href="/admissions">Explore admissions <ArrowUpRight size={16}/></Link>
        </div>
        <div className="footer-links"><h3>Explore</h3><Link href="/about">About</Link><Link href="/academics">Academics</Link><Link href="/school-life">School Life</Link><Link href="/stories">Stories</Link><Link href="/media">Media</Link><Link href="/community">Community</Link></div>
        <div className="footer-links"><h3>Families</h3><Link href="/admissions">Admissions</Link><Link href="/events">Events</Link><Link href="/contact">Contact</Link><Link href="/contact">Visit the Academy</Link></div>
        <div className="footer-contact"><h3>Connect</h3><p><MapPin size={15}/> Ethiopia</p><p><Phone size={15}/> School office</p><p><Mail size={15}/> Official school email</p><p><Instagram size={15}/> Social channels</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} BEGAIMEDER ACADEMY</span><span>KG · Grade 8</span><span>Built for learning, belonging and becoming.</span></div>
    </footer>
  );
}
