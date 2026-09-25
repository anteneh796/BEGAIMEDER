export type MediaType = "image" | "video" | "document";
export type MediaVisibility = "public" | "community" | "private";
export type MediaStatus = "ready" | "processing" | "review";
export type ConsentStatus = "not_required" | "pending" | "approved";

export interface MediaAsset {
  id: string; filename: string; title: string; alt: string; type: MediaType; mime: string;
  size: string; dimensions?: string; duration?: string; uploadedAt: string; uploadedBy: string;
  tags: string[]; albumIds: string[]; visibility: MediaVisibility; consentStatus: ConsentStatus;
  status: MediaStatus; url: string; thumbnailUrl?: string;
}
export interface MediaAlbum {
  id: string; slug: string; title: string; description: string; coverUrl: string;
  assetCount: number; publishedAt: string; visibility: MediaVisibility;
}
export const albums: MediaAlbum[] = [
 {id:"album-01",slug:"begaimeder-moments",title:"BEGAIMEDER Moments",description:"A living collection of school life, celebrations and everyday moments.",coverUrl:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",assetCount:48,publishedAt:"2026-09-18",visibility:"public"},
 {id:"album-02",slug:"academic-year-2026",title:"Academic Year 2026",description:"Classroom learning, projects, exhibitions and academic milestones.",coverUrl:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",assetCount:36,publishedAt:"2026-09-12",visibility:"public"},
 {id:"album-03",slug:"school-community",title:"School Community",description:"Community gatherings, family engagement and campus activities.",coverUrl:"https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",assetCount:29,publishedAt:"2026-08-28",visibility:"public"}
];
export const mediaAssets: MediaAsset[] = [
 {id:"media-001",filename:"morning-assembly.jpg",title:"Morning Assembly",alt:"Students gathered for a morning school assembly",type:"image",mime:"image/jpeg",size:"2.8 MB",dimensions:"2400 × 1600",uploadedAt:"2026-09-20",uploadedBy:"Communications",tags:["assembly","students","school-life"],albumIds:["album-01"],visibility:"public",consentStatus:"approved",status:"ready",url:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85"},
 {id:"media-002",filename:"science-projects.jpg",title:"Science Project Showcase",alt:"Students presenting a science project",type:"image",mime:"image/jpeg",size:"3.4 MB",dimensions:"2400 × 1600",uploadedAt:"2026-09-18",uploadedBy:"Media Manager",tags:["academics","science","projects"],albumIds:["album-02"],visibility:"public",consentStatus:"approved",status:"ready",url:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85"},
 {id:"media-003",filename:"cultural-day.mp4",title:"Cultural Day Highlights",alt:"Video highlights from the school's cultural day",type:"video",mime:"video/mp4",size:"84 MB",duration:"02:41",uploadedAt:"2026-09-15",uploadedBy:"Communications",tags:["culture","events","video"],albumIds:["album-01","album-03"],visibility:"public",consentStatus:"approved",status:"ready",url:"#",thumbnailUrl:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80"},
 {id:"media-004",filename:"parent-handbook.pdf",title:"Parent Handbook 2026",alt:"Parent handbook document",type:"document",mime:"application/pdf",size:"1.2 MB",uploadedAt:"2026-09-10",uploadedBy:"Website Administrator",tags:["parents","handbook","documents"],albumIds:[],visibility:"public",consentStatus:"not_required",status:"ready",url:"#"},
 {id:"media-005",filename:"classroom-learning.jpg",title:"Learning in the Classroom",alt:"Students learning together in a classroom",type:"image",mime:"image/jpeg",size:"2.1 MB",dimensions:"2400 × 1600",uploadedAt:"2026-09-08",uploadedBy:"Contributor",tags:["classroom","learning","students"],albumIds:["album-02"],visibility:"public",consentStatus:"pending",status:"review",url:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85"}
];
export function getAlbum(slug:string){return albums.find(a=>a.slug===slug);}
export function getAssetsForAlbum(albumId:string){return mediaAssets.filter(a=>a.albumIds.includes(albumId));}
