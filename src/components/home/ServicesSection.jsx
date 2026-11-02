import { createElement } from "react";
import { ArrowUpRight, BriefcaseBusiness, Compass, Search, UsersRound } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Reveal, Stagger } from "./Motion";
import { revealItem } from "./motionVariants";

const services = [
  {
    number: "01",
    title: "Industry recruitment",
    description: "Specialist hiring across technology, finance, engineering, and more.",
    icon: UsersRound,
    tag: "GLOBAL INDUSTRIES",
  },
  {
    number: "02",
    title: "Executive search",
    description: "The leaders who see what’s next—and have the experience to get you there.",
    icon: BriefcaseBusiness,
    tag: "LEADERSHIP",
  },
  {
    number: "03",
    title: "Contract & permanent hiring",
    description: "Flexible talent solutions for immediate needs and long-term growth.",
    icon: Compass,
    tag: "GLOBAL TALENT",
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-wrap">
        <Reveal className="services-heading">
          <div>
            <div className="section-kicker"><span>02</span> GLOBAL RECRUITMENT, BUILT AROUND YOU</div>
            <h2>One partner.<br /><em>More possibilities.</em></h2>
          </div>
          <p>
            Every business is different. That&apos;s why our work always
            starts with understanding your world—and finding the people who can move it forward.
          </p>
        </Reveal>
        <Stagger className="service-grid">
          {services.map(({ number, title, description, icon, tag }) => (
            <Motion.a className="service-card" href="#contact" key={number} variants={revealItem}>
              <div className="service-top">
                <span>{number} <span className="service-tag">{tag}</span></span>
                <span className="service-icon">{createElement(icon, { size: 17, strokeWidth: 1.6 })}</span>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="service-arrow"><ArrowUpRight size={19} /></span>
            </Motion.a>
          ))}
        </Stagger>
        <Reveal className="services-footnote">
          <span>Not sure where to start?</span>
          <a className="underlined-link" href="#contact">Let&apos;s figure it out together <ArrowUpRight size={14} /></a>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesSection;
