import Link from "next/link";
export function ExperienceEmpty({title="Experience content is being prepared.",body="Connect the BEGAIMEDER CMS to publish this section."}:{title?:string;body?:string}){
 return <section className="experience-empty"><div className="container"><span className="eyebrow">BEGAIMEDER ACADEMY</span><h1>{title}</h1><p>{body}</p><Link className="button button-gold" href="/contact">Contact the Academy</Link></div></section>;
}
