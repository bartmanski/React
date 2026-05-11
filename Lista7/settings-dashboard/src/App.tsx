import { useState } from 'react';
import { SettingsAccordion } from './components/SettingsAccordion';
import { ProfileSection, type ProfileSettings } from './components/ProfileSection';
import {
  NotificationsSection,
  type NotificationSettings,
} from './components/NotificationsSection';
import {
  AppearanceSection,
  type AppearanceSettings,
} from './components/AppearanceSection';
import { DangerZoneSection } from './components/DangerZoneSection';
import styles from './App.module.css';

interface Settings {
  profile: ProfileSettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
}

const DEFAULT_SETTINGS: Settings = {
  profile: {
    firstName: 'John',
    email: 'john@example.com',
    skills: [],
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    summaryFrequency: 'daily',
  },
  appearance: {
    language: 'en',
    fontSize: 14,
  },
};

function App() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    setSettings(DEFAULT_SETTINGS);
  };

  const accordionItems = [
    {
      id: 'profile',
      title: '👤 Profile',
      content: (
        <ProfileSection
          settings={settings.profile}
          onSettingsChange={(profile) =>
            setSettings({ ...settings, profile })
          }
        />
      ),
    },
    {
      id: 'notifications',
      title: '🔔 Notifications',
      content: (
        <NotificationsSection
          settings={settings.notifications}
          onSettingsChange={(notifications) =>
            setSettings({ ...settings, notifications })
          }
        />
      ),
    },
    {
      id: 'appearance',
      title: '🎨 Appearance',
      content: (
        <AppearanceSection
          settings={settings.appearance}
          onSettingsChange={(appearance) =>
            setSettings({ ...settings, appearance })
          }
        />
      ),
    },
    {
      id: 'danger',
      title: '⚠️ Danger Zone',
      content: <DangerZoneSection onDeleteAccount={handleDeleteAccount} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>
          Manage your account preferences and settings
        </p>
      </div>
      <SettingsAccordion items={accordionItems} defaultValue="profile" />
    </div>
  );
}

export default App;
