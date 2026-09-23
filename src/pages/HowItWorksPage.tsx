import { Link } from 'react-router-dom';
import { IconArrowRight } from '../components/Icons';
import PageHero from '../components/PageHero';
import Process from '../components/Process';
import DispatchPlans from '../components/DispatchPlans';
import Backhaul from '../components/Backhaul';
import Transparency from '../components/Transparency';

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A process shaped around your truck"
        lead="We don't believe in a one-size-fits-all approach. Your truck is your business — our job is to help you manage the freight side of it."
      />

      <Process full />

      <DispatchPlans />
      <Backhaul />
      <Transparency />

      <section className="section page-cta">
        <div className="container page-cta-inner reveal">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Next Step</p>
            <h2 className="section-title">Start Your Dispatch Journey</h2>
            <p className="section-desc page-cta-desc">
              Share your equipment, preferred lanes, and home-time needs. We'll walk you through
              how the process works for your operation.
            </p>
          </div>
          <Link to="/contact" className="btn btn-accent btn-lg">
            Start Your Dispatch Journey
            <IconArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </>
  );
}
