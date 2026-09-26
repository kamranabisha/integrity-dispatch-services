import type { ReactNode } from 'react';
import {
  IconTruck,
  IconSnow,
  IconBox,
  IconBolt,
  IconPower,
  IconFlatbed,
} from './Icons';
import { EQUIPMENT_IMAGES, type EquipmentKey } from '../images';

const EQUIPMENT: {
  key: EquipmentKey;
  icon: ReactNode;
  name: string;
  desc: string;
  gross: string;
}[] = [
  {
    key: 'dry-vans',
    icon: <IconTruck className="eq-icon" />,
    name: 'Dry Vans',
    desc: 'Dry van freight across regional and over-the-road markets.',
    gross: 'Around $12,000',
  },
  {
    key: 'reefers',
    icon: <IconSnow className="eq-icon" />,
    name: 'Reefers',
    desc: 'Temperature-controlled opportunities matched to your equipment and schedule.',
    gross: 'Around $14,000',
  },
  {
    key: 'box-trucks',
    icon: <IconBox className="eq-icon" />,
    name: 'Box Trucks',
    desc: 'Local, regional, and longer-distance loads for box truck operators.',
    gross: 'Around $7,500',
  },
  {
    key: 'hotshots',
    icon: <IconBolt className="eq-icon" />,
    name: 'Hotshots',
    desc: 'Partial and full-load opportunities suited to hotshot dimensions and capacity.',
    gross: 'Around $9,000',
  },
  {
    key: 'power-only',
    icon: <IconPower className="eq-icon" />,
    name: 'Power Only',
    desc: 'Trailer-pull opportunities coordinated with brokers and shippers.',
    gross: '',
  },
  {
    key: 'flatbeds',
    icon: <IconFlatbed className="eq-icon" />,
    name: 'Flatbeds / Open Deck',
    desc: 'Open-deck freight matched to dimensions, capacity, and securement needs.',
    gross: 'Around $15,000',
  },
];

type Props = {
  preview?: boolean;
  full?: boolean;
  cta?: ReactNode;
};

export default function Equipment({ preview = false, full = false, cta }: Props) {
  return (
    <section id="equipment" className="section section-dark equipment">
      <div className="container">
        <div className="section-head section-head-light reveal">
          <p className="section-eyebrow">Equipment We Support</p>
          <h2 className="section-title">
            {preview ? 'Freight matched to your equipment' : 'Equipment types we dispatch for'}
          </h2>
          <p className="section-desc">
            Equipment requirements can vary by load, so our dispatch team reviews the carrier's
            specifications before presenting freight.
            {full && ' Figures shown are target or potential weekly gross — not guaranteed earnings.'}
          </p>
        </div>

        <div className="equipment-grid">
          {EQUIPMENT.map((eq, i) => (
            <article key={eq.key} className={`equip-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="equip-media">
                <img src={EQUIPMENT_IMAGES[eq.key]} alt={eq.name} loading="lazy" />
                <span className="equip-icon-wrap">{eq.icon}</span>
              </div>
              <div className="equip-body">
                <h3>{eq.name}</h3>
                <p>{eq.desc}</p>
                {(full || eq.gross) && eq.gross && (
                  <div className="equip-gross">
                    <span className="oppo-tag">Target / Potential Weekly Gross</span>
                    <strong>{eq.gross}</strong>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {cta && <div className="section-actions reveal">{cta}</div>}
      </div>
    </section>
  );
}
