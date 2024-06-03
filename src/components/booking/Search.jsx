import { useState } from "react";

import { 
    MdOutlineLocationOn,
    MdCalendarMonth,
    MdPersonOutline,
    MdSearch
 } from "react-icons/md";

import TravellersModal from "./modal/TravellersModal";
import CheckInOutPicker from "./modal/CheckInOutPicker";

let startDate = new Date();
let endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + 1);

startDate = new Intl.DateTimeFormat('sv-SE').format(startDate)
endDate = new Intl.DateTimeFormat('sv-SE').format(endDate);

export default function Search({
    destination,
    travellerDetails,
    dates,
    setDestination,
    setDates,
    setProperties,
    setTravellerDetails,
    handleSearch
}) {
    const [showTravellerModal, setShowTravellerModal] = useState(false);

    return (
        <div className="flex flex-row justify-between gap-12 w-full">
            <div className="flex flex-row px-4 h-16 border-[1px] border-darkblack-50 rounded-md items-center w-full gap-4 focus-within:border-green focus-within:border-2">
                <MdOutlineLocationOn className="text-2xl text-black" />
                <div className="flex flex-col w-full">
                    <h3 className="text-black font-gothicA1 text-xs">Location</h3>
                    <input
                        type="text"
                        className="text-black font-gothicA1 focus-visible:outline-none capitalize"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(e) => setDestination(e.value)}
                    />
                </div>
            </div>
            <div className="flex flex-row px-4 h-16 border-[1px] border-darkblack-50 rounded-md items-center w-full gap-4">
                <MdCalendarMonth className="text-2xl text-black" />
                <CheckInOutPicker 
                    dates={dates}
                    setDates={setDates}
                    setShowModal={setShowTravellerModal}
                />
            </div>
            <div className="relative flex flex-row px-4 h-16 border-[1px] border-darkblack-50 rounded-md items-center w-full gap-4">
                <MdPersonOutline className="text-2xl text-black" />
                <div 
                    className="flex flex-col w-full cursor-pointer"
                    onClick={() => setShowTravellerModal(prev => !prev)}
                >
                    <h3 className="text-black font-gothicA1 text-xs">Travellers</h3>
                    <h1>
                        {travellerDetails.adults} Adult{travellerDetails.adults > 1 && 's'},&nbsp;
                        {travellerDetails.children} Child{travellerDetails.children !== 1 && 'ren'},&nbsp;
                        {travellerDetails.rooms} Room{travellerDetails.rooms > 1 && 's'} 
                    </h1>
                </div>
                {showTravellerModal && (
                    <TravellersModal 
                        details={travellerDetails}
                        setDetails={setTravellerDetails}
                        setShowModal={setShowTravellerModal}
                    />
                )}
            </div>
            <button 
                className="flex flex-row bg-green rounded-full justify-center items-center px-4"
                onClick={handleSearch}
            >
                <MdSearch className="text-3xl" />
           </button>
        </div>
    )
}

