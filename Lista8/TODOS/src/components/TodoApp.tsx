import { useState, useEffect } from 'react';
import type { Todo } from '../types/todos';
// bo kolizja nazw była w deleteTodo
import { fetchTodos, createTodo, updateTodo, deleteTodo as deleteFromApi } from '../api';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import ErrorMessage from './ErrorHandlingsAndVisuals/ErrorMessage';
import LoadingSpinner from './ErrorHandlingsAndVisuals/LoadingSpinner';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setError(null);
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load todos');
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);
// Tablica mowi że to się wykona tylko raz przy montowaniu komponentu
// cos w niej mowiło by że jak to coś sie zmienia to uruchom
// brak przy re-rendrze
  const addTodo = async (text: string) => {
    const newTodo = await createTodo({ text });
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id: string, done: boolean) => {
    const updated = await updateTodo(id, { text: todos.find(t => t.id === id)!.text, done });
    setTodos(todos.map(t => t.id === id ? updated : t));
  };

  const deleteTodo = async (id: string) => {
    await deleteFromApi(id);
    setTodos(todos.filter(t => t.id !== id));
  };


if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      {error && <ErrorMessage message={error} />}
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}