import type { Todo } from "../hooks/useTodo";
import { FaTrash, FaCheck } from "react-icons/fa";

interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem = ({ todo, handleDeleteTodo, onToggleTodo }: TodoItemProps) => {
  return (
    <li className="todo-item">
      <div className="todo-content-wrapper" onClick={() => onToggleTodo(todo.id)}>
        <div className={`todo-checkbox ${todo.done ? 'completed' : ''}`}>
          {todo.done && <FaCheck />}
        </div>
        <span className={`todo-text ${todo.done ? 'completed' : ''}`}>
          {todo.description}
        </span>
      </div>
      <div className="todo-actions">
        <button 
          className="btn-icon btn-delete" 
          onClick={() => handleDeleteTodo(todo.id)}
          title="Eliminar tarea"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
