import { Link } from 'react-router-dom';
import { IconArrowRight } from '../components/Icons';
import PageHero from '../components/PageHero';
import Equipment from '../components/Equipment';
import RevenueOpportunities from '../components/RevenueOpportunities';
import RevenueDisclaimer from '../components/RevenueDisclaimer';
import FreightSourcing from '../components/FreightSourcing';
import { PAGE_HERO_IMAGES } from '../images';

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Freight matched to your equipment"
        lead="Dry vans, reefers, box trucks, hotshots, power only, and open-deck — we present opportunities that fit your specifications and preferred lanes."
        image={PAGE_HERO_IMAGES.equipment}
        imagePosition="center 85%"
      />

      <Equipment full />
      <RevenueOpportunities />
      <RevenueDisclaimer />
      <FreightSourcing />

      <section className="section page-cta">
        <div className="container page-cta-inner reveal">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Next Step</p>
            <h2 className="section-title">Run this equipment with Integrity</h2>
            <p className="section-desc page-cta-desc">
              Tell us what you haul and where you prefer to run. We'll review your operation and
              discuss dispatch support.
            </p>
          </div>
          <Link to="/contact" className="btn btn-accent btn-lg">
            Get Started
            <IconArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </>
  );
}
