import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import ContactSection from "../home/ContactSection";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function PageLayout({ eyebrow, title, emphasis, description, children, showContact = true }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="interior-page">
        <section className="interior-page-hero">
          <div className="section-wrap">
            <div className="section-kicker"><span>A7</span> {eyebrow}</div>
            <div className="interior-page-hero-content">
              <div>
                <h1>{title} <em>{emphasis}</em></h1>
                <p>{description}</p>
              </div>
              <a className="interior-page-scroll" href="#page-content" aria-label="Scroll to page content">
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="interior-page-hero-rule" aria-hidden="true" />
        </section>
        <div id="page-content">{children}</div>
        {showContact && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
