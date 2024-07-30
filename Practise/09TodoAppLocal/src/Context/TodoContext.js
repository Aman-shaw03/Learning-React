import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [{
        id: 1,
        completed: false,
        todo: "todo msg"
    }],

    addTodo: (id) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) 

export const TodoContextProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}