import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime } = resData.info;

  return (
    <div className='restaurent-card'>
      <img className="food-item" src={
        CDN_URL+cloudinaryImageId
      } alt="food-item"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurentCard;