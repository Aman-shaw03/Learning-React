import { useState } from 'react'
import Input from "./Components"
import useCurrencyInfo from './Hook/useCurrencyInfo';
import './App.css'

function App() {
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [Amount, setAmount]= useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo[From]
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(To)
    setTo(From)
    setAmount(convertedAmount)
    setConvertedAmount(Amount)
  }

  const convert = () => ( setConvertedAmount( Amount * currencyInfo[To]))

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/21815245/pexels-photo-21815245/free-photo-of-montana-amarilla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
