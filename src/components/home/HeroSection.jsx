import { ArrowDown, ArrowUpRight, Globe2 } from "lucide-react";
import { Reveal } from "./Motion";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <Reveal className="hero-copy">
        <div className="eyebrow"><span /> GLOBAL RECRUITMENT. HUMAN APPROACH.</div>
        <h1>Global talent.<br />Real-world<br /><span>impact.</span></h1>
        <p className="hero-description">
          One recruitment partner across industries.
          We connect the right people with the places they can make a difference.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Find your people <ArrowUpRight size={16} />
          </a>
          <a className="text-link" href="#sectors">
            Explore our industries <ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-proof">
          <div className="hero-sector-badges">
            <span><Globe2 size={13} /> GLOBAL INDUSTRIES</span>
          </div>
          <p><strong>One global partner.</strong><br />Talent for every kind of business.</p>
        </div>
      </Reveal>

      <Reveal className="hero-visual" delay={0.15}>
        <div className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88"
            alt="A team of colleagues sharing ideas around a table"
          />
          <div className="photo-caption">
            <span>BETTER TEAMS. BETTER TOMORROWS.</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
        <div className="orbit-note">
          <Globe2 size={19} strokeWidth={1.5} />
          <span>Rooted locally.<br /><strong>Connected globally.</strong></span>
        </div>
        <div className="hero-side-note">INDUSTRY<br />AND BEYOND <span>↗</span></div>
        <div className="hero-index">PEOPLE · EVERYWHERE</div>
      </Reveal>
    </section>
  );
}

export default HeroSection;
