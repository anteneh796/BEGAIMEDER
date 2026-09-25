import Link from "next/link";
import { ArrowRight, Image as ImageIcon, PlayCircle } from "lucide-react";
import { mediaAssets } from "@/lib/media";
import { getPublishedAlbums } from "@/lib/public-cms";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
export default async function MediaPage(){
 const albums=await getPublishedAlbums(); const images=mediaAssets.filter(a=>a.type==="image"), videos=mediaAssets.filter(a=>a.type==="video");
 return <><SiteHeader/><main className="media-page">
  <section className="inner-hero media-hero"><div className="inner-hero-copy"><p className="eyebrow">BEGAIMEDER MEDIA</p><h1>Moments worth remembering.</h1><p>Explore photographs, films and school albums that capture learning, friendship and life across our campus.</p></div></section>
  <section className="content-section"><div className="section-heading-row"><div><p className="eyebrow">CURATED COLLECTIONS</p><h2>Albums from school life.</h2></div><span className="section-count">{albums.length} albums</span></div><div className="media-album-grid">{albums.map(album=><Link href={`/media/albums/${album.slug}`} className="media-album-card" key={album.id}><img src={album.coverUrl} alt={album.title}/><div className="media-album-overlay"><span>{album.assetCount} assets</span><h3>{album.title}</h3><ArrowRight size={18}/></div></Link>)}</div></section>
  <section className="content-section media-showcase"><div className="section-heading-row"><div><p className="eyebrow">PHOTO LIBRARY</p><h2>Recent photographs.</h2></div><ImageIcon size={22}/></div><div className="media-photo-grid">{images.map(asset=><article className="media-photo-card" key={asset.id}><img src={asset.url} alt={asset.alt}/><div><span>{asset.uploadedAt}</span><h3>{asset.title}</h3></div></article>)}</div></section>
  <section className="content-section media-video-band"><div><p className="eyebrow">FILMS</p><h2>School life in motion.</h2><p>Video publishing is designed around fast, polished playback with thumbnails, metadata and future CDN delivery.</p></div>{videos.map(asset=><Link href={asset.url} className="media-video-card" key={asset.id}><img src={asset.thumbnailUrl} alt={asset.alt}/><div className="media-video-play"><PlayCircle size={44}/></div><div className="media-video-meta"><span>{asset.duration}</span><strong>{asset.title}</strong></div></Link>)}</section>
 </main><SiteFooter/></>;
}