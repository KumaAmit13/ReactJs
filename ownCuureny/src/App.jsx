import { useState } from "react";
import useCurrencyInfo from "./Hook/UseCurrencyData";
import Input from "./InputComonent/Input";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const [data, date] = useCurrencyInfo(from);
  const option = Object.keys(data);

  const swapFunction = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(data[to] * amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1137443.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
            <Input/>
              <Input
                label="From"
                AmountWritable={false}
                amount={amount}
                date={date}
                selectCurrency={from}
                 CurrencryOptions={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapFunction}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                AmountWritable={true}
                Amount={convertedAmount}
                Currency={to}
                CurrencryOptions={option}
                onCurrencyChange={(currency) => setTo(currency)}
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

export default App;
