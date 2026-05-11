import styles from './SettingsRadioGroup.module.css';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface SettingsRadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export function SettingsRadioGroup({
  label,
  options,
  value,
  onChange,
}: SettingsRadioGroupProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.root}>
        {options.map((option) => (
          <div key={option.value} className={styles.optionWrapper}>
            <input
              type="radio"
              id={option.value}
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className={styles.input}
            />
            <div className={styles.labelWrapper}>
              <label htmlFor={option.value} className={styles.optionLabel}>
                {option.label}
              </label>
              {option.description && (
                <p className={styles.optionDescription}>{option.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
