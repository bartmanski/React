import type { Todo } from '../types/todos';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onToggle: (id: string, done: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <p className="text-gray-500">No todos yet</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}