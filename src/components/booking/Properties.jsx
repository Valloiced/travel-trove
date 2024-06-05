import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SampleImg from "../../assets/about-bg.png"; // TEMP
import Rating from "../global/Rating";

export default function Properties({ properties, page, handlePagination }) {
    const propertyCards = properties.map((property) => (
        <PropertyCard
            key={property.hotel_id}
            id={property.hotel_id}
            name={property.hotel_name}
            image={property.max_photo_url}
            ratings={property.class}
            location={property.address}
            starRating={property.class}
            reviewWord={property.review_score_word}
            reviewCount={property.review_nr}
            reviewScore={property.review_score}
            price={property.composite_price_breakdown?.product_price_breakdowns[0]?.gross_amount_per_night?.value}
            type={property.accommodation_type_name}
        />
    ));

    return (
        <div className="flex flex-col gap-8">
            {propertyCards}
            <div className="flex flex-row justify-center">
                <div className="flex flex-row gap-6 items-center">
                    <button 
                        className="p-2 font-bold text-2xl bg-green text-black rounded-md"
                        onClick={() => handlePagination(-1)}
                    >
                        <MdChevronLeft />
                    </button>
                    <p className="text-black text-xl font-gothicA1 font-bold">
                        {Number(page) + 1}
                    </p>
                    <button 
                        className="p-2 font-bold text-2xl bg-green text-black rounded-md"
                        onClick={() => handlePagination(1)}
                    >
                        <MdChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

function PropertyCard({ 
    id,
    name, 
    image, 
    location,
    price,
    starRating, 
    type,
    reviewScore,
    reviewCount,
    reviewWord
}) {
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 2,
      });

    return (
        <Link to={"/property/" + id + "?price_per_night=" + price}>
            <div className="flex flex-row border-[1px] border-darkblack-25 rounded-xl overflow-hidden h-72 p-4 max-sm:p-0 max-sm:pb-2 max-sm:flex-col max-sm:h-auto">
                <div className="w-1/3 max-sm:w-full max-sm:h-64">
                    <img 
                        src={image || SampleImg}
                        className="w-full h-full rounded-xl"
                        alt="Sample Property" 
                    />
                </div>
                <div className="w-2/3 flex flex-col pt-4 px-4 justify-between max-sm:w-full max-sm:gap-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <h1 className="font-gothicA1 font-extrabold text-2xl text-black">{name}</h1>
                            <h2 className="font-gothicA1 font-bold text-lg text-darkgreen">{type}</h2>
                        </div>
                        <p className="font-gothicA1 text-sm text-black">{location}</p>
                        <Rating ratings={starRating} />
                    </div>
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="flex flex-row gap-2">
                            <h2 className="px-2 py-1 bg-green text-black self-center rounded-md font-bold">{reviewScore?.toFixed(1)}</h2>
                            <div className="flex flex-col">
                                <p className="font-gothicA1 font-bold text-black">{reviewWord}</p>
                                <p className="font-gothicA1 font-light text-sm text-black">{reviewCount} reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col self-end">
                            <h1 className="font-gothicA1 font-bold text-2xl text-black">{priceFormatter.format(price)}</h1>
                            <p className="font-gothicA1 text-[0.6rem] text-black text-opacity-75">Includes taxes and charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}