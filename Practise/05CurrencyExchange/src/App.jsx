import { useState } from 'react'
import {Input} from "./Components"
import useCurrencyInfo from './Hook/useCurrencyInfo';
import './App.css'

function App() {
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [Amount, setAmount]= useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(From)
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
              backgroundImage: `url('https://images.unsplash.com/photo-1721655799196-7c50607778a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <Input
                              label="From"
                              Amount= {Amount}
                              selectCurrency = {From}
                              CurrencyOptions = {options}
                              onAmountChange = {(currency) => setAmount(currency)}
                              onCurrencyChange = {(currency) => setFrom(currency) }
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <Input
                              label="To"
                              Amount= {convertedAmount}
                              CurrencyOptions= {options} 
                              selectCurrency = {To}
                              onCurrencyChange = {(currency) => setTo(currency)}
                              AmountDisabled
                              
                          />
                      </div>
                      <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {From.toUpperCase()} to {To.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
