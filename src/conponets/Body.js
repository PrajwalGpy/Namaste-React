import { useState, useEffect } from "react";
import restObjData from "./util/MockData"; // Rename to avoid naming conflict
import RestorentCard from "./RestorentCard";

const Body = () => {
  // State to manage list of restaurants
  const [restObj, setRestObj] = useState(restObjData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://crossorigin.me/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter"
          onClick={() => {
            // Filter restaurants with rating > 4
            const filteredRestaurants = restObjData.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setRestObj(filteredRestaurants);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {restObj.map((restaurant) => (
          <RestorentCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
