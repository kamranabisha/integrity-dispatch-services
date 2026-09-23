import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import HelpCards from '../components/HelpCards';
import Services from '../components/Services';
import Equipment from '../components/Equipment';
import WhyIntegrity from '../components/WhyIntegrity';
import Process from '../components/Process';
import RevenueOpportunities from '../components/RevenueOpportunities';
import RevenueDisclaimer from '../components/RevenueDisclaimer';
import FinalCTA from '../components/FinalCTA';
import { IconArrowRight } from '../components/Icons';

export default function HomePage() {
  return (
    <>
      <Hero />

      <About cta={
        <Link to="/about" className="btn btn-primary">
          Learn More
          <IconArrowRight className="btn-icon" />
        </Link>
      } />

      <HelpCards />

      <Services preview cta={
        <Link to="/services" className="btn btn-accent">
          View All Services
          <IconArrowRight className="btn-icon" />
        </Link>
      } />

      <Equipment preview cta={
        <Link to="/equipment" className="btn btn-accent">
          Explore Equipment
          <IconArrowRight className="btn-icon" />
        </Link>
      } />

      <WhyIntegrity />

      <Process preview cta={
        <Link to="/how-it-works" className="btn btn-primary">
          View Full Process
          <IconArrowRight className="btn-icon" />
        </Link>
      } />

      <RevenueOpportunities preview />
      <RevenueDisclaimer />

      <FinalCTA />
    </>
  );
}
