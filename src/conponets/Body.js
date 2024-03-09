import { useState } from "react";
import restObjData from "./util/MockData"; // Rename to avoid naming conflict
import RestorentCard from "./RestorentCard";

const Body = () => {
  // State to manage list of restaurants
  const [restObj, setRestObj] = useState(restObjData);

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
