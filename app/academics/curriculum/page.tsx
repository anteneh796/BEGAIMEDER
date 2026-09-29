import Image from "next/image";
import Link from "next/link";
import { getExperience } from "@/lib/experience";
import { ExperienceEmpty } from "@/components/experience-empty";
export const revalidate=60;
export default async function Curriculum(){const d=(await getExperience())?.curriculum;if(!d)return <ExperienceEmpty title="Curriculum information is being prepared."/>;return <main><section className="experience-hero"><div className="container"><span className="eyebrow">{d.eyebrow}</span><h1>{d.title}</h1><p>{d.body}</p></div></section><section className="section"><div className="container curriculum-grid">{d.programs.map(p=><Link href={"/academics/curriculum/"+p.slug} className="curriculum-card" key={p.slug}><Image src={p.image} alt="" width={900} height={620}/><div><span className="eyebrow">{p.grades}</span><h2>{p.title}</h2><p>{p.summary}</p><span>{p.focus.slice(0,3).join(" · ")}</span></div></Link>)}</div></section></main>}