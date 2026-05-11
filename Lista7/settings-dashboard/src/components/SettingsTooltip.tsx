import styles from './SettingsTooltip.module.css';

interface SettingsTooltipProps {
  content: string;
  children: React.ReactNode;
}

export function SettingsTooltip({ content, children }: SettingsTooltipProps) {
  return (
    <div className={styles.trigger} title={content}>
      {children}
    </div>
  );
}
