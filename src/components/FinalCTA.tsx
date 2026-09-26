import { Link } from 'react-router-dom';
import { IconArrowRight } from './Icons';
import { CTA_IMAGE } from '../images';

export default function FinalCTA() {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta-media" aria-hidden="true">
        <img src={CTA_IMAGE} alt="" loading="lazy" />
        <div className="final-cta-overlay" />
      </div>
      <div className="container final-cta-inner reveal">
        <p className="section-eyebrow section-eyebrow-light">Let's Keep Your Wheels Moving.</p>
        <h2 id="final-cta-title" className="section-title">Ready to Keep Your Wheels Moving?</h2>
        <p className="final-cta-text">
          Whether you're an established carrier looking for additional dispatch support or a
          growing operation that needs help managing freight, Integrity Dispatch Services LLC is
          here to help.
        </p>
        <p className="final-cta-text">
          Tell us about your equipment, operating area, preferred schedule, and home-time
          requirements. Our team can review your needs and discuss how our dispatch service can fit
          your operation.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-accent btn-lg">
            Get Started Today
            <IconArrowRight className="btn-icon" />
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-lg">
            Talk With Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
