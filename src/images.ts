const BASE = import.meta.env.BASE_URL;

function asset(file: string): string {
  return `${BASE}images/${file}`;
}

export type EquipmentKey =
  | 'dry-vans'
  | 'reefers'
  | 'box-trucks'
  | 'hotshots'
  | 'power-only'
  | 'flatbeds';

export const EQUIPMENT_IMAGES: Record<EquipmentKey, string> = {
  'dry-vans': asset('equip-dry-van.jpg'),
  'reefers': asset('equip-reefer.jpg'),
  'box-trucks': asset('equip-box-truck.jpg'),
  hotshots: asset('equip-hotshot.jpg'),
  'power-only': asset('equip-power-only.jpg'),
  flatbeds: asset('equip-flatbed.jpg'),
};

export const HERO_IMAGE = asset('truck-mountain-road.jpg');

export const ABOUT_IMAGE = asset('truck-aerial-forest.jpg');

export const CTA_IMAGE = asset('truck-dusk-highway.jpg');

export const PAGE_HERO_IMAGES = {
  about: asset('road-mountains.jpg'),
  services: asset('road-red-peterbilt.jpg'),
  equipment: asset('road-blue-semi.jpg'),
  howItWorks: asset('road-dusk-moody.jpg'),
  contact: asset('road-sunset-peterbilt.jpg'),
  notFound: asset('truck-desert-highway.jpg'),
} as const;
