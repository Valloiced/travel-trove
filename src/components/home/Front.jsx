import { MdSearch } from "react-icons/md";

import HomeBG from "../../assets/home-bg.png";

export default function Front() {
    return (
        <div className="relative flex flex-col w-screen h-[100vh] object-contain">
            <img src={HomeBG} className="w-full h-full object-cover bg-black" alt="Home Background" />
            <div className="absolute top-0 left-0 flex flex-col w-full h-full bg-opacity-70 bg-[#000000] justify-center items-center gap-16">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-white font-cinzeldeco font-bold text-7xl">TraveL Trove</h1>
                    <h1 className="text-white font-gothicA1 font-bold text-xl">Your Passport to Adventure, Booked Online</h1>
                </div>
                <div className="flex flex-row gap-8 w-[32rem] justify-between items-center py-2 px-2 pl-4 bg-white rounded-full">
                    <div className="flex flex-row gap-2 items-center w-full">
                        <MdSearch className="text-2xl text-black text-opacity-75" />
                        <input 
                            type="text"
                            placeholder="Search Destination"
                            className="w-full focus-visible:outline-none font-gothicA1"
                        />
                    </div>
                    <button className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-10 rounded-full cursor-pointer">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
