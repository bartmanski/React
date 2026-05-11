import { useState } from 'react';
import styles from './SettingsAccordion.module.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface SettingsAccordionProps {
  items: AccordionItem[];
  defaultValue?: string | null;
}

export function SettingsAccordion({
  items,
  defaultValue = null,
}: SettingsAccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(defaultValue);

  const toggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className={styles.root}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <button
            className={styles.trigger}
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItemId === item.id}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={`${styles.icon} ${openItemId === item.id ? styles.open : ''}`}>
              ▼
            </span>
          </button>
          {openItemId === item.id && (
            <div className={styles.panel}>
              <div className={styles.content}>{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
