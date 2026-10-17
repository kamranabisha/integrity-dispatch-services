import { useRef, type PointerEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck } from './Icons';
import { ABOUT_IMAGE } from '../images';

type Props = {
  cta?: ReactNode;
  badgeValue?: string;
  badgeLabel?: ReactNode;
};

export default function About({ cta, badgeValue = 'US', badgeLabel }: Props) {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--p-ry', `${(-px * 14).toFixed(2)}deg`);
    el.style.setProperty('--p-rx', `${(py * 10).toFixed(2)}deg`);
    el.style.setProperty('--p-tx', `${(-px * 26).toFixed(1)}px`);
    el.style.setProperty('--p-ty', `${(-py * 18).toFixed(1)}px`);
  };

  const handlePointerLeave = () => {
    const el = sceneRef.current;
    if (!el) return;
    el.style.setProperty('--p-ry', '0deg');
    el.style.setProperty('--p-rx', '0deg');
    el.style.setProperty('--p-tx', '0px');
    el.style.setProperty('--p-ty', '0px');
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div
            className="about-media reveal"
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div className="about-3d-frame">
              <div className="about-3d">
                <div className="about-3d-stage">
                  <div className="about-3d-plane about-3d-back" aria-hidden="true">
                    <img src={ABOUT_IMAGE} alt="" loading="lazy" />
                  </div>
                  <div className="about-3d-plane about-3d-mid">
                    <img src={ABOUT_IMAGE} alt="Semi truck traveling through a mountain pass at night" loading="lazy" />
                  </div>
                  <div className="about-3d-plane about-3d-front" aria-hidden="true">
                    <img src={ABOUT_IMAGE} alt="" loading="lazy" />
                  </div>
                  <div className="about-3d-scan" aria-hidden="true" />
                  <div className="about-3d-sheen" aria-hidden="true" />
                </div>
                <div className="about-3d-ground" aria-hidden="true" />
                <div className="about-3d-glow" aria-hidden="true" />
              </div>
            </div>
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
