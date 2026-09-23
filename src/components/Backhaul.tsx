import { IconPin, IconArrowRight } from './Icons';

const ROUTE = [
  { label: 'Origin', note: 'Home market departure' },
  { label: 'Delivery', note: 'Outbound freight completed' },
  { label: 'Return Load', note: 'Backhaul secured in advance' },
  { label: 'Home Market', note: 'Back where you started' },
];

export default function Backhaul() {
  return (
    <section id="backhaul" className="section section-alt backhaul">
      <div className="container">
        <div className="backhaul-grid">
          <div className="backhaul-copy reveal">
            <p className="section-eyebrow">Round Trip</p>
            <h2 className="section-title">Round-Trip & Backhaul Planning</h2>
            <div className="prose">
              <p>Backhaul planning is an important part of keeping a truck productive.</p>
              <p>
                For carriers operating within a regional radius, our team can begin looking for
                return freight before the outbound delivery is completed.
              </p>
              <p>
                For example, if your truck is traveling several hundred miles from its home market,
                our dispatch team can begin searching for a suitable return load while the outbound
                shipment is still in transit.
              </p>
              <p className="emphasis">
                The goal is to reduce unnecessary empty miles and improve overall utilization.
              </p>
            </div>
          </div>

          <div className="route-card reveal reveal-delay-1" aria-label="Backhaul route concept">
            <div className="route-card-head">
              <IconPin className="route-head-icon" />
              <span>Route Concept</span>
            </div>
            <ol className="route-steps">
              {ROUTE.map((step, i) => (
                <li key={step.label} className="route-step">
                  <div className="route-step-main">
                    <span className="route-index">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <span>{step.note}</span>
                    </div>
                  </div>
                  {i < ROUTE.length - 1 && (
                    <IconArrowRight className="route-arrow" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
