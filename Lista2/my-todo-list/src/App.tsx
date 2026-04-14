import { useState } from 'react'
import './App.css'
import type { Todo } from './types'
import { TodoForm } from './components/TodoForm'
import { FilterBar } from './components/FilterBar'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'

// I will use crypto.randomUUID() if available or a simple counter/Date.now().
// Since this is a simple app, Date.now().toString() + random is enough.

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Learn React', description: 'Understand components, props, and state.', completed: true },
    { id: '2', text: 'Build a ToDo App', description: 'Implement add, delete, and toggle functionality.', completed: false },
    { id: '3', text: 'Master TypeScript', description: 'Learn interfaces and types.', completed: false },
  ])
  const [searchQuery, setSearchQuery] = useState('')
  const [showOnlyActive, setShowOnlyActive] = useState(false)

  const addTodo = (text: string, description: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      description,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesActive = showOnlyActive ? !todo.completed : true
    return matchesSearch && matchesActive
  })

  return (
    <div className="app-container">
      <Header title="My ToDo List" />
      
      <TodoForm onAdd={addTodo} />
      
      <FilterBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showOnlyActive={showOnlyActive} 
        onToggleFilter={() => setShowOnlyActive(!showOnlyActive)} 
        onDeleteCompleted={deleteCompleted}
        hasCompletedTodos={todos.some(t => t.completed)}
      />

      <TodoList 
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
