import { Link } from 'react-router-dom';

export default function Home() {
  return <div className="public-page">
    <nav><div className="wrap"><div className="logo"><span className="mark">H</span>Hilaros</div>
      <div className="nav-links"><a href="#how">How it works</a><a href="#why">Why Hilaros</a><a href="#proof">Churches</a></div>
      <Link to="/signup" className="nav-cta">Register your church</Link>
    </div></nav>
    <section className="hero"><div className="hero-grid"><div>
      <span className="eyebrow">Church giving, one QR code at a time</span>
      <h1>One code.<br/>Every <em>gift.</em></h1>
      <p className="lede">Print one QR code for your church. Members scan it, choose what they're giving — tithe, offering, building fund — and it settles straight into the right account. No cash count, no confusion, no ten different codes taped to the wall.</p>
      <div className="hero-actions"><Link to="/signup" className="btn-primary">Register your church</Link><a href="#how" className="btn-ghost">See how it works</a></div>
      <div className="hero-stats"><div className="hstat"><b>1</b><span>QR code per church</span></div><div className="hstat"><b>&lt;60s</b><span>to give, start to finish</span></div><div className="hstat"><b>0</b><span>funds held by Hilaros</span></div></div>
    </div><div className="hero-visual"><img src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80" alt="Congregation in worship"/></div></div></section>
    <section id="how" className="info-section"><span className="eyebrow">Simple by design</span><h2>One scan. One choice. One secure payment.</h2></section>
  </div>;
}
