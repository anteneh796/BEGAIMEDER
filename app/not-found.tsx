import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return <><SiteHeader/><main className="not-found"><div><span className="eyebrow">404 · Page not found</span><h1>We couldn't find that page.</h1><p>The page may have moved, the link may be outdated, or the address may have been entered incorrectly.</p><div className="not-found-actions"><Link className="button button-dark" href="/">Back to home <ArrowRight size={16}/></Link><Link className="text-button" href="/contact"><ArrowLeft size={16}/> Contact the Academy</Link></div></div></main><SiteFooter/></>;
}
