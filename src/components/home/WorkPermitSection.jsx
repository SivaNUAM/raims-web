import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  FileText,
  Search,
  Wallet,
} from "lucide-react";
import { getOpportunitySlug, opportunities } from "../../data/opportunities";

const filters = ["All destinations", "Europe", "Further afield"];

function OpportunityCard({ opportunity, isExpanded, onToggle }) {
  const detailsId = `opportunity-${opportunity.flag.toLowerCase()}-details`;

  return (
    <article className={`opportunity-card${isExpanded ? " is-expanded" : ""}`}>
      <div className="opportunity-card-heading">
        <span className="opportunity-country-mark" aria-hidden="true">{opportunity.flag}</span>
        <span className="opportunity-route">{opportunity.route}</span>
      </div>
      <h3>{opportunity.country}</h3>
      <div className="opportunity-metrics">
        <div>
          <Wallet size={15} aria-hidden="true" />
          <span><small>GUIDE INDICATIVE PAY</small><strong>{opportunity.pay}</strong></span>
        </div>
        <div>
          <Clock3 size={15} aria-hidden="true" />
          <span><small>GUIDE TIMELINE</small><strong>{opportunity.timeline}</strong></span>
        </div>
      </div>
      <div className="opportunity-roles">
        <span>EXAMPLE ROLE AREAS</span>
        <p>{opportunity.roles.join(" · ")}</p>
      </div>
      <button
        className="opportunity-details-toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={onToggle}
      >
        {isExpanded ? "Hide details" : "Eligibility & documents"}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      <div className="opportunity-details" id={detailsId} hidden={!isExpanded}>
        <p>
          <strong>Eligibility:</strong> Depends on the specific vacancy,
          employer, qualifications, experience, and current destination rules.
        </p>
        <p>
          <strong>Documents:</strong> A valid passport, current CV, and
          relevant work or education records are a starting point.
          Additional documents vary by role and destination.
        </p>
        <p>
          <strong>Before accepting:</strong> Confirm the written job offer,
          employer, pay, deductions, benefits, and permit requirements.
        </p>
      </div>
      <Link className="opportunity-contact" to={`/opportunities/${getOpportunitySlug(opportunity.country)}`}>
        Enquire about {opportunity.country} <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}

function WorkPermitSection() {
  const [activeFilter, setActiveFilter] = useState("All destinations");
  const [searchValue, setSearchValue] = useState("");
  const [expandedCountry, setExpandedCountry] = useState(null);

  const visibleOpportunities = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const matchesFilter =
        activeFilter === "All destinations" || opportunity.region === activeFilter;
      const searchableContent = [
        opportunity.country,
        opportunity.route,
        ...opportunity.roles,
      ].join(" ").toLowerCase();

      return matchesFilter && (!query || searchableContent.includes(query));
    });
  }, [activeFilter, searchValue]);

  return (
    <section className="opportunities-section" id="opportunities">
      <div className="section-wrap">
        <div className="opportunities-heading">
          <div className="section-kicker"><span>06</span> INTERNATIONAL CAREER OPPORTUNITIES</div>
          <div className="opportunities-title-row">
            <div>
              <h2>Work can take you <em>places.</em></h2>
              <p>
                Explore example roles and destinations from our international
                opportunity guide. Contact our team to check current vacancies
                and discuss your next steps.
              </p>
            </div>
            <span className="opportunities-total">
              <strong>{opportunities.length}</strong>
              <span>DESTINATIONS<br />IN OUR GUIDE</span>
            </span>
          </div>
        </div>

        <div className="opportunities-toolbar">
          <div className="opportunity-filters" aria-label="Filter opportunities by region">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "is-active" : ""}
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="opportunity-search">
            <Search size={16} aria-hidden="true" />
            <span className="visually-hidden">Search countries and roles</span>
            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search countries or roles"
            />
          </label>
        </div>

        <p className="opportunity-result-count" role="status" aria-live="polite">
          Showing {visibleOpportunities.length} {visibleOpportunities.length === 1 ? "destination" : "destinations"}
        </p>

        {visibleOpportunities.length > 0 ? (
          <div className="opportunity-grid">
            {visibleOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.country}
                opportunity={opportunity}
                isExpanded={expandedCountry === opportunity.country}
                onToggle={() => setExpandedCountry((country) =>
                  country === opportunity.country ? null : opportunity.country
                )}
              />
            ))}
          </div>
        ) : (
          <div className="opportunity-empty-state">
            <BriefcaseBusiness size={22} />
            <p>No destinations match that search. Try another country or role.</p>
          </div>
        )}

        <div className="opportunity-disclaimer">
          <span><FileText size={17} aria-hidden="true" /></span>
          <p>
            <strong>Kindly note:</strong> Amentis 7 Global will not collect any
            payment. Recruitment is carried out through an MEA, Government of
            India licensed overseas recruitment agency. Actual employment,
            salary, eligibility, visa and work-permit conditions are subject
            to employer requirements and applicable laws. Pay ranges and
            timelines shown are indicative only, are not guaranteed, and must
            be confirmed for each vacancy. A work permit or visa is never
            guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkPermitSection;
