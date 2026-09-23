import { Link } from 'react-router-dom';
import { IconShieldMark, IconPin } from './Icons';

const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="Integrity Dispatch Services LLC — Home">
            <span className="brand-mark">
              <IconShieldMark className="brand-shield" />
            </span>
            <span className="brand-text">
              <span className="brand-name">Integrity</span>
              <span className="brand-sub">Dispatch Services LLC</span>
            </span>
          </Link>
          <p className="footer-tagline">Your Truck. Your Goals. Our Support.</p>
          <p className="footer-location">
            <IconPin className="footer-pin" />
            Sheridan, Wyoming
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h3 className="footer-heading">Navigate</h3>
          <ul>
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-cta">
          <h3 className="footer-heading">Ready to get started?</h3>
          <p>Tell us about your equipment, preferred lanes, and home-time requirements.</p>
          <Link to="/contact" className="btn btn-accent">
            Get Started
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Integrity Dispatch Services LLC. All rights reserved.</p>
          <p className="footer-fine">Your Truck. Your Goals. Our Support.</p>
        </div>
      </div>
    </footer>
  );
}
