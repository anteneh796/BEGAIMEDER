"use client";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileImage, FileText, ImagePlus, Inbox, Plus, Sparkles, Users } from "lucide-react";

const metrics = [
  {label:"Published stories",value:"86",trend:"+12 this month",Icon:FileText},
  {label:"Media assets",value:"1,842",trend:"+248 this month",Icon:FileImage},
  {label:"Upcoming events",value:"12",trend:"3 this week",Icon:CalendarDays},
  {label:"Admission inquiries",value:"38",trend:"8 awaiting review",Icon:Inbox},
];
const activity=[["Homepage hero updated","Today · Administrator"],["New school-life gallery published","Today · Communications"],["Annual Cultural Day scheduled","Yesterday · Administrator"],["New admission inquiry received","Yesterday · Admissions"]];

export default function Dashboard(){
 return <section className="admin-content">
  <div className="admin-actions"><div><span className="eyebrow">COMMAND CENTER</span><h2>Everything your website needs, in one place.</h2><p>Publish stories, shape pages, manage media and keep families informed.</p></div><Link href="/admin/content" className="admin-primary"><Plus size={17}/> Create content</Link></div>
  <div className="metric-grid">{metrics.map(({label,value,trend,Icon})=><div className="metric" key={label}><Icon size={18}/><span>{label}</span><strong>{value}</strong><small>{trend}</small></div>)}</div>
  <div className="admin-grid">
   <section className="panel"><div className="panel-head"><div><h3>Recent activity</h3><p>The latest changes across the digital campus.</p></div><Link href="/admin/audit">Audit log <ArrowRight size={14}/></Link></div>{activity.map(([x,t])=><div className="activity" key={x}><span className="activity-dot"/><div><strong>{x}</strong><small>{t}</small></div></div>)}</section>
   <section className="panel"><div className="panel-head"><div><h3>Quick actions</h3><p>Jump directly into your most common tasks.</p></div></div><div className="quick-grid"><Link className="quick" href="/admin/content"><FileText size={19}/><span>Write story</span></Link><Link className="quick" href="/admin/media"><ImagePlus size={19}/><span>Upload media</span></Link><Link className="quick" href="/admin/events"><CalendarDays size={19}/><span>Add event</span></Link><Link className="quick" href="/admin/staff"><Users size={19}/><span>Manage staff</span></Link></div></section>
  </div>
  <section className="dashboard-callout"><Sparkles size={22}/><div><strong>Phase 2 workspace</strong><p>Pages, content, media, admissions, school information, navigation, branding, SEO and administration now live under one CMS experience.</p></div></section>
 </section>;
}