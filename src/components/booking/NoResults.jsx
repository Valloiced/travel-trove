import { MdSearch } from "react-icons/md";

export default function NoResults({ destination }) {
    
    return (
        <div className="flex flex-col gap-4 items-center h-96 justify-center">
            <MdSearch className="text-5xl text-darkgreen" />
            <h1 className="text-xl text-black font-bold font-gothicA1 capitalize">
                No properties found in {destination}
            </h1>
            <p className="text-sm text-black font-light font-gothicA1">
                There are no matching properties for your search parameters
            </p>
        </div>
    )
}