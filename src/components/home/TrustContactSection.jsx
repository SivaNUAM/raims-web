import { createElement } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Mail,
  MapPin,
  Megaphone,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Reveal } from "./Motion";

const commitments = [
  {
    icon: ShieldCheck,
    title: "No payment collected by Amentis 7",
    description: "Amentis 7 Global will not collect any payment.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed recruitment channel",
    description:
      "Recruitment is carried out through an MEA, Government of India licensed overseas recruitment agency.",
  },
  {
    icon: MapPin,
    title: "Clear, role-specific terms",
    description:
      "Actual employment, salary, eligibility, visa and work-permit conditions are subject to employer requirements and applicable laws.",
  },
];

function TrustContactSection() {
  return (
    <section className="trust-contact-section" id="recruitment-notice">
      <div className="section-wrap">
        <Reveal className="trust-contact-heading">
          <div className="section-kicker"><span>YOUR JOURNEY, WITH CLARITY</span></div>
          <h2>Connecting talent.<br /><em>Creating futures.</em></h2>
          <p>
            Straightforward guidance and clear communication at every step
            of your international career journey.
          </p>
        </Reveal>

        <div className="trust-contact-grid">
          {commitments.map(({ icon, title, description }, index) => (
            <Reveal
              as="article"
              className="trust-commitment"
              key={title}
              delay={index * 0.1}
            >
              <span className="trust-commitment-icon">{createElement(icon, { size: 20 })}</span>
              <span className="trust-commitment-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="aside" className="payment-policy-notice" delay={0.12}>
          <div className="payment-policy-icon"><Megaphone size={19} /></div>
          <div className="payment-policy-content">
            <span className="payment-policy-kicker">A SMALL BUT IMPORTANT UPDATE</span>
            <h3>100% Payment After Visa</h3>
            <p className="payment-policy-lead">
              All our current programmes follow a 100% Payment After Visa
              policy. If a visa is rejected, the candidate does not lose any
              money.
            </p>
            <div className="payment-policy-divider" />
            <p>
              We bear the financial risk of these programmes. Therefore,
              candidate selection and onboarding are entirely at our
              discretion.
            </p>
            <p className="payment-policy-follow-up">
              We will personally contact candidates who meet our selection
              criteria. Thank you for your understanding and cooperation!
            </p>
            <span className="payment-policy-signoff">
              <WalletCards size={16} />
              Amentis 7 Global Recruitment
            </span>
          </div>
        </Reveal>

        <Reveal className="trust-contact-details" delay={0.15}>
          <div className="trust-contact-brand">
            <span className="trust-contact-kicker">AMENTIS 7 GLOBAL RECRUITMENT</span>
            <p>Connecting Talent. Creating Futures.</p>
          </div>
          <a className="trust-contact-link" href="mailto:admin@amentis7global.com">
            <span className="trust-contact-link-icon"><Mail size={17} /></span>
            <span><small>EMAIL OUR TEAM</small><strong>admin@amentis7global.com</strong></span>
            <ArrowUpRight size={16} />
          </a>
          <a
            className="trust-contact-link"
            href="https://www.instagram.com/amentis7global/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="trust-contact-link-icon trust-instagram-icon">IG</span>
            <span><small>FOLLOW ON INSTAGRAM</small><strong>@amentis7global</strong></span>
            <ArrowUpRight size={16} />
          </a>
          <div className="trust-contact-address">
            <span className="trust-contact-link-icon"><MapPin size={17} /></span>
            <span><small>KOCHI OFFICE</small><strong>Ernakulam, Kochi, Kerala, India 682304</strong></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TrustContactSection;
