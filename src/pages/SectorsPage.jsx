import IndustriesSection from "../components/home/IndustriesSection";
import ServicesSection from "../components/home/ServicesSection";
import PageLayout from "../components/layout/PageLayout";

function SectorsPage() {
  return (
    <PageLayout
      eyebrow="INDUSTRIES WE SERVE"
      title="One partner."
      emphasis="Many industries."
      description="Explore our cross-industry focus spanning technology, finance, engineering, consumer, and supply chain."
    >
      <IndustriesSection />
      <ServicesSection />
    </PageLayout>
  );
}

export default SectorsPage;
