import styles from './ContactCard.module.scss';
import cardStyles from './Card.module.scss';

function ContactCard({ email, github, linkedin }: {
  email: string
  github: string
  linkedin: string
}) {
  return (
    <div className="card">
      <h3 className={cardStyles.cardHeading}>Contact</h3>
      <div className={styles.contactList}>
        <p className={styles.contactItem}>
          <span className={styles.contactLabel}>Email</span>{email}
        </p>
        <p className={styles.contactItem}>
          <span className={styles.contactLabel}>GitHub</span>{github}
        </p>
        <p className={styles.contactItem}>
          <span className={styles.contactLabel}>LinkedIn</span>{linkedin}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
