import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck, IconTruck, IconHandshake, IconPhone, IconShield, IconClock, IconRoute } from '../components/Icons';
import PageHero from '../components/PageHero';
import About from '../components/About';
import Process from '../components/Process';
import Transparency from '../components/Transparency';
import { PAGE_HERO_IMAGES } from '../images';

const APPROACH = [
  {
    icon: <IconTruck className="feat-icon" />,
    title: 'Personalized dispatch approach',
    body: 'Each carrier is assigned a dispatcher who learns your equipment, preferred lanes, schedule, and business goals.',
  },
  {
    icon: <IconRoute className="feat-icon" />,
    title: 'Carrier-focused planning',
    body: 'Weekly plans are built around your operating area, home-time needs, and the freight markets that fit your truck.',
  },
  {
    icon: <IconPhone className="feat-icon" />,
    title: 'Professional communication',
    body: 'We handle broker and shipper communication so you can focus on driving and running your operation.',
  },
  {
    icon: <IconShield className="feat-icon" />,
    title: 'Transparent from day one',
    body: 'Process, documentation, service terms, and applicable fees are explained before you start.',
  },
  {
    icon: <IconHandshake className="feat-icon" />,
    title: 'Flexible working relationship',
    body: 'No long-term binding contract. You maintain control of your business relationship with us.',
  },
  {
    icon: <IconClock className="feat-icon" />,
    title: 'Ongoing dispatch support',
    body: 'Our team continues supporting the freight side of your operation as your needs evolve.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for carriers who value clarity"
        lead="Integrity Dispatch Services LLC is a professional truck dispatch service based in Sheridan, Wyoming — with more than five years of transportation industry experience."
        image={PAGE_HERO_IMAGES.about}
      />

      <About
        badgeLabel={
          <>
            Years of transportation
            <br />
            industry experience
          </>
        }
        badgeValue="5+"
      />

      <section className="section about-approach">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-eyebrow">Company Background</p>
            <h2 className="section-title">A personalized approach to dispatching</h2>
            <p className="section-desc">
              We believe dispatching should be more than simply finding a load. From freight search
              and rate negotiation to paperwork and backhaul planning, our team helps simplify the
              day-to-day workload of running a trucking operation.
            </p>
          </div>

          <div className="why-grid">
            {APPROACH.map((item, i) => (
              <article key={item.title} className={`why-card reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="icon-tile">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <ul className="about-points about-points-page reveal">
            <li>
              <IconCheck className="check-icon" />
              Personalized dispatcher assignment
            </li>
            <li>
              <IconCheck className="check-icon" />
              Clear, professional communication
            </li>
            <li>
              <IconCheck className="check-icon" />
              Carrier goals at the center of every decision
            </li>
          </ul>
        </div>
      </section>

      <Process />
      <Transparency />

      <section className="section page-cta">
        <div className="container page-cta-inner reveal">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Next Step</p>
            <h2 className="section-title">Ready to work with Integrity?</h2>
            <p className="section-desc page-cta-desc">
              Tell us about your equipment, preferred lanes, and home-time requirements.
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
