import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

// createSlice is used for creating our reducers and NAnoid for generating our random ID 

// reducers are used to insert info and retrieve info from STORE and its has funtion functionality
// slicers are broader term then reducers

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

// we are intializing our STORE with some initialstate (data)

// now create a slice 

export const todoSlice = createSlice({

    // it take property and functions

    name: "todo",
    initialState,

    // since we want to set ou initialState as initialState prop , so we use new syntax

    // now give a reducer object fucntionality


    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // reducer provide 1. currentstate(state) and 2. a way to get values(action)

            state.todos.push(todo)
            // current state (todos) me directly push kr dia 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find((todo) => todo.id == id )
            if (todo) todo.text = text
        }
    } 
})

// in above we export our todoSlice but we have separately export our slicer/reducer and reducers (yes 2 times)

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions
// here we are exporting our functionality separately , we can use them on building our components

export default todoSlice.reducer
// here we are exporting our reducers to store , so our reducers has restricted access to store 