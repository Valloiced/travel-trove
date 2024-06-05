import Gallery1 from "../../assets/home-gallery-1.png";
import Gallery2 from "../../assets/home-gallery-2.png";
import Gallery3 from "../../assets/home-gallery-3.png";

export default function Gallery() {
    return (
        <div className="flex flex-row gap-4 w-2/5 max-w-screen-2xl h-[75vh] overflow-hidden max-lg:hidden">
            <div className="gallery-1 flex flex-col gap-4 w-full">
                <img src={Gallery1} alt="Home Gallery" />
                <img src={Gallery1} alt="Home Gallery" />
            </div>
            <div className="gallery-2 flex flex-col gap-4 w-full">
                <img src={Gallery2} alt="Home Gallery" />
                <img src={Gallery2} alt="Home Gallery" />
            </div>
            <div className="gallery-3 flex flex-col gap-4 w-full">
                <img src={Gallery3} alt="Home Gallery" />
                <img src={Gallery3} alt="Home Gallery" />
            </div>
        </div>
    )
}