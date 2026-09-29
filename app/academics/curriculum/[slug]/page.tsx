import Image from "next/image";
import { notFound } from "next/navigation";
import { getExperience } from "@/lib/experience";
export const revalidate=60;
export async function generateStaticParams(){const d=(await getExperience())?.curriculum;return d?.programs.map(p=>({slug:p.slug}))??[];}
export default async function CurriculumProgram({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=(await getExperience())?.curriculum;const p=d?.programs.find(x=>x.slug===slug);if(!p)notFound();return <main><section className="section"><div className="container curriculum-detail"><Image src={p.image} alt="" width={1200} height={700}/><span className="eyebrow">{p.grades}</span><h1>{p.title}</h1><p className="p6-lead">{p.summary}</p><div className="focus-list">{p.focus.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section></main>}