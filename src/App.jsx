import { useState } from 'react'
import InputBox from './components/InputBox';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const currencyList = Object.keys(currencyInfo)

  function convert() {
   const res =( amount*currencyInfo[to]).toFixed(2)
   setConvertedAmount(res)
  }
  function swap() {
   setFrom(to)
   setTo(from)
   setAmount(convertedAmount)
   convert()
  }

  return (
     <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
           backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
     >
        <div className="w-full">
           <div className="w-full max-w-lg md:text-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
              onSubmit={(e)=>{
               e.preventDefault()
               convert()
               }}>
                 <div className="w-full mb-1">
                    <InputBox
                       currency={from}
                       list={currencyList}
                       label={"from"}
                       amount={amount}
                       onCurrencyChange={(cur) => setFrom(cur)}
                       onAmountChange={(amount) => setAmount(amount)}
                       amountDisabled={false}
                    />
                 </div>
                 <div className="relative w-full h-0.5">
                    <button 
                     className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                     onClick={swap}>
                       Swap
                    </button>
                 </div>
                 <div className="w-full mb-1">
                    <InputBox
                       currency={to}
                       list={currencyList}
                       label={"to"}
                       amount={convertedAmount}
                       onCurrencyChange={(cur) => setTo(cur)}
                       amountDisabled={true}
                    />
                 </div>
                 <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                 >
                    Convert
                 </button>
              </form>
           </div>
        </div>
     </div>
  );
}

export default App
