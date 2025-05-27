import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoApp/todoReducer";

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

export type TodoAction = | { type: "[TODO] Add Todo"; payload: Todo } | { type: "[TODO] Remove Todo"; payload: number } | { type: "[TODO] Toggle Todo"; payload: number };

const initialState: Todo[] = [];

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer as (state: Todo[], action: TodoAction) => Todo[], initialState, init);
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);              
    
    const handleNewTodo = (todo: Todo): void => {
      const action: TodoAction = {
        type: "[TODO] Add Todo",
        payload: todo,
      };
      dispatch(action);
    }
    
    const handleDeleteTodo = (id: number): void => {
      dispatch({
        type: "[TODO] Remove Todo",
        payload: id,
      });
    }
    
    const handleToggleTodo = (id: number): void => {
      dispatch({
        type: "[TODO] Toggle Todo",
        payload: id,
      });
    }

    const todosCount: number = todos.length;
    const pendingTodosCount: number = todos.filter(todo => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
}
