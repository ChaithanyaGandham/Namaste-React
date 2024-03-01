import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurants = () => {
  const { resId } = useParams();

  const menuList = useRestaurantMenu(resId);
  console.log("menuList", menuList);

  if (menuList === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuList?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.name}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
