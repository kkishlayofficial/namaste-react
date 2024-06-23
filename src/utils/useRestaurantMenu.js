import { useEffect, useState } from "react";
import { MENU_ID } from "./constants";

export const useRestaurantMenu = (resId) => {

  const [resData, setResData] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(`${MENU_ID}${resId}`);

    let res = await data.json();

    let menuDetail =
    res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let resMenu = menuDetail.filter(item => item.card.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" && item.card.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel")

  setResData(res?.data?.cards[2]?.card?.card?.info);
  setResMenu(resMenu);
  };

  return { resData, resMenu };
};
