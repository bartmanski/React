import './ProfileHeader.css';

export const ProfileHeader = ({ imageUrl, name, position }) => {
  return (
    <div className="profile-header">
      <img src={imageUrl} alt={`${name} profile`} className="profile-image" />
      <h1 className="profile-name">{name}</h1>
      <h2 className="profile-position">{position}</h2>
    </div>
  );
};
