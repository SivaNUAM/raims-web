import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Reveal } from "./Motion";

const testimonials = [
  {
    quote:
      "The difference was in the questions they asked. They took the time to understand the role, the team, and what would make someone genuinely thrive.",
    name: "Hiring partner",
    role: "Executive search · Illustrative example",
    initials: "HP",
  },
  {
    quote:
      "The process felt human from the very first conversation. I always knew where I stood, and I found a role that feels like the right next chapter.",
    name: "Candidate",
    role: "Career move · Illustrative example",
    initials: "CA",
  },
  {
    quote:
      "They looked beyond the usual shortlist and brought us people we would never have found on our own. That changed the conversation for our team.",
    name: "People leader",
    role: "Talent partnership · Illustrative example",
    initials: "PL",
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-wrap testimonial-layout">
        <Reveal className="testimonial-intro">
          <div className="section-kicker"><span>05</span> PEOPLE, IN THEIR WORDS</div>
          <h2>Good work<br />feels <em>different.</em></h2>
          <p>Real partnerships are built on listening, trust, and a little bit of magic.</p>
          <div className="testimonial-controls">
            <button type="button" aria-label="Previous testimonial" onClick={showPrevious}>
              <ArrowLeft size={17} />
            </button>
            <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(testimonials.length).padStart(2, "0")}</span>
            <button type="button" aria-label="Next testimonial" onClick={showNext}>
              <ArrowRight size={17} />
            </button>
          </div>
        </Reveal>

        <Reveal className="testimonial-card-wrap" delay={0.12}>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <span className="quote-mark"><Quote size={21} /></span>
              <span className="testimonial-category">THE HUMAN SIDE OF A GOOD MATCH</span>
            </div>
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeIndex}
                className="testimonial-quote"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
              >
                <blockquote>“{active.quote}”</blockquote>
                <div className="testimonial-person">
                  <span className="testimonial-avatar">{active.initials}</span>
                  <span><strong>{active.name}</strong><small>{active.role}</small></span>
                </div>
              </Motion.div>
            </AnimatePresence>
            <span className="testimonial-demo-note">Illustrative sample copy — replace with client-approved testimonials before launch.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TestimonialsSection;
