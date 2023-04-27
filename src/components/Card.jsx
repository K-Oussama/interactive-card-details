
const Card = ({ cardData }) => {
    return (
        <section className="md:w-1/2 p-8 w-full">
    <div className="cardFront md:relative absolute z-10 md:top-0 top-32 md:left-0 left-12 md:mx-auto mr-8 ml-auto mb-8 md:mt-0 my-4 flex h-64 max-w-md w-full flex-col justify-end rounded-xl border bg-cover bg-no-repeat p-8 text-white transform md:scale-100 scale-75">
      <span className="mb-6 text-base md:text-xl lg:text-2xl font-medium tracking-wider">{cardData.number || "0000 0000 0000 0000"}</span>
      <div className="flex justify-between w-full">
        <span className="text-base uppercase">{cardData.name || "Jane Appleseed"}</span>
        <span className="text-base">{cardData.mm || "00"}/{cardData.yy || "00"}</span>
      </div>
    </div>

    <div className="cardBack md:relative absolute md:top-0 top-8 md:right-0 right-12 my-0 md:ml-auto md:mr-8 mx-auto h-64 max-w-md w-full rounded-xl border bg-cover bg-no-repeat p-8 text-white transform md:scale-100 scale-75">
      <span className="absolute text-2xl right-14 top-28">{cardData.cvc || "000"}</span>
    </div>
  </section>
    )
}

export default Card
