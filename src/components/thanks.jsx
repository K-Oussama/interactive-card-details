const Thanks = ({ setCardData, setValidate }) => {
    const reset = () => {
		setCardData({ name: null, number: null, mm: null, yy: null, cvc: null })
        setValidate(false)
	}

    return (
        <div className="cardThanks text-center text-slate-900 max-w-lg">
        <img src="/icon-complete.svg" className="inline mb-7" alt="complete" />
        <p className="text-lg uppercase mb-0">Thank you!</p>
        <p className="opacity-80 text-xs mt-3 mb-7">We've added your card details</p>
        <button className="w-2/3 px-5 py-4 cursor-pointer bg-slate-900 text-white border rounded-lg text-base" onClick={reset}>Continue</button>
      </div>
    )
}
export default Thanks;