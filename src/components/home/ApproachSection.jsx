import { ArrowUpRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Reveal, Stagger } from "./Motion";
import { revealItem } from "./motionVariants";

const steps = [
  {
    number: "01",
    title: "We learn your world.",
    description: "Your sector, your market, your team, and what the right hire needs to achieve.",
  },
  {
    number: "02",
    title: "We search globally.",
    description: "We look beyond familiar networks to connect you with relevant talent across borders.",
  },
  {
    number: "03",
    title: "We make it count.",
    description: "Clear communication and considered introductions for candidates and employers alike.",
  },
];

function ApproachSection() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-wrap">
        <Reveal>
          <div className="section-kicker"><span>04</span> A PEOPLE-FIRST GLOBAL APPROACH</div>
          <div className="approach-heading">
            <h2>Less process.<br /><em>More progress.</em></h2>
            <p>Good recruitment shouldn&apos;t feel like recruitment. Just the right conversation, with the right people.</p>
          </div>
        </Reveal>
        <Stagger className="steps-grid">
          {steps.map((step) => (
            <Motion.article className="step-card" key={step.number} variants={revealItem}>
              <span className="step-number">{step.number}</span>
              <div className="step-rule" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Motion.article>
          ))}
        </Stagger>
        <Reveal className="approach-link">
          <a className="underlined-link" href="#contact">A better way to hire starts here <ArrowUpRight size={14} /></a>
        </Reveal>
      </div>
    </section>
  );
}

export default ApproachSection;
