import { SettingsSelect } from './SettingsSelect';
import { SettingsSlider } from './SettingsSlider';
import { SettingsTooltip } from './SettingsTooltip';
import styles from './AppearanceSection.module.css';

export interface AppearanceSettings {
  language: string;
  fontSize: number;
}

interface AppearanceSectionProps {
  settings: AppearanceSettings;
  onSettingsChange: (settings: AppearanceSettings) => void;
}

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'pl', label: 'Polski' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fr', label: 'Français' },
  { value: 'es', label: 'Español' },
  { value: 'it', label: 'Italiano' },
];

export function AppearanceSection({
  settings,
  onSettingsChange,
}: AppearanceSectionProps) {
  return (
    <div className={styles.section}>
      <SettingsSelect
        label="Language"
        options={LANGUAGE_OPTIONS}
        value={settings.language}
        onChange={(language) =>
          onSettingsChange({ ...settings, language })
        }
      />

      <SettingsSlider
        label="Font Size"
        value={settings.fontSize}
        onChange={(fontSize) =>
          onSettingsChange({ ...settings, fontSize })
        }
        min={12}
        max={20}
        step={1}
        unit="px"
      />

      <div className={styles.preview}>
        <label className={styles.previewLabel}>
          Preview
          <SettingsTooltip content="Font size preview of selected size">
            <span className={styles.infoIcon}>ℹ️</span>
          </SettingsTooltip>
        </label>
        <div
          className={styles.previewBox}
          style={{ fontSize: `${settings.fontSize}px` }}
        >
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
    </div>
  );
}
