import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string, description: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), description.trim());
      setText('');
      setDescription('');
      setIsExpanded(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="New task..."
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          type="button" 
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Hide description" : "Add description"}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      
      {isExpanded && (
        <textarea
          placeholder="Add details..."
          className="todo-description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      )}
      
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
};
