import { MotionConfig } from "framer-motion";
import AboutSection from "../components/home/AboutSection";
import ApproachSection from "../components/home/ApproachSection";
import CandidateSection from "../components/home/CandidateSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import IndustriesSection from "../components/home/IndustriesSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TrustContactSection from "../components/home/TrustContactSection";
import WorkPermitSection from "../components/home/WorkPermitSection";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Marquee() {
  return (
    <div className="marquee-band" aria-label="Connecting people and possibility around the world">
      <div className="marquee-track">
        {Array.from({ length: 2 }, (_, row) => (
          <span className="marquee-group" key={row} aria-hidden={row === 1}>
            GLOBAL HEALTHCARE TALENT <span>✳</span> PEOPLE FOR EVERY INDUSTRY <span>✳</span> BETTER TEAMS, EVERYWHERE <span>✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <Header />
        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <ApproachSection />
          <CandidateSection />
          <TestimonialsSection />
          <WorkPermitSection />
          <TrustContactSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default Home;
