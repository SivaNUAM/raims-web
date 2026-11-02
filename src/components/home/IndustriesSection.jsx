import { createElement } from "react";
import { Globe2, MoveUpRight } from "lucide-react";
import { Reveal } from "./Motion";

const practice = {
  id: "industry-recruitment",
  title: "Recruitment across industries",
  subtitle: "The people moving every other industry forward.",
  image:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "A modern international business team collaborating in an office",
  icon: Globe2,
  areas: ["Technology & digital", "Finance & professional", "Engineering & energy", "Consumer & supply chain"],
};

function IndustriesSection() {
  return (
    <section className="sectors-section" id="sectors">
      <div className="section-wrap">
        <Reveal className="sectors-heading">
          <div>
            <div className="section-kicker"><span>03</span> ONE GLOBAL PARTNER. MANY INDUSTRIES.</div>
            <h2>People for <em>what&apos;s next.</em></h2>
          </div>
          <p>Specialist international recruitment across technology, finance, engineering, consumer, and supply chain industries.</p>
        </Reveal>
        <div className="practice-grid">
          <Reveal as="article" id={practice.id} className={`practice-card practice-card-${practice.id}`}>
            <div className="practice-visual">
              <img src={practice.image} alt={practice.imageAlt} loading="lazy" />
              <div className="practice-overlay" />
              <div className="practice-card-top">
                <span>01 / OUR FOCUS</span>
                <span className="practice-card-icon">{createElement(practice.icon, { size: 19, strokeWidth: 1.6 })}</span>
              </div>
            </div>
            <div className="practice-card-content">
              <div className="practice-card-main">
                <h3>{practice.title}</h3>
                <p>{practice.subtitle}</p>
                <ul>
                  {practice.areas.map((area) => <li key={area}>{area}</li>)}
                </ul>
                <a className="practice-link" href="#contact">
                  Talk to our team <MoveUpRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
