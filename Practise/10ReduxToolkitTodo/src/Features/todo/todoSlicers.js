import {createSlice, nanoid} from "@reduxjs/toolkit"
import { act } from "react";

//first we craete a intialstate for our store
const initialState = {
    todos: [{
        id: 1,
        text: "HEllow Eorld"
    }]
}
// now create a slice which includes our reducers which we will use with useSelector() and useDispatch()
export const todoSlice = createSlice({

    name: "todo",
    initialState,
// my question is why we craeting this name "todo", where we will see it or use it 

// this is the naming convention , its "reducers" and not "reducer"
    reducers : {
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=> {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action)=> {
            const {id, text} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo) todo.text = text 
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//exporting them separately so we can use it to useSelector and useDispatch to building our components

export default todoSlice.reducer
// here we are exporting our reducers to store , so our reducers has restricted access to store 