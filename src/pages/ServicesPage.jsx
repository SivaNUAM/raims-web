import ApproachSection from "../components/home/ApproachSection";
import ServicesSection from "../components/home/ServicesSection";
import PageLayout from "../components/layout/PageLayout";

function ServicesPage() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Recruitment built around"
      emphasis="your business."
      description="Flexible, people-first hiring support—from specialist recruitment to executive search and contract or permanent appointments."
    >
      <ServicesSection />
      <ApproachSection />
    </PageLayout>
  );
}

export default ServicesPage;
