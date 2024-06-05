import { IoMdImages } from "react-icons/io";

export default function Gallery({ gallery, setShowGalleryModal }) {
    return (
        <div 
            className="w-full grid grid-cols-3 grid-rows-2 h-[32rem] gap-2 max-sm:hidden"
            onClick={() => setShowGalleryModal(true)}
        >
            <div className="grid-rows-subgrid row-span-2 col-span-2 overflow-hidden cursor-pointer rounded-xl">
                <img 
                    className="transition-all w-full h-full rounded-xl hover:scale-110"
                    src={gallery[0].url_max} 
                    alt="Main Property Gallery" 
                />
            </div>
            <div className="overflow-hidden cursor-pointer rounded-xl">
                <img 
                    className="transition-all w-full h-full rounded-xl hover:scale-110"
                    src={gallery[1].url_max} 
                    alt="Main Property Gallery" 
                />
            </div>
            <div className="relative overflow-hidden cursor-pointer rounded-xl">
                <img
                    className="transition-all w-full h-full rounded-xl hover:scale-110 gradient"
                    src={gallery[2].url_max}
                    alt="Main Property Gallery" 
                />
                <div className="absolute bottom-4 right-4 z-[20] flex flex-row gap-2 items-center px-4 py-1 bg-darkgreen/50 rounded-full hover:bg-darkgreen/75">
                    <IoMdImages className="text-white text-xl" />
                    <h3 className="font-gothicA1 font-semibold text-white">{gallery.length + "+" || 0}</h3>
                </div>
            </div>
        </div>
    )
}