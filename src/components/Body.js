import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { HOME_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [textValue, setTextValue] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onTopRatedClick = () => {
    {
      setFilteredList(
        listOfRestaurants?.filter((resaurant) => resaurant.info.avgRating > 4)
      );
    }
  };

  const onSearchClick = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(textValue.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your internet connection is not up. Please check your
        connection !!
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
            value={textValue}
          />
          <button onClick={onSearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={onTopRatedClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurent-container">
        {filteredList.map((resaurant) => (
          <RestaurentCard key={resaurant.info.id} resData={resaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
