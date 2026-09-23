import { Link } from 'react-router-dom';
import { IconArrowRight } from '../components/Icons';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import HelpCards from '../components/HelpCards';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Freight handled. Paperwork covered."
        lead="A full range of dispatch services designed to keep your operation productive, organized, and moving forward."
      />

      <Services light />

      <HelpCards />

      <section className="section page-cta">
        <div className="container page-cta-inner reveal">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Ready to Get Started?</p>
            <h2 className="section-title">Let's discuss your dispatch needs</h2>
            <p className="section-desc page-cta-desc">
              Share a few details about your equipment and preferred lanes. Our team will review
              your information and discuss how we can support your operation.
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
