import { notFound } from "next/navigation";
import { getAlbum, getAssetsForAlbum, albums } from "@/lib/media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams(){return albums.map(album=>({slug:album.slug}));}
export default async function AlbumPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const album=getAlbum(slug); if(!album) notFound(); const assets=getAssetsForAlbum(album.id);
 return <><SiteHeader/><main className="album-page"><section className="inner-hero album-hero" style={{backgroundImage:`url(${album.coverUrl})`}}><div className="inner-hero-copy"><p className="eyebrow">MEDIA ALBUM</p><h1>{album.title}</h1><p>{album.description}</p></div></section><section className="content-section"><div className="album-meta-row"><span>{assets.length} items in this preview</span><span>Published {album.publishedAt}</span></div><div className="media-photo-grid album-grid">{assets.map(asset=><article className="media-photo-card" key={asset.id}>{asset.type==="image"&&<img src={asset.url} alt={asset.alt}/>} {asset.type==="video"&&<img src={asset.thumbnailUrl} alt={asset.alt}/>}<div><span>{asset.type}</span><h3>{asset.title}</h3></div></article>)}</div></section></main><SiteFooter/></>;
}
