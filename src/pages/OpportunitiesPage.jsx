import WorkPermitSection from "../components/home/WorkPermitSection";
import TrustContactSection from "../components/home/TrustContactSection";
import PageLayout from "../components/layout/PageLayout";

function OpportunitiesPage() {
  return (
    <PageLayout
      eyebrow="GLOBAL OPPORTUNITIES"
      title="Your next move"
      emphasis="starts here."
      description="Explore destination guides and example role areas, then contact our team to discuss current vacancies and the right next steps."
    >
      <WorkPermitSection />
      <TrustContactSection />
    </PageLayout>
  );
}

export default OpportunitiesPage;
