import { useState } from "react";

import { IoMdHeart, IoMdHeartEmpty, IoMdShare} from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import Rating from "../global/Rating";

export default function Header({ name, location, starRating, reviewWord, reviewCount, reviewScore }) {
    // Just for demo functionality, doesnt actually hearts the property
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="w-full flex flex-row justify-between max-sm:flex-col max-sm:gap-8">
            <div className="flex flex-col gap-2">
                <Rating ratings={starRating} />
                <h1 className="font-gothicA1 font-extrabold text-2xl text-black">{name}</h1>
                <div className="flex flex-row items-center gap-2">
                    <MdOutlineLocationOn className="text-black text-xl" />
                    <p className="font-gothicA1 text-sm text-black">{location}</p>
                </div>
                <div className="flex flex-row gap-2 items-center mt-2">
                    <h2 className="px-2 py-1 bg-green text-black self-center rounded-md font-bold">{reviewScore?.toFixed(1)}</h2>
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-gothicA1 font-bold text-black">{reviewWord}</p>
                        <p>·</p>
                        <p className="font-gothicA1 font-light text-sm text-black">{reviewCount} reviews</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row text-4xl text-darkgreen gap-4 cursor-pointer max-sm:text-2xl items-start">
                <button onClick={() => setIsFavorite(prev => !prev)}>
                    {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
                </button>
                <button>
                    <IoMdShare />
                </button>
            </div>
        </div>
    )
}