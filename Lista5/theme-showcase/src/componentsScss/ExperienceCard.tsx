import type { Experience } from '../model';
import styles from './ExperienceCard.module.scss';
import cardStyles from './Card.module.scss';

function ExperienceCard({ experience }: { experience: Experience[] }) {
  return (
    <div className="card">
      <h3 className={cardStyles.cardHeading}>Experience</h3>
      <div className={styles.experienceList}>
        {experience.map((exp) => (
          <div key={exp.company} className={styles.experienceItem}>
            <div>
              <p className={styles.experienceRole}>{exp.role}</p>
              <p className={styles.experienceCompany}>{exp.company}</p>
            </div>
            <span className={styles.experiencePeriod}>{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
