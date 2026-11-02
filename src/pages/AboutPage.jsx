import AboutSection from "../components/home/AboutSection";
import ApproachSection from "../components/home/ApproachSection";
import PageLayout from "../components/layout/PageLayout";

function AboutPage() {
  return (
    <PageLayout
      eyebrow="ABOUT AMENTIS 7"
      title="People-first recruitment."
      emphasis="Worldwide."
      description="Amentis 7 Global is a free professional recruitment and career services company based in Kochi, Kerala, India, connecting jobseekers with employment opportunities in India and overseas for free. We share vacancies from verified and authorized recruitment sources and provide free recruitment consultation and career guidance."
    >
      <AboutSection />
      <ApproachSection />
    </PageLayout>
  );
}

export default AboutPage;
