import { useState, useEffect } from 'react'
import Thanks from '../components/thanks'

const Form = ({ setCardData, CardData }) => {
    const [validate, setValidate] = useState(false)
    useEffect(() => {
       const button = document.querySelector('button');
        if (CardData.name && CardData.number && CardData.mm && CardData.yy && CardData.cvc) {
          button.disabled = false;
          setValidate(false)
        } else {
          button.disabled = true;
        }
      }, [CardData])

    const handleSubmit = () => {
        setValidate(true)
    }
    const handleInput = (e) => {
      const { name, value } = e.target
      if (name === 'name') e.target.value = value.replace(/[^a-zA-Z ]+/g, '')
      if (name === 'number') e.target.value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
      if (name === 'mm' || name === 'yy') e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2)
      if (name === 'mm' && value > 12) e.target.value = '12'
      
      //const currentYear = new Date().getFullYear().toString().slice(-2);
      //if (name === 'yy' && (value && Number(value) <= Number(currentYear))) e.target.value = currentYear

      if (name === 'cvc') e.target.value = value.replace(/\D/g, '').substring(0, 4)
  
      setCardData({ ...CardData, [name]: e.target.value })
    }
    return (
        <section className="md:w-1/2 md:overflow-hidden w-full">
        <div className="transform transition-transform">
        { validate ? <Thanks setCardData={setCardData} setValidate={setValidate} /> :
          <form className="md:ml-14 ml-auto md:mt-0 mt-80 flex md:max-w-sm max-w-full flex-col p-4" onSubmit={handleSubmit}>
            <label className="labelname mb-4 flex flex-col gap-4 uppercase">Cardholder Name 
                <input type="text" placeholder="e.g. Jane Appleseed" onChange={handleInput} name="name" maxLength={34} className="rounded-xl border border-slate-600 border-opacity-70 p-3" /></label>
            <p className="m-0 h-5 overflow-hidden text-xs"></p>
            <label className="labelnumber mb-4 flex flex-col gap-4 uppercase">Card Number
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleInput} name="number" className="rounded-xl border border-slate-600 border-opacity-70 p-3" minLength={19} /></label>
            <p className="m-0 h-5 overflow-hidden text-xs"></p>
            <div className="cvc-mmyy relative mb-6 flex gap-3">
              <label className="labelname labelmm labelyy mb-4 flex w-1/2 flex-col gap-4 text-sm uppercase"
                >Exp. Date (MM/YY)
                <div className="flex gap-3">
                  <input type="text" placeholder="MM" onChange={handleInput} name="mm" className="w-full rounded-xl border border-slate-600 border-opacity-70 p-3" />
                  <input type="text" placeholder="YY" onChange={handleInput} name="yy" className="w-full rounded-xl border border-slate-600 border-opacity-70 p-3" />
                </div>
              </label>
              <p className="m-0 h-5 overflow-hidden text-xs"></p>
              <label className="labelname labelmm labelcvc mb-4 flex w-1/2 flex-col gap-4 text-sm uppercase"
                >CVC
                <input type="text" placeholder="e.g. 123" onChange={handleInput} name="cvc" maxLength={4} className="rounded-xl border border-slate-600 border-opacity-70 p-3" />
              </label>
              <p className="m-0 h-5 overflow-hidden text-xs"></p>
            </div>
            <button id="button" type="submit" className="btn-submit cursor-pointer rounded-md bg-slate-900 pb-4 pl-5 pr-5 pt-4 text-lg text-white disabled:opacity-50 disabled:cursor-not-allowed">Confirm</button>
          </form>
        }
        </div>
      </section>
    )
}

export default Form