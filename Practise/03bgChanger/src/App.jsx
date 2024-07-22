import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState("pink")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="bg-white flex flex-wrap justify-center px-2 py-2 rounded-3xl shadow-lg gap-3">
            <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "red"}}>
              Red
            </button>
            <button
            onClick={() => setColor("purple")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "purple"}}>
              purple
            </button>
            <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "green"}}>
              green
            </button>
            <button
            onClick={() => setColor("orange")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "orange"}}>
              orange
            </button>
            <button
            onClick={() => setColor("gray")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "gray"}}>
              gray
            </button>
            <button
            onClick={() => setColor("black")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "black"}}>
              black
            </button>
            <button
            onClick={() => setColor("lavender")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "lavender"}}>
              lavender
            </button>
            <button
            onClick={() => setColor("olive")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "olive"}}>
              olive
            </button>
            <button
            onClick={() => setColor("violet")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "violet"}}>
              violet
            </button>
            <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "yellow"}}>
              yellow
            </button>
            <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "blue"}}>
              blue
            </button>
            <button
            onClick={() => setColor("lime")}
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{backgroundColor: "lime"}}>
              lime
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
