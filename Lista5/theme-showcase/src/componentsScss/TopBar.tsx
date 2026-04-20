import { themes, type ThemeMode } from '../model';
import styles from './TopBar.module.scss';

function TopBar({ theme, onThemeChange }: {
  theme: ThemeMode
  onThemeChange: (t: ThemeMode) => void
}) {
  return (
    <div className={`${styles.topBar} ${styles.card} card`}>
      <h1 className={styles.appTitle}>Theme Showcase</h1>
      <select
        className={styles.themeSelect}
        value={theme}
        onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TopBar
