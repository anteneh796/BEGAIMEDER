import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/lib/structured-data";
import { getStory } from "@/lib/cms";
import { stories } from "@/lib/content";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL??"https://begaimederacademy.com";
export function generateStaticParams(){return stories.map(story=>({slug:story.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const story=getStory(slug);if(!story)return{};return{title:story.title,description:story.excerpt,alternates:{canonical:`/stories/${story.slug}`},openGraph:{title:story.title,description:story.excerpt,type:"article",url:`${siteUrl}/stories/${story.slug}`,images:[{url:story.image}]}};}
export default async function StoryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const story=getStory(slug);if(!story)notFound();const url=`${siteUrl}/stories/${story.slug}`;return <><SiteHeader/><main><PageHero eyebrow={story.category} title={story.title} text={story.excerpt} image={story.image}/><ArticleStructuredData title={story.title} description={story.excerpt} url={url} datePublished={story.date}/><BreadcrumbStructuredData items={[{name:"Home",url:siteUrl},{name:"Stories",url:`${siteUrl}/stories`},{name:story.title,url}]}/><article className="article-page"><div className="article-meta">{story.category} · {story.date}</div><div className="article-copy"><p>Every school has moments that deserve to be remembered. At BEGAIMEDER, the everyday experience of learning, friendship, creativity and discovery is part of the story.</p><p>This story page is ready to become a full CMS-powered publication space where authorized school staff can add rich text, photographs, videos, galleries, documents and related stories.</p><blockquote>Learning becomes memorable when children are known, challenged and encouraged to discover what they can do.</blockquote><p>As the academy grows, this space will bring families closer to the people, achievements and experiences that make the school community unique.</p></div></article></main><SiteFooter/></>}