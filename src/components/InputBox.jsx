import React from "react";

function InputBox({
   currency, 
   list, 
   label,
   amount=0,
   onCurrencyChange,
   onAmountChange,
   amountDisabled = false
   }) {
   
   return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
         {/* label and amount */}
         <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block uppercase">
               {label}
            </label>
            <input
               type="number"
               className="outline-none w-full bg-transparent py-1.5"
			      value={amount}
               readOnly = {amountDisabled}
			      onChange = { (e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
            />
         </div>

         {/* type and currency */}
         <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select 
            className="rounded-lg px-1 py-1 uppercase bg-gray-100 cursor-pointer outline-none"
            onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
            value={currency}>
            
            {
				list.map( (value) => {
					return <option>{value}</option>
				})
			   }
            </select>
         </div>
      </div>
   );
}

export default InputBox;
