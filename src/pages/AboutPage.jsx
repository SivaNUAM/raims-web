import AboutSection from "../components/home/AboutSection";
import ApproachSection from "../components/home/ApproachSection";
import PageLayout from "../components/layout/PageLayout";

function AboutPage() {
  return (
    <PageLayout
      eyebrow="ABOUT AMENTIS 7"
      title="People-first recruitment."
      emphasis="Worldwide."
      description="We connect ambitious businesses with people who can make a meaningful difference—across markets, industries, and borders."
    >
      <AboutSection />
      <ApproachSection />
    </PageLayout>
  );
}

export default AboutPage;
