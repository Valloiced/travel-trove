import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ExploreBoracay from "../../assets/explore-boracay.jpg";
import ExploreParis from "../../assets/explore-paris.jpg";
import ExploreBarcelona from "../../assets/explore-barcelona.jpg";
import ExploreDubai from "../../assets/explore-dubai.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const exploreItems = [
    {
        image: ExploreBoracay,
        landmark: "Boracay Island",
        location: "Aklan, Philippines"
    },
    {
        image: ExploreParis,
        landmark: "Eiffel Tower",
        location: "Paris, France"
    },
    {
        image: ExploreBarcelona,
        landmark: "Barcelona",
        location: "Barcelona, Spain"
    },
    {
        image: ExploreDubai,
        landmark: "Dubai",
        location: "Dubai, UAE"
    }
]

export default function Explore() {
    const carouselRef = useRef(null);

    const handlePagination = (direction) => {
        let nextSlide;

        if (direction === "next") {
            nextSlide = carouselRef.current?.state?.currentSlide + 1;
        } else {
            nextSlide = carouselRef.current?.state?.currentSlide - 1;
        }

        carouselRef.current.goToSlide(nextSlide);
    }

    const exploreCards = exploreItems.map((items) => (
        <ExploreCard
            key={items.landmark}
            image={items.image}
            landmark={items.landmark} 
            location={items.location}
        />
    ));

    const isMobile = window.screen.width < 768;

    return (
        <div className="flex flex-col w-screen justify-center items-center bg-lightgrey py-24">
            <div className="flex flex-col gap-8 w-1/2 max-lg:w-3/4 max-md:w-full max-md:px-2">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-green font-gothicA1 text-xl">EXPLORE</h2>
                        <h1 className="text-black font-cinzel font-bold text-3xl">EXPLORE YOUR FAVORITE DESTINATIONS</h1>
                    </div>
                </div>
                {/* Carousel */}
                <div className="relative">
                    <button 
                        className="transition-all flex flex-row absolute bottom-8 -left-8 bg-green rounded-full w-16 h-16 z-10 justify-center items-center cursor-pointer hover:-translate-x-5 max-md:hidden hover:bg-green/75"
                        onClick={() => handlePagination("prev")}
                    >
                        <IoIosArrowRoundBack className="text-5xl" />
                    </button>
                    <div className="max-md:w-screen max-md:-ml-2 max-sm:flex">
                        <Carousel
                            ref={carouselRef}
                            draggable={isMobile}
                            showDots={false}
                            responsive={responsive}
                            infinite={true}
                            autoPlaySpeed={5}
                            arrows={isMobile}
                            keyBoardControl={true}
                            customTransition="all 500ms ease"
                            transitionDuration={500}
                            containerClass="max-md:w-screen"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {exploreCards}
                        </Carousel>
                    </div>
                    <button 
                        className="transition-all flex flex-row absolute bottom-8 -right-8 bg-green rounded-full w-16 h-16 z-10 justify-center items-center cursor-pointer hover:translate-x-5 max-md:hidden hover:bg-green/75"
                        onClick={() => handlePagination("next")}
                    >
                        <IoIosArrowRoundForward className="text-5xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

function ExploreCard({ image, landmark, location }) {
    return (
        <div className="relative overflow-hidden rounded-3xl max-md:rounded-none max-sm:h-72 h-96">
            <img src={image} className="w-full h-full object-cover" alt="Explore Background" />
            <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center px-20 max-md:px-2 gap-12 bg-gradient-to-r from-darkblack-75 to-darkblack-25 max-md:bg-darkblack-25">
                <div className="flex flex-col max-md:items-center">
                    <h1 className="text-white font-gothicA1 font-black text-4xl uppercase">{landmark}</h1>
                    <h3 className="text-white font-gothicA1 text-xl">{location}</h3>
                </div>
                <Link 
                    to={`/booking/${landmark}`}
                    className="group flex flex-row justify-center items-center px-10 self-start max-md:self-center text-white border-2 border-white rounded-full"
                >
                    Explore
                    <IoIosArrowRoundForward className="transition-all text-white text-5xl group-hover:translate-x-2" />
                </Link>
            </div>
        </div>
    )
}