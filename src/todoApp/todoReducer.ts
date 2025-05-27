import type { Todo, TodoAction } from "../hooks/useTodo";

export const todoReducer = (initialState: Todo[] = [], action: TodoAction): Todo[] => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default: 
            return initialState;
    }
}