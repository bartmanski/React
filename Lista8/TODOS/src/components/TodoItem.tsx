import { useState } from 'react';
import type { Todo } from '../types/todos';

interface Props {
  todo: Todo;
  onToggle: (id: string, done: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      await onToggle(todo.id, !todo.done);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await onDelete(todo.id);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li className="flex items-center gap-3 p-3 bg-gray-100 rounded hover:bg-gray-200 transition">
      {loading ? (
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <input 
          type="checkbox" 
          checked={todo.done} 
          onChange={handleToggle}
          className="w-5 h-5 cursor-pointer"
        />
      )}
      <span className={todo.done ? 'line-through text-gray-500' : 'text-gray-800'}>
        {todo.text}
      </span>
      <button 
        onClick={handleDelete}
        disabled={loading}
        className="ml-auto px-3 py-1 text-red-500 hover:bg-red-100 rounded transition disabled:opacity-50"
      >
        Delete
      </button>
    </li>
  );
}