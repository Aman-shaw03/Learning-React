import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{background: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center px-2 py-2 rounded-3xl shadow-lg gap-3">
          <button
          onClick={()=>setColor("red")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"red"}}>Red
          </button>
          <button
          onClick={()=>setColor("green")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"green"}}>green
          </button>
          <button
          onClick={()=>setColor("orange")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"orange"}}>orange
          </button>
          <button
          onClick={()=>setColor("lavender")}
          className="px-4 py-1 rounded-full outline-none text-black shadow-lg"
          style={{background:"lavender"}}>lavender
          </button>
          <button
          onClick={()=>setColor("purple")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"purple"}}>purple
          </button>
          <button
          onClick={()=>setColor("blue")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"blue"}}>blue
          </button>
          <button
          onClick={()=>setColor("olive")}
          className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
          style={{background:"olive"}}>olive
          </button>
          </div>
      </div>
    </div>
  )
}

export default App
// so onclick expect a function this time , since we have to specify colorname to the setColor so if we did onClick={setColor} it is referencing the function but we cant pass the color name as a argument => setColor("colorName") =>as this will execute the function and it will pass the result of the function(setColor) inside the function to the onClick and the loop starts but the onClick expect a function not a result value , 
// so the problem is of the syntax , to tackle this we have to write and pass a callback function and inside it we will pass the setColor with arg

// onClick = {()=>setColor("colorName")}

//updated info 
// if we pass the argument directly so the state keep on rendering and updateing in a continuos loop, so we wrap it ina arrow function
// so when funtion is execute in Onclick => it then call and execute setColor and that is not returning anything to onClick => which stops the error loop