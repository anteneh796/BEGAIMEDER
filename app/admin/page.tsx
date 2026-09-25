"use client";

import { BarChart3, CalendarDays, FileImage, FileText, Globe2, ImagePlus, LayoutDashboard, LogOut, Menu, Settings, ShieldCheck, Users, Video, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Overview", LayoutDashboard],
  ["Content Studio", FileText],
  ["Pages", FileText],
  ["Stories", FileText],
  ["Media Library", FileImage],
  ["Videos", Video],
  ["Events", CalendarDays],
  ["Staff", Users],
  ["Admissions", Globe2],
  ["Analytics", BarChart3],
  ["Settings", Settings],
] as const;

export default function AdminPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-shell">
      <aside className={open ? "admin-sidebar open" : "admin-sidebar"}>
        <div className="admin-brand"><span className="brand-mark">B</span><span><strong>BEGAIMEDER</strong><small>CMS</small></span><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={18}/></button></div>
        <div className="admin-nav-label">Workspace</div>
        <nav>{nav.map(([label, Icon], i) => <a className={i === 0 ? "active" : ""} href={label === "Content Studio" ? "/admin/content" : label === "Media Library" ? "/admin/media" : "#"} key={label}><Icon size={17}/>{label}</a>)}</nav>
        <div className="admin-nav-label">Security</div>
        <nav><a href="#"><ShieldCheck size={17}/>Roles & permissions</a><a href="#"><FileText size={17}/>Audit log</a></nav>
        <div className="admin-bottom"><a href="/"><Globe2 size={17}/>View website</a><a href="#"><LogOut size={17}/>Sign out</a></div>
      </aside>

      {open && <button className="admin-backdrop" onClick={() => setOpen(false)} aria-label="Close navigation" />}

      <main className="admin-main">
        <header className="admin-header">
          <button className="admin-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20}/></button>
          <div><span className="eyebrow">Academy CMS</span><h1>Good morning, Administrator</h1></div>
          <div className="admin-user">A</div>
        </header>

        <section className="admin-content">
          <div className="admin-actions"><div><h2>Website overview</h2><p>Keep BEGAIMEDER&apos;s digital campus fresh and alive.</p></div><button className="admin-primary"><ImagePlus size={17}/> Create content</button></div>

          <div className="metric-grid">
            <Metric label="Published stories" value="86" trend="+12 this month"/>
            <Metric label="Media assets" value="1,842" trend="+248 this month"/>
            <Metric label="Upcoming events" value="12" trend="3 this week"/>
            <Metric label="Admission inquiries" value="38" trend="8 awaiting review"/>
          </div>

          <div className="admin-grid">
            <section className="panel"><div className="panel-head"><div><h3>Recent activity</h3><p>Latest changes across the website.</p></div><a href="#">View audit log</a></div>
              {["Homepage hero updated","New school-life gallery published","Annual Cultural Day scheduled","New admission inquiry received"].map((x,i)=><div className="activity" key={x}><span className="activity-dot"/><div><strong>{x}</strong><small>{i+1} hour{i ? "s" : ""} ago · Administrator</small></div></div>)}
            </section>
            <section className="panel"><div className="panel-head"><div><h3>Quick publish</h3><p>Start with a content type.</p></div></div>
              <div className="quick-grid"><Quick icon={FileText} text="Story"/><Quick icon={ImagePlus} text="Photo album"/><Quick icon={Video} text="Video"/><Quick icon={CalendarDays} text="Event"/></div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

function Metric({ label, value, trend }: { label: string; value: string; trend: string }) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong><small>{trend}</small></div>;
}

function Quick({ icon: Icon, text }: { icon: typeof FileText; text: string }) {
  return <button className="quick"><Icon size={19}/><span>{text}</span></button>;
}