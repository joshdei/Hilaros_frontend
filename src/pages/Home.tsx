import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="public-page">
      <nav>
        <div className="wrap">
          <div className="logo"><span className="mark">H</span>Hilaros</div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#why">Why Hilaros</a>
            <a href="#proof">Churches</a>
          </div>
          <Link to="/signup" className="nav-cta">Register your church</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Church giving, one QR code at a time</span>
            <h1>One code.<br />Every <em>gift.</em></h1>
            <p className="lede">
              Print one QR code for your church. Members scan it, choose what they're giving — tithe,
              offering, building fund — and it settles straight into the right account. No cash count,
              no confusion, no ten different codes taped to the wall.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn-primary">Register your church</Link>
              <a href="#how" className="btn-ghost">See how it works</a>
            </div>
            <div className="hero-stats">
              <div className="hstat"><b>1</b><span>QR code per church</span></div>
              <div className="hstat"><b>&lt;60s</b><span>to give, start to finish</span></div>
              <div className="hstat"><b>0</b><span>funds held by Hilaros</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80"
                alt="Congregation in worship"
              />
              <div className="float-card">
                <div className="float-qr">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#FBF3E3" />
                    <g fill="#221200">
                      <rect x="8" y="8" width="22" height="22" /><rect x="14" y="14" width="10" height="10" fill="#FBF3E3" />
                      <rect x="70" y="8" width="22" height="22" /><rect x="76" y="14" width="10" height="10" fill="#FBF3E3" />
                      <rect x="8" y="70" width="22" height="22" /><rect x="14" y="76" width="10" height="10" fill="#FBF3E3" />
                      <rect x="36" y="8" width="6" height="6" /><rect x="46" y="8" width="6" height="6" /><rect x="56" y="14" width="6" height="6" />
                      <rect x="36" y="20" width="6" height="6" /><rect x="50" y="24" width="6" height="6" /><rect x="60" y="30" width="6" height="6" />
                      <rect x="36" y="36" width="6" height="6" /><rect x="44" y="36" width="6" height="6" /><rect x="52" y="36" width="6" height="6" />
                      <rect x="36" y="46" width="6" height="6" /><rect x="60" y="42" width="6" height="6" /><rect x="70" y="46" width="6" height="6" />
                      <rect x="42" y="56" width="6" height="6" /><rect x="50" y="60" width="6" height="6" /><rect x="80" y="46" width="6" height="6" />
                      <rect x="36" y="66" width="6" height="6" /><rect x="60" y="66" width="6" height="6" /><rect x="70" y="60" width="6" height="6" />
                      <rect x="36" y="76" width="6" height="6" /><rect x="46" y="80" width="6" height="6" /><rect x="80" y="70" width="6" height="6" />
                      <rect x="56" y="86" width="6" height="6" /><rect x="66" y="80" width="6" height="6" /><rect x="80" y="82" width="6" height="6" />
                    </g>
                  </svg>
                </div>
                <div className="txt">
                  <b>Scan to give</b>
                  <span>Tithe · Offering · Building fund</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From wall to bank account, in three steps.</h2>
          <p>The code goes up once. Everything else happens on the giver's phone.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Register the church</h3>
            <p>Add your church's giving categories — tithe, offering, building fund — each linked to its own bank account, even across different banks.</p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <h3>Print one QR code</h3>
            <p>One code, printed once. Put it on the wall, the bulletin, the screen. It never changes, even as your giving categories do.</p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <h3>Members scan and give</h3>
            <p>They scan, pick a category, and pay. Funds settle directly to the matching account — Hilaros never holds the money.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="split">
          <div className="split-img">
            <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80" alt="Person giving via phone" />
          </div>
          <div className="split-copy">
            <h2>Built so nobody has to explain a shared account number again.</h2>
            <p>Your members already know how to scan a QR code. Hilaros just makes sure what happens after the scan is exactly what your church needs.</p>
            <ul className="checklist">
              <li><span className="tick">✓</span>Categories map to real bank accounts, not one shared pool</li>
              <li><span className="tick">✓</span>Add a new fund anytime without reprinting anything</li>
              <li><span className="tick">✓</span>Every gift arrives already tagged for your books</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="section-head">
          <span className="eyebrow">Why Hilaros</span>
          <h2>Simple for members. Accountable for the church.</h2>
        </div>
        <div className="why-grid">
          <div className="card">
            <div className="icon">◈</div>
            <h3>One code, not ten</h3>
            <p>Add or remove giving categories anytime from your dashboard — the printed code on the wall never has to be reprinted.</p>
          </div>
          <div className="card">
            <div className="icon">⇥</div>
            <h3>Direct-to-bank settlement</h3>
            <p>Every gift routes straight to the right account on Paystack's normal settlement schedule. No pooled account, no manual transfers.</p>
          </div>
          <div className="card">
            <div className="icon">▤</div>
            <h3>Every gift, categorized</h3>
            <p>Tithes, offerings, and special funds are tagged automatically, so your books are already sorted by the time you check the dashboard.</p>
          </div>
        </div>
        <div className="categories">
          <div className="cat-label">One QR code routes to as many giving categories as your church needs:</div>
          <div className="cat-pills">
            <span className="pill">Tithe</span>
            <span className="pill">Offering</span>
            <span className="pill">Building fund</span>
            <span className="pill">Missions</span>
            <span className="pill">Welfare</span>
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="section-head">
          <span className="eyebrow">Trusted by pastors</span>
          <h2>Built with churches, not just for them.</h2>
        </div>
        <div className="proof-grid">
          <div className="quote-card">
            <p>"Our members stopped asking where the account number is. They just scan and give."</p>
            <div className="who">
              <div className="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pastor" /></div>
              <div><b>Early adopter pastor</b><span>Lagos, Nigeria</span></div>
            </div>
          </div>
          <div className="quote-card">
            <p>"Reconciling tithes from offerings used to take hours after service. Now it's already sorted."</p>
            <div className="who">
              <div className="avatar"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Pastor" /></div>
              <div><b>Early adopter pastor</b><span>Lagos, Nigeria</span></div>
            </div>
          </div>
          <div className="quote-card">
            <p>"One code on the wall replaced four different account numbers we used to announce every week."</p>
            <div className="who">
              <div className="avatar"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" alt="Pastor" /></div>
              <div><b>Early adopter pastor</b><span>Lagos, Nigeria</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta">
          <h2>Give your church one code to stand behind.</h2>
          <p>Set up your giving categories and get your QR code ready before next Sunday.</p>
          <Link to="/signup" className="btn-primary">Register your church</Link>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>Hilaros — 2 Corinthians 9:7</div>
          <div>Built in Lagos, Nigeria</div>
        </div>
      </footer>
    </div>
  );
}