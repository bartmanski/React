import { useState, useEffect } from 'react';
import type { Todo } from '../types/todos';
import ErrorMessage from './ErrorHandlingsAndVisuals/ErrorMessage';

interface Props {
  todo: Todo;
  onToggle: (id: string, done: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Czyszczenie błędu po 3 sekundach
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleToggle = async () => {
    setLoading(true);
    setError(null);
    try {
      await onToggle(todo.id, !todo.done);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się zmienić stanu zadania');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await onDelete(todo.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się usunąć zadania');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <ErrorMessage message={error} />}
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
          Usuń
        </button>
      </li>
    </div>
  );
}