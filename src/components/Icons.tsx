type IconProps = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export function IconTruck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 16V7a1 1 0 0 1 1-1h10v10" />
      <path d="M14 9h3.5a1 1 0 0 1 .8.4l2.5 3.3a1 1 0 0 1 .2.6V16" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M9.3 17.5h5.9M3 17.5h1.7M18.8 17.5H21" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}

export function IconDollar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M14.2 9.3c-.5-.7-1.3-1-2.2-1-1.3 0-2.3.7-2.3 1.8 0 1.2 1 1.7 2.3 2 1.4.3 2.5.9 2.5 2.2 0 1.2-1.1 1.9-2.5 1.9-1.1 0-2-.4-2.4-1.2" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7.4 4.5h2.2l1.1 3.2-1.5 1.2a11.5 11.5 0 0 0 5 5l1.2-1.5 3.2 1.1v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 5.4 6.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconDocument({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V8h4M8.5 12h7M8.5 15.5h7" />
    </svg>
  );
}

export function IconInvoice({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h11v17l-2-1.4-1.8 1.4-1.7-1.4-1.8 1.4-1.7-1.4-2 1.4v-17Z" />
      <path d="M9.5 8h5M9.5 11.5h5M9.5 15h3" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6v5.2c0 4.3-2.8 7.5-7 9.3-4.2-1.8-7-5-7-9.3V6l7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="17.5" r="2.2" />
      <circle cx="18" cy="6.5" r="2.2" />
      <path d="M8.2 17.5H13a3 3 0 0 0 0-6H9.5a3 3 0 0 1 0-6H15" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s6.5-5.3 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </svg>
  );
}

export function IconNetwork({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="5.5" cy="18" r="2.2" />
      <circle cx="18.5" cy="18" r="2.2" />
      <path d="M10.8 7.5 6.7 15.8M13.2 7.5l4.1 8.3M7.7 18h8.6" />
    </svg>
  );
}

export function IconBox({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3.5 8 4v9l-8 4-8-4v-9l8-4Z" />
      <path d="m4 7.5 8 4 8-4M12 11.5v9" />
    </svg>
  );
}

export function IconSnow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v17M4.5 7.8l15 8.4M19.5 7.8l-15 8.4" />
      <path d="m9.5 5.5 2.5 2.5 2.5-2.5M9.5 18.5l2.5-2.5 2.5 2.5" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13.5 3.5 6 13.5h5l-.5 7 7.5-10h-5l.5-7Z" />
    </svg>
  );
}

export function IconFlatbed({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 15.5h14V9H3v6.5ZM17 12h2.8l1.7 2.3v1.2H17" />
      <circle cx="7" cy="17.5" r="1.7" />
      <circle cx="18.5" cy="17.5" r="1.7" />
      <path d="M8.7 17.5h8.1" />
    </svg>
  );
}

export function IconPower({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 15.5V9h7v6.5M11 11h4.2a1 1 0 0 1 .8.4l2.5 3.1a1 1 0 0 1 .2.6v.4" />
      <circle cx="7.5" cy="17" r="1.7" />
      <circle cx="17" cy="17" r="1.7" />
      <path d="M9.2 17h6.1M4 17h1.5M18.7 17H20" />
    </svg>
  );
}

export function IconPartial({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="7" height="13" rx="1" />
      <rect x="13.5" y="5.5" width="7" height="6" rx="1" />
      <path d="M13.5 15.5h7M13.5 18.5h4" />
    </svg>
  );
}

export function IconBoard({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9h17M9 9v10.5M14.5 9v10.5" />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m8.5 11.5 2.2 2.2a1.4 1.4 0 0 0 2 0l4.8-4.8" />
      <path d="M3.5 10 7 6.5l3 1 2-1 3 1 4.5-1v5l-3 3M3.5 10v4l3 3 2-1M20.5 10.5v4l-3 2.5" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={2}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconShieldMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 44" className={className} aria-hidden="true" fill="none">
      <path
        d="M20 2 37 8.5v13.2C37 32.3 29.6 40 20 43 10.4 40 3 32.3 3 21.7V8.5L20 2Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M20 2 37 8.5v13.2C37 32.3 29.6 40 20 43 10.4 40 3 32.3 3 21.7V8.5L20 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m12.5 22 5 5 10-11"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
