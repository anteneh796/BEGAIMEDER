export type StoryCategory = "News" | "Story" | "Event" | "Achievement" | "Announcement";
export type Story = { id:string; category:StoryCategory; title:string; excerpt:string; date:string; image:string; featured?:boolean; slug:string };
export type EventItem = { id:string; title:string; date:string; time:string; location:string; description:string };
export const stories: Story[] = [
{id:"1",category:"Story",title:"A morning in our learning community",excerpt:"A glimpse into the rhythms, relationships and moments that shape a day at BEGAIMEDER.",date:"September 18, 2026",image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",featured:true,slug:"a-morning-in-our-learning-community"},
{id:"2",category:"Achievement",title:"Celebrating curious minds",excerpt:"We celebrate progress, effort, creativity and the courage to try something new.",date:"September 12, 2026",image:"https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=85",slug:"celebrating-curious-minds"},
{id:"3",category:"News",title:"Families are part of the story",excerpt:"Strong school-family relationships help children feel supported wherever learning happens.",date:"September 5, 2026",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",slug:"families-are-part-of-the-story"},
];
export const events: EventItem[] = [
{id:"1",title:"Open School Day",date:"October 10, 2026",time:"9:00 AM – 1:00 PM",location:"BEGAIMEDER ACADEMY Campus",description:"Meet our team, tour the campus and discover the learning experience."},
{id:"2",title:"Family Community Gathering",date:"October 24, 2026",time:"10:00 AM – 1:00 PM",location:"Main Campus",description:"A community day for families, students and staff."},
{id:"3",title:"Student Arts & Culture Day",date:"November 7, 2026",time:"9:30 AM – 2:00 PM",location:"School Hall",description:"A celebration of student creativity, performance and culture."},
];
