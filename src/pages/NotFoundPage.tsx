import { Link } from 'react-router-dom';
import { IconArrowRight } from '../components/Icons';
import PageHero from '../components/PageHero';
import NotFound from '../components/NotFoundIllustration';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <PageHero eyebrow="404" title="Page not found" lead="The page you are looking for does not exist or may have moved." />
      <NotFound />
      <div className="container not-found-actions">
        <Link to="/" className="btn btn-accent">
          Back to Home
          <IconArrowRight className="btn-icon" />
        </Link>
        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
