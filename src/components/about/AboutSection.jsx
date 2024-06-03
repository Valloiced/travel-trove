export default function AboutSection() {
    return (
        <div className="flex flex-col justify-center items-center py-20 gap-20">
            <h1 className="font-cinzel font-bold text-black text-5xl">ABOUT US</h1>
            <div className="flex flex-col gap-4 w-3/4 max-w-screen-xl">
                <h2 className="font-gothicA1 font-semibold text-xl">Our Story</h2>
                <p className="font-gothicA1 text-lg text-black text-opacity-75">Travel Trove was born in 2021 when a group of friends booked their first curated adventure for a few fellow travelers, and has since grown to a community of over 2 million members who have embarked on countless journeys across more than 100 countries. Every day, our platform offers unique travel experiences and destinations that make it possible for adventurers to connect with new cultures and communities in a more authentic and inspiring way.</p>
            </div>
            <div className="flex flex-row justify-between w-3/4 max-w-screen-xl">
                <h2 className="w-1/2 font-gothicA1 font-semibold text-xl">What Travel Trove Offers</h2>
                <ul className="flex flex-col list-none gap-12 w-1/2">
                    <AboutOffersList 
                        title="Low Rates"
                        description="We work tirelessly to negotiate the best prices with airlines, hotels, and experience providers. Our commitment to offering competitive rates ensures that you get the most value for your money without compromising on quality."
                    />
                    <AboutOffersList 
                        title="Easy Booking"
                        description="Our user-friendly platform is designed to make the booking process as simple and intuitive as possible. Whether you're securing a flight, reserving a hotel, or planning an entire itinerary, our streamlined interface allows you to book your adventure with just a few clicks."
                    />
                    <AboutOffersList 
                        title="Exclusive Offers"
                        description="Gain access to special deals and discounts that are exclusive to TravelTrove members. From last-minute getaways to early-bird specials, we provide a range of offers that help you save on your travels."
                    />
                    <AboutOffersList 
                        title="24/7 Support"
                        description="Our dedicated customer support team is available around the clock to assist you with any inquiries or issues you may encounter. Whether you need help with a booking, have questions about your itinerary, or require assistance while on your trip, we're here to ensure your travel experience is smooth and worry-free."
                    />
                </ul>
            </div>
        </div>
    )
}

function AboutOffersList({ title, description }) {
    return (
        <li className="flex flex-col gap-4">
            <h2 className="font-gothicA1 font-extrabold text-xl text-black">{title}</h2>
            <p className="font-gothicA1 text-lg text-black text-opacity-75">{description}</p>
        </li>
    )
}