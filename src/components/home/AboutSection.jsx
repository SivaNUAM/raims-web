import { createElement } from "react";
import { ArrowUpRight, Compass, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Reveal, Stagger } from "./Motion";
import { revealItem } from "./motionVariants";

const values = [
  {
    icon: HeartHandshake,
    title: "People over profiles",
    text: "A CV starts the conversation. Understanding the person is what makes it count.",
  },
  {
    icon: Globe2,
    title: "Local insight, everywhere",
    text: "On-the-ground knowledge and a connected view of the talent landscape.",
  },
  {
    icon: Compass,
    title: "In it for the long run",
    text: "Thoughtful introductions made for the next chapter, not just the next quarter.",
  },
];

function AboutSection() {
  return (
    <section className="intro-section section-wrap" id="about">
      <Reveal>
        <div className="section-kicker"><span>01</span> GLOBAL RECRUITMENT. TWO DISTINCT PRACTICES.</div>
        <div className="intro-grid">
          <h2>Better people.<br />Stronger teams.<br /><em>Everywhere.</em></h2>
          <div className="intro-copy">
            <p className="intro-lead">
              From frontline care to the boardroom, the right people make a real difference.
            </p>
            <p>
              We connect employers with exceptional healthcare and
              non-healthcare talent around the world. One people-first
              approach, shaped to the skills, standards, and realities of
              each industry and each market.
            </p>
            <a className="underlined-link" href="#approach">
              A little more about us <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>

      <Stagger className="values-grid">
        {values.map(({ icon: Icon, title, text }) => (
          <Motion.article className="value-card" variants={revealItem} key={title}>
            <span className="value-icon">{createElement(Icon, { size: 18, strokeWidth: 1.6 })}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Motion.article>
        ))}
      </Stagger>
      <div className="stat-note about-note">
        <Sparkles size={17} />
        <span>Healthcare expertise.<br /><strong>Cross-industry reach.</strong></span>
      </div>
    </section>
  );
}

export default AboutSection;
