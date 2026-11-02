import { ArrowUpRight, Globe2 } from "lucide-react";
import { Reveal } from "./Motion";

function ContactSection() {
  return (
    <Reveal as="section" className="contact-section section-wrap" id="contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="contact-content">
        <div className="section-kicker"><span>YOUR NEXT CHAPTER</span></div>
        <h2>Let&apos;s find<br /><em>your people.</em></h2>
        <p>Whether you&apos;re growing your team or building your business, let&apos;s find the right people—wherever they are.</p>
        <a className="button button-lime" href="mailto:admin@amentis7global.com">
          admin@amentis7global.com <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="contact-aside">
        <span>GOOD THINGS<br />START WITH<br /><em>HELLO.</em></span>
        <div className="contact-aside-mark">A7</div>
      </div>
      <span className="contact-location"><Globe2 size={15} /> EVERYWHERE, REALLY.</span>
    </Reveal>
  );
}

export default ContactSection;
