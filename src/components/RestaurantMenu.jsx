import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const { resData, resMenu } = useRestaurantMenu(resId);

  return resData === null ? (
    <Shimmer />
  ) : (
    <div className='menu'>
      <div className='flex flex-col items-center bg-gray-100 w-9/12 mx-auto'>
        <div className='res-img'>
          <img
            className='w-[100%] h-[250px] object-cover rounded-lg'
            src={`${CDN_URL}${resData?.cloudinaryImageId}`}
            alt={resData?.name}
          />
        </div>
        <div className='res-name'>
          <h1 data-testid='resName' className='font-bold py-4 text-3xl'>{resData?.name}</h1>
        </div>
        <div className='flex justify-between items-center w-[100%] px-8'>
          {resData?.costForTwoMessage && (
            <div className='text-center my-8 res-delivery-time'>
              <p>Cost</p>
              <h4>{resData?.costForTwoMessage}</h4>
            </div>
          )}
          <div className='text-center my-8 res-cuisines'>
            <p>Cuisines</p>
            <h4>{resData?.cuisines?.join(", ")}</h4>
          </div>
          <div className='text-center my-8 res-rating'>
            <p>Rating</p>
            <h4>{resData?.avgRating}</h4>
          </div>
        </div>
      </div>

      <div className='menu-section'>
        <div className='menuTitle'>MENU</div>
      </div>
      <div data-testid='resMenu' className='px-6'>
        {resMenu.map((item, index) => {
          const menuType = item?.card?.card;
          const title = menuType?.title;
          const menuList = menuType?.itemCards;
          return (
            title &&
            menuList?.length && (
              <RestaurantCategory
                key={title}
                title={title}
                menuList={menuList}
                showMenu={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(showIndex !== index ? index : null)}
                index={index}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
