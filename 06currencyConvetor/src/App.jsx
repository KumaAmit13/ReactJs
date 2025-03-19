import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/newCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const[from, setFrom] = useState("usd");
  const[to, setTo]=useState("inr");
  const[convertedAmount, setConvertedAmount]=useState(0);
  const [currencyInfo,date]= useCurrencyInfo(from);
  const option =Object.keys(currencyInfo);
  console.log(currencyInfo.usd);
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to]);
    console.log(date)
  }
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/30469970/pexels-photo-30469970/free-photo-of-futuristic-gaming-pc-setup-with-led-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
                    <span>Date : {date}</span>
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              CurrencryOptions={option}
                              onCurrencyChange={(currencu)=> setFrom(currencu)}
                              selectCurrency={from}
                              onAmountChange={(amount)=> setAmount(amount)}
                              
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
                              amount={convertedAmount}
                              CurrencryOptions={option}
                              onCurrencyChange={(currency)=> setTo(currency)}
                              selectCurrency={to}
                              amountDisaable="true"
                              onAmountChange={(amount)=> setAmount(amount)}                             
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from} to {to}
                      </button>
                  </form>
              </div>
          </div>
      </div>

  )
}

export default App
