import { SettingsSwitch } from './SettingsSwitch';
import { SettingsRadioGroup, type RadioOption } from './SettingsRadioGroup';
import styles from './NotificationsSection.module.css';

export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  summaryFrequency: 'immediate' | 'daily' | 'weekly';
}

interface NotificationsSectionProps {
  settings: NotificationSettings;
  onSettingsChange: (settings: NotificationSettings) => void;
}

const FREQUENCY_OPTIONS: RadioOption[] = [
  { value: 'immediate', label: 'Immediately' },
  { value: 'daily', label: 'Daily digest' },
  { value: 'weekly', label: 'Weekly summary' },
];

export function NotificationsSection({
  settings,
  onSettingsChange,
}: NotificationsSectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.switches}>
        <SettingsSwitch
          label="Email Notifications"
          checked={settings.emailNotifications}
          onChange={(checked) =>
            onSettingsChange({ ...settings, emailNotifications: checked })
          }
          description="Receive email when important events occur"
        />

        <SettingsSwitch
          label="Push Notifications"
          checked={settings.pushNotifications}
          onChange={(checked) =>
            onSettingsChange({ ...settings, pushNotifications: checked })
          }
          description="Get instant browser notifications"
        />

        <SettingsSwitch
          label="Marketing Emails"
          checked={settings.marketingEmails}
          onChange={(checked) =>
            onSettingsChange({ ...settings, marketingEmails: checked })
          }
          description="Receive promotions and updates"
        />
      </div>

      <div className={styles.divider} />

      <SettingsRadioGroup
        label="Summary Frequency"
        options={FREQUENCY_OPTIONS}
        value={settings.summaryFrequency}
        onChange={(value) =>
          onSettingsChange({
            ...settings,
            summaryFrequency: value as 'immediate' | 'daily' | 'weekly',
          })
        }
      />
    </div>
  );
}
