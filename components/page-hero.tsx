import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, image, cta }: { eyebrow: string; title: string; text: string; image: string; cta?: {label:string;href:string} }) {
  return <section className="inner-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,18,20,.86), rgba(7,18,20,.48), rgba(7,18,20,.18)), url(${image})` }}>
    <div className="inner-hero-content">
      <span className="eyebrow eyebrow-light">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
      {cta && <Link className="button button-light" href={cta.href}>{cta.label}<ArrowUpRight size={16}/></Link>}
    </div>
  </section>;
}
