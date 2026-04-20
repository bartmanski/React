import styles from './AboutCard.module.scss';
import cardStyles from './Card.module.scss';

function AboutCard({ text }: { text: string }) {
  return (
    <div className="card">
      <h3 className={cardStyles.cardHeading}>About</h3>
      <p className={styles.aboutText}>{text}</p>
    </div>
  )
}

export default AboutCard
