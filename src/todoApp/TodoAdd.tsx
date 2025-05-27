import type { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import type { Todo } from "../hooks/useTodo";
import { FaPlus, FaPen } from "react-icons/fa";

interface TodoAddProps {
  handleNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ handleNewTodo }: TodoAddProps) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ""
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (description.length <= 1) return;
    
    const newTodo: Todo = {
      id: new Date().getTime(),
      description,
      done: false
    };
    
    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <div className="input-group">
        <FaPen className="input-icon" />
        <input 
          type="text" 
          placeholder="¿Qué necesitas hacer?" 
          className="todo-input" 
          name="description" 
          value={description} 
          onChange={onInputChange} 
        />
      </div>
      <button 
        className="btn-add" 
        type="submit"
        disabled={description.length <= 1}
      >
        <FaPlus />
        Agregar Tarea
      </button>
    </form>
  );
};
