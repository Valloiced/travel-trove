import { MdSearch, MdOutlineMailOutline } from "react-icons/md";

import ContactBG from "../../assets/contact-bg.png";

export default function Contact() {
    return (
        <div className="relative flex flex-col w-screen h-[50vh]">
            <img 
                src={ContactBG}
                className="w-full h-full object-cover"
                alt="Contact Background"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-70 bg-darkblack gap-8">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="font-gothicA1 font-black text-5xl text-white">STAY UPDATED</h1>
                    <p className="font-gothicA1 text-white w-3/4 text-center">Subscribe to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services.</p>
                </div>
                <div className="flex flex-row gap-8 w-[32rem] justify-between items-center py-2 px-2 pl-4 bg-white rounded-full">
                    <div className="flex flex-row gap-2 items-center w-full">
                        <MdOutlineMailOutline className="text-2xl text-black text-opacity-75" />
                        <input 
                            type="text"
                            placeholder="Enter your email address"
                            className="w-full focus-visible:outline-none font-gothicA1"
                        />
                    </div>
                    <button className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-opacity-50">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}