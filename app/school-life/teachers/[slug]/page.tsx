import Image from "next/image";
import { notFound } from "next/navigation";
import { getExperience } from "@/lib/experience";
export const revalidate=60;
export async function generateStaticParams(){const d=(await getExperience())?.teachers;return d?.people.map(p=>({slug:p.slug}))??[];}
export default async function Teacher({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=(await getExperience())?.teachers;const p=d?.people.find(x=>x.slug===slug);if(!p)notFound();return <main><section className="section"><div className="container teacher-profile"><Image src={p.portrait} alt={p.name} width={900} height={1050}/><article><span className="eyebrow">{p.department}</span><h1>{p.name}</h1><h2>{p.role}</h2><blockquote>“{p.quote}”</blockquote><p>{p.bio}</p></article></div></section></main>}