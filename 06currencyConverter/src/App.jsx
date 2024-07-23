import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [Amount, setAmount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(From)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(To)
    setTo(From)
    setconvertedAmount(Amount)
    setAmount(setconvertedAmount)
  }

  const convert = () => { setconvertedAmount(Amount * currencyInfo[To]) 
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/21815245/pexels-photo-21815245/free-photo-of-montana-amarilla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
        }}>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm 
            bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            Amount={Amount}
                            CurrencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={From}
                            onAmountChange={(Amount) => setAmount(Amount)}
                            
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
                        <InputBox
                            label="To"
                            Amount={convertedAmount}
                            CurrencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={To}
                            AmountDisabled
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {From.toUpperCase()} to {To.toUpperCase()}
                        
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
