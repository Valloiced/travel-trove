export default function About({ price, description }) {
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 2,
    });

    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-8 w-3/5 max-lg:w-full">
                <h1 className="font-gothicA1 font-bold text-2xl text-black">About this Property</h1>
                <p className="font-gothicA1 text-sm text-black">
                    {description.description}
                </p>
            </div>
            <div className="flex flex-col w-2/5 justify-center items-center max-lg:hidden">
                <div className="flex flex-col gap-4 w-3/4 border-[1px] border-darkblack-25 rounded-md py-8 px-4 max-lg:hidden">
                    <h2 className="font-gothicA1 font-bold text-black text-xl">Reserve Now!</h2>
                    <div className="flex flex-col gap-2">
                        <p className="font-gothicA1 font-light text-xs text-black/75">Price starts at</p>
                        <h1 className="font-gothicA1 font-extrabold text-3xl text-black">{priceFormatter.format(price || 0)}</h1>
                    </div>

                    <button className="flex flex-row justify-center items-center bg-green font-gothicA1 font-semibold text-black rounded-full py-2 hover:bg-green/75">
                        Reserve this property
                    </button>
                </div>
            </div>
            <div className="flex-row justify-between hidden fixed bottom-0 left-0 w-full px-2 bg-white shadow-md py-4 max-lg:flex">
                <div className="flex flex-col">
                    <p className="font-gothicA1 font-light text-xs text-black/75">Price starts at</p>
                    <h1 className="font-gothicA1 font-extrabold text-xl text-black">{priceFormatter.format(price || 0)}</h1>
                </div>

                <button className="flex flex-row justify-center items-center bg-green font-gothicA1 font-semibold text-black rounded-full py-2 px-4 self-center hover:bg-green/75">
                    Reserve
                </button>
            </div>
        </div>
    )
}