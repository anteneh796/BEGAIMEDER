export type ExperienceData = {
  about: { eyebrow:string; title:string; body:string; mission:string; vision:string; values:string[]; historySummary:string; };
  schoolLife: { eyebrow:string; title:string; body:string; clubs:Array<{title:string;body:string;activity:string}>; activities:Array<{title:string;body:string}>; };
  contact: { eyebrow:string; title:string; body:string; location:string; phone:string|null; email:string|null; hours:string; note:string; };
  calendar: { eyebrow:string; title:string; body:string; items:Array<{date:string;title:string;type:string;description:string}>; };
  home: { hero:{eyebrow:string;title:string;body:string;primaryLabel:string;primaryHref:string;secondaryLabel:string;secondaryHref:string;image:string}; intro:{eyebrow:string;title:string;body:string;linkLabel:string;linkHref:string}; journey:{eyebrow:string;title:string;body:string;items:Array<{number:string;title:string;body:string;href:string}>}; philosophy:{eyebrow:string;title:string;body:string;items:Array<{number:string;title:string;body:string}>}; moments:{eyebrow:string;title:string;body:string;linkLabel:string;linkHref:string;items:Array<{label:string;title:string;image:string;href:string}>}; admissions:{eyebrow:string;title:string;body:string;label:string;href:string}; };
  admissions: { eyebrow:string; title:string; body:string; requirements:string[]; steps:Array<{number:string;title:string;body:string;action:string;href:string}>; reassurance:string; };
  principal: { eyebrow:string; title:string; name:string; role:string; portrait:string; quote:string; body:string; signature:string; };
  teachers: { eyebrow:string; title:string; body:string; people:Array<{slug:string;name:string;role:string;department:string;bio:string;portrait:string;quote:string}>; };
  curriculum: { eyebrow:string; title:string; body:string; programs:Array<{slug:string;title:string;grades:string;summary:string;focus:string[];image:string}>; };
  achievements: { eyebrow:string; title:string; body:string; items:Array<{year:string;title:string;body:string;category:string;image:string}>; };
  history: { eyebrow:string; title:string; body:string; milestones:Array<{year:string;title:string;body:string;image:string}>; };
};
const API=process.env.BEGAIMEDER_API_URL;
export async function getExperience():Promise<ExperienceData|null>{if(!API)return null;try{const res=await fetch(API.replace(/\/$/,"")+"/api/v1/experience",{next:{revalidate:60}});if(!res.ok)return null;const json=await res.json() as {data:ExperienceData};return json.data;}catch{return null;}}