import { ArrowUpRight, Heart } from "lucide-react";
import { Reveal } from "./Motion";

function CandidateSection() {
  return (
    <Reveal as="section" className="candidate-section section-wrap" id="candidates">
      <span className="candidate-icon"><Heart size={20} strokeWidth={1.6} /></span>
      <div className="candidate-copy">
        <span className="candidate-kicker">FOR CANDIDATES ACROSS HEALTHCARE & EVERY INDUSTRY</span>
        <h2>Your next move should <em>feel like yours.</em></h2>
        <p>Thoughtful conversations, honest advice, and opportunities that fit who you are—not just what&apos;s on your CV.</p>
      </div>
      <a className="candidate-link" href="#contact">
        Let&apos;s talk about you <ArrowUpRight size={17} />
      </a>
    </Reveal>
  );
}

export default CandidateSection;
