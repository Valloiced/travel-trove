import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import HomeBG from "../../assets/home-bg.png";

export default function Front() {
    const navigate = useNavigate();

    const [toSearch, setToSearch] = useState("");

    const handleNavigate = () => {
        navigate(`/booking/${toSearch}`, { replace: false });
    }

    return (
        <div className="relative flex flex-col w-screen h-screen object-contain max-sm:h-[60vh]">
            <img src={HomeBG} className="w-full h-full object-cover bg-black" alt="Home Background" />
            <div className="absolute top-0 left-0 flex flex-col w-full h-full bg-opacity-70 bg-[#000000] justify-center items-center gap-16">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-white font-cinzeldeco font-bold text-7xl max-sm:text-5xl">TraveL Trove</h1>
                    <h1 className="text-white font-gothicA1 font-bold text-xl max-sm:text-xs">Your Passport to Adventure, Booked Online</h1>
                </div>
                <div className="flex flex-row gap-8 w-2/5 min-w-96 justify-between items-center py-2 px-2 pl-4 bg-white rounded-full max-sm:min-w-80">
                    <div className="flex flex-row gap-2 items-center w-full">
                        <MdSearch className="text-2xl text-black text-opacity-75" />
                        <input 
                            type="text"
                            placeholder="Search Destination"
                            className="w-full focus-visible:outline-none font-gothicA1"
                            onChange={(ev) => setToSearch(ev.target.value)}
                        />
                    </div>
                    <button 
                        className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-10 rounded-full cursor-pointer max-sm:px-6 hover:bg-green/75"
                        onClick={handleNavigate}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
