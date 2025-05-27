import { TodoItem } from "./TodoItem";
import type { Todo } from "../hooks/useTodo";
import { FaClipboardList } from "react-icons/fa";

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList = ({ todos, handleDeleteTodo, onToggleTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <FaClipboardList className="empty-icon" />
        <h3 className="empty-title">¡No hay tareas!</h3>
        <p className="empty-description">
          Agrega tu primera tarea para comenzar a organizarte
        </p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
