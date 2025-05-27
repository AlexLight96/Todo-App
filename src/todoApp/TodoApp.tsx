import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";
import { FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";

export const TodoApp = () => {
  const { 
    todos, 
    todosCount, 
    pendingTodosCount, 
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo 
  } = useTodo();

  const completedTodosCount = todosCount - pendingTodosCount;

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1>
          <FaTasks style={{ marginRight: '0.5rem' }} />
          Mi Lista de Tareas
        </h1>
        <div className="todo-stats">
          <div className="stat-item">
            <span className="stat-number">{todosCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{pendingTodosCount}</span>
            <span className="stat-label">Pendientes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{completedTodosCount}</span>
            <span className="stat-label">Completadas</span>
          </div>
        </div>
      </header>
      
      <div className="todo-content">
        <div className="todo-list-section">
          <h2 className="section-title">
            <FaClock />
            Mis Tareas
          </h2>
          <TodoList 
            todos={todos} 
            handleDeleteTodo={(id: number) => handleDeleteTodo(id)} 
            onToggleTodo={handleToggleTodo} 
          />
        </div>
        
        <div className="todo-add-section">
          <h2 className="section-title">
            <FaCheckCircle />
            Agregar Nueva Tarea
          </h2>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};



