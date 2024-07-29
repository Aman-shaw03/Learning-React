import {ThemeContextProvider} from "./Context/ThemeContext"
import './App.css'
import { useState } from "react"
import ThemeButton from "./Components/ThemeButton"
import Card from "./Components/Card"
import { useEffect } from "react"

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightmode = ()=>{
    setThemeMode("light")
  }
  const darkmode = ()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeContextProvider value={{themeMode, lightmode, darkmode}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
