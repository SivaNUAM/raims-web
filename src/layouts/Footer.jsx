import { ArrowRight, ArrowUpRight, Globe2, MapPin, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
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
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Global opportunities", href: "/opportunities" },
  { label: "Recruitment transparency", href: "/opportunities#recruitment-notice" },
  { label: "Candidate support", href: "/contact" },
];

const practiceLinks = [
  { label: "Industries we serve", href: "/sectors" },
  { label: "Recruitment services", href: "/services" },
];

function Footer() {
  return (
    <footer className="site-footer luxury-footer">
      <div className="luxury-footer-main">
        <div className="luxury-footer-brand">
          <Link className="luxury-wordmark luxury-footer-wordmark" to="/">
            <img src={Logo} alt="Amentis 7 Global Recruitment" loading="lazy" />
            <span className="luxury-wordmark-copy">
              <span className="luxury-wordmark-name">Amentis <em>7</em></span>
              <span className="luxury-wordmark-descriptor">GLOBAL RECRUITMENT</span>
            </span>
          </Link>
          <p>
            Connecting Talent. Creating Futures. Thoughtful international
            recruitment across global industries.
          </p>
          <Link className="luxury-footer-contact" to="/contact">
            Start a conversation <MoveUpRight size={15} />
          </Link>
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
            <Link to={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <nav className="luxury-footer-column" aria-label="Recruitment practice links">
          <h2>INDUSTRIES</h2>
          {practiceLinks.map((link) => (
            <Link to={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="luxury-footer-note">
          <span className="luxury-footer-note-icon"><Globe2 size={19} /></span>
          <span className="luxury-footer-note-label">PEOPLE WITHOUT BORDERS</span>
          <p>Global perspective.<br /><strong>Human connection.</strong></p>
          <Link to="/sectors" aria-label="Explore our recruitment sectors">
            Explore our industries <ArrowUpRight size={14} />
          </Link>
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
        <span className="luxury-footer-location"><span /> GLOBAL INDUSTRY RECRUITMENT</span>
        <Link to="/">Back to top <ArrowRight size={13} /></Link>
      </div>
    </footer>
  );
}

export default Footer;
