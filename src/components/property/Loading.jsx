import { BounceLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex flex-col w-full h-96 justify-center items-center gap-4">
            <BounceLoader color="#49DCB1" />
            <h1 className="text-sm text-black font-gothicA1">Loading Property...</h1>
        </div>
    )
}