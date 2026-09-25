import { notFound } from "next/navigation";
import { getAlbum, getAssetsForAlbum, albums } from "@/lib/media";
import { getPublishedAlbum } from "@/lib/public-cms";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
export function generateStaticParams(){return albums.map(album=>({slug:album.slug}));}
export default async function AlbumPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const apiAlbum=await getPublishedAlbum(slug); const fallback=getAlbum(slug); if(!apiAlbum&&!fallback)notFound();
 const title="title" in apiAlbum! ? apiAlbum.title : fallback!.title;
 const description="description" in apiAlbum! ? apiAlbum.description??"" : fallback!.description;
 const cover="coverUrl" in apiAlbum! ? apiAlbum.coverUrl : fallback!.coverUrl;
 const assets="media" in apiAlbum! ? (apiAlbum.media??[]).map((a,i)=>({id:String(a.id),type:a.type==="image"?"image":"video",url:a.path,thumbnailUrl:a.path,alt:a.alt_text??a.title,title:a.title,duration:"",uploadedAt:""})) : getAssetsForAlbum(fallback!.id);
 return <><SiteHeader/><main className="album-page"><section className="inner-hero album-hero" style={{backgroundImage:`url(${cover})`}}><div className="inner-hero-copy"><p className="eyebrow">MEDIA ALBUM</p><h1>{title}</h1><p>{description}</p></div></section><section className="content-section"><div className="album-meta-row"><span>{assets.length} items</span><span>Published collection</span></div><div className="media-photo-grid album-grid">{assets.map(asset=><article className="media-photo-card" key={asset.id}>{asset.type==="image"&&<img src={asset.url} alt={asset.alt}/>} {asset.type==="video"&&<img src={asset.thumbnailUrl} alt={asset.alt}/>}<div><span>{asset.type}</span><h3>{asset.title}</h3></div></article>)}</div></section></main><SiteFooter/></>;
}