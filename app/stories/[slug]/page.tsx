import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getStory } from "@/lib/cms";
import { stories } from "@/lib/content";

export function generateStaticParams(){ return stories.map(story=>({slug:story.slug})); }

export default async function StoryPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const story=getStory(slug);
  if(!story) notFound();
  return <><SiteHeader/><main><PageHero eyebrow={story.category} title={story.title} text={story.excerpt} image={story.image}/><article className="article-page"><div className="article-meta">{story.category} · {story.date}</div><div className="article-copy"><p>Every school has moments that deserve to be remembered. At BEGAIMEDER, the everyday experience of learning, friendship, creativity and discovery is part of the story.</p><p>This story page is ready to become a full CMS-powered publication space where authorized school staff can add rich text, photographs, videos, galleries, documents and related stories.</p><blockquote>Learning becomes memorable when children are known, challenged and encouraged to discover what they can do.</blockquote><p>As the academy grows, this space will bring families closer to the people, achievements and experiences that make the school community unique.</p></div></article></main><SiteFooter/></>;
}
