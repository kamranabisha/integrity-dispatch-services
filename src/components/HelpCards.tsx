import { Link } from 'react-router-dom';
import { IconArrowRight } from './Icons';

const CARDS = [
  {
    title: 'Keep Your Truck Moving',
    body: (
      <>
        <p>
          Finding the right freight consistently can take time and effort. Our dispatch team
          monitors available freight and works to identify opportunities that fit your equipment and
          operating preferences.
        </p>
        <p>
          We use industry resources and premium load boards while also working with our freight and
          broker network to identify available opportunities.
        </p>
        <p>
          Our objective is to minimize unnecessary empty miles and help you maintain a productive
          schedule.
        </p>
      </>
    ),
  },
  {
    title: 'Personalized Weekly Planning',
    body: (
      <>
        <p>
          We can help plan your week based on your preferred operating area, home-time
          requirements, equipment, and schedule.
        </p>
        <ul className="mini-list">
          {[
            'Local operations',
            'Regional routes',
            'OTR freight',
            'Monday–Friday schedules',
            'Round-trip opportunities',
            'Backhaul planning',
            'Advance booking',
          ].map((item) => (
            <li key={item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Rate Negotiation',
    body: (
      <>
        <p>
          Our dispatchers communicate with brokers and work to negotiate competitive rates for
          available freight.
        </p>
        <p>We review:</p>
        <ul className="mini-list">
          {[
            'Load details',
            'Mileage',
            'Equipment requirements',
            'Pickup and delivery schedules',
            'Other relevant load factors',
          ].map((item) => (
            <li key={item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <p className="emphasis">The carrier makes the final decision before any load is booked.</p>
      </>
    ),
  },
];

export default function HelpCards() {
  return (
    <section id="help" className="section section-alt help">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">How We Can Help</p>
          <h2 className="section-title">Support built around the way you operate</h2>
          <p className="section-desc">
            From weekly planning to rate negotiation, we handle the freight side of your business
            so you can stay focused on the road.
          </p>
        </div>

        <div className="help-grid">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`help-card reveal reveal-delay-${i + 1}`}
            >
              <div className="help-card-top">
                <span className="icon-tile help-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="card-icon">
                    {i === 0 && (
                      <>
                        <path d="M3 16V7a1 1 0 0 1 1-1h10v10" />
                        <path d="M14 9h3.5a1 1 0 0 1 .8.4l2.5 3.3a1 1 0 0 1 .2.6V16" />
                        <circle cx="7.5" cy="17.5" r="1.8" />
                        <circle cx="17" cy="17.5" r="1.8" />
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
                        <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <circle cx="12" cy="12" r="8.5" />
                        <path d="M12 7.5v9M14.2 9.3c-.5-.7-1.3-1-2.2-1-1.3 0-2.3.7-2.3 1.8 0 1.2 1 1.7 2.3 2 1.4.3 2.5.9 2.5 2.2 0 1.2-1.1 1.9-2.5 1.9-1.1 0-2-.4-2.4-1.2" />
                      </>
                    )}
                  </svg>
                </span>
                <span className="help-num">0{i + 1}</span>
              </div>
              <h3>{card.title}</h3>
              <div className="help-card-body">{card.body}</div>
            </article>
          ))}
        </div>

        <div className="section-actions reveal">
          <Link to="/services" className="btn btn-primary">
            View Services
            <IconArrowRight className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
