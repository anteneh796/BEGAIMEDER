"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarDays, FileImage, FileText, Globe2, LayoutDashboard, Menu, Settings, ShieldCheck, Users, X, Inbox, Palette, Search } from "lucide-react";
import { useState } from "react";

const groups = [
  { label:"Workspace", items:[
    ["/admin","Overview",LayoutDashboard],
    ["/admin/content","Content Studio",FileText],
    ["/admin/pages","Pages & Builder",Globe2],
    ["/admin/media","Media Library",FileImage],
    ["/admin/events","Events",CalendarDays],
    ["/admin/admissions","Admissions",Inbox],
  ]},
  { label:"School & Website", items:[
    ["/admin/staff","Staff",Users],
    ["/admin/navigation","Navigation",Menu],
    ["/admin/branding","Branding",Palette],
    ["/admin/seo","SEO",Search],
  ]},
  { label:"Administration", items:[
    ["/admin/users","Users & Roles",ShieldCheck],
    ["/admin/audit","Audit Log",FileText],
    ["/admin/settings","Settings",Settings],
    ["/admin/analytics","Analytics",BarChart3],
  ]},
] as const;

export function AdminShell({children}:{children:React.ReactNode}){
 const pathname=usePathname(); const [open,setOpen]=useState(false);
 return <div className="admin-shell">
  <aside className={"admin-sidebar "+(open?"open":"")}>
   <div className="admin-brand"><span className="brand-mark">B</span><span><strong>BEGAIMEDER</strong><small>DIGITAL CMS</small></span><button onClick={()=>setOpen(false)} aria-label="Close navigation"><X size={18}/></button></div>
   {groups.map(g=><div key={g.label}><div className="admin-nav-label">{g.label}</div><nav>{g.items.map(([href,label,Icon])=><Link key={href} className={pathname===href?"active":""} href={href} onClick={()=>setOpen(false)}><Icon size={17}/>{label}</Link>)}</nav></div>)}
   <div className="admin-bottom"><Link href="/"><Globe2 size={17}/>View website</Link><button><ShieldCheck size={17}/>Administrator</button></div>
  </aside>
  {open&&<button className="admin-backdrop" onClick={()=>setOpen(false)} aria-label="Close navigation"/>}
  <main className="admin-main"><header className="admin-header"><button className="admin-menu" onClick={()=>setOpen(true)} aria-label="Open navigation"><Menu size={20}/></button><div><span className="eyebrow">BEGAIMEDER ACADEMY · CMS</span><h1>Website management</h1></div><div className="admin-user">A</div></header>{children}</main>
 </div>
}