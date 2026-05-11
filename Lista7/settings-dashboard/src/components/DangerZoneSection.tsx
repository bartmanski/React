import { useState } from 'react';
import { SettingsDialog } from './SettingsDialog';
import styles from './DangerZoneSection.module.css';

interface DangerZoneSectionProps {
  onDeleteAccount: () => void;
}

export function DangerZoneSection({ onDeleteAccount }: DangerZoneSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.warning}>
        <span className={styles.warningIcon}>⚠️</span>
        <div className={styles.warningContent}>
          <h4 className={styles.warningTitle}>Delete Account</h4>
          <p className={styles.warningDescription}>
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
      </div>

      <button
        className={styles.deleteButton}
        onClick={() => setIsDialogOpen(true)}
      >
        Delete Account
      </button>

      <SettingsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Delete Account"
        description="Are you absolutely sure? This action cannot be undone. All your data will be permanently deleted."
        onConfirm={onDeleteAccount}
        confirmText="Delete Permanently"
        cancelText="Cancel"
        isDangerous
      />
    </div>
  );
}
