import { useState } from 'react';
import styles from './SettingsCombobox.module.css';

interface ComboboxOption {
  value: string;
  label: string;
}

interface SettingsComboboxProps {
  label: string;
  options: ComboboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

export function SettingsCombobox({
  label,
  options,
  selectedValues,
  onChange,
  placeholder = 'Search and select...',
}: SettingsComboboxProps) {
  const [filterValue, setFilterValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleSelection = (optionValue: string) => {
    if (selectedValues.includes(optionValue)) {
      onChange(selectedValues.filter((v) => v !== optionValue));
    } else {
      onChange([...selectedValues, optionValue]);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.control}>
        <input
          type="text"
          placeholder={placeholder}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 100)}
          onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
          className={styles.input}
        />
        {isOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
          />
        )}
        {isOpen && (
          <div className={styles.popup}>
            <div className={styles.listbox}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <label key={option.value} className={styles.option}>
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option.value)}
                      onChange={() => handleSelection(option.value)}
                      className={styles.checkbox}
                    />
                    <span>{option.label}</span>
                  </label>
                ))
              ) : (
                <div className={styles.noResults}>No results found</div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={styles.selectedTags}>
        {selectedValues.map((value) => {
          const option = options.find((opt) => opt.value === value);
          return (
            <span key={value} className={styles.tag}>
              {option?.label}
              <button
                className={styles.tagRemove}
                onClick={() => onChange(selectedValues.filter((v) => v !== value))}
              >
                ×
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
