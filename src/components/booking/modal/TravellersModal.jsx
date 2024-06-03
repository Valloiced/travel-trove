export default function TravellersModal({ details, setDetails, setShowModal }) {
    const handleClick = (e) => {
        const action = e.target.textContent;
        const name = e.target.name;

        // Increment number of adults to avoid multiple room reservations for only one adult
        if (name === "rooms" && action === "+" && details["rooms"] >= details["adults"]) {
            setDetails(prevDetails => ({ 
                ...prevDetails, 
                adults: prevDetails["adults"] + 1 
            }))
        }

        // Decrement number of rooms when adults are decremented
        if (name === "adults" && action === "-" && details["rooms"] >= details["adults"]) {
            setDetails(prevDetails => ({ 
                ...prevDetails, 
                rooms: prevDetails["rooms"] - 1 
            }))
        }
        
        // Check if the select element being deleted has its value on the childrenAges
        if (name === "children" && action === "-") {
            if (details.childrenAges.hasOwnProperty("child" + (details.children - 1))) {
                // Remove that value it if there is
                setDetails(prevDetails => {
                    const updateChildrenAges = prevDetails.childrenAges;
                    delete updateChildrenAges["child" + (details.children - 1)];

                    return { ...prevDetails, childrenAges: updateChildrenAges };
                })
            }
        }

        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: action === '+' ? prevDetails[name] + 1 : prevDetails[name] - 1
        }))
    }

    const updateChildrenAges = (e) => {
        const { name, value } = e.target;

        setDetails(prevDetails => ({
            ...prevDetails,
            childrenAges: { ...prevDetails.childrenAges, [name]: value }
        }))
    }

    const childrenAgeSelects = () => {
        const generateOptions = new Array(18)
            .fill(0)
            .map((_, i) => <option value={i}>{i} years old</option>)

        return new Array(details.children)
            .fill(0).map((_, i) => (
                <select 
                    key={"child" + i}
                    name={"child" + i}
                    className="font-gothicA1 text-sm py-2 px-2 border-[1px] border-darkblack-50 rounded-md cursor-pointer" 
                    onChange={updateChildrenAges}
                    defaultChecked={true}
                    defaultValue={details.childrenAges["child" + i] || ""}
                    required
                >
                    <option value="" disabled hidden selected>Add Age</option>
                    {generateOptions}
                </select>  
            ))
    }

    const canUpdate = Object.keys(details.childrenAges).length === details.children

    return (
        <div className="absolute w-full flex flex-col py-8 px-8 bg-white left-0 top-[120%] rounded-md shadow-around gap-2">
            <div className="flex flex-row justify-between items-center border-b-[1px] border-b-darkblack/10 pb-2">
                <h2 className="font-gothicA1 font-bold text-black text-sm">Rooms</h2>
                <div className="flex flex-row items-center justify-between w-2/5 bg-white border-[1px] border-darkblack-50 rounded-md overflow-hidden">
                    <button
                        name="rooms"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.rooms <= 1}
                    >
                        -
                    </button>
                    <p className="font-gothicA1 font-bold text-sm text-black">
                        {details.rooms}
                    </p>
                    <button
                        name="rooms"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.rooms >= 30}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-gothicA1 font-bold text-black text-sm">Adult</h2>
                <div className="flex flex-row items-center justify-between w-2/5 bg-white border-[1px] border-darkblack-50 rounded-md overflow-hidden">
                    <button
                        name="adults"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.adults <= 1}
                    >
                        -
                    </button>
                    <p className="font-gothicA1 font-bold text-sm text-black">
                        {details.adults}
                    </p>
                    <button 
                        name="adults"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.adults >= 30}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-gothicA1 font-bold text-black text-sm">Children</h2>
                <div className="flex flex-row items-center justify-between w-2/5 bg-white border-[1px] border-darkblack-50 rounded-md overflow-hidden">
                    <button 
                        name="children"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.children <= 0}
                    >
                        -
                    </button>
                    <p className="font-gothicA1 font-bold text-sm text-black">
                        {details.children}
                    </p>
                    <button 
                        name="children"
                        className="flex flex-row justify-center items-center font-gothicA1 text-xl text-darkgreen w-10 h-10 hover:bg-darkgreen/10 cursor-pointer"
                        onClick={handleClick}
                        disabled={details.children >= 10}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t-[1px] border-t-darkblack/10 pt-2">
                {childrenAgeSelects()}
            </div>
            <button
                className={`border-2 ${canUpdate ? 'border-darkgreen text-darkgreen hover:bg-darkgreen/10' : 'border-darkblack-25 text-black/50'} rounded-md py-2 font-bold mt-4 `}
                disabled={!canUpdate}
                onClick={() => setShowModal(false)}
            >
                Update
            </button>
        </div>

    )
}