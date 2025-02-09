import { RES_IMG_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  //   console.log("props", props);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    location,
    avgRating,
    sla,
  } = props?.resData?.info;
  return (
    <div className="res-card">
      <img src={RES_IMG_CDN + cloudinaryImageId} alt="" className="res-logo" />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h3>{costForTwo}</h3>
      <h3>{location}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{sla?.deliveryTime} Minutes</h3>
    </div>
  );
};


export default RestaurantCard;