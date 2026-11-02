import { createElement } from "react";
import { Globe2, HeartPulse, MoveUpRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Reveal } from "./Motion";

const practices = [
  {
    id: "healthcare",
    number: "01",
    title: "Healthcare",
    subtitle: "People who make a difference in care.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Healthcare professionals working together in a clinical setting",
    icon: HeartPulse,
    areas: ["Clinical & nursing", "Allied health", "Life sciences & medtech", "Healthcare leadership"],
  },
  {
    id: "non-healthcare",
    number: "02",
    title: "Non-healthcare",
    subtitle: "The people moving every other industry forward.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A modern international business team collaborating in an office",
    icon: Globe2,
    areas: ["Technology & digital", "Finance & professional", "Engineering & energy", "Consumer & supply chain"],
  },
];

function IndustriesSection() {
  return (
    <section className="sectors-section" id="sectors">
      <div className="section-wrap">
        <Reveal className="sectors-heading">
          <div>
            <div className="section-kicker"><span>03</span> ONE GLOBAL PARTNER. TWO AREAS OF FOCUS.</div>
            <h2>Healthcare <em>& beyond.</em></h2>
          </div>
          <p>Specialist recruitment for healthcare—and the people powering every other kind of business.</p>
        </Reveal>
        <div className="practice-grid">
          {practices.map(({ id, number, title, subtitle, image, imageAlt, icon, areas }, index) => (
            <Reveal as="article" id={id} className={`practice-card practice-card-${id}`} key={id} delay={index * 0.12}>
              <img src={image} alt={imageAlt} loading="lazy" />
              <div className="practice-overlay" />
              <div className="practice-card-content">
                <div className="practice-card-top">
                  <span>{number} / OUR PRACTICES</span>
                  <span className="practice-card-icon">{createElement(icon, { size: 19, strokeWidth: 1.6 })}</span>
                </div>
                <div className="practice-card-main">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                  <ul>
                    {areas.map((area) => <li key={area}>{area}</li>)}
                  </ul>
                  <a className="practice-link" href="#contact">
                    Talk to our team <MoveUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
