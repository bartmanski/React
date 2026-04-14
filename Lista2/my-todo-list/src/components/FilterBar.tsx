import React from 'react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  showOnlyActive: boolean;
  onToggleFilter: () => void;
  onDeleteCompleted: () => void;
  hasCompletedTodos: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  searchQuery, 
  onSearchChange, 
  showOnlyActive, 
  onToggleFilter,
  onDeleteCompleted,
  hasCompletedTodos
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <div className="filter-actions">
        <label className="active-filter-label">
          <input
            type="checkbox"
            className="active-checkbox"
            checked={showOnlyActive}
            onChange={onToggleFilter}
          />
          Show only active
        </label>
        {hasCompletedTodos && (
          <button 
            onClick={onDeleteCompleted} 
            className="delete-completed-btn"
            title="Delete all completed tasks"
          >
            Clear Done
          </button>
        )}
      </div>
    </div>
  );
};
