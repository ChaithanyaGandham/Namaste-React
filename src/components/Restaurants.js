import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const [menuList, setMenuList] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setMenuList(json?.data);
  };

  if (menuList === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
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
