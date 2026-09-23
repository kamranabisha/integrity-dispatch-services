import { IconShield, IconCheck } from './Icons';

const POINTS = [
  'Dispatch process explained before you start',
  'Required documentation reviewed up front',
  'Service terms presented clearly',
  'Applicable fees disclosed transparently',
];

export default function Transparency() {
  return (
    <section id="transparency" className="section transparency">
      <div className="container">
        <div className="transparency-panel reveal">
          <div className="transparency-copy">
            <p className="section-eyebrow section-eyebrow-light">Trust & Clarity</p>
            <h2 className="section-title">Transparent From Day One</h2>
            <div className="prose prose-light">
              <p>
                Before starting, we explain our dispatch process, required documentation, service
                terms, and applicable fees so carriers understand how the relationship works.
              </p>
              <p>
                Our goal is to establish a long-term professional relationship built on clear
                communication, transparency, and reliable dispatch support.
              </p>
            </div>
          </div>
          <ul className="transparency-list">
            <li>
              <IconShield className="check-icon" />
              <div>
                <strong>Clear process</strong>
                <span>Know what to expect before you begin.</span>
              </div>
            </li>
            {POINTS.slice(1).map((point) => (
              <li key={point}>
                <IconCheck className="check-icon" />
                <div>
                  <strong>{point}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
