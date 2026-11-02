import { ArrowRight, ArrowUpRight, Globe2, MapPin, MoveUpRight } from "lucide-react";
import Logo from "../assets/Logo.png";

const offices = [
  {
    city: "Kochi",
    label: "KERALA · HEAD OFFICE",
    address: "Ernakulam, Kochi, Kerala, India 682304",
  },
  {
    city: "Chennai",
    label: "TAMIL NADU",
    address: "Porur, Chennai, Tamil Nadu 600116, India",
  },
  {
    city: "Jaipur",
    label: "RAJASTHAN",
    address:
      "Narayan Singh Circle Foot Over Bridge, Rambagh, Jaipur, Rajasthan 302004, India",
  },
];

const companyLinks = [
  { label: "About us", href: "#about" },
  { label: "Our approach", href: "#approach" },
  { label: "Global opportunities", href: "#opportunities" },
  { label: "Recruitment transparency", href: "#recruitment-notice" },
  { label: "Candidate support", href: "#candidates" },
];

const practiceLinks = [
  { label: "Healthcare recruitment", href: "#healthcare" },
  { label: "Non-healthcare recruitment", href: "#non-healthcare" },
  { label: "Recruitment services", href: "#services" },
];

function Footer() {
  return (
    <footer className="site-footer luxury-footer">
      <div className="luxury-footer-main">
        <div className="luxury-footer-brand">
          <a className="luxury-wordmark luxury-footer-wordmark" href="#home">
            <img src={Logo} alt="Amentis 7 Global Recruitment" loading="lazy" />
            <span className="luxury-wordmark-copy">
              <span className="luxury-wordmark-name">Amentis <em>7</em></span>
              <span className="luxury-wordmark-descriptor">GLOBAL RECRUITMENT</span>
            </span>
          </a>
          <p>
            Connecting Talent. Creating Futures. Thoughtful international
            recruitment across healthcare and every industry beyond it.
          </p>
          <a className="luxury-footer-contact" href="#contact">
            Start a conversation <MoveUpRight size={15} />
          </a>
          <a className="luxury-footer-email" href="mailto:admin@amentis7global.com">
            admin@amentis7global.com
          </a>
          <a
            className="luxury-footer-instagram"
            href="https://www.instagram.com/amentis7global/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @amentis7global <ArrowUpRight size={13} />
          </a>
        </div>

        <nav className="luxury-footer-column" aria-label="Company links">
          <h2>DISCOVER</h2>
          {companyLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <nav className="luxury-footer-column" aria-label="Recruitment practice links">
          <h2>OUR PRACTICES</h2>
          {practiceLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="luxury-footer-note">
          <span className="luxury-footer-note-icon"><Globe2 size={19} /></span>
          <span className="luxury-footer-note-label">PEOPLE WITHOUT BORDERS</span>
          <p>Global perspective.<br /><strong>Human connection.</strong></p>
          <a href="#sectors" aria-label="Explore our recruitment sectors">
            Explore our sectors <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <section className="luxury-offices" aria-labelledby="office-locations-title">
        <div className="luxury-offices-heading">
          <span className="luxury-offices-kicker">OUR LOCATIONS</span>
          <h2 id="office-locations-title">India, <em>in good company.</em></h2>
        </div>
        <div className="luxury-office-grid">
          {offices.map((office) => (
            <article className="luxury-office-card" key={office.city}>
              <div className="luxury-office-card-heading">
                <span className="luxury-office-pin"><MapPin size={15} /></span>
                <span className="luxury-office-label">{office.label}</span>
              </div>
              <h3>{office.city}</h3>
              <address>{office.address}</address>
            </article>
          ))}
        </div>
      </section>

      <div className="luxury-footer-bottom">
        <span>© {new Date().getFullYear()} Amentis 7 Global Recruitment</span>
        <span className="luxury-footer-location"><span /> HEALTHCARE · NON-HEALTHCARE · GLOBAL</span>
        <a href="#home">Back to top <ArrowRight size={13} /></a>
      </div>
    </footer>
  );
}

export default Footer;
