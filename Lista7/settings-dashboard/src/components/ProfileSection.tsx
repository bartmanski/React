import { SettingsCombobox } from './SettingsCombobox';
import { SettingsTooltip } from './SettingsTooltip';
import styles from './ProfileSection.module.css';

export interface ProfileSettings {
  firstName: string;
  email: string;
  skills: string[];
}

interface ProfileSectionProps {
  settings: ProfileSettings;
  onSettingsChange: (settings: ProfileSettings) => void;
}

const SKILLS_OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'css', label: 'CSS' },
  { value: 'html', label: 'HTML' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'git', label: 'Git' },
  { value: 'docker', label: 'Docker' },
  { value: 'sql', label: 'SQL' },
];

export function ProfileSection({
  settings,
  onSettingsChange,
}: ProfileSectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName" className={styles.label}>
          First Name
          <SettingsTooltip content="Your first name used for profile identification">
            <span className={styles.infoIcon}>ℹ️</span>
          </SettingsTooltip>
        </label>
        <input
          id="firstName"
          type="text"
          value={settings.firstName}
          onChange={(e) =>
            onSettingsChange({ ...settings, firstName: e.target.value })
          }
          className={styles.input}
          placeholder="Enter your first name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
          <SettingsTooltip content="Your email address for notifications and account recovery">
            <span className={styles.infoIcon}>ℹ️</span>
          </SettingsTooltip>
        </label>
        <input
          id="email"
          type="email"
          value={settings.email}
          onChange={(e) =>
            onSettingsChange({ ...settings, email: e.target.value })
          }
          className={styles.input}
          placeholder="Enter your email"
        />
      </div>

      <SettingsCombobox
        label="Skills & Interests"
        options={SKILLS_OPTIONS}
        selectedValues={settings.skills}
        onChange={(skills) =>
          onSettingsChange({ ...settings, skills })
        }
        placeholder="Search and select your skills..."
      />
    </div>
  );
}
