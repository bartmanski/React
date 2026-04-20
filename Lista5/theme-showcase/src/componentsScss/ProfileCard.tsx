import styles from './ProfileCard.module.scss';

function ProfileCard({ name, title, location, avatar }: {
  name: string
  title: string
  location: string
  avatar: string
}) {
  return (
    <div className={`${styles.profileCard} card`}>
      <div className={`${styles.profileAvatar} profileAvatar`}>{avatar}</div>
      <div>
        <h2 className={styles.profileName}>{name}</h2>
        <p className={styles.profileTitle}>{title}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
    </div>
  )
}

export default ProfileCard
