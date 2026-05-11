export interface ProfileSettings {
  firstName: string;
  email: string;
  skills: string[];
}

export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  summaryFrequency: 'immediate' | 'daily' | 'weekly';
}

export interface AppearanceSettings {
  language: string;
  fontSize: number;
}

export type Settings = {
  profile: ProfileSettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
};
