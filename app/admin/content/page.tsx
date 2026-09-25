"use client";
import { useState } from "react";
const types=["Story","News","Announcement","Achievement","Event"];
export default function ContentManager(){
 const [active,setActive]=useState("All");
 const items=[["A morning in our learning community","Story","Published","Sep 18, 2026"],["Celebrating curious minds","Achievement","Published","Sep 12, 2026"],["Families are part of the story","News","Draft","Sep 5, 2026"],["Open School Day","Event","Scheduled","Oct 10, 2026"]];
 const filtered=active==="All"?items:items.filter(x=>x[1]===active);
 return <div className="admin-content"><div className="admin-actions"><div><span className="eyebrow">Content studio</span><h2>Stories & publications</h2><p>Create, review, schedule and publish school content.</p></div><button className="admin-primary">＋ New content</button></div><div className="content-tabs"><button className={active==="All"?"selected":""} onClick={()=>setActive("All")}>All</button>{types.map(type=><button key={type} className={active===type?"selected":""} onClick={()=>setActive(type)}>{type}</button>)}</div><div className="cms-table"><div className="cms-row cms-head"><span>Title</span><span>Type</span><span>Status</span><span>Date</span><span>Action</span></div>{filtered.map(item=><div className="cms-row" key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span><span className={item[2].toLowerCase()}>{item[2]}</span><span>{item[3]}</span><button>Edit</button></div>)}</div></div>;
}
