import { ProfileHeader } from './ProfileHeader';
import { ContactDetails } from './ContactDetails';
import { AboutMe } from './AboutMe';
import { SkillsList } from './SkillsList';
import './BusinessCard.css';

export const BusinessCard = ({
  imageUrl,
  name,
  position,
  email,
  phone,
  website,
  about,
  skills,
}) => {
  const contactInfo = {
    email,
    phone,
    website,
  };

  return (
    <div className="business-card">
      <ProfileHeader imageUrl={imageUrl} name={name} position={position} />
      <ContactDetails contactInfo={contactInfo} />
      <AboutMe description={about} />
      <SkillsList skills={skills} />
    </div>
  );
};
