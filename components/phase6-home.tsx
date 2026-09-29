"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import type { ExperienceData } from "@/lib/experience";

export function Phase6Home({data}:{data:ExperienceData["home"]}){
 return <main>
  <section className="p6-hero">
   <motion.div className="p6-hero-media" style={{backgroundImage:"url("+data.hero.image+")"}} initial={{scale:1.08}} animate={{scale:1}} transition={{duration:1.4,ease:"easeOut"}} />
   <div className="p6-hero-overlay"/>
   <div className="container p6-hero-content">
    <motion.div className="p6-hero-copy" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
     <span className="eyebrow">{data.hero.eyebrow}</span><h1>{data.hero.title}</h1><p>{data.hero.body}</p>
     <div className="hero-actions"><Link className="button button-gold" href={data.hero.primaryHref}>{data.hero.primaryLabel}<ArrowRight size={17}/></Link><Link className="button button-ghost" href={data.hero.secondaryHref}><Play size={15} fill="currentColor"/>{data.hero.secondaryLabel}</Link></div>
    </motion.div>
    <div className="p6-hero-bottom"><span><Sparkles size={15}/> A connected learning journey from KG through Grade 8.</span><a href="#p6-journey">Scroll to explore <ChevronDown size={17}/></a></div>
   </div>
  </section>
  <section className="section"><div className="container p6-intro-grid"><div><span className="eyebrow">{data.intro.eyebrow}</span><h2 className="p6-display">{data.intro.title}</h2></div><div><p className="p6-lead">{data.intro.body}</p><Link className="editorial-link" href={data.intro.linkHref}>{data.intro.linkLabel}<ArrowRight size={17}/></Link></div></div></section>
  <section className="section p6-journey" id="p6-journey"><div className="container"><div className="home-section-heading"><div><span className="eyebrow">{data.journey.eyebrow}</span><h2>{data.journey.title}</h2></div><p>{data.journey.body}</p></div><div className="journey-list">{data.journey.items.map(item=><Link className="journey-row" href={item.href} key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><ArrowRight size={22}/></Link>)}</div></div></section>
  <section className="section p6-dark"><div className="container"><div className="home-section-heading light"><div><span className="eyebrow">{data.philosophy.eyebrow}</span><h2>{data.philosophy.title}</h2></div><p>{data.philosophy.body}</p></div><div className="philosophy-grid">{data.philosophy.items.map(item=><motion.article key={item.number} whileHover={{y:-8}}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></motion.article>)}</div></div></section>
  <section className="section"><div className="container"><div className="home-section-heading"><div><span className="eyebrow">{data.moments.eyebrow}</span><h2>{data.moments.title}</h2></div><Link className="editorial-link" href={data.moments.linkHref}>{data.moments.linkLabel}<ArrowRight size={17}/></Link></div><div className="p6-mosaic">{data.moments.items.map((item,i)=><Link key={item.title} href={item.href} className={"p6-mosaic-item p6-mosaic-"+i}><div style={{backgroundImage:"url("+item.image+")"}}/><span>{item.label}</span><h3>{item.title}</h3></Link>)}</div></div></section>
  <section className="p6-admission"><div className="container home-admission-inner"><div><span className="eyebrow">{data.admissions.eyebrow}</span><h2>{data.admissions.title}</h2><p>{data.admissions.body}</p></div><Link className="button button-dark" href={data.admissions.href}>{data.admissions.label}<ArrowRight size={17}/></Link></div></section>
 </main>;
}
