import React from "react";
import { MENU_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuCard = ({ item, cart }) => {

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items)

  const handleClick = () => {
    //Dispatch and action which will call a reducer function which modifies the slice of the store.
    dispatch(addItem(item))
  }
  return (
    <div data-testid={`resMenuItem${cart ? '-cart' : ''}`} className='flex items-center justify-between my-6 mx-auto pb-6 px-4 border-b-[1px] border-gray-400 w-9/12'>
      <div className='item w-8/12'>
        <div className='item-details'>
          <div className='item-type'></div>
          <div className='item-name'>
            <h3 className='text-lg my-3 font-semibold'>{item?.name}</h3>
          </div>
          <div className='item-price py-2'>
            <h4 className='font-bold'>{`₹ ${
              item?.price ? item?.price / 100 : item?.defaultPrice / 100
            }`}</h4>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='star-rating mr-2 text-base'>
            {item?.ratings?.aggregatedRating?.rating}
          </div>
          <div className='text-neutral-400 text-sm'>{`(${item?.ratings?.aggregatedRating?.ratingCountV2})`}</div>
        </div>
        <div className='item-desc py-2 text-xs text-gray-600 w-9/12'>
          {item?.description}
        </div>
      </div>
      <div className='item-img relative'>
        <button data-testid="addItemToCart" className='absolute bg-white w-full bottom-0 opacity-70 h-8' onClick={handleClick}>
          Add+
        </button>
        <img
          className='h-[120px] w-[150px] rounded-lg'
          src={`${MENU_IMG}${item?.imageId}`}
          alt={item?.name}
        />
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
