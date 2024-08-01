import { useState, useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import { TodoContextProvider } from './Context'
import './App.css'

function App() {
  const [todos, SetTodos] = useState([])
  // passing a array so we can loop it and display
  const addTodo = (todo) => {
    SetTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    SetTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  // if found the id provided , set the new todo else keep the prevTodo

  const deleteTodo = (id) => {
    SetTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    SetTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  /*  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  } */

  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos)
    if(todos && todos.length > 0){
      SetTodos(todos)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div
                           key={todo.id}
                           className='w-full'
                           >
                              <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
