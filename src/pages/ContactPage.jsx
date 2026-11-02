import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import TrustContactSection from "../components/home/TrustContactSection";
import PageLayout from "../components/layout/PageLayout";

const offices = [
  { city: "Kochi", address: "Ernakulam, Kochi, Kerala, India 682304" },
  { city: "Chennai", address: "Porur, Chennai, Tamil Nadu 600116, India" },
];

function ContactPage() {
  return (
    <PageLayout
      eyebrow="LET'S TALK"
      title="Good things start"
      emphasis="with a conversation."
      description="Tell us what you are looking for. Our team can help employers explore hiring needs and candidates understand available opportunities."
      showContact={false}
    >
      <section className="contact-details-section section-wrap" id="contact">
        <div className="contact-details-intro">
          <span className="section-kicker"><span>01</span> GET IN TOUCH</span>
          <h2>Let&apos;s find the <em>right way forward.</em></h2>
          <p>Reach us directly by email or visit one of our offices in India.</p>
          <a className="contact-details-email" href="mailto:admin@amentis7global.com">
            <Mail size={18} />
            admin@amentis7global.com
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="contact-details-offices">
          {offices.map(({ city, address }) => (
            <article className="luxury-office-card" key={city}>
              <div className="luxury-office-card-heading">
                <span className="luxury-office-pin"><MapPin size={15} /></span>
                <span className="luxury-office-label">AMENTIS 7 GLOBAL</span>
              </div>
              <h3>{city}</h3>
              <address>{address}</address>
            </article>
          ))}
          <a
            className="contact-details-instagram"
            href="https://www.instagram.com/amentis7global/"
            target="_blank"
            rel="noreferrer"
          >
            Follow @amentis7global on Instagram <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
      <TrustContactSection />
    </PageLayout>
  );
}

export default ContactPage;
