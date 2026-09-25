import { events, stories } from "./content";
export const cms = {
  site: { name:"BEGAIMEDER ACADEMY", tagline:"A place to grow, discover, belong and become.", grades:"KG through Grade 8" },
  navigation: [{label:"About",href:"/about"},{label:"Academics",href:"/academics"},{label:"School Life",href:"/school-life"},{label:"Stories",href:"/stories"},{label:"Admissions",href:"/admissions"}],
  stats: [{value:"KG–8",label:"Learning journey"},{value:"4",label:"Academic stages"},{value:"1",label:"Connected community"}],
  stories,
  events,
};
export function getStory(slug:string){ return stories.find(story=>story.slug===slug); }
