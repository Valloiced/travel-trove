import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Header from "../../components/property/Header";
import GalleryCarousel from "../../components/property/GalleryCarousel";
import Gallery from "../../components/property/Gallery";
import About from "../../components/property/About";

import { hotelData, galleryData } from "./test";
import GalleryModal from "../../components/property/modal/GalleryModal";
import Loading from "../../components/property/Loading";

export default function Property() {
    const params = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [gallery, setGallery] = useState(galleryData);
    const [propertyData, setPropertyData] = useState(hotelData);
    const [description, setDescription] = useState("");

    const [showGalleryModal, setShowGalleryModal] = useState(false);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(false);
                // Fetch property data
                const propertyRes = await axios({
                    method: 'GET',
                    url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
                    params: {
                      hotel_id: params.id,
                      locale: 'en-gb'
                    },
                    headers: {
                      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
                    }
                });

                const propertyData = propertyRes.data;

                setPropertyData(propertyData);

                // Fetch property gallery
                const galleryRes = await axios({
                    method: 'GET',
                    url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
                    params: {
                      hotel_id: params.id,
                      locale: 'en-gb'
                    },
                    headers: {
                      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
                    }
                });

                const galleryData = galleryRes.data;

                setGallery(galleryData);

                // Fetch description
                const descriptionRes = await axios({
                    method: 'GET',
                    url: 'https://booking-com.p.rapidapi.com/v1/hotels/description',
                    params: {
                      hotel_id: params.id,
                      locale: 'en-gb'
                    },
                    headers: {
                      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
                    }
                });

                const descriptionData = descriptionRes.data;

                setDescription(descriptionData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="w-full flex flex-col py-20 px-24 gap-8 max-w-screen-2xl max-lg:px-2 self-center max-sm:py-12 max-sm:gap-4">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Header 
                            name={propertyData.name}
                            location={propertyData.address}
                            starRating={propertyData.class}
                            reviewWord={propertyData.review_score_word}
                            reviewCount={Number(propertyData.review_nr)}
                            reviewScore={Number(propertyData.review_score)}
                        />
                        <GalleryCarousel
                            gallery={gallery}
                            setShowGalleryModal={setShowGalleryModal}
                        />
                        <Gallery 
                            gallery={gallery}
                            setShowGalleryModal={setShowGalleryModal}
                        />
                        <About 
                            price={queryParams.get("price_per_night") || 12345}
                            description={description}
                        />
                    </>
                )}
            </div>
            {showGalleryModal && (
                <GalleryModal
                    name={propertyData.name}
                    gallery={gallery}
                    setShowGalleryModal={setShowGalleryModal}
                />
            )}
        </>
    )
}