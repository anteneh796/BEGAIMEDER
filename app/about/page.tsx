import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Our story" title="Growing curious minds. Building grounded people." text="BEGAIMEDER ACADEMY is a KG through Grade 8 learning community built around curiosity, character, confidence and meaningful relationships." image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85" />
    <section className="content-section split-section"><div><span className="eyebrow">Who we are</span><h2>School should feel like a place where possibility is real.</h2></div><div className="prose"><p>We believe children learn best when they are known, challenged and encouraged to ask better questions. Our school experience connects strong foundations with creativity, collaboration and responsible citizenship.</p><p>From the earliest years through Grade 8, students are supported by caring adults, purposeful routines and opportunities to discover what they can do.</p></div></section>
    <section className="value-band"><div><span className="eyebrow eyebrow-light">What guides us</span><h2>Curiosity · Character · Community</h2></div><p>We create a culture where academic ambition and human development belong together.</p></section>
    <section className="content-section"><span className="eyebrow">Our promise</span><h2 className="section-title">A childhood worth remembering.</h2><div className="feature-grid"><article><b>01</b><h3>Know every learner</h3><p>Personal attention, clear expectations and relationships that help students feel seen.</p></article><article><b>02</b><h3>Make learning meaningful</h3><p>Learning connects classroom knowledge to questions, projects, creativity and real life.</p></article><article><b>03</b><h3>Prepare for what comes next</h3><p>Confidence, communication, independence and character grow alongside academic foundations.</p></article></div></section>
  </main><SiteFooter/></>;
}
