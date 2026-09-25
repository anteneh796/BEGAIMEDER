export type BlockType="hero"|"rich_text"|"image"|"gallery"|"stats"|"cta"|"feature_grid";
export interface PageBlock{ id:string; type:BlockType; enabled:boolean; data:Record<string,unknown>; }
export interface ManagedPage{ id:string; slug:string; title:string; status:"published"|"draft"|"review"; updatedAt:string; blocks:PageBlock[]; }
export const managedPages:ManagedPage[]=[
{id:"page-home",slug:"/",title:"Homepage",status:"published",updatedAt:"2026-09-24",blocks:[
{id:"b1",type:"hero",enabled:true,data:{eyebrow:"BEGAIMEDER ACADEMY",title:"A place to become.",description:"A premium KG to Grade 8 learning experience."}},
{id:"b2",type:"rich_text",enabled:true,data:{heading:"Learning with purpose",body:"Every part of the school experience is designed to help children grow."}},
{id:"b3",type:"stats",enabled:true,data:{items:[{value:"KG–8",label:"Learning journey"},{value:"12+",label:"Years of community"},{value:"100%",label:"Student focused"}]}},
{id:"b4",type:"cta",enabled:true,data:{heading:"Begin the journey",button:"Explore admissions"}}
]},
{id:"page-about",slug:"/about",title:"About",status:"published",updatedAt:"2026-09-20",blocks:[
{id:"a1",type:"hero",enabled:true,data:{eyebrow:"ABOUT BEGAIMEDER",title:"More than a school.",description:"Our story, values and community."}},
{id:"a2",type:"feature_grid",enabled:true,data:{heading:"What defines us",items:["Purposeful learning","Strong community","Whole-child development"]}}
]},
{id:"page-admissions",slug:"/admissions",title:"Admissions",status:"draft",updatedAt:"2026-09-22",blocks:[
{id:"ad1",type:"hero",enabled:true,data:{eyebrow:"ADMISSIONS",title:"Your child's next chapter.",description:"Discover the BEGAIMEDER admissions journey."}},
{id:"ad2",type:"cta",enabled:true,data:{heading:"Ready to start?",button:"Contact admissions"}}
]}
];
export function getManagedPage(slug:string){return managedPages.find(p=>p.slug===slug);}
