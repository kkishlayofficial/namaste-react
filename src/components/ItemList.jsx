import RestaurantMenuCard from "./RestaurantMenuCard";

const ItemList = ({ items }) => {
  return items?.map((menu) => {
    const item = menu?.card?.info;
    return <RestaurantMenuCard key={item?.id} item={item} />;
  });
};

export default ItemList;
