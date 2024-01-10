import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={() => {
                        setListOfRestaurants(listOfRestaurants.filter((resaurant) => resaurant.info.avgRating > 4));
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="restaurent-container">
                {
                    listOfRestaurants.map((resaurant) => (
                        <RestaurentCard key={resaurant.info.id} resData={resaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;