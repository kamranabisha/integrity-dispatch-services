import type { ReactNode } from 'react';

type Props = {
  preview?: boolean;
  cta?: ReactNode;
};

export default function RevenueOpportunities({ preview = false, cta }: Props) {
  const OPPORTUNITIES = [
    {
      name: 'Box Trucks',
      gross: 'Around $7,500',
      body: 'We help box truck operators find local, regional, and longer-distance opportunities depending on their equipment specifications and preferred operating area.',
    },
    {
      name: 'Dry Vans',
      gross: 'Around $12,000',
      body: 'Our team searches for dry van freight across different markets, including OTR and regional opportunities, while considering mileage, rate, and home-time requirements.',
    },
    {
      name: 'Reefers',
      gross: 'Around $14,000',
      body: 'Refrigerated freight can provide opportunities across a wide range of markets. We look for reefer loads that match the carrier’s equipment and operating preferences.',
    },
    ...(preview
      ? []
      : [
          {
            name: 'Hotshots',
            gross: 'Around $9,000',
            body: 'We work with hotshot carriers to identify suitable partial and full-load opportunities while considering equipment dimensions, weight capacity, and preferred lanes.',
          },
          {
            name: 'Open Deck / Flatbed',
            gross: 'Around $15,000',
            body: 'For open-deck equipment, our team looks for freight requiring flatbeds and other open-deck equipment, including opportunities that match the carrier’s dimensions, capacity, and securement capabilities.',
          },
        ]),
  ];

  return (
    <section id="opportunities" className="section opportunities">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Equipment & Freight Opportunities</p>
          <h2 className="section-title">Different equipment. Different markets.</h2>
          <p className="section-desc">
            Different equipment types have different freight markets and earning potential. Our
            dispatch team works to identify freight opportunities based on the carrier's equipment,
            preferred lanes, market conditions, and operating schedule.
          </p>
        </div>

        <div className={`oppo-grid${preview ? ' oppo-grid-preview' : ''}`}>
          {OPPORTUNITIES.map((item, i) => (
            <article key={item.name} className={`oppo-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="oppo-head">
                <h3>{item.name}</h3>
                <span className="oppo-tag">Target / Potential Weekly Gross</span>
              </div>
              <p className="oppo-gross">{item.gross}</p>
              <p className="oppo-body">{item.body}</p>
            </article>
          ))}
        </div>

        {cta && <div className="section-actions reveal">{cta}</div>}
      </div>
    </section>
  );
}
