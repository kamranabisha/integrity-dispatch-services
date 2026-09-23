import {
  IconTruck,
  IconRoute,
  IconPhone,
  IconHandshake,
  IconSearch,
  IconClock,
} from './Icons';

const FEATURES = [
  {
    icon: <IconTruck className="feat-icon" />,
    title: 'Personalized Dispatch Support',
    body: 'You work with a dispatcher who learns your operation and preferences.',
  },
  {
    icon: <IconRoute className="feat-icon" />,
    title: 'Carrier-Focused Planning',
    body: 'Your preferred lanes, home time, equipment, and schedule are considered when planning your freight.',
  },
  {
    icon: <IconPhone className="feat-icon" />,
    title: 'Professional Communication',
    body: 'We communicate with brokers and help manage the administrative side of your loads.',
  },
  {
    icon: <IconHandshake className="feat-icon" />,
    title: 'Flexible Working Relationship',
    body: 'Our dispatch service does not require a long-term binding contract. You maintain control of your business relationship with us.',
  },
  {
    icon: <IconSearch className="feat-icon" />,
    title: 'Transparent Process',
    body: 'You review and approve the load before it is booked.',
  },
  {
    icon: <IconClock className="feat-icon" />,
    title: 'Support When You Need It',
    body: 'Our team provides ongoing dispatch support for carriers.',
  },
];

export default function WhyIntegrity() {
  return (
    <section id="why-integrity" className="section section-alt why">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Why Carriers Work With Integrity</p>
          <h2 className="section-title">Built for carriers who value clarity</h2>
        </div>

        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <article key={f.title} className={`why-card reveal reveal-delay-${(i % 3) + 1}`}>
              <span className="icon-tile">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
