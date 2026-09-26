import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import { PAGE_HERO_IMAGES } from '../images';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request dispatch information"
        lead="Tell us about your equipment, preferred lanes, and home-time requirements. Our team can review your needs and discuss how our dispatch service can fit your operation."
        image={PAGE_HERO_IMAGES.contact}
      />
      <Contact />
    </>
  );
}
