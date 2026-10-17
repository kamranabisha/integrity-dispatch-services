const DAYS = [
  { day: 'Monday', note: 'Begin from your home area' },
  { day: 'Tuesday', note: 'Local, regional, or OTR freight' },
  { day: 'Wednesday', note: 'Continue planned opportunities' },
  { day: 'Thursday', note: 'Return legs when available' },
  { day: 'Friday', note: 'Home for the weekend when freight allows' },
];

export default function DispatchPlans() {
  return (
    <section id="dispatch-plans" className="section plans">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Weekly Planning</p>
          <h2 className="section-title">Monday–Friday Dispatch Plans</h2>
          <p className="section-desc">
            For carriers who prioritize consistent weekday operations, we can build Monday–Friday
            dispatch plans around their preferred market.
          </p>
        </div>

        <div className="plans-panel reveal">
          <p className="plans-intro">
            A typical plan may begin Monday from the carrier's home area, continue through the week
            with local, regional, or OTR opportunities, and be structured around returning home for
            the weekend when freight availability allows. We also look for backhaul opportunities to
            help reduce downtime between deliveries.
          </p>

          <ol className="timeline" aria-label="Example Monday through Friday dispatch plan">
            {DAYS.map((item, i) => (
              <li key={item.day} className={`timeline-item reveal reveal-delay-${(i % 5) + 1}`}>
                <span className="timeline-node">{i + 1}</span>
                <span className="timeline-day">{item.day}</span>
                <span className="timeline-note">{item.note}</span>
              </li>
            ))}
          </ol>

          <p className="plans-footnote">
            Home-time requirements and operating preferences are discussed with each carrier before
            building a dispatch plan.
          </p>
        </div>
      </div>
    </section>
  );
}
