import './AboutMe.css';

export const AboutMe = ({ description }) => {
  return (
    <div className="about-me">
      <h3 className="about-title">O mnie</h3>
      <p className="about-description">{description}</p>
    </div>
  );
};
