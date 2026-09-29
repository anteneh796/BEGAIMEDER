import { getExperience } from "@/lib/experience";
import { ExperienceEmpty } from "@/components/experience-empty";
import { Phase6Home } from "@/components/phase6-home";

export const revalidate = 60;

export default async function Home(){
  const experience=await getExperience();
  if(!experience?.home) return <ExperienceEmpty title="Welcome to BEGAIMEDER ACADEMY." body="The homepage is managed from the Academy CMS and is ready for its first published experience." />;
  return <Phase6Home data={experience.home}/>;
}
