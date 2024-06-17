// we will be creating a component (input box) for our UI of currency converter

import React, {useId} from 'react'

function InputBox({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,
    AmountDisabled = false,
    CurrencyDisabled = false,
    CurrencyOptions = [],
    selectCurrency = "usd", 
    className = "",
}) {
   const  amountInputID = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputID}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {AmountDisabled}
                    value={Amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabled = {CurrencyDisabled}
                >
                    
                        {CurrencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                            {currency}
                            </option>))}
                            // always use key when loop in React for better optimizing
                            /*Without keys, React might have difficulty distinguishing between elements when the list changes. This can lead to unexpected behavior, such as elements not updating correctly or unnecessary re-renders. Keys help React keep track of individual elements and prevent reconciliation issues. */
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
