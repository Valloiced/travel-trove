import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";

import Search from "../../components/booking/Search"
import Filter from "../../components/booking/Filter"
import Properties from "../../components/booking/Properties"

import { testData } from "./test";

import "./booking.css";
import "./booking.scss";

let startDate = new Date();
let endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + 1);

startDate = new Intl.DateTimeFormat('sv-SE').format(startDate);
endDate = new Intl.DateTimeFormat('sv-SE').format(endDate);

const encodeFiltersToQuery = (filters) => {
    const starRatingQuery = 
        filters.starRating.length > 0 
        ? "&class=" + filters.starRating.map((q) => q.replace("star", "")).join(',') : "";
    
    const propertyTypeQuery = 
        filters.propertyType.length > 0 
        ? "&property_type=" + filters.propertyType.join(',') : "";
    
    const minPriceQuery = "&price_min=" + filters.priceRange?.min;
    const maxPriceQuery = "&price_max=" + filters.priceRange?.max;

    const query = starRatingQuery + propertyTypeQuery + minPriceQuery + maxPriceQuery;

    return query;
}

const encodeSearchToQuery = (travellerDetails, dates) => {
    const roomsQuery = "&num_rooms=" +  travellerDetails.rooms;
    const adultsQuery = "&num_adults=" +  travellerDetails.adults;
    
    const childrenQuery = travellerDetails.children > 0 ? "&num_children=" +  travellerDetails.children : "";
    const childrenAgesValues = Object.values(travellerDetails.childrenAges);
    const childrenAgeQuery = childrenAgesValues.length > 0 ? "&children_ages=" + childrenAgesValues.join(',') : "";

    const checkInQuery = "&checkin=" + dates[0];
    const checkOutQuery = "&checkin=" + dates[0];

    const query = roomsQuery +adultsQuery + childrenQuery + childrenAgeQuery + checkInQuery + checkOutQuery;

    return query;
}

const toFilterParams = (paramsName, values) => {
    if (!values) return null;

    return values?.split(",")
        .map((item) => `${paramsName}::${item}`)
        .join(",");
}

export default function Booking() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(location.search), [location]);

    const [properties, setProperties] = useState(testData.result);

    const [filters, setFilters] = useState({
        starRating: [],
        propertyType: [],
        priceRange: { min: 0, max: 50000 }
    });

    const [destination, setDestination] = useState("Philippines");
    const [travellerDetails, setTravellerDetails] = useState({
        rooms: 1,
        adults: 1,
        children: 0,
        childrenAges: {}
    });

    const [dates, setDates] = useState([startDate, endDate]);

    const getQuery = useCallback((query) => {
        return queryParams.get(query);
    }, [queryParams]);

    const handleSearch = (extras = null) => {
        const encodedFilterQuery = encodeFiltersToQuery(filters);
        const encodedSearchQuery = encodeSearchToQuery(travellerDetails, dates);

        const query = "?" + (encodedFilterQuery + encodedSearchQuery + extras).replace(/^&+|&+$/g, "");

        navigate(`/booking/${destination}` + query, { replace: true });
    }

    const handlePagination = (action) => {
        const page = getQuery("page") || 0;

        console.log(page);
        let pageQuery = "?page=";
        if (action === -1 && Number(page) > 0) {
            pageQuery = pageQuery + (Number(page) - 1);
        } else {
            pageQuery = pageQuery + (Number(page) + 1);
        }

        handleSearch(pageQuery);
    }

    useEffect(() => {
        const updateParams = () => {
            setDestination(params?.location);

            const childrenAgesParams = getQuery("children_ages")?.split(",")?.map((age, index) => ["child" + index, age]);

            setTravellerDetails({
                rooms: Number(getQuery("num_rooms")) || travellerDetails.rooms,
                adults: Number(getQuery("num_adults")) || travellerDetails.adults,
                children: Number(getQuery("num_children")) || travellerDetails.children,
                childrenAges: childrenAgesParams?.reduce((acc, [key, value])=>({...acc, [key]: value}), {}) || travellerDetails.childrenAges
            })

            setFilters({
                starRating: getQuery("class")?.split(",").map((star) => "star" + star) || filters.starRating,
                propertyType: getQuery("property_type")?.split(",") || filters.propertyType,
                priceRange: { 
                    min: getQuery("price_min") || filters.priceRange.min, 
                    max: getQuery("price_max") || filters.priceRange.max
                }
            })
        }

        const fetchData = async () => {
            // Required Params
            const dest = params?.location || destination;
            const checkIn = getQuery("checkin") || dates[0];
            const checkOut = getQuery("checkout") || dates[1];
            const numOfRooms = getQuery("num_rooms") || travellerDetails.rooms;
            const numOfAdults = getQuery("num_adults") || travellerDetails.adults;
            
            // Optional Params
            const pageNum = getQuery("page") || 0;
            const numOfChildren = getQuery("num_children");
            const childrenAges = getQuery("children_ages");
        
            // Filter Params
            const starRatings = toFilterParams("class", getQuery("class"));
            const propertyTypes = toFilterParams("property_type", getQuery("property_type"));
            const priceRange = toFilterParams("gross_amount_per_night", (getQuery("price_min") || 0) + "-" + (getQuery("price_max") || 50000));
        
            const filterParamsArr= [starRatings, propertyTypes, priceRange].filter(param => param);
            const filterParams = filterParamsArr.join(",");

            try {
                // Fetch location id and type
                const locResponse = await axios({
                    method: 'GET',
                    url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
                    params: {
                        name: dest,
                        locale: 'en-gb'
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
                    }
                })
        
                const locData = locResponse.data[0];
                const { dest_id, dest_type } = locData;
        
                const propertiesResponse = await axios({
                    method: 'GET',
                    url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
                    params: {
                        checkout_date: checkOut,
                        order_by: 'popularity',
                        filter_by_currency: 'PHP',
                        room_number: numOfRooms,
                        dest_id: dest_id,
                        dest_type: dest_type,
                        adults_number: numOfAdults,
                        checkin_date: checkIn,
                        locale: 'en-gb',
                        units: 'metric',
                        children_number: numOfChildren,
                        children_ages: childrenAges,
                        categories_filter_ids: filterParams,
                        page_number: pageNum
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
                    }
                })
                
                setProperties(propertiesResponse.data?.result);
            } catch (error) {
                console.error(error.message);
            }
        }

        // console.log(params);
        updateParams();
        // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);
    
    return (
        <div className="flex flex-col py-20 px-24 gap-8 max-w-screen-2xl self-center">
            <Search
                destination={destination}
                travellerDetails={travellerDetails}
                dates={dates}
                setDestination={setDestination}
                setDates={setDates}
                setProperties={setProperties}
                setTravellerDetails={setTravellerDetails}
                handleSearch={handleSearch}
            />
            <div className="flex flex-row w-full justify-between gap-8">
                <Filter 
                    filters={filters}
                    setFilters={setFilters}
                />
                <Properties 
                    properties={properties}
                    page={getQuery("page") || 0}
                    handlePagination={handlePagination}
                />
            </div>
        </div>
    )
}