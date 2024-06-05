import ReactSlider from "react-slider"

export default function Filter({ filters, setFilters }) {
    const handlePriceRange = (newRange) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: { 
                min: newRange[0],
                max: newRange[1]
            }
        }))
    }

    const handleCheckboxes = (filter, ev) => {
        const { name } = ev.target;

        setFilters((prevFilters) => {
            let newItem = [...filters[filter], name];

            if (filters[filter].includes(name)) {
                newItem = filters[filter].filter((item) => item !== name);
            }

            return {
                ...prevFilters,
                [filter]: [...newItem]
            }
        })
    }

    return (
        <div className="flex flex-col w-1/4 border-[1px] border-darkblack-25 rounded-md self-start max-lg:hidden">
            <div className="border-b-[1px] border-b-darkblack-25 p-4">
                <h1 className="font-gothicA1 font-bold text-black">Filter By</h1>
            </div>
            <Price 
                priceRange={filters.priceRange} 
                handlePriceRange={handlePriceRange}
            />
            <StarRating 
                starRating={filters.starRating}
                handleStarRating={(ev) => handleCheckboxes("starRating", ev)}
            />
            <PropertyType
                propertyType={filters.propertyType}
                handlePropertyType={(ev) => handleCheckboxes("propertyType", ev)}
            />
        </div>
    )
}

function Price({ priceRange, handlePriceRange }) {
    return (
        <div className="flex flex-col border-b-[1px] border-b-darkblack-25 p-4 gap-4">
            <h3 className="font-gothicA1 font-semibold text-xs">Price per night</h3>
            <div className="w-full flex flex-row justify-between gap-4">
                <div className="w-full flex-col px-1 py-1 border-[1px] border-darkblack-25 rounded-md">
                    <p className="font-gothicA1 text-xs text-black text-opacity-75">Min</p>
                    <h3>₱ {priceRange.min + (priceRange.min === 5e4 ? '+' : 0)}</h3>
                </div>
                <div className="w-full flex-col px-1 py-1 border-[1px] border-darkblack-25 rounded-md">
                    <p className="font-gothicA1 text-xs text-black text-opacity-75">Max</p>
                    <h3>₱ {priceRange.max + (priceRange.max === 5e4 ? '+' : 0)}</h3>
                </div>
            </div>
            <div className="w-full h-5">
                <ReactSlider
                    className="w-full"
                    thumbClassName="price-thumb"
                    thumbActiveClassName="price-thumb-active"
                    trackClassName="price-slider"
                    max={5e4}
                    min={0}
                    defaultValue={[priceRange.min, priceRange.max]}
                    renderTrack={(props, state) => <div {...props}><span /></div>}
                    renderThumb={(props, state) => <div {...props} />} 
                    minDistance={1}
                    step={1000}
                    onChange={handlePriceRange}
                />
            </div>
        </div>
    )
}

function StarRating({ starRating, handleStarRating }) {
    return (
        <div className="flex flex-col border-b-[1px] border-b-darkblack-25 p-4 gap-4">
            <h3 className="font-gothicA1 font-semibold text-xs">Star Rating</h3>
            <div className="flex flex-row items-center gap-2">
                <input
                    type="checkbox"
                    id="star1"
                    name="star1"
                    value="star1"
                    checked={starRating.includes("star1")}
                    onChange={handleStarRating}
                />
                <label for="star1" className="font-gothicA1 text-xs text-black">1 Star</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input
                    type="checkbox"
                    id="star2"
                    name="star2"
                    value="star2" 
                    checked={starRating.includes("star2")}
                    onChange={handleStarRating}
                />
                <label for="star2" className="font-gothicA1 text-xs text-black">2 Stars</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input
                    type="checkbox"
                    id="star3"
                    name="star3"
                    value="star3" 
                    checked={starRating.includes("star3")}
                    onChange={handleStarRating}
                />
                <label for="star3" className="font-gothicA1 text-xs text-black">3 Stars</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input
                    type="checkbox"
                    id="star4"
                    name="star4"
                    value="star4" 
                    checked={starRating.includes("star4")}
                    onChange={handleStarRating}
                />
                <label for="star4" className="font-gothicA1 text-xs text-black">4 Stars</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input
                    type="checkbox"
                    id="star5"
                    name="star5"
                    value="star5" 
                    checked={starRating.includes("star5")}
                    onChange={handleStarRating}
                />
                <label for="star5" className="font-gothicA1 text-xs text-black">5 Stars</label>
            </div>
        </div>
    )
}

function PropertyType({ propertyType, handlePropertyType }) {
    const propertyTypeFilters = [
        { name: "Hotels", id: "204" },
        { name: "Ryokans", id: "209" },
        { name: "Houses", id: "220" },
        { name: "Resorts", id: "206" },
        { name: "Villas", id: "213" },
        { name: "Apartments", id: "201" },
        { name: "Chalets", id: "228" },
        { name: "Country houses", id: "223" },
        { name: "Lodges", id: "221" },
        { name: "Campsites", id: "214" },
        { name: "Farm stays", id: "210" },
        { name: "Holiday parks", id: "212" },
        { name: "Love hotels", id: "226" },
        { name: "Motels", id: "205" },
        { name: "Bed and breakfasts", id: "208" },
        { name: "Capsule hotels", id: "225" },
        { name: "Guest houses", id: "216" },
        { name: "Luxury tents", id: "224" },
        { name: "Hostels", id: "203" },
        { name: "Boats", id: "215" },
        { name: "Homestays", id: "222" }
    ];

    return (
        <div className="flex flex-col p-4 gap-4">
            <h3 className="font-gothicA1 font-semibold text-xs">Property Type</h3>
            {propertyTypeFilters.map((type) => (
                <div key={type.name} className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        id={type.id}
                        name={type.id}
                        value={type.id}
                        checked={propertyType.includes(type.id)}
                        onChange={handlePropertyType}
                    />
                    <label htmlFor={type.id} className="font-gothicA1 text-xs text-black">
                        {type.name}
                    </label>
                </div>
            ))}
        </div>
    );
}
