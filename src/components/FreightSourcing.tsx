import {
  IconBoard,
  IconNetwork,
  IconTruck,
  IconCalendar,
  IconPartial,
  IconPin,
  IconRoute,
  IconBox,
} from './Icons';

const SOURCES = [
  { icon: <IconBoard className="src-icon" />, label: 'Premium Load Boards' },
  { icon: <IconNetwork className="src-icon" />, label: 'Broker Networks' },
  { icon: <IconTruck className="src-icon" />, label: 'Direct Freight Opportunities' },
  { icon: <IconCalendar className="src-icon" />, label: 'Advance-Booked Freight' },
  { icon: <IconPartial className="src-icon" />, label: 'Partial-Load Opportunities' },
  { icon: <IconPin className="src-icon" />, label: 'Regional Freight' },
  { icon: <IconRoute className="src-icon" />, label: 'Backhaul Opportunities' },
  { icon: <IconBox className="src-icon" />, label: 'DAT Zone Freight' },
];

export default function FreightSourcing() {
  return (
    <section id="freight-sourcing" className="section sourcing">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Freight Sourcing</p>
          <h2 className="section-title">Multiple sources. One goal: the right load.</h2>
          <p className="section-desc">
            Our team uses multiple freight sources to identify opportunities for our carriers.
          </p>
        </div>

        <div className="sourcing-grid">
          {SOURCES.map((src, i) => (
            <div key={src.label} className={`source-chip reveal reveal-delay-${(i % 4) + 1}`}>
              <span className="icon-tile">{src.icon}</span>
              <span>{src.label}</span>
            </div>
          ))}
        </div>

        <p className="disclaimer-bar reveal">
          Freight availability and rates vary by market, equipment type, season, capacity, and
          other factors. We focus on finding opportunities that make sense for each carrier's
          operation.
        </p>
      </div>
    </section>
  );
}
