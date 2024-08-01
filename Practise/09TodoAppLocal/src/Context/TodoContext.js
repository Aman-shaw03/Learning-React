import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            completed: false,
            todo: "todo msg"
        }
    ],
    // we describe the properties here , we can use them by looping them

    addTodo: (id) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    // here we describe the functionality , which we will set in App.jsx
}) 

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}