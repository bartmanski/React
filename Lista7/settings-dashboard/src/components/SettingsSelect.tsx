import styles from './SettingsSelect.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SettingsSelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export function SettingsSelect({
  label,
  options,
  value,
  onChange,
}: SettingsSelectProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
