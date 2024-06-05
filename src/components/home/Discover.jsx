import { Link } from "react-router-dom";
import Gallery from "./Gallery";

export default function Discover() {
    return (
        <div className="flex flex-row w-screen justify-between items-center py-24 px-20 max-lg:flex-col max-lg:px-2">
            <div className="flex flex-col gap-8 w-1/3 max-lg:w-full">
                <div className="flex flex-col gap-4">
                    <h2 className="text-green font-gothicA1 text-xl">DISCOVER</h2>
                    <h1 className="text-black font-cinzeldeco font-bold text-3xl">Explore and Travel <br /> Across the World</h1>
                    <p className="text-black font-gothicA1 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada euismod risus sed dapibus. Phasellus egestas neque eu volutpat scelerisque. Phasellus quis suscipit ipsum. Vestibulum eu purus ante. Sed luctus vulputate purus consequat ornare. Mauris nec ante ante. Aliquam consequat aliquet porta. Etiam vitae vehicula risus. Vestibulum vulputate enim et purus venenatis efficitur. Nam feugiat pharetra turpis non rutrum. Aliquam semper enim sem, non scelerisque purus fringilla sit amet.
                    </p>
                </div>
                <Link
                    to="/booking" 
                    className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-10 rounded-full cursor-pointer self-start hover:bg-green/75"
                >
                    Discover
                </Link>
            </div>
            <Gallery />
        </div>
    )
}