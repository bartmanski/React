import { useState, type SubmitEventHandler } from 'react';
import ErrorMessage from './ErrorHandlingsAndVisuals/ErrorMessage';

interface Props {
  onAdd: (text: string) => Promise<void>;
}

export default function AddTodoForm({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await onAdd(text);
      setText('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się dodać zadania');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      {error && <ErrorMessage message={error} />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Dodaj nowe zadanie..."
          className="w-full p-2 border rounded"
          disabled={loading}
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Dodawanie...' : 'Dodaj'}
        </button>
      </form>
    </div>
  );
}