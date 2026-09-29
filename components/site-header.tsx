"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
const groups=[
 {label:"Discover",items:[["/about","About the Academy"],["/about/principal","Principal's message"],["/about/history","Our history"],["/about/achievements","Awards & achievements"]]},
 {label:"Learning",items:[["/academics","Academic journey"],["/academics/curriculum","Curriculum"],["/school-life/teachers","Our teachers"],["/school-life","School life"]]},
 {label:"Experience",items:[["/admissions","Admissions journey"],["/media","Media & moments"],["/stories","Stories"],["/events","Events"],["/community","Community"]]}
];
export function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="site-header premium-header">
  <Link href="/" className="site-brand" aria-label="BEGAIMEDER ACADEMY home" onClick={()=>setOpen(false)}><span className="site-brand-mark">B</span><span><strong>BEGAIMEDER</strong><small>ACADEMY</small></span></Link>
  <nav className="desktop-nav premium-nav" aria-label="Primary navigation">{groups.map(group=><div className="nav-mega" key={group.label}><button type="button">{group.label}<ChevronDown size={14}/></button><div className="nav-mega-panel"><span className="eyebrow">{group.label}</span>{group.items.map(([href,label])=><Link href={href} key={href}>{label}<ArrowUpRight size={14}/></Link>)}</div></div>)}<Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={15}/></Link></nav>
  <button className="mobile-menu" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
  <AnimatePresence>{open&&<motion.div className="premium-mobile-panel" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}><nav aria-label="Mobile navigation">{groups.flatMap(g=>g.items).map(([href,label],i)=><Link href={href} key={href} onClick={()=>setOpen(false)}><span>0{Math.min(i+1,9)}</span>{label}<ArrowUpRight size={16}/></Link>)}<Link className="mobile-nav-contact" href="/contact" onClick={()=>setOpen(false)}>Start a conversation<ArrowUpRight size={18}/></Link></nav></motion.div>}</AnimatePresence>
 </header>;
}
