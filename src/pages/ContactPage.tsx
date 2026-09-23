import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request dispatch information"
        lead="Tell us about your equipment, preferred lanes, and home-time requirements. Our team can review your needs and discuss how our dispatch service can fit your operation."
      />
      <Contact />
    </>
  );
}
