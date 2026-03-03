import './ContactDetails.css';

export const ContactDetails = ({ contactInfo }) => {
  return (
    <div className="contact-details">
      <h3 className="contact-title">Kontakt</h3>
      <div className="contact-items">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <a href={`mailto:${contactInfo.email}`} className="contact-link">
            {contactInfo.email}
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <a href={`tel:${contactInfo.phone}`} className="contact-link">
            {contactInfo.phone}
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🌐</span>
          <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="contact-link">
            {contactInfo.website}
          </a>
        </div>
      </div>
    </div>
  );
};
