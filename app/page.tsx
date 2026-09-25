import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, Play, Sparkles } from "lucide-react";
import { events, stories } from "@/lib/content";

const journey = [
  ["01", "Kindergarten", "Playful foundations, confidence and a love of discovery.", "/academics"],
  ["02", "Lower Primary", "Strong foundations through active, purposeful learning.", "/academics"],
  ["03", "Upper Primary", "Deeper thinking, growing independence and wider horizons.", "/academics"],
  ["04", "Grades 7–8", "Subject depth, leadership and readiness for what comes next.", "/academics"],
];

const reasons = [
  ["01", "Known as an individual", "Children are supported by adults who notice progress, challenge thoughtfully and build trust."],
  ["02", "Learning with purpose", "Classroom knowledge connects with questions, projects, creativity and the world beyond school."],
  ["03", "Growing character", "Communication, responsibility, collaboration and confidence grow alongside academic foundations."],
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-image" />
        <div className="home-hero-shade" />
        <div className="home-nav-wrap"><div className="home-nav">
          <Link href="/" className="home-brand"><span>B</span><strong>BEGAIMEDER<small>ACADEMY</small></strong></Link>
          <nav aria-label="Homepage navigation"><Link href="/about">About</Link><Link href="/academics">Academics</Link><Link href="/school-life">School Life</Link><Link href="/stories">Stories</Link><Link href="/media">Media</Link></nav>
          <Link href="/admissions" className="home-nav-cta">Admissions <ArrowRight size={15}/></Link>
        </div></div>
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <span className="home-kicker">KG — GRADE 8 · BEGAIMEDER ACADEMY</span>
            <h1>Where curiosity becomes capability.</h1>
            <p>A modern learning community where children build strong foundations, discover their strengths and grow with confidence, character and purpose.</p>
            <div className="home-actions"><Link className="button button-gold" href="/admissions">Explore admissions <ArrowRight size={17}/></Link><Link className="button button-ghost" href="/about"><Play size={15} fill="currentColor"/> Discover our story</Link></div>
          </div>
          <div className="home-hero-bottom"><span><Sparkles size={15}/> Curious minds. Grounded people. Connected community.</span><Link href="#journey">Scroll to explore <ChevronDown size={17}/></Link></div>
        </div>
      </section>

      <section className="home-intro section">
        <div className="container home-intro-grid">
          <div><span className="eyebrow">Welcome to BEGAIMEDER</span><h2>A school experience designed around the whole child.</h2></div>
          <div><p className="home-lead">From the earliest years through Grade 8, we create space for children to ask better questions, build strong foundations and discover what they can become.</p><Link className="editorial-link" href="/about">Meet the Academy <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="home-journey section" id="journey">
        <div className="container">
          <div className="home-section-heading"><div><span className="eyebrow">The learning journey</span><h2>From KG to Grade 8.</h2></div><p>One connected experience that grows with the learner.</p></div>
          <div className="journey-list">{journey.map(([n, title, text, href]) => <Link className="journey-row" href={href} key={title}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={22}/></Link>)}</div>
        </div>
      </section>

      <section className="home-philosophy section">
        <div className="container">
          <div className="home-section-heading light"><div><span className="eyebrow">Why BEGAIMEDER</span><h2>Ambition with humanity.</h2></div><p>Academic growth matters. So do the people children become along the way.</p></div>
          <div className="philosophy-grid">{reasons.map(([n, title, text]) => <article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="home-moments section">
        <div className="container">
          <div className="home-section-heading"><div><span className="eyebrow">BEGAIMEDER MOMENTS</span><h2>Life beyond the classroom.</h2></div><Link className="editorial-link" href="/media">Open the media library <ArrowRight size={17}/></Link></div>
          <div className="home-mosaic">
            <Link href="/media/albums/begaimeder-moments" className="mosaic-main"><div><span>School Life</span><h3>Every day has a story worth remembering.</h3></div></Link>
            <Link href="/school-life" className="mosaic-card mosaic-one"><div><span>Community</span><h3>Growing together.</h3></div></Link>
            <Link href="/academics" className="mosaic-card mosaic-two"><div><span>Learning</span><h3>Curiosity in motion.</h3></div></Link>
          </div>
        </div>
      </section>

      <section className="home-stories section">
        <div className="container"><div className="home-section-heading"><div><span className="eyebrow">Latest from the Academy</span><h2>Stories & moments.</h2></div><Link className="editorial-link" href="/stories">View all <ArrowRight size={17}/></Link></div>
          <div className="home-story-grid">{stories.map(story => <article className="home-story-card" key={story.id}><Link href={`/stories/${story.slug}`}><img src={story.image} alt="" /><div><span className="eyebrow">{story.category}</span><h3>{story.title}</h3><p>{story.excerpt}</p><span className="story-read">Read story <ArrowRight size={15}/></span></div></Link></article>)}</div>
        </div>
      </section>

      <section className="home-events section">
        <div className="container"><div className="home-section-heading light"><div><span className="eyebrow">What's happening</span><h2>Come be part of it.</h2></div><Link className="editorial-link light-link" href="/events">View events <ArrowRight size={17}/></Link></div>
          <div className="event-preview">{events.slice(0,3).map(event => <Link href="/events" key={event.id}><span><CalendarDays size={16}/>{event.date}</span><h3>{event.title}</h3><p>{event.time} · {event.location}</p><ArrowRight size={18}/></Link>)}</div>
        </div>
      </section>

      <section className="home-admission">
        <div className="container home-admission-inner"><div><span className="eyebrow">Begin the journey</span><h2>A place to learn, belong and become.</h2><p>Come visit the Academy and discover an environment built for curious, capable young people.</p></div><Link className="button button-dark" href="/admissions">Explore admissions <ArrowRight size={17}/></Link></div>
      </section>
    </main>
  );
}
