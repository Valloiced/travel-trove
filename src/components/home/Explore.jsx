import ExploreBG from "../../assets/explore-bg.png";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Explore() {
    return (
        <div className="flex flex-col w-screen justify-center items-center bg-lightgrey py-24">
            <div className="flex flex-col gap-8 w-1/2">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-green font-gothicA1 text-xl">EXPLORE</h2>
                        <h1 className="text-black font-cinzel font-bold text-3xl">EXPLORE YOUR FAVORITE DESTINATIONS</h1>
                    </div>
                </div>
                {/* Carousel */}
                <div className="relative">
                    <span className="transition-all flex flex-row absolute bottom-8 -left-8 bg-green rounded-full w-16 h-16 z-10 justify-center items-center cursor-pointer hover:-translate-x-5">
                        <IoIosArrowRoundBack className="text-5xl" />
                    </span>
                    <ExploreCard
                        image={ExploreBG}
                        landmark={"Boracay Beach"} 
                        location={"Aklan, Philippines"}
                    />
                    <span className="transition-all flex flex-row absolute bottom-8 -right-8 bg-green rounded-full w-16 h-16 z-10 justify-center items-center cursor-pointer hover:translate-x-5">
                        <IoIosArrowRoundForward className="text-5xl" />
                    </span>
                </div>
            </div>
        </div>
    )
}

function ExploreCard({ image, landmark, location }) {
    return (
        <div className="relative overflow-hidden rounded-3xl">
            <img src={image} className="w-full h-full object-cover" alt="Explore Background" />
            <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center px-20 gap-12 bg-gradient-to-r from-darkblack-75 to-darkblack-25">
                <div className="flex flex-col">
                    <h1 className="text-white font-gothicA1 font-black text-4xl uppercase">{landmark}</h1>
                    <h3 className="text-white font-gothicA1 text-xl">{location}</h3>
                </div>
                <button className="group flex flex-row justify-center items-center px-10 self-start text-white border-2 border-white rounded-full">
                    Explore
                    <IoIosArrowRoundForward className="transition-all text-white text-5xl group-hover:translate-x-2" />
                </button>
            </div>
        </div>
    )
}