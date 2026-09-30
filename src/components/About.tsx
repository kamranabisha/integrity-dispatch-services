import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck } from './Icons';
import { ABOUT_IMAGE } from '../images';

type Props = {
  cta?: ReactNode;
  badgeValue?: string;
  badgeLabel?: ReactNode;
};

export default function About({ cta, badgeValue = 'US', badgeLabel }: Props) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal">
            <img src={ABOUT_IMAGE} alt="Semi truck traveling through a mountain pass at night" loading="lazy" />
            <div className="about-badge">
              <span className="about-badge-value">{badgeValue}</span>
              <span className="about-badge-label">
                {badgeLabel ?? (
                  <>
                    Carriers served across
                    <br />
                    the United States
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="about-copy reveal reveal-delay-1">
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">About Integrity Dispatch Services</h2>
            <div className="prose">
              <p>
                At Integrity Dispatch Services, we believe dispatching should be more than simply
                finding a load.
              </p>
              <p>
                Every carrier has different needs. Some drivers prefer regional freight and regular
                home time, while others want to maximize miles and operate OTR. That's why we take a
                personalized approach to dispatching.
              </p>
              <p>
                Each carrier is assigned a dispatcher who works with them to understand their
                equipment, preferred areas, schedule, and operating requirements.
              </p>
              <p>
                From finding freight to communicating with brokers and handling administrative
                tasks, our team helps simplify the day-to-day workload of running a trucking
                operation.
              </p>
              <p>
                Our commitment is to provide professional support, clear communication, and
                dependable dispatch service while keeping the carrier's goals at the center of every
                decision.
              </p>
            </div>
            <ul className="about-points">
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
            <div className="section-actions">
              {cta ?? (
                <Link to="/about" className="btn btn-primary">
                  Learn More
                  <IconArrowRight className="btn-icon" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
