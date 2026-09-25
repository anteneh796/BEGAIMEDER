import { ArrowRight, CalendarDays, Play, Sparkles } from "lucide-react";

const stories = [
  { category: "School Life", title: "Moments that make our community", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" },
  { category: "Learning", title: "Curiosity is where learning begins", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85" },
  { category: "Community", title: "Growing together, every day", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85" }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#">
            <span className="brand-mark">B</span>
            <span><strong>BEGAIMEDER</strong><small>ACADEMY</small></span>
          </a>
          <nav className="links">
            <a href="#about">About</a><a href="#academics">Academics</a><a href="#life">School Life</a><a href="#stories">Stories</a><a href="#admissions">Admissions</a>
          </nav>
          <a className="btn btn-dark nav-cta" href="#contact">Contact us <ArrowRight size={16}/></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">KG — GRADE 8 · BEGAIMEDER ACADEMY</div>
            <h1 className="display">Where curiosity becomes capability.</h1>
            <p>Discover a learning community built to help every child grow with confidence, character and purpose.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#admissions">Explore admissions <ArrowRight size={17}/></a>
              <a className="btn btn-outline" href="#story"><Play size={16} fill="currentColor"/> Discover our story</a>
            </div>
          </div>
          <div className="hero-note"><Sparkles size={16}/> Inspiring minds. Building character. Shaping the future.</div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="container intro-grid">
          <div><div className="eyebrow">Welcome to BEGAIMEDER</div><h2 className="display">A school experience designed around the whole child.</h2></div>
          <div><p className="lead">From the earliest years through Grade 8, we create space for children to ask better questions, build strong foundations and discover what they can become.</p><a className="text-link" href="#story">Meet the Academy <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <section className="academics section" id="academics">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow">The learning journey</div><h2 className="display">From KG to Grade 8.</h2></div><p>Purposeful learning, thoughtful guidance and room to grow.</p></div>
          <div className="levels">
            {["Kindergarten","Lower Primary","Upper Primary","Grade 7–8"].map((level, i) => <a href="#" className="level" key={level}><span>0{i+1}</span><strong>{level}</strong><ArrowRight size={20}/></a>)}
          </div>
        </div>
      </section>

      <section className="moments section" id="life">
        <div className="container">
          <div className="section-head light"><div><div className="eyebrow">BEGAIMEDER MOMENTS</div><h2 className="display">Life beyond the classroom.</h2></div><p>Activities, achievements, celebrations and everyday moments from our community.</p></div>
          <div className="moment-grid"><div className="moment large"><div><span>School Life</span><h3 className="display">Every day has a story worth remembering.</h3></div></div><div className="moment small"><div><span>Community</span><h3>Growing together.</h3></div></div><div className="moment small alt"><div><span>Activities</span><h3>Curiosity in motion.</h3></div></div></div>
        </div>
      </section>

      <section className="stories section" id="stories">
        <div className="container"><div className="section-head"><div><div className="eyebrow">Latest from the Academy</div><h2 className="display">Stories & moments.</h2></div><a className="text-link" href="#">View all <ArrowRight size={17}/></a></div>
          <div className="story-grid">{stories.map(s => <article className="story" key={s.title}><img src={s.image} alt="" /><div className="story-body"><div className="eyebrow">{s.category}</div><h3>{s.title}</h3><a href="#">Read story <ArrowRight size={16}/></a></div></article>)}</div>
        </div>
      </section>

      <section className="admission section" id="admissions">
        <div className="container admission-inner"><div><div className="eyebrow">Begin the journey</div><h2 className="display">A place to learn, belong and become.</h2></div><a className="btn btn-primary" href="#contact">Explore admissions <ArrowRight size={17}/></a></div>
      </section>

      <footer id="contact"><div className="container footer-grid"><div><a className="brand footer-brand" href="#"><span className="brand-mark">B</span><span><strong>BEGAIMEDER</strong><small>ACADEMY</small></span></a><p>A modern learning community for KG through Grade 8.</p></div><div><span className="footer-label">Explore</span><a href="#about">About</a><a href="#academics">Academics</a><a href="#life">School Life</a></div><div><span className="footer-label">Connect</span><a href="#">Contact</a><a href="#">Admissions</a><a href="#">Social media</a></div></div><div className="container copyright">© {new Date().getFullYear()} BEGAIMEDER ACADEMY. All rights reserved.</div></footer>
    </main>
  );
}