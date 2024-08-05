import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Features/todo/todoSlicers"


export const store = configureStore({
    reducer: todoReducer
})