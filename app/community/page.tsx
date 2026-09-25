import { ArrowRight, HeartHandshake, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const pillars = [
  { title:"Families", text:"Parents and guardians are partners in a child's learning journey.", Icon:Users },
  { title:"Belonging", text:"A respectful community helps every learner feel known, valued and included.", Icon:HeartHandshake },
  { title:"Conversation", text:"Questions, feedback and shared ideas help the Academy keep growing.", Icon:MessageCircle },
];

export default function CommunityPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Our community" title="School is bigger than the classroom." text="BEGAIMEDER brings learners, families, educators and the wider community together around the growth of every child." image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85"/>
    <section className="content-section"><span className="eyebrow">A connected school</span><h2 className="section-title">People make the place.</h2><div className="community-pillars">{pillars.map(({title,text,Icon}) => <article key={title}><span className="community-icon"><Icon size={22}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="community-band"><div><span className="eyebrow eyebrow-light">Families welcome</span><h2>Stay close to what is happening at the Academy.</h2><p>Explore stories, events and admissions information, or contact the school office with a question.</p><div className="community-actions"><Link className="button button-light" href="/stories">Read our stories <ArrowRight size={16}/></Link><Link className="button button-outline-light" href="/contact">Contact the Academy</Link></div></div></section>
  </main><SiteFooter/></>;
}