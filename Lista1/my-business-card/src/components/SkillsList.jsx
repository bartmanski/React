import './SkillsList.css';

export const SkillsList = ({ skills }) => {
  return (
    <div className="skills-list">
      <h3 className="skills-title">Umiejętności</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
