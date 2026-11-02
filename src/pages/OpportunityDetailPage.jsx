import { createElement } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Clock3,
  FileText,
  Languages,
  MapPin,
  Truck,
  UsersRound,
  Wallet,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import {
  commonDocuments,
  commonNonMandatory,
  commonVideoGuidance,
  getOpportunitySlug,
  opportunities,
} from "../data/opportunities";

const detailIcons = {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Clock3,
  FileText,
  Languages,
  MapPin,
  Truck,
  UsersRound,
  Wallet,
};

const applicationSteps = [
  {
    number: "01",
    title: "Share your interest",
    description: "Tell our team which destination and example role areas match your experience.",
  },
  {
    number: "02",
    title: "Initial review",
    description: "Candidate selection and onboarding are at our discretion and depend on the specific programme and employer criteria.",
  },
  {
    number: "03",
    title: "Review the written offer",
    description: "Before proceeding, check the employer, duties, salary, deductions, hours, benefits, and contract terms in writing.",
  },
  {
    number: "04",
    title: "Follow verified steps",
    description: "Recruitment is carried out through an MEA, Government of India licensed overseas recruitment agency. Visa and permit decisions remain with the relevant authorities.",
  },
];

function DetailList({ title, icon: Icon, items }) {
  return (
    <section className="destination-detail-card">
      <div className="destination-detail-card-heading">
        <span>{createElement(Icon, { size: 18 })}</span>
        <h2>{title}</h2>
      </div>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

function OpportunityDetailPage() {
  const { countrySlug } = useParams();
  const opportunity = opportunities.find(
    ({ country }) => getOpportunitySlug(country) === countrySlug
  );

  if (!opportunity) {
    return (
      <PageLayout
        eyebrow="GLOBAL OPPORTUNITIES"
        title="Destination not"
        emphasis="found."
        description="We could not find that destination guide. Browse the available destinations to explore current example role areas."
      >
        <section className="section-wrap destination-not-found">
          <Link className="destination-primary-link" to="/opportunities">
            <ArrowLeft size={16} /> View all destinations
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      eyebrow={`${opportunity.flag} · ${opportunity.route}`}
      title={opportunity.country}
      emphasis="Opportunity guide."
      description={`Explore example ${opportunity.country} role areas, guide-indicated pay and timelines, and what to confirm before taking the next step.`}
    >
      <section className="destination-detail-section section-wrap">
        <nav className="destination-breadcrumb" aria-label="Breadcrumb">
          <Link to="/opportunities"><ArrowLeft size={14} /> All opportunities</Link>
          <span aria-hidden="true">/</span>
          <span>{opportunity.country}</span>
        </nav>

        <div className="destination-detail-overview">
          <article className="destination-detail-stat">
            <span><BriefcaseBusiness size={17} /></span>
            <small>EXAMPLE ROLE AREAS</small>
            <strong>{opportunity.roles.length} role types</strong>
          </article>
          <article className="destination-detail-stat">
            <span><Wallet size={17} /></span>
            <small>GUIDE-INDICATED PAY</small>
            <strong>{opportunity.pay}</strong>
          </article>
          <article className="destination-detail-stat">
            <span><Clock3 size={17} /></span>
            <small>GUIDE-INDICATED TIMELINE</small>
            <strong>{opportunity.timeline}</strong>
          </article>
        </div>

        <div className="destination-detail-grid">
          <div className="destination-detail-main">
            <section className="destination-detail-card destination-roles-card">
              <div className="destination-detail-card-heading">
                <span><BriefcaseBusiness size={18} /></span>
                <h2>Available positions</h2>
              </div>
              <p className="destination-detail-intro">
                The guide lists these example role areas for {opportunity.country}.
                Availability depends on current employer vacancies.
              </p>
              <div className="destination-role-list">
                {opportunity.roles.map((role, index) => (
                  <div className="destination-role-item" key={role}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{role}</strong>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </section>

            {opportunity.sections.map(({ title, icon, items }) => (
              <DetailList
                key={title}
                title={title}
                icon={detailIcons[icon]}
                items={items}
              />
            ))}

            <DetailList
              title="Documents to prepare"
              icon={FileText}
              items={commonDocuments}
            />

            <DetailList
              title="Commonly not mandatory"
              icon={BadgeCheck}
              items={commonNonMandatory}
            />

            <DetailList
              title="Video requirements, where applicable"
              icon={Truck}
              items={commonVideoGuidance}
            />
          </div>

          <aside className="destination-detail-aside">
            <div className="destination-application-card">
              <span className="destination-aside-kicker">YOUR NEXT STEP</span>
              <h2>Let&apos;s discuss {opportunity.country}.</h2>
              <p>
                Share your background and the roles you are interested in.
                Our team can explain the current screening steps.
              </p>
              <Link className="destination-primary-link" to="/contact">
                Talk to our team <ArrowUpRight size={16} />
              </Link>
              <Link className="destination-secondary-link" to="/opportunities">
                Browse all destinations
              </Link>
            </div>
            <div className="destination-policy-card">
              <span><BadgeCheck size={18} /></span>
              <h3>Clear, careful guidance</h3>
              <p>
                Amentis 7 Global will not charge candidates recruitment, consultation,
                or career-guidance service fees before or after a visa. Any
                official third-party costs, if applicable, will be explained
                separately in writing before you proceed.
              </p>
            </div>
          </aside>
        </div>

        <section className="destination-process">
          <div className="section-kicker"><span>01</span> WHAT TO EXPECT</div>
          <h2>A considered process.<br /><em>One step at a time.</em></h2>
          <div className="destination-process-grid">
            {applicationSteps.map((step) => (
              <article className="destination-process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="destination-disclaimer">
          <FileText size={18} />
          <p>
            <strong>Important:</strong> Role availability, pay, eligibility,
            benefits, processing times, and permit routes vary by employer and
            applicable law. Figures and timelines from the guide are indicative,
            are not guaranteed, and must be confirmed for a specific written offer.
            A work permit or visa is never guaranteed.
          </p>
        </aside>
      </section>
    </PageLayout>
  );
}

export default OpportunityDetailPage;
