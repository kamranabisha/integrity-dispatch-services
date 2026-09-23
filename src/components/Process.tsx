import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from './Icons';

const STEPS = [
  {
    num: '01',
    title: 'Tell Us About Your Operation',
    body: 'We learn about your truck, equipment, preferred lanes, home-time requirements, and business goals.',
  },
  {
    num: '02',
    title: 'Build Your Dispatch Strategy',
    body: 'We build a dispatch strategy around your operation — markets, schedule, and priorities.',
  },
  {
    num: '03',
    title: 'Find Freight Opportunities',
    body: 'We search for freight that fits your equipment, lanes, and operating preferences.',
  },
  {
    num: '04',
    title: 'Review & Approve Loads',
    body: 'You review and approve the load before it is booked. The carrier always has the final decision.',
  },
  {
    num: '05',
    title: 'Keep Your Truck Moving',
    body: 'We continue supporting the freight side of your operation with ongoing dispatch support.',
  },
];

type Props = {
  preview?: boolean;
  full?: boolean;
  cta?: ReactNode;
};

export default function Process({ preview = false, full = false, cta }: Props) {
  const steps = preview ? STEPS.slice(0, 3) : STEPS;
  const gridClass = [
    'process-grid',
    full ? 'process-grid-full' : '',
    preview ? 'process-grid-preview' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="how-it-works" className="section process">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Our Approach</p>
          <h2 className="section-title">
            {full
              ? 'Five clear steps from kickoff to keep-moving'
              : 'A process shaped around your truck'}
          </h2>
          <p className="process-lead">
            <strong>We don't believe in a one-size-fits-all approach.</strong>
            Your truck is your business. Our job is to help you manage the freight side of it.
          </p>
        </div>

        <ol className={gridClass}>
          {steps.map((step, i) => (
            <li key={step.num} className={`process-card reveal reveal-delay-${(i % 5) + 1}`}>
              <span className="process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        {(cta || preview) && (
          <div className="section-actions reveal">
            {cta ?? (
              <Link to="/how-it-works" className="btn btn-primary">
                View Full Process
                <IconArrowRight className="btn-icon" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
