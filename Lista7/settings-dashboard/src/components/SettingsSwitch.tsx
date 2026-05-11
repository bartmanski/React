import styles from './SettingsSwitch.module.css';

interface SettingsSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export function SettingsSwitch({
  label,
  checked,
  onChange,
  description,
}: SettingsSwitchProps) {
  return (
    <div className={styles.container}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          {label}
        </label>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <button
        className={`${styles.root} ${checked ? styles.checked : ''}`}
        onClick={() => onChange(!checked)}
        role="switch"
        aria-checked={checked}
      >
        <span className={styles.thumb} />
      </button>
    </div>
  );
}
