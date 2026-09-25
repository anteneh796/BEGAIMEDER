"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/school-life", label: "School Life" },
  { href: "/stories", label: "Stories" },
  { href: "/media", label: "Media" },
  { href: "/community", label: "Community" },
  { href: "/admissions", label: "Admissions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-brand" aria-label="BEGAIMEDER ACADEMY home" onClick={() => setOpen(false)}>
          <span className="site-brand-mark">B</span>
          <span><strong>BEGAIMEDER</strong><small>ACADEMY</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={15}/></Link>
        </nav>
        <button className="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>
      {open && (
        <div className="mobile-nav-panel">
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>)}
            <Link className="mobile-nav-contact" href="/contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={18}/></Link>
          </nav>
        </div>
      )}
    </>
  );
}
