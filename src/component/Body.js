
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";


const Body = () => {
 // let listOfRestaurants = 

  const [listOfRestaurants,setListOfRestaurant] = useState(resList)

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res)=>res.info.avgRating>4.5
            );
            setListOfRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
          </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body;