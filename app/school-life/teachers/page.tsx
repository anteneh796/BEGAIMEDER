import Image from "next/image";
import Link from "next/link";
import { getExperience } from "@/lib/experience";
import { ExperienceEmpty } from "@/components/experience-empty";
export const revalidate=60;
export default async function Teachers(){const d=(await getExperience())?.teachers;if(!d)return <ExperienceEmpty title="Teacher profiles are being prepared."/>;return <main><section className="experience-hero"><div className="container"><span className="eyebrow">{d.eyebrow}</span><h1>{d.title}</h1><p>{d.body}</p></div></section><section className="section"><div className="container teacher-grid">{d.people.map(p=><Link href={"/school-life/teachers/"+p.slug} className="teacher-card" key={p.slug}><Image src={p.portrait} alt={p.name} width={700} height={850}/><div><span className="eyebrow">{p.department}</span><h2>{p.name}</h2><p>{p.role}</p></div></Link>)}</div></section></main>}