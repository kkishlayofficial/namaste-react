import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard, { withOffersLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardWithOffers = withOffersLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    setList(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline. Check internet connection</h1>;
  }

  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex'>
        <div className='search'>
          <input
            type='text'
            className='border border-solid border-black'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid='searchInput'
          />
          <button
            className='px-4 py-1 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              let filteredList = list.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          data-testid='topRatedRestaurant'
          className='px-4 py-1 m-4 bg-gray-100 rounded-lg'
          onClick={() => {
            setFilterList(filterList.filter((item) => item.info.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='div'>
        <input
          type='text'
          value={loggedInUser}
          className='border border-black'
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap'>
        {filterList?.map((resData) => {
          return resData.info.aggregatedDiscountInfoV3 ? (
            <RestaurantCardWithOffers key={resData.info.id} res={resData} />
          ) : (
            <RestaurantCard key={resData.info.id} res={resData} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
