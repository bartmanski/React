import styles from './SettingsDialog.module.css';

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  isDangerous?: boolean;
}

export function SettingsDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDangerous = false,
}: SettingsDialogProps) {
  if (!open) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={() => onOpenChange(false)} />
      <div className={styles.popup}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            className={styles.cancelButton}
            onClick={() => onOpenChange(false)}
          >
            {cancelText}
          </button>
          <button
            className={`${styles.confirmButton} ${isDangerous ? styles.dangerous : ''}`}
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </>
  );
}
