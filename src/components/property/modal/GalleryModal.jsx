import { MdOutlineClose } from "react-icons/md";

export default function GalleryModal({ name, gallery, setShowGalleryModal }) {
    const galleryImage = gallery.map((image) => (
        <div className="rounded-xl overflow-hidden h-56">
            <img 
                className="transition-all w-full h-full hover:scale-110"
                src={image.url_max}
                alt="Main Property Gallery" 
            />
        </div>
    ))

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen fixed top-0 left-0 bg-darkblack-50 z-[999999]">
            <div className="flex flex-col bg-white py-8 w-5/6 h-5/6 gap-4 max-xl:w-full max-w-screen-2xl">
                <div className="flex flex-row justify-between w-full px-8">
                    <h1 className="font-gothicA1 text-xl text-black font-bold">{name}</h1>
                    <MdOutlineClose 
                        className="text-2xl text-black hover:text-green cursor-pointer"
                        onClick={() => setShowGalleryModal(false)}
                    />
                </div>
                <div className="grid grid-cols-3 gap-2 w-full overflow-scroll pt-4 px-8 border-t-[1px] border-darkblack-25 overflow-x-hidden max-lg:grid-cols-2">
                    {galleryImage}
                </div>
            </div>
        </div>
    );
}