import React from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <label className="todo-content">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="todo-text">{todo.text}</span>
        </label>
        
        {todo.description && (
          <button 
            className="expand-item-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse" : "Show details"}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        )}

        <button onClick={() => onDelete(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
      
      {isExpanded && todo.description && (
        <div className="todo-description">
          <p>{todo.description}</p>
        </div>
      )}
    </div>
  );
};
