import { useState } from 'react'
// this useState is a Hook from React. 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  // its gives us 2 things=> a counter and a function to manipulate the counter

  // let counter = 10

  const addValue = ()=>{
    counter = counter + 1
    if (counter > 20) {
      alert("Maximum Number Reached 20")
      } else {

        setCounter(counter)
        console.log(counter);
    }
  }
  // in console log it is increasing , but in UI it isnt , since it is controlled by react
  // # UI updation is controlled by React
  const removeValue = ()=>{
    counter = counter - 1
    if (counter < 0) {
      alert("Maximum Number Reached 0")
      } else {
        
        setCounter(counter)
        console.log(counter);
    }
  }
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter: {counter}</h2>
      <button
      onClick={addValue}>Add Value  {counter}</button>
      <button
      onClick={removeValue}>Remove Value  {counter}</button>
      <p>footer  {counter}</p>
    </>
  )
}

export default App

// so why we need React Hooks, in this project if we dont use React Hooks everytime upon a update of a property , we have to do dom.queryselector and update it which will be a length code and process , but with hooks we can use a useState hook and it will gives a function to manipulate the item/property
