import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="section-eyebrow section-eyebrow-light">{eyebrow}</p>
        <h1 className="page-hero-title">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
