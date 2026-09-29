import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getExperience } from "@/lib/experience";
import { ExperienceEmpty } from "@/components/experience-empty";
export const revalidate=60;
export default async function Admissions(){
 const data=(await getExperience())?.admissions;
 if(!data)return <ExperienceEmpty title="Admissions information is being prepared." />;
 return <main><section className="experience-hero"><div className="container"><span className="eyebrow">{data.eyebrow}</span><h1>{data.title}</h1><p>{data.body}</p></div></section><section className="section"><div className="container"><div className="experience-steps">{data.steps.map(step=><article className="experience-step" key={step.number}><span className="step-number">{step.number}</span><div><h2>{step.title}</h2><p>{step.body}</p><Link className="editorial-link" href={step.href}>{step.action}<ArrowRight size={16}/></Link></div><CheckCircle2 size={23}/></article>)}</div><div className="experience-reassurance"><span className="eyebrow">A thoughtful start</span><p>{data.reassurance}</p></div></div></section></main>;
}
