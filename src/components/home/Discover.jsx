export default function Discover() {
    return (
        <div className="flex flex-row w-screen justify-evenly items-center py-24">
            <div className="flex flex-col gap-8 w-1/3">
                <div className="flex flex-col gap-4">
                    <h2 className="text-green font-gothicA1 text-xl">DISCOVER</h2>
                    <h1 className="text-black font-cinzeldeco font-bold text-3xl">Explore and Travel <br /> Across the World</h1>
                    <p className="text-black font-gothicA1 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada euismod risus sed dapibus. Phasellus egestas neque eu volutpat scelerisque. Phasellus quis suscipit ipsum. Vestibulum eu purus ante. Sed luctus vulputate purus consequat ornare. Mauris nec ante ante. Aliquam consequat aliquet porta. Etiam vitae vehicula risus. Vestibulum vulputate enim et purus venenatis efficitur. Nam feugiat pharetra turpis non rutrum. Aliquam semper enim sem, non scelerisque purus fringilla sit amet.
                    </p>
                </div>
                <button className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-10 rounded-full cursor-pointer self-start">
                    Discover
                </button>
            </div>
            <div className="w-[50%] bg-red-200 h-full" />
        </div>
    )
}