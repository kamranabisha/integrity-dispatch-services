import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from './Icons';
import { HERO_IMAGE } from '../images';

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 720px)').matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y < window.innerHeight) {
          media.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Integrity Dispatch Services introduction">
      <div className="hero-media" aria-hidden="true" ref={mediaRef}>
        <div className="hero-truck-drive">
          <img src={HERO_IMAGE} alt="" fetchPriority="high" className="hero-truck-base" />
          <img src={HERO_IMAGE} alt="" className="hero-truck-xray" />
          <div className="hero-truck-scan" />
          <div className="hero-truck-headlights">
            <span className="headlight beam-left" />
            <span className="headlight beam-right" />
          </div>
        </div>
        <div className="hero-speed-streaks">
          <span /><span /><span /><span /><span />
        </div>
        <div className="hero-road-motion" />
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
          {[0, 1].map((copy) => (
            <span key={copy} className="hero-strip-group" style={{ display: 'contents' }}>
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
              <span className="strip-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
