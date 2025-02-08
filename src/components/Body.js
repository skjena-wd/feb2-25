import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(RES_LIST_API);
    const json = await result.json();
    console.log("FetchData API response", json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="site-btn"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("Searched Restaurants", searchedRestaurants);
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="site-btn"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            console.log("Top Rated Restaurants", topRatedRestaurants);
            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
