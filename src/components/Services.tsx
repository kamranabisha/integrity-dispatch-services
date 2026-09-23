import type { ReactNode } from 'react';
import {
  IconSearch,
  IconDollar,
  IconPhone,
  IconDocument,
  IconInvoice,
  IconShield,
  IconRoute,
  IconClock,
} from './Icons';

const SERVICES = [
  {
    icon: <IconSearch className="svc-icon" />,
    title: 'Freight Search & Load Booking',
    body: 'We search for freight that matches your equipment and preferred operating areas and coordinate load booking with brokers.',
  },
  {
    icon: <IconDollar className="svc-icon" />,
    title: 'Rate Negotiation',
    body: 'We communicate with brokers and negotiate rates on your behalf, helping you make informed decisions about available loads.',
  },
  {
    icon: <IconPhone className="svc-icon" />,
    title: 'Broker & Shipper Communication',
    body: 'We handle communication with brokers and other freight contacts so you can focus on driving and operating your truck.',
  },
  {
    icon: <IconDocument className="svc-icon" />,
    title: 'Carrier Setup & Paperwork',
    body: 'We assist with carrier setup paperwork and other administrative requirements associated with booking freight.',
  },
  {
    icon: <IconInvoice className="svc-icon" />,
    title: 'Invoicing Assistance',
    body: 'We can help prepare invoices and coordinate the documentation needed for factoring or quick-pay arrangements.',
  },
  {
    icon: <IconShield className="svc-icon" />,
    title: 'Insurance Certificate Assistance',
    body: 'We assist with obtaining and providing required insurance certificates when requested by brokers or shippers.',
  },
  {
    icon: <IconRoute className="svc-icon" />,
    title: 'Detention, Layover, Lumper & TONU Support',
    body: 'When applicable, we help communicate with brokers regarding detention, layover, lumper, and truck ordered not used (TONU) charges.',
  },
  {
    icon: <IconClock className="svc-icon" />,
    title: 'Backhaul Planning',
    body: 'We look for return freight opportunities so carriers can reduce unnecessary deadhead and keep their trucks productive.',
  },
  {
    icon: <IconClock className="svc-icon" />,
    title: '24/7 Dispatch Support',
    body: 'Our dispatch support is available around the clock throughout the year for carriers who need assistance while on the road.',
  },
];

type Props = {
  preview?: boolean;
  light?: boolean;
  cta?: ReactNode;
};

export default function Services({ preview = false, light = false, cta }: Props) {
  const items = preview ? SERVICES.slice(0, 6) : SERVICES;
  const classes = ['section', light ? 'services-light' : 'section-dark', 'services']
    .filter(Boolean)
    .join(' ');

  return (
    <section id="services" className={classes}>
      <div className="container">
        <div className={`section-head ${light ? '' : 'section-head-light'} reveal`}>
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">
            {preview ? 'Freight handled. Paperwork covered.' : 'Full dispatch services for carriers'}
          </h2>
          <p className="section-desc">
            {preview
              ? 'A full range of dispatch services designed to keep your operation productive, organized, and moving forward.'
              : 'From freight search and rate negotiation to paperwork, insurance certificates, and backhaul planning — every service is built to keep your truck productive.'}
          </p>
        </div>

        <div className="services-grid">
          {items.map((svc, i) => (
            <article key={svc.title} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
              <span className={`icon-tile${light ? '' : ' icon-tile-dark'}`}>{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
            </article>
          ))}
        </div>

        {cta && <div className="section-actions reveal">{cta}</div>}
      </div>
    </section>
  );
}
