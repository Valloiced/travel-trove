import { Link } from "react-router-dom";
import BangkokBG from "../../assets/choose-bangkok-bg.png";
import HonkongBG from "../../assets/choose-hongkong-bg.png";
import SingaporeBG from "../../assets/choose-singapore-bg.png";

export default function Choose() {
    return (
        <div className="flex flex-col w-screen justify-center items-center py-24 px-24 gap-8 max-lg:px-2">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-green font-gothicA1 text-xl">CHOOSE POPULAR PACKAGE</h2>
                <h1 className="text-black font-cinzel font-bold text-3xl">FIND YOUR NEXT STAY TO A NEW JOURNEY</h1>
            </div>
            <div className="flex flex-row w-full justify-between gap-8 max-lg:overflow-x-scroll hide-scroll max-lg:gap-2">
                <ChooseCard 
                    image={BangkokBG} 
                    title={"Trip to Bangkok"}
                    searchTerm={"Bangkok"}
                />
                <ChooseCard 
                    image={HonkongBG} 
                    title={"Trip to Hongkong"} 
                    searchTerm={"Hong Kong"}
                />
                <ChooseCard 
                    image={SingaporeBG} 
                    title={"Trip to Singapore"} 
                    searchTerm={"Singapore"}
                />
            </div>
        </div>
    )
}

function ChooseCard({ image, title, searchTerm }) {
    return (
        <Link to={`/booking/${searchTerm}`}>
            <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl">
                    <img 
                        src={image}
                        className="transition-all w-full h-full max-lg:min-w-72 object-cover hover:scale-110 cursor-pointer"
                        alt={title}
                    />
                </div>
                <h2 className="text-black font-gothicA1 font-bold text-lg">
                    {title}
                </h2>
            </div>
        </Link>
    )
}