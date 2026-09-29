import { NextResponse } from "next/server";
export async function GET(){
 const api=process.env.BEGAIMEDER_API_URL;
 if(!api)return NextResponse.json({data:null},{status:503});
 try{
  const res=await fetch(api.replace(/\/$/,"")+"/api/v1/experience",{cache:"no-store"});
  return NextResponse.json(await res.json(),{status:res.status});
 }catch{return NextResponse.json({data:null},{status:503});}
}
