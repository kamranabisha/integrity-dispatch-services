import { Link } from 'react-router-dom';
import { IconArrowRight } from './Icons';

const HERO_BG =
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Integrity Dispatch Services introduction">
      <div className="hero-media" aria-hidden="true">
        <img src={HERO_BG} alt="" fetchPriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow hero-anim hero-anim-1">Sheridan, Wyoming · Professional Truck Dispatch</p>
        <h1 className="hero-title hero-anim hero-anim-2">
          Your Truck. Your Goals.
          <span className="text-accent"> Our Support.</span>
        </h1>
        <p className="hero-lead hero-anim hero-anim-3">
          Integrity Dispatch Services LLC is a professional truck dispatch service based in Sheridan,
          Wyoming. We help carriers spend less time searching for freight and more time on the road.
        </p>
        <p className="hero-sub hero-anim hero-anim-4">
          Personalized dispatch support built around your equipment, preferred lanes, home time, and
          business goals.
        </p>
        <div className="hero-actions hero-anim hero-anim-5">
          <Link to="/contact" className="btn btn-accent btn-lg">
            Get Started
            <IconArrowRight className="btn-icon" />
          </Link>
          <Link to="/about" className="btn btn-ghost btn-lg">
            Learn More
          </Link>
        </div>
      </div>

      <div className="hero-strip" aria-hidden="true">
        <div className="container hero-strip-inner">
          <span>Dry Vans</span>
          <span className="strip-dot" />
          <span>Reefers</span>
          <span className="strip-dot" />
          <span>Box Trucks</span>
          <span className="strip-dot" />
          <span>Hotshots</span>
          <span className="strip-dot" />
          <span>Power Only</span>
          <span className="strip-dot" />
          <span>Flatbeds</span>
        </div>
      </div>
    </section>
  );
}
