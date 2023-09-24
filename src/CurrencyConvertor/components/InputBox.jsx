import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOptions = [],
    selectCurrency,
    amountDisbale = false,
    currencyDisable = false,
    className = ''
}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className='w-1/2'>
                <label className='text-black/40 mb-2 inline-block font-bold text-1xl' htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5 font-bold text-1xl'
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisbale}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full font-bold text-1xl'>
                    Currency Type
                </p>
                <select className='rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currenyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
