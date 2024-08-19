import React, {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  className = "",
}) {
  const amountInputId = useId(); //helps in optimization, gives a uniqueid 
                                 //dont use useid for list elements

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  min={0}
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e)=>onAmountChange &&  //on amountchange ki default value to pass kar nahi sakte kyoki woh function hai, to isliye && laga diya taaki method tabhi execute ho jab onAmountChange pass kiya gaya ho
                    onAmountChange(Number(e.target.value)) //ye function amount ko change karega jab hum kuch amount set karenge
                  }
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=> onCurrencyChange && // ye function currency ko change karega jab hum kuch currency select karenge
                    onCurrencyChange(e.target.value)
                  }
                  disabled={currencyDisable}
                  //map lagane se callback mein har value milegi array ki
                  //agar performance laani hai loop ke andar elements ko repeat karne ke liye to key use karo
              >
        
                      {currencyOptions.map((currency)=> (
                        <option key={currency} value={currency}> 
                          {currency}
                        </option>
                      ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;