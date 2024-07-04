import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../Features/todo/todoSlicers';

export const store = configureStore({
    reducer: todoReducer
})


// it takes a  Object like in ContextAPI

// here  we create our STORE (global enviroment variable like in ContextAPI )
// Next step is create our Reducers/slicers