import { CDN_LINK } from "./util/constents";

const RestorentCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, areaName, costForTwo, cuisines, avgRating } =
    restData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_LINK + cloudinaryImageId}></img>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{areaName}</h4>

        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Stars</p>
      </div>
    </div>
  );
};

export default RestorentCard;
