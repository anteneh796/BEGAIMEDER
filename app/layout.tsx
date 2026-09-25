import type { Metadata } from "next";
import { PageViewTracker } from "@/components/page-view-tracker";
import { SiteStructuredData } from "@/components/site-structured-data";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://begaimederacademy.com";
export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title:{default:"BEGAIMEDER ACADEMY",template:"%s | BEGAIMEDER ACADEMY"},
 description:"The official digital home of BEGAIMEDER ACADEMY — a KG through Grade 8 learning community.",
 keywords:["BEGAIMEDER ACADEMY","school","KG","Grade 8","education","Ethiopia"],
 alternates:{canonical:"/"},
 openGraph:{title:"BEGAIMEDER ACADEMY",description:"A thoughtful learning community for children from KG through Grade 8.",type:"website",url:siteUrl,siteName:"BEGAIMEDER ACADEMY"},
 twitter:{card:"summary_large_image",title:"BEGAIMEDER ACADEMY",description:"KG through Grade 8 — learning, belonging and becoming."},
 robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteStructuredData/><PageViewTracker/><div id="main-content">{children}</div></body></html>;}