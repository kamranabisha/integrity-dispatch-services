import { useState, type FormEvent, type ChangeEvent } from 'react';
import { IconCheck, IconArrowRight, IconPin } from './Icons';

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  equipment: string;
  trucks: string;
  operatingArea: string;
  lanes: string;
  homeTime: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  equipment: '',
  trucks: '',
  operatingArea: '',
  lanes: '',
  homeTime: '',
  message: '',
};

const EQUIPMENT_OPTIONS = [
  'Dry Van',
  'Reefer',
  'Box Truck',
  'Hotshot',
  'Power Only',
  'Flatbed',
  'Other',
];

const TRUCK_OPTIONS = ['1', '2–5', '6–10', '10+'];

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[\d\s()+.-]{7,}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (!values.equipment) errors.equipment = 'Please select your equipment type.';
  if (!values.message.trim()) errors.message = 'Please tell us a bit about your operation.';
  return errors;
}

/**
 * Submits the carrier inquiry.
 *
 * No backend endpoint has been connected yet. Replace the body of this
 * function with a real API call (e.g. fetch('/api/inquiries', ...)) when
 * a server or form service is available.
 */
async function submitInquiry(values: FormState): Promise<void> {
  // TODO: Connect to a real backend endpoint when available.
  void values;
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await submitInquiry(values);
      setStatus('success');
      setValues(INITIAL);
    } catch {
      setStatus('idle');
      setErrors({ message: 'Something went wrong. Please try again.' });
    }
  };

  const fieldClass = (name: keyof FormState) =>
    `field${errors[name] ? ' has-error' : ''}`;

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Carrier Inquiry Form</h2>
            <p className="section-desc contact-desc">
              Tell us about your equipment, preferred lanes, and home-time requirements. Our team
              can review your needs and discuss how our dispatch service can fit your operation.
            </p>
            <ul className="contact-points">
              <li>
                <span className="icon-tile">
                  <IconPin className="check-icon" />
                </span>
                <div>
                  <strong>Based in Sheridan, Wyoming</strong>
                  <span>Serving carriers across the United States</span>
                </div>
              </li>
            </ul>
            <div className="contact-note">
              <strong>What happens next</strong>
              <p>
                Share a few details about your equipment, preferred lanes, and home-time needs. Our
                team will review your information and discuss how our dispatch service can fit your
                operation.
              </p>
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-delay-1">
            {status === 'success' ? (
              <div className="form-success" role="status" aria-live="polite">
                <span className="success-icon">
                  <IconCheck />
                </span>
                <h3>Thank you for contacting Integrity Dispatch Services LLC</h3>
                <p>
                  Your information has been received and we will review your dispatch requirements.
                </p>
                <button type="button" className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={fieldClass('fullName')}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={values.fullName}
                      onChange={handleChange}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className="field-error">
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={values.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className={fieldClass('email')}>
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="field-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className={fieldClass('phone')}>
                    <label htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="field-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className={fieldClass('equipment')}>
                    <label htmlFor="equipment">Equipment Type *</label>
                    <select
                      id="equipment"
                      name="equipment"
                      value={values.equipment}
                      onChange={handleChange}
                      aria-invalid={!!errors.equipment}
                      aria-describedby={errors.equipment ? 'equipment-error' : undefined}
                    >
                      <option value="">Select equipment</option>
                      {EQUIPMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.equipment && (
                      <span id="equipment-error" className="field-error">
                        {errors.equipment}
                      </span>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="trucks">Number of Trucks</label>
                    <select
                      id="trucks"
                      name="trucks"
                      value={values.trucks}
                      onChange={handleChange}
                    >
                      <option value="">Select fleet size</option>
                      {TRUCK_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="operatingArea">Preferred Operating Area</label>
                    <input
                      id="operatingArea"
                      name="operatingArea"
                      type="text"
                      placeholder="e.g. Midwest, Southeast, nationwide"
                      value={values.operatingArea}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="lanes">Preferred Lanes</label>
                    <input
                      id="lanes"
                      name="lanes"
                      type="text"
                      placeholder="e.g. Dallas → Chicago"
                      value={values.lanes}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="homeTime">Home-Time Requirements</label>
                  <input
                    id="homeTime"
                    name="homeTime"
                    type="text"
                    placeholder="e.g. Home every weekend"
                    value={values.homeTime}
                    onChange={handleChange}
                  />
                </div>

                <div className={fieldClass('message')}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your truck, schedule, and goals"
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="field-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-accent btn-lg btn-block"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
                  {status !== 'submitting' && <IconArrowRight className="btn-icon" />}
                </button>
                <p className="form-fineprint">
                  Required fields are marked with an asterisk (*).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
